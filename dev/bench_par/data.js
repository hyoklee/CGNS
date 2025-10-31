window.BENCHMARK_DATA = {
  "lastUpdate": 1761891767883,
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
        "date": 1761283563813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.092,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07608695652173914,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.020999999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08999999999999998,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.37,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.08499999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.05547445255474452,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.477,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.042853034224906536,
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
        "date": 1761373303104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.096,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07291666666666667,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09923664122137404,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4589999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06854009595613435,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8120000000000007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.255,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05194123819517313,
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
        "date": 1761632601433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.099,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0707070707070707,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.274,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09854014598540145,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.538,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07217165149544864,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7899999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05277044854881267,
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
        "date": 1761805386314,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11099999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06306306306306307,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10305343511450381,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.525,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06491803278688525,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.773,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05327325735489001,
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
        "date": 1761891766581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11399999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06140350877192983,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.256,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1015625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.578,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0659062103929024,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.774,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.254,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.052994170641229466,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}