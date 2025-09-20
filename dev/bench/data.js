window.BENCHMARK_DATA = {
  "lastUpdate": 1758403621816,
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
          "id": "6aaf8adae22480b39d039f68ecfd61430ed71231",
          "message": "fix: add benchmark files to .gitignore to prevent git checkout conflicts\n\nAdd benchmark_results/, timing files, build/, and hdf5/ directories to .gitignore\nto prevent \"untracked working tree files would be overwritten\" errors during\nGitHub Actions benchmark workflow when switching to gh-pages branch.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T12:20:25-05:00",
          "tree_id": "80d3fa50f4fa025547ed0938c12fe82c92abe600",
          "url": "https://github.com/hyoklee/CGNS/commit/6aaf8adae22480b39d039f68ecfd61430ed71231"
        },
        "date": 1758389065537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "No Results Found",
            "value": 0,
            "unit": "N/A"
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
          "id": "6aaf8adae22480b39d039f68ecfd61430ed71231",
          "message": "fix: add benchmark files to .gitignore to prevent git checkout conflicts\n\nAdd benchmark_results/, timing files, build/, and hdf5/ directories to .gitignore\nto prevent \"untracked working tree files would be overwritten\" errors during\nGitHub Actions benchmark workflow when switching to gh-pages branch.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T12:20:25-05:00",
          "tree_id": "80d3fa50f4fa025547ed0938c12fe82c92abe600",
          "url": "https://github.com/hyoklee/CGNS/commit/6aaf8adae22480b39d039f68ecfd61430ed71231"
        },
        "date": 1758396330795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "No Results Found",
            "value": 0,
            "unit": "N/A"
          }
        ]
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
          "id": "6aaf8adae22480b39d039f68ecfd61430ed71231",
          "message": "fix: add benchmark files to .gitignore to prevent git checkout conflicts\n\nAdd benchmark_results/, timing files, build/, and hdf5/ directories to .gitignore\nto prevent \"untracked working tree files would be overwritten\" errors during\nGitHub Actions benchmark workflow when switching to gh-pages branch.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-20T17:20:25Z",
          "url": "https://github.com/hyoklee/CGNS/commit/6aaf8adae22480b39d039f68ecfd61430ed71231"
        },
        "date": 1758398095195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "No Results Found",
            "value": 0,
            "unit": "N/A"
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
      }
    ]
  }
}