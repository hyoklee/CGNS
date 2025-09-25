window.BENCHMARK_DATA = {
  "lastUpdate": 1758781690556,
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
          "id": "65b6ed5654d1bb8e9358882454c38530452ff785",
          "message": "fix: add support for timing.dat format in benchmark parser\n\n- Updated parse_cgns_benchmark.py to handle new benchmark output format\n- Added parsing for embedded timing.dat format data within test sections\n- Maintains backward compatibility with old \"Total write time\" format\n- Calculates derived metrics (total write time, read time) from timing components\n- Computes throughput from memory usage data when available\n- Enhanced debug output shows which parsing method was used\n\nFixes parsing failures when benchmark outputs timing.dat format instead of summary metrics.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T16:21:33-05:00",
          "tree_id": "4185618236ef016ea401bfbdf8587c8d762f728f",
          "url": "https://github.com/hyoklee/CGNS/commit/65b6ed5654d1bb8e9358882454c38530452ff785"
        },
        "date": 1758403620587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 625,
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
          "id": "ce1822dc300b69f86e61a336d1ec4be6fe96c520",
          "message": "ci: clean up benchmark action",
          "timestamp": "2025-09-20T17:29:17-05:00",
          "tree_id": "5be88c1d8f17c822d48dddc1852d0abf7306f252",
          "url": "https://github.com/hyoklee/CGNS/commit/ce1822dc300b69f86e61a336d1ec4be6fe96c520"
        },
        "date": 1758407652171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.026,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "ce1822dc300b69f86e61a336d1ec4be6fe96c520",
          "message": "ci: clean up benchmark action",
          "timestamp": "2025-09-20T22:29:17Z",
          "url": "https://github.com/hyoklee/CGNS/commit/ce1822dc300b69f86e61a336d1ec4be6fe96c520"
        },
        "date": 1758608956836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "ce1822dc300b69f86e61a336d1ec4be6fe96c520",
          "message": "ci: clean up benchmark action",
          "timestamp": "2025-09-20T22:29:17Z",
          "url": "https://github.com/hyoklee/CGNS/commit/ce1822dc300b69f86e61a336d1ec4be6fe96c520"
        },
        "date": 1758695314433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.022,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.023,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.023,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 1250,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.023,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 1250,
            "unit": "MB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "id": "ce1822dc300b69f86e61a336d1ec4be6fe96c520",
          "message": "ci: clean up benchmark action",
          "timestamp": "2025-09-20T22:29:17Z",
          "url": "https://github.com/hyoklee/CGNS/commit/ce1822dc300b69f86e61a336d1ec4be6fe96c520"
        },
        "date": 1758781689808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.026,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}