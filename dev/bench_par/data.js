window.BENCHMARK_DATA = {
  "lastUpdate": 1764743046289,
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
        "date": 1761977994540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.14300000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05594405594405594,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.29800000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10738255033557045,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.524,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06496062992125984,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7560000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.248,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051650692225772094,
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
        "date": 1762151005814,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06504065040650407,
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
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10546875,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4340000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0697350069735007,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7870000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.052020068655928176,
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
        "date": 1762237439168,
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
            "value": 0.265,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10188679245283018,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.5150000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06534653465346535,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7720000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.243,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.050901378579003176,
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
        "date": 1762323788418,
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
            "value": 0.268,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10074626865671642,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.556,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.144,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06362467866323908,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.793,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05141049301344582,
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
        "date": 1762410200623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06363636363636363,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.259,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1003861003861004,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.494,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06827309236947791,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.811,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.257,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05221726580949882,
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
        "date": 1762496680452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.048192771084337345,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.20900000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.022,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08612440191387559,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.3499999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0562962962962963,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.5219999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.04258943781942079,
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
        "date": 1762582799562,
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
            "value": 0.10588235294117647,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4040000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07122507122507123,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.817,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05187319884726225,
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
        "date": 1762669263369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10200000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06862745098039215,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.258,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.11240310077519379,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.5830000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07706885660138976,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8060000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05176037834997372,
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
        "date": 1762755881160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07142857142857144,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.265,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10188679245283018,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4619999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07045143638850891,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.799,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05159252434851277,
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
        "date": 1762842289149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10500000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06666666666666667,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.28600000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.036,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09090909090909091,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.513,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06807666886979512,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.825,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.256,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05281045751633987,
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
        "date": 1762928588869,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06962025316455697,
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
            "value": 0.034,
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
            "value": 1.453,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06882312456985547,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7950000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05217391304347826,
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
        "date": 1763187673804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10200000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06862745098039215,
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
            "value": 1.4220000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07032348804500703,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7880000000000007,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.254,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05227032734952481,
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
        "date": 1763446970377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07272727272727272,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.30400000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.11184210526315788,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.545,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06731391585760518,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7660000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.259,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.053637812002124266,
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
        "date": 1763706201722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.012,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07692307692307694,
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
            "value": 1.405,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0711743772241993,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.815,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.052686762778505904,
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
        "date": 1763792420350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11199999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06250000000000001,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.259,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10424710424710425,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.409,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07097232079488999,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05184210526315789,
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
        "date": 1764138176491,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10500000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06666666666666667,
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
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10546875,
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
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07059629883481838,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8040000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05205047318611987,
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
        "date": 1764656667952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.010000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06422018348623852,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.265,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10188679245283018,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.444,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06855955678670361,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.772,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05169671261930011,
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
        "date": 1764743045774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.010000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0660377358490566,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.272,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.037000000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09926470588235294,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.567,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06573069559668156,
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
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05352411234764176,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}