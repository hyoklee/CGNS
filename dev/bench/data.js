window.BENCHMARK_DATA = {
  "lastUpdate": 1758374461485,
  "repoUrl": "https://github.com/hyoklee/CGNS",
  "entries": {
    "CGNS HDF5 Performance": [
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "405a39e81759453a66cbabebeac36faf755d8c5c",
          "message": "chore: delete json",
          "timestamp": "2025-09-18T17:20:32-05:00",
          "tree_id": "b07895fbd48794099e7cfc096b7d47990f49ab12",
          "url": "https://github.com/hyoklee/CGNS/commit/405a39e81759453a66cbabebeac36faf755d8c5c"
        },
        "date": 1758234348887,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Elements",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 2500,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "distinct": true,
          "id": "0e8b9cbef4066df076f58535a5e4d85f2032ac57",
          "message": "fix: clean untracked files before benchmark action git checkout\n\nAdd cleanup step to remove untracked files in benchmark_results/\ndirectory before the benchmark action attempts to switch to gh-pages\nbranch. This prevents the \"untracked working tree files would be\noverwritten by checkout\" error.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T08:15:18-05:00",
          "tree_id": "7d1f0012e1d0f90b18355cba1cc8b6166acc62e4",
          "url": "https://github.com/hyoklee/CGNS/commit/0e8b9cbef4066df076f58535a5e4d85f2032ac57"
        },
        "date": 1758374459988,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small Mesh Test (32K elements, serial) - Elements Processed",
            "value": 32000,
            "unit": "elements"
          },
          {
            "name": "Test 2: Medium Mesh Test (128K elements, serial) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 3: Large Mesh Test (512K elements, serial) - Elements Processed",
            "value": 512000,
            "unit": "elements"
          },
          {
            "name": "Test 4: Very Large Mesh Test (1M elements, serial) - Elements Processed",
            "value": 1000000,
            "unit": "elements"
          },
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.026,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 5000,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Elements",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 2500,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 5000,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Elements",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 2500,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Total Runtime",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Write Time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Total Read Time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Coordinates",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Elements",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Fields",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Write Arrays",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Read Coordinates",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Serial HDF5 - Data Size Fields",
            "value": 3,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Data Size Arrays",
            "value": 2,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Total Data Size",
            "value": 5,
            "unit": "MB"
          },
          {
            "name": "Serial HDF5 - Write Throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Serial HDF5 - Read Throughput",
            "value": 5000,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}