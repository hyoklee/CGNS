window.BENCHMARK_DATA = {
  "lastUpdate": 1758219803217,
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
          "id": "838391f2fbdd4a59422d824be2d6e053d8f076f7",
          "message": "remove: skip-fetch-gh-pages flag now that gh-pages branch exists\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-18T11:58:47-05:00",
          "tree_id": "09bce1e0d4b3a0cab9e8523419c7ef73675e4788",
          "url": "https://github.com/hyoklee/CGNS/commit/838391f2fbdd4a59422d824be2d6e053d8f076f7"
        },
        "date": 1758215145017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small Mesh Test (32K elements, 2 processes) - Elements Processed",
            "value": 32000,
            "unit": "elements"
          },
          {
            "name": "Test 2: Medium Mesh Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 3: Large Mesh Test (512K elements, 2 processes) - Elements Processed",
            "value": 512000,
            "unit": "elements"
          },
          {
            "name": "Test 4: Independent I/O Mode Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 5: Multi-dataset API Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 6: 4 Processes Test (256K elements) - Elements Processed",
            "value": 256000,
            "unit": "elements"
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
          "id": "3149d1da7a03a29fb14884a3dc860383c0d90e7c",
          "message": "fix: skip Process Count data processing in benchmark parser\n\nProcess Count will always be the same across runs, so there's no need to\ntrack it in benchmark results.\n\n🤖 Generated with [Claude Code](https://claude.ai/code)\n\nCo-Authored-By: Claude <noreply@anthropic.com>",
          "timestamp": "2025-09-18T13:19:50-05:00",
          "tree_id": "6f1795ce4862a5d160c00074540700e05ed9f7d4",
          "url": "https://github.com/hyoklee/CGNS/commit/3149d1da7a03a29fb14884a3dc860383c0d90e7c"
        },
        "date": 1758219802858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Test 1: Small Mesh Test (32K elements, 2 processes) - Elements Processed",
            "value": 32000,
            "unit": "elements"
          },
          {
            "name": "Test 2: Medium Mesh Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 3: Large Mesh Test (512K elements, 2 processes) - Elements Processed",
            "value": 512000,
            "unit": "elements"
          },
          {
            "name": "Test 4: Independent I/O Mode Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 5: Multi-dataset API Test (128K elements, 2 processes) - Elements Processed",
            "value": 128000,
            "unit": "elements"
          },
          {
            "name": "Test 6: 4 Processes Test (256K elements) - Elements Processed",
            "value": 256000,
            "unit": "elements"
          }
        ]
      }
    ]
  }
}