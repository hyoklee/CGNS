# CGNS Parallel Benchmark Guide

This guide explains how to use the parallel benchmark workflow and associated tools.

## Overview

The parallel benchmark workflow (`.github/workflows/benchmark-hdf5-par.yml`) runs CGNS parallel HDF5 benchmarks and tracks performance over time. Results are published to the `gh-pages` branch under `dev/bench_par/`.

## Differences from Serial Benchmark

| Feature | Serial Benchmark | Parallel Benchmark |
|---------|-----------------|-------------------|
| Workflow file | `benchmark-hdf5.yml` | `benchmark-hdf5-par.yml` |
| Executable | `build/src/tests/ser_benchmark_hdf5` | `build/src/ptests/benchmark_hdf5` |
| Execution | Direct execution | `mpiexec -np 2 ...` |
| Data directory | `dev/bench` | `dev/bench_par` |
| Hash file | `hdf5-hash.txt` | `hdf5-par-hash.txt` |
| Artifact name | `benchmark-results` | `benchmark-results-par` |

## Running Benchmarks Locally

### Prerequisites

1. **MPI Implementation**: OpenMPI or MPICH
   ```bash
   sudo apt-get install libopenmpi-dev  # Ubuntu/Debian
   ```

2. **CMake**: Version 3.10 or higher
   ```bash
   sudo apt-get install cmake
   ```

3. **Python 3**: With matplotlib for visualization
   ```bash
   pip3 install matplotlib numpy pandas
   ```

4. **HDF5**: Built with parallel support
   ```bash
   # See .github/workflows/benchmark-hdf5-par.yml for HDF5 build configuration
   ```

### Build CGNS with Parallel Support

```bash
cd /path/to/CGNS
mkdir build
cd build

cmake .. \
  -DCMAKE_INSTALL_PREFIX=$HOME/cgns-install \
  -DCMAKE_BUILD_TYPE=Release \
  -DCGNS_ENABLE_HDF5=ON \
  -DCGNS_ENABLE_PARALLEL=ON \
  -DCGNS_ENABLE_TESTS=ON \
  -DHDF5_DIR=$HOME/hdf5-install \
  -DHDF5_NEED_MPI=ON

make -j$(nproc)
make install
```

### Run Local Benchmark

Use the provided script to run benchmarks locally:

```bash
cd /path/to/CGNS
./scripts/run_local_parallel_benchmark.sh
```

This script will:
1. Check for required dependencies
2. Verify the parallel benchmark executable exists
3. Run 4 benchmark tests (32K, 128K, 512K, 1M elements)
4. Parse the results into JSON format
5. Save results in `benchmark_results/` directory

### Output Files

After running the local benchmark:

- `benchmark_results/benchmark_output.txt`: Full benchmark output
- `benchmark_results/benchmark-results.json`: Parsed results for visualization
- `benchmark_results/timing_*.dat`: Individual test timing data (copied from `timing_NNNNNN_MODE.dat`)
- `benchmark_results/*.cgns`: Generated CGNS files

**Note**: The parallel benchmark creates timing files with the format `timing_{nprocs:06d}_{mode}.dat` where:
- `nprocs` is the number of MPI processes (e.g., `000002` for 2 processes)
- `mode` is the I/O mode: `COLL` for collective or `IND` for independent
- Example: `timing_000002_COLL.dat` for 2-process collective I/O

## Visualizing Results

### Visualize Data from gh-pages Branch

Fetch and visualize benchmark data from the published results:

```bash
cd /path/to/CGNS
./scripts/visualize_parallel_benchmark.py
```

This will:
1. Clone the `gh-pages` branch
2. Extract benchmark data from `dev/bench_par/data.js`
3. Create plots showing performance trends over time
4. Save the plot as `parallel_benchmark_plot.png`

### Options

```bash
# Specify output file
./scripts/visualize_parallel_benchmark.py --output my_plot.png

# Use a different benchmark directory
./scripts/visualize_parallel_benchmark.py --benchmark-dir dev/custom_bench

# Use local data file instead of fetching
./scripts/visualize_parallel_benchmark.py --local-data /path/to/data.js
```

### Expected Output

The visualization script creates a plot with two panels:

1. **Execution Time Panel**: Shows timing metrics (lower is better)
   - Test 1-4: Total time
   - Test 1-4: Write time
   - Test 1-4: Read time

2. **Throughput Panel**: Shows write throughput (higher is better)
   - Test 1-4: Write throughput (MB/s)

## GitHub Actions Workflow

### Triggering the Workflow

The parallel benchmark workflow runs automatically on:

