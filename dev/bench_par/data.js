window.BENCHMARK_DATA = {
  "lastUpdate": 1772693000931,
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
      }
    ]
  }
}