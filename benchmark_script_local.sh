#!/bin/bash
set -e

export HDF5_DIR=$HOME/hdf5-install
export CGNS_DIR=$HOME/cgns-install
export LD_LIBRARY_PATH="$HOME/hdf5-install/lib:$HOME/cgns-install/lib:$LD_LIBRARY_PATH"

# Find the benchmark executable
BENCHMARK_EXE="$(pwd)/build/src/tests/ser_benchmark_hdf5"
if [ ! -f "$BENCHMARK_EXE" ]; then
  echo "Error: ser_benchmark_hdf5 executable not found at $BENCHMARK_EXE"
  ls -la build/src/tests/ || echo "tests directory not found"
  exit 1
fi

# Create test directory
mkdir -p benchmark_results
cd benchmark_results

echo "=== CGNS HDF5 Benchmark Results ===" | tee benchmark_output.txt
echo "Timestamp: $(date)" | tee -a benchmark_output.txt
echo "HDF5 Version: $(strings $HOME/hdf5-install/lib/libhdf5.so | grep "HDF5 library version" | head -1)" | tee -a benchmark_output.txt
echo "CGNS Version: $(strings $HOME/cgns-install/lib/libcgns.so | grep "CGNS library version" | head -1 || echo "Version info not available")" | tee -a benchmark_output.txt
echo "" | tee -a benchmark_output.txt

# Test 1: Small mesh test (32K elements, serial)
echo "=== Test 1: Small Mesh Test (32K elements, serial) ===" | tee -a benchmark_output.txt
"$BENCHMARK_EXE" -nelem 32768 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 32K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_32k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 2: Medium mesh test (128K elements, serial)
echo "=== Test 2: Medium Mesh Test (128K elements, serial) ===" | tee -a benchmark_output.txt
"$BENCHMARK_EXE" -nelem 131072 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 128K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_128k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 3: Large mesh test (512K elements, serial)
echo "=== Test 3: Large Mesh Test (512K elements, serial) ===" | tee -a benchmark_output.txt
"$BENCHMARK_EXE" -nelem 524288 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 512K elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_512k.dat
fi
echo "" | tee -a benchmark_output.txt

# Test 4: Very large mesh test (1M elements, serial)
echo "=== Test 4: Very Large Mesh Test (1M elements, serial) ===" | tee -a benchmark_output.txt
"$BENCHMARK_EXE" -nelem 1048576 | tee -a benchmark_output.txt
if [ -f "timing.dat" ]; then
  echo "Timing data for 1M elements:" | tee -a benchmark_output.txt
  cat timing.dat | tee -a benchmark_output.txt
  cp timing.dat timing_1m.dat
fi
echo "" | tee -a benchmark_output.txt

echo "=== Benchmark completed ===" | tee -a benchmark_output.txt