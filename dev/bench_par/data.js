window.BENCHMARK_DATA = {
  "lastUpdate": 1785487073910,
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
        "date": 1764829431406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10800000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06481481481481481,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.271,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0996309963099631,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4909999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0670690811535882,
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
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.052285864424592744,
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
        "date": 1764915832505,
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
            "value": 0.009000000000000001,
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
            "value": 1.513,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06609385327164574,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.778,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05320275277924828,
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
        "date": 1765002089465,
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
            "value": 1.56,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06410256410256411,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8340000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.26,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05346896191966614,
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
        "date": 1765088477778,
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
            "value": 0.31200000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.039999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10576923076923075,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4400000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06944444444444443,
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
            "value": 0.05224274406332455,
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
        "date": 1765261466435,
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
            "value": 0.258,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10465116279069767,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.516,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07981530343007914,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7790000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05213019317279703,
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
        "date": 1765347882689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07352941176470588,
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
            "value": 1.5579999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06611039794608474,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.792,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.254,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05221518987341773,
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
        "date": 1765606910688,
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
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
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
            "value": 1.4829999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
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
            "value": 3.825,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05176470588235294,
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
        "date": 1765866305808,
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
            "value": 0.264,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0984848484848485,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.616,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06435643564356436,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.778,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.259,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05320275277924828,
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
        "date": 1766039052613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05982905982905983,
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
            "value": 1.437,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06889352818371608,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8240000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05073221757322176,
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
        "date": 1766125432929,
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
            "value": 0.31900000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10344827586206895,
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
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07188612099644129,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.839,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05339932274029695,
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
        "date": 1766211794080,
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
            "value": 1.5030000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07451763140385895,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8030000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05206415987378385,
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
        "date": 1766471101271,
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
            "value": 0.265,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09811320754716982,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.547,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06658047834518423,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8240000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.265,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05360878661087865,
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
        "date": 1766643860931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05555555555555556,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.277,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.04000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1083032490974729,
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
            "value": 0.06903765690376569,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.805,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051773981603153746,
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
        "date": 1767075866937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.010000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06299212598425197,
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
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1019607843137255,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.536,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.064453125,
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
        "date": 1767162292385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.197,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.020000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0913705583756345,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.391,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.08299999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.051761322789360166,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.526,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.16999999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.039988655700510495,
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
        "date": 1767248696206,
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
            "value": 0.25,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10400000000000001,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.5030000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0884896872920825,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.767,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05256172020175206,
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
        "date": 1767421401149,
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
            "value": 0.255,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1019607843137255,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.554,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06692406692406692,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.737,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05191329943805191,
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
        "date": 1767767092735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.118,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.059322033898305086,
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
            "value": 0.09701492537313433,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.468,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0681198910081744,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.866,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051991722710812205,
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
        "date": 1768026715733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.247,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.026,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0931174089068826,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.323,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.05442176870748299,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.512,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.04100227790432801,
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
        "date": 1768285495459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07407407407407408,
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
            "value": 1.5099999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06622516556291393,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.833,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.257,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.050873989042525436,
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
        "date": 1768372063731,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05982905982905983,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.271,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.035,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0996309963099631,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.476,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06775067750677508,
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
            "value": 0.052226935312831395,
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
        "date": 1769063145269,
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
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10276679841897234,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.49,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.14300000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07651006711409397,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7790000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.053188674252447735,
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
        "date": 1769149545157,
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
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.033,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1067193675889328,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.423,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07238229093464511,
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
            "value": 0.256,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.052964426877470355,
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
        "date": 1769235813457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05982905982905983,
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
            "value": 1.563,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.14300000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06397952655150352,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.6920000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05335861321776814,
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
        "date": 1769322237646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.07299270072992702,
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
            "value": 0.034,
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
            "value": 1.419,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07047216349541931,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.872,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.254,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051911157024793396,
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
        "date": 1769495184004,
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
            "value": 0.015,
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
            "value": 0.246,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10569105691056911,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.622,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.14200000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06288532675709001,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8270000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051476352234125944,
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
        "date": 1769581666663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10800000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06481481481481481,
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
            "value": 0.04000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10583941605839414,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.387,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07209805335255949,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.728,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.053111587982832616,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T08:17:44-06:00",
          "tree_id": "afb5e6aef81ba1b98678df41e62dfa268a21f552",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1769610128827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10800000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06481481481481481,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.261,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.11494252873563217,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.46,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0767123287671233,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8030000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.267,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05890086773599788,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1769755215219,
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
            "value": 0.262,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
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
            "value": 1.56,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.14600000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06602564102564103,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.712,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.258,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05522629310344828,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770100960525,
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
            "value": 0.010000000000000002,
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
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10317460317460318,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.5819999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07142857142857145,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7340000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.0530262453133369,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770187362781,
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
            "value": 0.011000000000000003,
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
            "value": 0.1019607843137255,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.438,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06954102920723228,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.743,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05289874432273578,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770274177915,
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
            "value": 0.20500000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.022,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09756097560975609,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.437,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.05497564370215727,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.5740000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.04196978175713486,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770360319999,
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
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10317460317460318,
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
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06903765690376569,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7359999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05299785867237688,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770446084306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05982905982905983,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.28900000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.03799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10380622837370239,
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
            "value": 0.06609385327164574,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.766,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.264,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.0525756771109931,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770792948705,
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
            "value": 0.28500000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.040999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09473684210526315,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.54,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07207792207792209,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.88,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.251,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.056958762886597944,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1770965542789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.12,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.058333333333333334,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.29400000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.038000000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09183673469387754,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.546,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06403622250970246,
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
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.049934640522875814,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1771051051152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.203,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.020000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10344827586206896,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2440000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.08399999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.055466237942122174,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.4459999999999993,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.16699999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.04178757980266977,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1771311027224,
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
            "value": 0.276,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09782608695652173,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4569999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0713795470144132,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.698,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.245,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05164954029204976,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1771483995723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.11699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05982905982905983,
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
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10465116279069767,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.591,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.15299999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06033940917661848,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7199999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05134408602150538,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1771655696973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05785123966942149,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.264,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.11363636363636362,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4649999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06825938566552903,
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
            "value": 0.05281135049921177,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1771915965667,
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
            "value": 0.010000000000000002,
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
            "value": 0.30700000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.041999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09120521172638435,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.527,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06745252128356255,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8390000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.26,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05261786923678041,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772002572114,
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
            "value": 0.009000000000000001,
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
            "value": 0.269,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.036000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1003717472118959,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.527,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07138179436804191,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.787,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.26,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05439662001584368,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772174660078,
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
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.020000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08900523560209425,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2939999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.08199999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.05486862442040186,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.4509999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.16199999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03969863807592003,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772260206051,
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
            "value": 0.012,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.06870229007633588,
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
            "value": 1.53,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06339869281045751,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8709999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.247,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05140790493412555,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772434119158,
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
            "value": 0.31400000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10191082802547768,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4869999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06455951580363148,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.626,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.237,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05184776613348042,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772606368043,
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
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10317460317460318,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.522,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06307490144546649,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.8140000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.253,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.050078657577346614,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772692999703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.008,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05555555555555556,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.31600000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.041999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08544303797468353,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4729999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06788866259334692,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.6900000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.245,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05447154471544714,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772779193003,
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
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10489510489510487,
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
            "value": 0.127,
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
            "value": 3.8150000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.256,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.050065530799475746,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1772865117304,
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
            "value": 0.252,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10714285714285714,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.479,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07302231237322515,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.68,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.244,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05190217391304348,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773039286371,
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
            "value": 0.009000000000000001,
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
            "value": 0.28800000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.1111111111111111,
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
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06213592233009709,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.6630000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.24,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05132405132405132,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773211427957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05785123966942149,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.31500000000000006,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.039999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10158730158730157,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.479,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06693711967545639,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.801,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.246,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05130228887134965,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773297951717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.010000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05785123966942149,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.29100000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.034,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.11340206185567009,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.451,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06685044796691937,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.687,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.244,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05180363439110388,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773470320684,
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
            "value": 0.267,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10112359550561797,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.519,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.07965766951942067,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7920000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.248,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05063291139240506,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773730627644,
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
            "value": 0.31000000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.041999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10322580645161289,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.4080000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.123,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06818181818181818,
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
            "value": 0.242,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05011807924429284,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773817486097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.009000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05785123966942149,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.261,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10344827586206896,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.48,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06486486486486487,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.7030000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.242,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05157980016203078,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1773902991549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05785123966942149,
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
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08914728682170542,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.498,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06675567423230974,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.6580000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.243,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05221432476763258,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774074949620,
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
            "value": 0.29500000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.041999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08813559322033898,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.3780000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06966618287373004,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.704,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.243,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.051565874730021596,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774421808362,
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
            "value": 0.273,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0989010989010989,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.541,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.06229720960415315,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.722,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.245,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.0523911875335841,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774594859647,
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
            "value": 0.261,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.032,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0996168582375479,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.382,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0694645441389291,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.843,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.246,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.05152224824355972,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774680625950,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07453416149068323,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.18,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03474576271186441,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.12,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026282051282051282,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774855197971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.216,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03700657894736842,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.183,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026076028903550114,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1774940772272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.097,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.041237113402061855,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.018000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06315789473684211,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.184,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03547297297297298,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.006,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027278775781769796,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775027550557,
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
            "value": 0.004,
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
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.09146341463414634,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.3039999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04294478527607363,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.2190000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.032618825722273995,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775285585273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.101,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.039603960396039604,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08241758241758242,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.251,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03597122302158273,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.132,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.105,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.028735632183908042,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775372547720,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07700000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05194805194805194,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.017,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08064516129032258,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.283,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04130943102104443,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.2209999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.11599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.032598571872089414,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775545746730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.042105263157894736,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07058823529411765,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1139999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.037701974865350096,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.034,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.028015820698747532,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775632250800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.101,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.039603960396039604,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06666666666666667,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.297,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.043176561295296845,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.3910000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.133,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03332350339132999,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775718898941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04878048780487805,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06832298136645963,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2249999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03755102040816327,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0519999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02686762778505898,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1775890468550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07400000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05405405405405405,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17400000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08620689655172413,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.269,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04570527974783294,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.276,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03571428571428572,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1776152867058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08241758241758242,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.199,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.05299999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03836530442035029,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1159999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.105,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.028562259306803596,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1776756357490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10400000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.03846153846153846,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06832298136645963,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1720000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.053,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.038395904436860064,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0349999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.103,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02833607907742999,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1776842664873,
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
            "value": 0.004,
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
            "value": 0.17600000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06818181818181818,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2200000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.056,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03852459016393442,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1380000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026449968132568513,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777188039435,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.20400000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.021000000000000005,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0784313725490196,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2020000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04658901830282861,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.217,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03823437985700963,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777277366456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.391,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.010230179028132991,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 1.4649999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0075085324232081925,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 5.789000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.036000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.005527724995681463,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 10.781999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.005843071786310518,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777449880070,
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
            "value": 0.17900000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016999999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07821229050279328,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0368421052631579,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.033,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02736564457632707,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777536528984,
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
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07978723404255318,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03634751773049646,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.12,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026282051282051282,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777622740468,
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
            "value": 0.005,
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
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.065,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.05399999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.038497652582159626,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0449999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02692939244663383,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777706607516,
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
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17300000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06358381502890173,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1460000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04712041884816753,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1380000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02517527087316762,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1777794728430,
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
            "value": 0.08433734939759036,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0658682634730539,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.204,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0340531561461794,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0069999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09899999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.028267376122381116,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1778141988453,
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
            "value": 0.17700000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06214689265536723,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.0959999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.037408759124087594,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1639999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.10699999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025916561314791406,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1778224972807,
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
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15500000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07096774193548387,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.0270000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03700097370983446,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.032,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.023746701846965697,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1778312853007,
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
            "value": 0.003,
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
            "value": 0.17600000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0625,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03690369036903691,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.976,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02721774193548387,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1778661725196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.098,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04081632653061224,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0658682634730539,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.099,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03730664240218381,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0420000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027284681130834976,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1778834792455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08800000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04545454545454545,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15200000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.012,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07236842105263157,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1029999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.044,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.034451495920217595,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.029,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.08399999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.0237702211951139,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1779181351497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.554,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.007220216606498194,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 2.212,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.011,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.003616636528028933,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 5.216,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.036000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.006134969325153373,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 10.979,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.0058293105018672004,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1779267611328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.091,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04395604395604396,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15200000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07894736842105263,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.041999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.033928571428571426,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.008,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.023936170212765957,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1779523784203,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07700000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05194805194805194,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.18000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.017,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08333333333333331,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.236,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04288025889967637,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.236,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03368355995055624,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1779874353839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07100000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05633802816901408,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17900000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08379888268156423,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.05166666666666665,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.357,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.032171581769437,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780047563055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07731958762886597,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.204,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.034883720930232565,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.157,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025974025974025976,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780129222303,
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
            "value": 0.004,
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
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06626506024096386,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03753351206434317,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.144,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02608142493638677,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780312403431,
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
            "value": 0.004,
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
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0718562874251497,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03703703703703704,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1839999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02795226130653267,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780394850138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08800000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04545454545454545,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15200000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07236842105263157,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.197,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.034252297410192145,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.9789999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.087,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02551191675058745,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780483631715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.094,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0425531914893617,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.197,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07106598984771574,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.164,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03608247422680413,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.153,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02664129400570885,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780566398550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05263157894736841,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.0919999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03754578754578755,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.981,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02750754780275076,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780652079181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05063291139240506,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.14900000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06711409395973154,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.123,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03383793410507569,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.028,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.08399999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.023778071334214,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780734455794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.34600000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.011560693641618497,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.9229999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.011000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.008667388949079091,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 3.419,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.036000000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.009359461830944719,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 6.8309999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.009222661396574438,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1780995836302,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.098,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04081632653061224,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15500000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07741935483870967,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.035023041474654376,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.088,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025333333333333333,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781084615776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.539,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.007421150278293135,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.926,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013999999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.011879049676025918,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 3.338,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.038,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.009586578789694426,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 6.744,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.00948991696322657,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781258443342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0759493670886076,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.204,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0340531561461794,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.174,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03528670447385003,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781340635548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05263157894736841,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0759493670886076,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1469999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04010462074978205,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.9579999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.088,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025693035835023668,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781428939488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05063291139240506,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17300000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06936416184971098,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2009999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03497085761865113,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.033,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027035938015166502,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781607484795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15500000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07741935483870967,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1019999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0353901996370236,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.08499999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.024365821094793055,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781692171571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05263157894736841,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17600000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07954545454545453,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.0639999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03571428571428572,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.05,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09499999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02360655737704918,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781780121576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06432748538011696,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.209,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03391232423490488,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.036,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027009222661396576,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1781945042790,
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
            "value": 0.17300000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06936416184971098,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03794037940379404,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.147,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025103272958373054,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782205370744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07853403141361257,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03794037940379404,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1109999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026679524268723886,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782291377477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.094,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0425531914893617,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17700000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07344632768361581,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.181,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.044,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03217612193056731,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0860000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.023331173039533373,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782464059282,
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
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.18000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06111111111111111,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.038527397260273974,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.14,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.103,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027388535031847135,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782548998668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.097,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.041237113402061855,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.017,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07179487179487179,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03513281919451585,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.008,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02726063829787234,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782810018594,
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
            "value": 0.005,
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
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06470588235294118,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.036936936936936934,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.033,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027035938015166502,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782898366546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.003,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.047058823529411764,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03612334801762115,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027306027306027308,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1782981948875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.101,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.039603960396039604,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07853403141361257,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.222,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03927986906710311,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.195,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027856025039123634,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1783068793520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08900000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.0449438202247191,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08108108108108109,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.21,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03388429752066116,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1380000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02613129381771829,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1783241070815,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1529999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.048999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03555941023417173,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1649999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09699999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025908372827804112,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1783416464195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08247422680412371,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1019999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04083484573502723,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1599999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09899999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02974683544303798,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1783589151086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.192,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08333333333333333,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.034265103697024346,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.03,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.089,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025082508250825083,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1783675407524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07700000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05194805194805194,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17700000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.08474576271186439,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.2360000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.04530744336569579,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.219,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.033550792171481825,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784015455839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.275,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.014545454545454545,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.9289999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.011840688912809474,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 3.613,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.05499999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.013838915029061722,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 7.300999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.11599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.01397068894671963,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784102060836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06707317073170732,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.198,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03505843071786311,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1620000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025932953826691967,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784188763287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.07600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.002,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.05263157894736841,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.15500000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07741935483870967,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.204,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.056999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03737541528239203,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.015,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.089,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02520729684908789,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784274975611,
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
            "value": 0.005,
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
            "value": 0.20400000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.07352941176470587,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.047999999999999994,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03654188948306595,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.013,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09899999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.03318951211417192,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784359884977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.091,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04395604395604396,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.193,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.018000000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06217616580310881,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03986135181975737,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.2910000000000004,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.036159222120935884,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784537042698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.10700000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.007,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.037383177570093455,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.10752688172043012,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.159,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0362381363244176,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.181,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.026092423766111286,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784621511846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.098,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.04081632653061224,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17400000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.015,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06321839080459771,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.315,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03954372623574144,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1069999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09999999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027357579658834893,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784707958625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.006,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.203,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.054187192118226604,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1529999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.043365134431916745,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.1719999999999997,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09799999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027112232030264822,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784880715198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.019000000000000003,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06632653061224489,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.231,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03736799350121852,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.134,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09999999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027760051052967458,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1784966073224,
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
            "value": 0.004,
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
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06962025316455697,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.208,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.049,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03228476821192053,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 2.979,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.094,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.025511916750587445,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1785226677945,
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
            "value": 0.004,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.043478260869565216,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.013000000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0759493670886076,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.0338680926916221,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.0959999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.088,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.02454780361757106,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1785399097686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write time",
            "value": 0.08600000000000001,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Read time",
            "value": 0.005,
            "unit": "seconds"
          },
          {
            "name": "Test 1: Write throughput",
            "value": 0.046511627906976744,
            "unit": "MB/s"
          },
          {
            "name": "Test 2: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write time",
            "value": 0.17700000000000002,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.016,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.06214689265536723,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.1669999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.057999999999999996,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.042844901456726654,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.159,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.10799999999999998,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027223805001582783,
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
          "id": "66c0402d8d9350a7313e782e71c60690ddaa74c8",
          "message": "Merge branch 'CGNS:develop' into develop",
          "timestamp": "2026-01-28T14:17:44Z",
          "url": "https://github.com/hyoklee/CGNS/commit/66c0402d8d9350a7313e782e71c60690ddaa74c8"
        },
        "date": 1785487072567,
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
            "value": 0.004,
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
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Read time",
            "value": 0.014,
            "unit": "seconds"
          },
          {
            "name": "Test 2: Write throughput",
            "value": 0.0658682634730539,
            "unit": "MB/s"
          },
          {
            "name": "Test 3: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write time",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Read time",
            "value": 0.056999999999999995,
            "unit": "seconds"
          },
          {
            "name": "Test 3: Write throughput",
            "value": 0.03670546105640107,
            "unit": "MB/s"
          },
          {
            "name": "Test 4: Total time",
            "value": 2,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write time",
            "value": 3.003,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Read time",
            "value": 0.09599999999999999,
            "unit": "seconds"
          },
          {
            "name": "Test 4: Write throughput",
            "value": 0.027306027306027308,
            "unit": "MB/s"
          }
        ]
      }
    ]
  }
}