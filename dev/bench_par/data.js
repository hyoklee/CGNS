window.BENCHMARK_DATA = {
  "lastUpdate": 1761254784604,
  "repoUrl": "https://github.com/hyoklee/CGNS",
  "entries": {
    "CGNS HDF5 Parallel Performance": [
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
        "date": 1761254783141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07633587786259544,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.255,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09411764705882353,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4829999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06743088334457183,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8180000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051859612362493444,
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
        "date": 1761254783141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07633587786259544,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.255,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09411764705882353,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4829999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06743088334457183,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8180000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051859612362493444,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}