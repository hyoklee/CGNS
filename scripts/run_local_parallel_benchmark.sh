#!/bin/bash
# Script to run parallel benchmark locally following GitHub Actions workflow

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CGNS_ROOT="$(dirname "$SCRIPT_DIR")"

echo "=== CGNS Parallel Benchmark - Local Test ==="
echo "CGNS Root: $CGNS_ROOT"
echo ""

# Check prerequisites
echo "Checking prerequisites..."
command -v mpiexec >/dev/null 2>&1 || { echo "Error: mpiexec not found. Please install OpenMPI or MPICH."; exit 1; }
command -v cmake >/dev/null 2>&1 || { echo "Error: cmake not found. Please install CMake."; exit 1; }
command -v python3 >/dev/null 2>&1 || { echo "Error: python3 not found. Please install Python 3."; exit 1; }

echo "✓ All prerequisites found"
echo ""

# Check if build exists
if [ ! -d "$CGNS_ROOT/build" ]; then
  echo "Build directory not found. You need to build CGNS first."
  echo ""
  echo "To build CGNS with parallel support, run:"
  echo "  mkdir build && cd build"
  echo "  cmake .. -DCGNS_ENABLE_HDF5=ON -DCGNS_ENABLE_PARALLEL=ON -DCGNS_ENABLE_TESTS=ON"
  echo "  make -j\$(nproc)"
  echo ""
  exit 1
fi

# Check if parallel benchmark executable exists
BENCHMARK_EXE="$CGNS_ROOT/build/src/ptests/benchmark_hdf5"
if [ ! -f "$BENCHMARK_EXE" ]; then
  echo "Error: benchmark_hdf5 executable not found at:"
  echo "  $BENCHMARK_EXE"
  echo ""
  echo "Please rebuild CGNS with parallel tests enabled:"
  echo "  cd build && cmake .. -DCGNS_ENABLE_HDF5=ON -DCGNS_ENABLE_PARALLEL=ON -DCGNS_ENABLE_TESTS=ON && make"
  exit 1
fi

echo "✓ Found parallel benchmark executable"
echo ""

# Set up environment
export LD_LIBRARY_PATH="${LD_LIBRARY_PATH:-}"
if [ -d "$HOME/hdf5-install/lib" ]; then
  export LD_LIBRARY_PATH="$HOME/hdf5-install/lib:$LD_LIBRARY_PATH"
fi
if [ -d "$HOME/cgns-install/lib" ]; then
  export LD_LIBRARY_PATH="$HOME/cgns-install/lib:$LD_LIBRARY_PATH"
fi

# Create results directory
RESULTS_DIR="$CGNS_ROOT/benchmark_results"
mkdir -p "$RESULTS_DIR"
cd "$RESULTS_DIR"

echo "Results will be saved to: $RESULTS_DIR"
echo ""

# Run benchmarks (same as in GitHub Actions)
echo "=== CGNS HDF5 Parallel Benchmark Results ===" | tee benchmark_output.txt
echo "Timestamp: $(date)" | tee -a benchmark_output.txt
echo "MPI Processes: 2" | tee -a benchmark_output.txt
echo "" | tee -a benchmark_output.txt

# Test 1: Small mesh test (32K elements, parallel)
echo "=== Test 1: Small Mesh Test (32K elements, parallel) ===" | tee -a benchmark_output.txt
mpiexec -np 2 "$BENCHMARK_EXE" -nelem 32768 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 32K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_32k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 2: Medium mesh test (128K elements, parallel)
echo "=== Test 2: Medium Mesh Test (128K elements, parallel) ===" | tee -a benchmark_output.txt
mpiexec -np 2 "$BENCHMARK_EXE" -nelem 131072 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 128K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_128k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 3: Large mesh test (512K elements, parallel)
echo "=== Test 3: Large Mesh Test (512K elements, parallel) ===" | tee -a benchmark_output.txt
mpiexec -np 2 "$BENCHMARK_EXE" -nelem 524288 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 512K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_512k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 4: Very large mesh test (1M elements, parallel)
echo "=== Test 4: Very Large Mesh Test (1M elements, parallel) ===" | tee -a benchmark_output.txt
mpiexec -np 2 "$BENCHMARK_EXE" -nelem 1048576 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 1M elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_1m.dat
fi
echo "" | tee -a benchmark_output.txt

echo "=== Benchmark completed ===" | tee -a benchmark_output.txt

# Parse results
echo ""
echo "=== Parsing benchmark results ==="
if [ -f "$SCRIPT_DIR/parse_cgns_benchmark.py" ]; then
  python3 "$SCRIPT_DIR/parse_cgns_benchmark.py" benchmark_output.txt benchmark-results.json --verbose

  if [ -f "benchmark-results.json" ]; then
    echo ""
    echo "✓ Successfully created benchmark-results.json"
    echo ""
    echo "Results summary:"
    python3 -m json.tool benchmark-results.json | head -30
  else
    echo "⚠ Warning: benchmark-results.json not created"
  fi
else
  echo "⚠ Warning: parse_cgns_benchmark.py not found"
fi

echo ""
echo "=== Local Benchmark Test Complete ==="
echo ""
echo "Results are in: $RESULTS_DIR"
echo "  - benchmark_output.txt: Full benchmark output"
echo "  - benchmark-results.json: Parsed results for visualization"
echo "  - timing_*.dat: Individual test timing data"
echo "  - *.cgns: Generated CGNS files"
echo ""
