window.BENCHMARK_DATA = {
  "lastUpdate": 1769322668517,
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
        "date": 1758868092531,
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
            "value": 0.029,
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
        "date": 1758954243654,
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
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.012,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 416.6666666666667,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
        "date": 1759040705896,
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
        "date": 1759213786183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.03,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
        "date": 1759300066569,
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
            "value": 0.029,
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
        "date": 1759472903753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.03,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 500,
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
        "date": 1759559157412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
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
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
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
        "date": 1759732201233,
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
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.001,
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
        "date": 1759818508382,
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
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
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
        "date": 1759904969759,
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
            "value": 0.027,
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
        "date": 1759991387788,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
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
            "value": 0.026,
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
        "date": 1760077724792,
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
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
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
        "date": 1760163878981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
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
            "value": 0.027,
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
        "date": 1760337165599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
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
            "value": 0.028,
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
        "date": 1760509749747,
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
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.011000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 454.6363636363635,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
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
          "id": "8c53fbb817261ee5ecefaead4d4143d5b1325c9e",
          "message": "ci(benchmark): enable parallel",
          "timestamp": "2025-10-15T18:39:06-05:00",
          "tree_id": "dec8d7ad18ed8ded9c3c73ba1c58774e1573de9b",
          "url": "https://github.com/hyoklee/CGNS/commit/8c53fbb817261ee5ecefaead4d4143d5b1325c9e"
        },
        "date": 1760571846442,
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
            "value": 0.028,
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
          "id": "cd7a7393d14ab0c87470bffc5f815314d7b0725c",
          "message": "chore: sync upstream",
          "timestamp": "2025-10-15T19:58:28-05:00",
          "tree_id": "134c51554f7871a898ab64e9f93cf2494b2bdd42",
          "url": "https://github.com/hyoklee/CGNS/commit/cd7a7393d14ab0c87470bffc5f815314d7b0725c"
        },
        "date": 1760576660958,
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
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 1000,
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
          "id": "3338ae7c53f028929720c94cb41753f0fec591d1",
          "message": "chore: sync upstream develop",
          "timestamp": "2025-10-15T20:00:00-05:00",
          "tree_id": "3a4544a50c835014de8f069a923b61517194fc5c",
          "url": "https://github.com/hyoklee/CGNS/commit/3338ae7c53f028929720c94cb41753f0fec591d1"
        },
        "date": 1760576671512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
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
            "value": 0.029,
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
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
          "id": "3338ae7c53f028929720c94cb41753f0fec591d1",
          "message": "chore: sync upstream develop",
          "timestamp": "2025-10-16T01:00:00Z",
          "url": "https://github.com/hyoklee/CGNS/commit/3338ae7c53f028929720c94cb41753f0fec591d1"
        },
        "date": 1760682524392,
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
            "value": 0.03,
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
            "value": 0.029,
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
          "id": "3338ae7c53f028929720c94cb41753f0fec591d1",
          "message": "chore: sync upstream develop",
          "timestamp": "2025-10-16T01:00:00Z",
          "url": "https://github.com/hyoklee/CGNS/commit/3338ae7c53f028929720c94cb41753f0fec591d1"
        },
        "date": 1761028213751,
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
            "value": 0.029,
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
            "value": 0.029,
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
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5ab4127573d6bd4368aa008aa050c9862d34aec3",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-22T14:33:53-05:00",
          "tree_id": "a461b8d9769b38a9235f6556354122c04d4002b9",
          "url": "https://github.com/hyoklee/CGNS/commit/5ab4127573d6bd4368aa008aa050c9862d34aec3"
        },
        "date": 1761161994399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
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
            "value": 0.029,
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
            "value": 0.03,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5ab4127573d6bd4368aa008aa050c9862d34aec3",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-22T19:33:53Z",
          "url": "https://github.com/hyoklee/CGNS/commit/5ab4127573d6bd4368aa008aa050c9862d34aec3"
        },
        "date": 1761201015162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
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
            "value": 0.033,
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
            "value": 625.1249999999999,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
          "id": "fb5ea2a10861b2b5b017644e8efb46bbc2e8d5aa",
          "message": "Add parallel benchmark workflow and tools\n\n- Create benchmark-hdf5-par.yml workflow for parallel benchmarks\n- Add run_local_parallel_benchmark.sh for local testing\n- Add visualize_parallel_benchmark.py for data visualization\n- Add comprehensive documentation in parallel_benchmark_guide.md\n\nThe parallel workflow uses src/ptests/benchmark_hdf5 with 2 MPI\nprocesses and publishes results to dev/bench_par in gh-pages branch.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T15:54:39-05:00",
          "tree_id": "fb3ff332d90b688c762ee5ed5abac95f865967ae",
          "url": "https://github.com/hyoklee/CGNS/commit/fb5ea2a10861b2b5b017644e8efb46bbc2e8d5aa"
        },
        "date": 1761253162105,
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
            "value": 0.029,
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
          "id": "941ea310c1ad8be0fb6c57032df1f12324f8e257",
          "message": "Fix parallel benchmark build by adding HDF5_NEED_MPI flag\n\nThe ptests directory was not being built because CGNS requires\nHDF5_NEED_MPI=ON to enable parallel support when using HDF5.\n\nChanges:\n- Add -DHDF5_NEED_MPI=ON to CMake configuration in workflow\n- Update documentation with correct build instructions\n- Add troubleshooting section explaining this requirement\n- Update CMake cache grep to include MPI variables\n\nThis fixes the \"ptests directory not found\" error in the workflow.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T16:06:48-05:00",
          "tree_id": "cf1837be17195c11d0c497ab29bb9ba67338ec8d",
          "url": "https://github.com/hyoklee/CGNS/commit/941ea310c1ad8be0fb6c57032df1f12324f8e257"
        },
        "date": 1761253972748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.028,
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
          "id": "f22a0a303a69873a45d345f2ad19b8638f2dfcba",
          "message": "Fix parallel benchmark timing file detection\n\nThe parallel benchmark creates timing files with the format\ntiming_NNNNNN_MODE.dat (e.g., timing_000002_COLL.dat) instead of\nthe simple timing.dat used by the serial benchmark.\n\nChanges:\n- Update workflow to detect timing_*.dat files using ls\n- Clean up timing files after each test to avoid conflicts\n- Update local test script with the same logic\n- Add documentation about timing file naming convention\n\nThis fixes the parsing error where no timing data was found.\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-10-23T16:21:42-05:00",
          "tree_id": "a32598601f5443e432c639330bf5be8f6debae1b",
          "url": "https://github.com/hyoklee/CGNS/commit/f22a0a303a69873a45d345f2ad19b8638f2dfcba"
        },
        "date": 1761254782711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.029,
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
            "email": "hyoklee@hdfgroup.org",
            "name": "H. Joe Lee",
            "username": "hyoklee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T00:21:29-05:00",
          "tree_id": "ef68f74d56ee3239df549fd118a6cfb2c07e394a",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761283665538,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761373860875,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 714.2857142857142,
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
            "value": 0.029,
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
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761633084332,
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
            "value": 0.027,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761805819304,
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
            "value": 0.001,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761892140545,
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
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1761978358550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
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
            "value": 0.03,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762151514069,
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
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.011000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 454.5454545454545,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762237864819,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.012,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 416.6666666666667,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762324245283,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762410595123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.013,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 384.61538461538464,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.03,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762497053832,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762583195361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.03,
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
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762669710753,
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
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762756275785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762842581773,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1762928982673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1763188003634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1763447325517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.03,
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
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1763706607337,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.029,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1763792780564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1764138634465,
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
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1764657085312,
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
            "value": 0.002,
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
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.022,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 1250,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.022,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1764743461292,
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
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.032,
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
            "value": 625.1249999999999,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1764829849630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.029,
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
            "value": 0.029,
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
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1764916238910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.029,
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
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765002463548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.023,
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
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 1000,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765088857891,
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
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.029,
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
            "value": 0.001,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765261873519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765348327440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.023,
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
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.023,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 1000,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765607340046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
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
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 500,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1765866738941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.029,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1766039520076,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1766125887077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.011000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 454.5454545454545,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.011000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 454.5454545454545,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1766212174702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 555.5555555555555,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1766471554487,
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
            "value": 0.003,
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
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1766644317395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.023,
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
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.025,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 833.3333333333334,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1767076323979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
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
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 714.2857142857142,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1767162739480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
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
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1767249141710,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.023,
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
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
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
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 1000,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.023,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 1000,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1767421830628,
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
            "value": 0.001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 714.2857142857142,
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
            "value": 0.027,
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
      },
      {
        "commit": {
          "author": {
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1767767564843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.03,
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
            "name": "H. Joe Lee",
            "username": "hyoklee",
            "email": "hyoklee@hdfgroup.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1768027278423,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1768285960755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.027,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1768372354285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.023,
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
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 833.3333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.024,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 833.3333333333334,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1769063611671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.025,
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
            "value": 0.027,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1769150038102,
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
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.03,
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
            "value": 0.028,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1769236265586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 0.028,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.01,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 500,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 0.029,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 0.031,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 555.5555555555555,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 0.03,
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "7d4e530568d2814740f5680afb7e49566a2e1d9a",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2025-10-24T05:21:29Z",
          "url": "https://github.com/hyoklee/CGNS/commit/7d4e530568d2814740f5680afb7e49566a2e1d9a"
        },
        "date": 1769322667422,
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
            "value": 0.029,
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
            "value": 0.029,
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