# CGNS HDF5 Benchmark Scripts

This directory contains scripts for running and parsing CGNS HDF5 benchmark results in GitHub Actions.

## Files

### `parse_cgns_benchmark.py`
Python script that parses CGNS benchmark output and converts it to JSON format compatible with [github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark).

**Usage:**
```bash
python3 parse_cgns_benchmark.py <input_file> <output_file> [--verbose]
```

**Example:**
```bash
python3 parse_cgns_benchmark.py benchmark_results/benchmark_output.txt benchmark-results.json --verbose
```

**Input Format:**
The script expects CGNS benchmark output in the following format:
```
=== Test 1: Description ===
Total Time to Run Program (@X processors) Y.YYYs
Total Time to Write Coordinates: X.XXXs
Total Time to Write Elements: X.XXXs
Total Time to Write Fields: X.XXXs
Total Time to Write Arrays: X.XXXs
Total Time to Read Coordinates: X.XXXs
Total Time to Read Elements: X.XXXs
Total Time to Read Fields: X.XXXs
Total Time to Read Arrays: X.XXXs
```

**Output Format:**
JSON array compatible with github-action-benchmark:
```json
[
  {
    "name": "Test 1: Description - Total Time",
    "unit": "seconds",
    "value": 1.234
  },
  {
    "name": "Test 1: Description - Write Coordinates",
    "unit": "seconds",
    "value": 0.156
  }
]
```

**Features:**
- Parses multiple test sections automatically
- Extracts timing data for all CGNS operations
- Handles timing.dat files for additional metrics
- Provides fallback results if parsing fails
- Verbose output for debugging

## GitHub Actions Workflow

The benchmark workflow (`.github/workflows/benchmark-hdf5.yml`) performs the following steps:

1. **Build Dependencies**: Downloads and builds the latest HDF5 develop branch
2. **Build CGNS**: Configures and builds CGNS with HDF5 and parallel support
3. **Run Benchmarks**: Executes the `src/ptests/benchmark_hdf5` program with various configurations:
   - Small mesh (32K elements, 2 processes)
   - Medium mesh (128K elements, 2 processes)
   - Large mesh (512K elements, 2 processes)
   - Independent I/O mode test
   - Multi-dataset API test
   - 4 processes test
4. **Parse Results**: Uses `parse_cgns_benchmark.py` to convert output to JSON
5. **Store Results**: Uses github-action-benchmark to track performance over time
6. **Publish**: Publishes results to gh-pages for visualization

## Benchmark Parameters

The benchmark tests different configurations:
- `-nelem <N>`: Number of elements in the mesh
- `-ind`: Use independent I/O mode (vs collective)
- `-md`: Enable multi-dataset APIs
- `-R`: Enable read verification

## Performance Metrics Tracked

- **Total Runtime**: Overall benchmark execution time
- **Write Operations**: Time to write coordinates, elements, fields, arrays
- **Read Operations**: Time to read coordinates, elements, fields, arrays
- **Data Sizes**: Amount of data processed (MB)
- **Element Count**: Number of elements processed
- **Process Count**: Number of MPI processes used

## Caching Strategy

The workflow uses GitHub Actions caching for:
- HDF5 builds (keyed by HDF5 commit hash)
- CGNS builds (keyed by CGNS commit + HDF5 hash)

Only runs benchmarks when HDF5 develop branch changes (for scheduled runs).

## Output Files

The workflow produces:
- `benchmark_results/benchmark_output.txt`: Raw benchmark output
- `benchmark-results.json`: Parsed JSON results
- `benchmark_results/timing_*.dat`: Detailed timing files
- `benchmark_results/*.cgns`: Generated CGNS files

All files are uploaded as GitHub Actions artifacts and stored in gh-pages for historical tracking.