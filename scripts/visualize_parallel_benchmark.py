#!/usr/bin/env python3
"""
Visualize parallel benchmark data from gh-pages branch.

This script fetches benchmark data from the gh-pages branch and creates
visualizations comparing performance over time.
"""

import json
import sys
import subprocess
import tempfile
import shutil
from pathlib import Path
import argparse

try:
    import matplotlib.pyplot as plt
    import matplotlib.dates as mdates
    from datetime import datetime
except ImportError:
    print("Error: matplotlib is required for visualization")
    print("Install it with: pip3 install matplotlib")
    sys.exit(1)


def fetch_gh_pages_data(benchmark_dir="dev/bench_par"):
    """
    Fetch benchmark data from gh-pages branch.

    Args:
        benchmark_dir: Directory path in gh-pages branch containing benchmark data

    Returns:
        dict: Benchmark data or None if fetch failed
    """
    temp_dir = tempfile.mkdtemp()

    try:
        print(f"Fetching gh-pages branch data...")

        # Clone gh-pages branch
        result = subprocess.run(
            ["git", "clone", "--single-branch", "--branch", "gh-pages",
             "--depth", "1", ".", temp_dir],
            capture_output=True,
            text=True
        )

        if result.returncode != 0:
            print(f"Error cloning gh-pages branch: {result.stderr}")
            return None

        # Look for data.js file in the benchmark directory
        data_file = Path(temp_dir) / benchmark_dir / "data.js"

        if not data_file.exists():
            print(f"Benchmark data file not found at: {data_file}")
            print(f"Available files in {Path(temp_dir) / benchmark_dir}:")
            bench_path = Path(temp_dir) / benchmark_dir
            if bench_path.exists():
                for f in bench_path.iterdir():
                    print(f"  {f.name}")
            else:
                print(f"  Directory does not exist")
            return None

        print(f"✓ Found benchmark data at: {data_file}")

        # Parse data.js file (it's JavaScript, but we can extract the JSON)
        with open(data_file, 'r') as f:
            content = f.read()

        # Extract JSON from the JavaScript file
        # Format is typically: window.BENCHMARK_DATA = {...}
        start_idx = content.find('{')
        end_idx = content.rfind('}') + 1

        if start_idx == -1 or end_idx == 0:
            print("Error: Could not find JSON data in data.js")
            return None

        json_str = content[start_idx:end_idx]
        data = json.loads(json_str)

        print(f"✓ Successfully loaded benchmark data")
        return data

    except Exception as e:
        print(f"Error fetching gh-pages data: {e}")
        return None

    finally:
        # Clean up temp directory
        shutil.rmtree(temp_dir, ignore_errors=True)