- **Push to `develop` branch**: Runs on every push
- **Pull request to `develop` branch**: Runs on every PR
- **Scheduled**: Daily at 6:00 AM UTC
- **Manual**: Via workflow_dispatch

To manually trigger:

1. Go to GitHub Actions tab
2. Select "CGNS HDF5 Parallel Benchmark" workflow
3. Click "Run workflow"

### Workflow Steps

1. **Checkout**: Clone CGNS repository
2. **Install dependencies**: System packages and Python libraries
3. **Checkout HDF5**: Clone HDF5 develop branch
4. **Check HDF5 hash**: Skip if no HDF5 changes (scheduled runs only)
5. **Build HDF5**: With parallel support enabled
6. **Build CGNS**: With parallel and HDF5 support
7. **Run benchmarks**: Execute 4 test sizes with 2 MPI processes
8. **Parse results**: Convert output to JSON format
9. **Store results**: Publish to gh-pages branch
10. **Upload artifacts**: Save results as workflow artifacts

### Artifacts

Each workflow run produces artifacts:

- **benchmark-results-par**: Successful run results
  - `benchmark_output.txt`
  - `benchmark-results.json`
  - `*.cgns` files
  - `*.dat` timing files

- **debug-info-failure-par**: Debug information on failure

## Benchmark Tests

The workflow runs 4 test configurations:

| Test | Elements | Mesh Size | Typical Runtime |
|------|----------|-----------|----------------|
| Test 1 | 32K | Small | ~1-2 seconds |
| Test 2 | 128K | Medium | ~2-5 seconds |
| Test 3 | 512K | Large | ~5-15 seconds |
| Test 4 | 1M | Very Large | ~15-30 seconds |

Each test measures:
- Grid coordinate write time
- Element connectivity write time
- Flow solution write time
- Total write time
- Write throughput (MB/s)

## Troubleshooting

### Build Issues

**Problem**: `benchmark_hdf5` executable not found or `ptests` directory not built

**Solution**: Ensure CGNS is built with parallel support AND HDF5_NEED_MPI is set:
```bash
cd build
cmake .. \
  -DCGNS_ENABLE_HDF5=ON \
  -DCGNS_ENABLE_PARALLEL=ON \
  -DCGNS_ENABLE_TESTS=ON \
  -DHDF5_NEED_MPI=ON \
  -DHDF5_DIR=/path/to/hdf5
make
```

**Important**: The `HDF5_NEED_MPI=ON` flag is required when using parallel HDF5. Without it, CGNS will not build the parallel tests even if `CGNS_ENABLE_PARALLEL=ON` is set.

### MPI Execution Issues

**Problem**: `mpiexec` command not found

**Solution**: Install MPI:
```bash
sudo apt-get install libopenmpi-dev openmpi-bin
```

**Problem**: MPI errors during execution

**Solution**: Check MPI configuration:
```bash
mpiexec --version
mpiexec -np 2 hostname  # Test MPI works
```

### Visualization Issues

**Problem**: No data found in gh-pages branch

**Solution**:
1. Check if workflow has run successfully
2. Verify gh-pages branch exists: `git branch -a | grep gh-pages`
3. Check benchmark data directory: `dev/bench_par/`

**Problem**: `matplotlib` not found

**Solution**: Install Python dependencies:
```bash
pip3 install matplotlib numpy pandas
```

## Comparing Serial vs Parallel Performance

To compare serial and parallel benchmark results:

1. Run both workflows
2. Fetch data from both `dev/bench` and `dev/bench_par`
3. Use the visualization script with both datasets

Example:
```bash
# Visualize serial results
./scripts/visualize_benchmark.py --benchmark-dir dev/bench --output serial_plot.png

# Visualize parallel results
./scripts/visualize_parallel_benchmark.py --benchmark-dir dev/bench_par --output parallel_plot.png
```

## Performance Expectations

With 2 MPI processes, expect:
- **Parallel overhead**: Some tests may not show 2x speedup due to:
  - Communication overhead
  - File I/O contention
  - Small problem sizes
- **Scaling**: Larger tests (512K, 1M elements) should show better parallel efficiency
- **Throughput**: Parallel write throughput may vary based on:
  - HDF5 parallel I/O configuration
  - File system performance
  - Network (if using distributed storage)

## References

- Main benchmark workflow: `.github/workflows/benchmark-hdf5.yml`
- Parallel benchmark workflow: `.github/workflows/benchmark-hdf5-par.yml`
- Parser script: `scripts/parse_cgns_benchmark.py`
- Benchmark source: `src/ptests/benchmark_hdf5.c`
- GitHub Action: [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark)