def plot_benchmark_data(data, output_file="benchmark_plot.png"):
    """
    Create visualization of benchmark data.

    Args:
        data: Benchmark data dictionary
        output_file: Output file path for the plot
    """
    if not data or 'entries' not in data:
        print("Error: Invalid benchmark data format")
        return

    entries = data['entries']

    if not entries:
        print("No benchmark entries found")
        return

    print(f"Processing {len(entries)} benchmark entries...")

    # Extract data by test name
    tests_data = {}

    for entry_name, entry_data in entries.items():
        for commit_data in entry_data:
            commit_hash = commit_data.get('commit', {}).get('id', 'unknown')
            timestamp = commit_data.get('commit', {}).get('timestamp', None)

            # Parse benchmarks
            for bench in commit_data.get('benches', []):
                test_name = bench.get('name', 'Unknown')
                value = bench.get('value', 0)
                unit = bench.get('unit', '')

                if test_name not in tests_data:
                    tests_data[test_name] = {
                        'timestamps': [],
                        'values': [],
                        'commits': [],
                        'unit': unit
                    }

                # Convert timestamp to datetime
                if timestamp:
                    dt = datetime.fromtimestamp(timestamp)
                    tests_data[test_name]['timestamps'].append(dt)
                    tests_data[test_name]['values'].append(value)
                    tests_data[test_name]['commits'].append(commit_hash[:7])

    if not tests_data:
        print("No test data found to plot")
        return

    print(f"Found data for {len(tests_data)} different tests")

    # Create plots - group by metric type
    time_tests = [name for name in tests_data.keys() if 'time' in name.lower()]
    throughput_tests = [name for name in tests_data.keys() if 'throughput' in name.lower()]

    fig, axes = plt.subplots(2, 1, figsize=(12, 10))

    # Plot time metrics
    if time_tests:
        ax = axes[0]
        for test_name in sorted(time_tests):
            test_info = tests_data[test_name]
            if test_info['timestamps']:
                ax.plot(test_info['timestamps'], test_info['values'],
                       marker='o', label=test_name, linewidth=2)

        ax.set_xlabel('Date')
        ax.set_ylabel('Time (seconds)')
        ax.set_title('CGNS HDF5 Parallel Benchmark - Execution Time (Lower is Better)')
        ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
        ax.grid(True, alpha=0.3)
        ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
        fig.autofmt_xdate()

    # Plot throughput metrics
    if throughput_tests:
        ax = axes[1]
        for test_name in sorted(throughput_tests):
            test_info = tests_data[test_name]
            if test_info['timestamps']:
                ax.plot(test_info['timestamps'], test_info['values'],
                       marker='s', label=test_name, linewidth=2)

        ax.set_xlabel('Date')
        ax.set_ylabel('Throughput (MB/s)')
        ax.set_title('CGNS HDF5 Parallel Benchmark - Write Throughput (Higher is Better)')
        ax.legend(bbox_to_anchor=(1.05, 1), loc='upper left')
        ax.grid(True, alpha=0.3)
        ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y-%m-%d'))
        fig.autofmt_xdate()

    plt.tight_layout()
    plt.savefig(output_file, dpi=150, bbox_inches='tight')
    print(f"✓ Plot saved to: {output_file}")

    # Print summary statistics
    print("\n=== Benchmark Summary ===")
    for test_name in sorted(tests_data.keys()):
        test_info = tests_data[test_name]
        if test_info['values']:
            latest_value = test_info['values'][-1]
            avg_value = sum(test_info['values']) / len(test_info['values'])
            print(f"\n{test_name}:")
            print(f"  Latest: {latest_value:.4f} {test_info['unit']}")
            print(f"  Average: {avg_value:.4f} {test_info['unit']}")
            print(f"  Data points: {len(test_info['values'])}")


def main():
    """Main function."""
    parser = argparse.ArgumentParser(
        description="Visualize parallel benchmark data from gh-pages branch",
        formatter_class=argparse.RawDescriptionHelpFormatter
    )

    parser.add_argument(
        '--benchmark-dir',
        default='dev/bench_par',
        help='Benchmark data directory in gh-pages branch (default: dev/bench_par)'
    )
    parser.add_argument(
        '--output',
        default='parallel_benchmark_plot.png',
        help='Output file for the plot (default: parallel_benchmark_plot.png)'
    )
    parser.add_argument(
        '--local-data',
        help='Use local data.js file instead of fetching from gh-pages'
    )

    args = parser.parse_args()

    if args.local_data:
        print(f"Loading local data from: {args.local_data}")
        try:
            with open(args.local_data, 'r') as f:
                content = f.read()

            # Extract JSON
            start_idx = content.find('{')
            end_idx = content.rfind('}') + 1
            json_str = content[start_idx:end_idx]
            data = json.loads(json_str)
        except Exception as e:
            print(f"Error loading local data: {e}")
            return 1
    else:
        data = fetch_gh_pages_data(args.benchmark_dir)
        if not data:
            print("\nError: Could not fetch benchmark data from gh-pages branch")
            print("This could mean:")
            print("  1. The gh-pages branch doesn't exist yet")
            print("  2. No benchmark data has been published yet")
            print("  3. The benchmark data directory path is incorrect")
            print("\nTo create initial benchmark data, run the workflow:")
            print("  - Push to develop branch, or")
            print("  - Manually trigger the 'CGNS HDF5 Parallel Benchmark' workflow")
            return 1

    plot_benchmark_data(data, args.output)

    return 0


if __name__ == "__main__":
    sys.exit(main())
