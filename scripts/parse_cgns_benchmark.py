#!/usr/bin/env python3
"""
Parse CGNS HDF5 benchmark output and convert to JSON format for github-action-benchmark.

This script parses CGNS benchmark output files and extracts performance metrics
(timing data for various operations) to generate JSON output compatible with the
benchmark-action/github-action-benchmark action.
"""

import re
import json
import sys
import argparse
from datetime import datetime
from pathlib import Path


def parse_cgns_output(filename):
    """
    Parse CGNS benchmark output and extract performance metrics.

    Args:
        filename (str): Path to the CGNS benchmark output file

    Returns:
        list: List of benchmark results in github-action-benchmark format
    """
    results = []

    try:
        with open(filename, 'r') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: File {filename} not found")
        return []
    except Exception as e:
        print(f"Error reading file {filename}: {e}")
        return []

    # Check if file is empty or too small to contain valid data
    if len(content.strip()) == 0:
        print("Input file is empty")
        return []

    if len(content.strip()) < 50:  # Arbitrary threshold for minimal content
        print(f"Input file appears to be too small (only {len(content.strip())} characters)")
        print(f"Content preview: {content.strip()[:100]}...")
        return []

    print(f"Processing input file with {len(content)} characters")
    print(f"Looking for test sections...")

    # Split by test sections - process all available tests
    test_sections = re.split(r'=== Test \d+:', content)

    print(f"Found {len(test_sections)} potential test sections (including header)")

    if len(test_sections) == 1:
        print("No test sections found with pattern '=== Test N:'")
        print("Checking for alternative test section patterns...")

        # Try alternative patterns that might be in the file
        alt_patterns = [
            r'Test \d+:',
            r'=== Test \d+\s',
            r'TEST \d+',
            r'Benchmark \d+',
        ]

        for pattern in alt_patterns:
            alt_sections = re.split(pattern, content, flags=re.IGNORECASE)
            if len(alt_sections) > 1:
                print(f"Found {len(alt_sections)-1} sections with pattern '{pattern}'")
                break
        else:
            print("No recognizable test section patterns found")

    for i, section in enumerate(test_sections[1:], 1):  # Process all tests
        test_name = f"Test {i}"
        print(f"Processing {test_name}, section length: {len(section)} characters")

        # Parse timing data from the CGNS benchmark output
        # The benchmark outputs timing in different ways:
        # 1. Timing data directly in stdout
        # 2. Summary from timing.dat files

        # Look for timing patterns in the benchmark output
        # New format shows timing for different operations:
        # - Grid coordinates written in X.XXX seconds
        # - Element connectivity written in X.XXX seconds
        # - Flow solution written in X.XXX seconds
        # - Total write time: X.XXX seconds
        # - Write performance: X.X MB/s

        # Extract timing data and throughput from the benchmark output
        # First try the old format (direct timing output)
        total_write_match = re.search(r'Total write time: ([\d.]+) seconds', section)
        throughput_match = re.search(r'Write performance: ([\d.]+) MB/s', section)

        if total_write_match:
            total_write_time = float(total_write_match.group(1))
            print(f"  Found total write time: {total_write_time} seconds")

            # Add the three timing metrics for this test
            results.append({
                "name": f"{test_name}: Total time",
                "unit": "seconds",
                "value": total_write_time
            })

            results.append({
                "name": f"{test_name}: Write time",
                "unit": "seconds",
                "value": total_write_time
            })

            # For now, set read time to 0 since these tests don't show read operations
            results.append({
                "name": f"{test_name}: Read time",
                "unit": "seconds",
                "value": 0.0
            })

            # Add throughput data if available
            if throughput_match:
                throughput_value = float(throughput_match.group(1))
                print(f"  Found write throughput: {throughput_value} MB/s")
                results.append({
                    "name": f"{test_name}: Write throughput",
                    "unit": "MB/s",
                    "value": throughput_value
                })
        else:
            # Try new format (timing.dat format embedded in output)
            print(f"  No 'Total write time' found in {test_name}, trying timing.dat format")

            # Look for timing data lines that match the timing.dat format
            # Format: total_time write_coord write_elem write_field write_array read_coord read_elem read_field read_array ...
            timing_lines = []
            for line in section.split('\n'):
                line = line.strip()
                # Skip comments and empty lines
                if line and not line.startswith('#') and not line.startswith('Timing data'):
                    # Check if this looks like a timing data line (starts with a number)
                    if re.match(r'^\s*[\d.]+', line):
                        timing_lines.append(line)

            print(f"  Found {len(timing_lines)} timing data lines")

            for timing_line in timing_lines:
                try:
                    values = timing_line.strip().split()
                    if len(values) >= 9:  # Ensure we have enough values for basic timing data
                        total_time = float(values[0])
                        write_coord = float(values[1])
                        write_elem = float(values[2])
                        write_field = float(values[3])
                        write_array = float(values[4])
                        read_coord = float(values[5])
                        read_elem = float(values[6])
                        read_field = float(values[7])
                        read_array = float(values[8])

                        # Calculate derived metrics
                        total_write_time = write_coord + write_elem + write_field + write_array
                        total_read_time = read_coord + read_elem + read_field + read_array

                        print(f"  Parsed timing data: total={total_time}s, write={total_write_time}s, read={total_read_time}s")

                        # Add timing metrics
                        results.append({
                            "name": f"{test_name}: Total time",
                            "unit": "seconds",
                            "value": total_time
                        })

                        results.append({
                            "name": f"{test_name}: Write time",
                            "unit": "seconds",
                            "value": total_write_time
                        })

                        results.append({
                            "name": f"{test_name}: Read time",
                            "unit": "seconds",
                            "value": total_read_time
                        })

                        # Calculate throughput if we have memory data (positions 13-16)
                        if len(values) >= 17:
                            try:
                                mb_coord = float(values[13])
                                mb_elem = float(values[14])
                                mb_field = float(values[15])
                                mb_array = float(values[16])
                                total_data_mb = mb_coord + mb_elem + mb_field + mb_array

                                if total_write_time > 0:
                                    write_throughput = total_data_mb / total_write_time
                                    print(f"  Calculated write throughput: {write_throughput:.1f} MB/s")
                                    results.append({
                                        "name": f"{test_name}: Write throughput",
                                        "unit": "MB/s",
                                        "value": write_throughput
                                    })
                            except (ValueError, IndexError):
                                print(f"  Could not calculate throughput from memory data")

                        # Only process the first valid timing line per test section
                        break

                except (ValueError, IndexError) as e:
                    print(f"  Could not parse timing line '{timing_line[:50]}...': {e}")
                    continue

            if not timing_lines:
                print(f"  No timing data found in {test_name}")

        # Skip file size and performance information as requested - only time data in seconds

        # Skip process count data processing - Process Count will always be the same
        # proc_matches = re.findall(r'(\d+)\s+processes?', section, re.IGNORECASE)
        # if proc_matches:
        #     proc_count = float(proc_matches[-1])
        #     results.append({
        #         "name": f"{test_name} - Process Count",
        #         "unit": "processes",
        #         "value": proc_count
        #     })

    # If no specific test sections found, try to parse timing.dat files or general output
    if not results:
        print("No test sections found, trying to parse general performance data...")

        # Look for any timing data in the content
        general_patterns = {
            'Program Runtime': r'total.*time[^:]*:\s*([\d.]+)',
            'Write Time': r'write[^:]*time[^:]*:\s*([\d.]+)',
            'Read Time': r'read[^:]*time[^:]*:\s*([\d.]+)',
            'Coordinate Write': r'coord[^:]*write[^:]*:\s*([\d.]+)',
            'Coordinate Read': r'coord[^:]*read[^:]*:\s*([\d.]+)'
        }

        for metric_name, pattern in general_patterns.items():
            matches = re.findall(pattern, content, re.IGNORECASE)
            if matches:
                timing_value = float(matches[-1])
                print(f"Found general pattern '{metric_name}': {timing_value}")
                results.append({
                    "name": metric_name,
                    "unit": "seconds",
                    "value": timing_value
                })

    print(f"Total results found: {len(results)}")
    return results


def parse_timing_file(timing_file_path):
    """
    Parse a CGNS timing.dat file for performance metrics.

    Expected format from ser_benchmark_hdf5:
    #nprocs, total time, write: coord., elem., field, array, read: coord., elem., field, array, MB: coord, elem, field, array
     0.021 0.001 0.001 0.001 0.001 0.001 0.001 0.001 0.000 0.003 0.002 0.000 0.000 0.000 0.000 3 2 3 2

    Args:
        timing_file_path (str): Path to timing.dat file

    Returns:
        list: Timing results in benchmark format
    """
    results = []
    test_counter = 1

    try:
        with open(timing_file_path, 'r') as f:
            lines = f.readlines()

        for line in lines:
            if line.startswith('#'):
                continue

            # Parse timing data from ser_benchmark_hdf5 format
            # Format: total_time write_coord write_elem write_field write_array read_coord read_elem read_field read_array ...
            values = line.strip().split()
            if len(values) >= 17:  # Ensure we have all required values
                try:
                    total_time = float(values[0])
                    write_coord = float(values[1])
                    write_elem = float(values[2])
                    write_field = float(values[3])
                    write_array = float(values[4])
                    read_coord = float(values[5])
                    read_elem = float(values[6])
                    read_field = float(values[7])
                    read_array = float(values[8])

                    # Memory usage data (MB)
                    mb_coord = float(values[13])
                    mb_elem = float(values[14])
                    mb_field = float(values[15])
                    mb_array = float(values[16])

                    # Calculate derived metrics
                    total_write_time = write_coord + write_elem + write_field + write_array
                    total_read_time = read_coord + read_elem + read_field + read_array
                    total_data_mb = mb_coord + mb_elem + mb_field + mb_array

                    # Calculate I/O performance (MB/s)
                    write_throughput = total_data_mb / total_write_time if total_write_time > 0 else 0
                    read_throughput = total_data_mb / total_read_time if total_read_time > 0 else 0

                    # Add only time-based metrics in seconds using Test X: format
                    timing_metrics = [
                        ("Total time", total_time, "seconds"),
                        ("Write time", total_write_time, "seconds"),
                        ("Read time", total_read_time, "seconds")
                    ]

                    for name, value, unit in timing_metrics:
                        # Only include timing data (seconds), skip zero values except totals
                        if value > 0 or "Total" in name:
                            results.append({
                                "name": f"Test {test_counter}: {name}",
                                "unit": unit,
                                "value": value
                            })

                    test_counter += 1

                except (ValueError, IndexError) as e:
                    print(f"Warning: Could not parse timing line: {line.strip()}")
                    print(f"Error: {e}")
                    continue

    except FileNotFoundError:
        print(f"Timing file not found: {timing_file_path}")
    except Exception as e:
        print(f"Error parsing timing file {timing_file_path}: {e}")

    return results


def main():
    """Main function to handle command line arguments and run the parser."""
    parser = argparse.ArgumentParser(
        description="Parse CGNS HDF5 benchmark output and convert to JSON for github-action-benchmark",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python3 parse_cgns_benchmark.py benchmark_output.txt results.json
  python3 parse_cgns_benchmark.py --verbose output.txt results.json
        """
    )

    parser.add_argument('input_file', help='Input file containing CGNS benchmark output')
    parser.add_argument('output_file', help='Output JSON file for benchmark results')
    parser.add_argument('-v', '--verbose', action='store_true',
                       help='Enable verbose output')

    args = parser.parse_args()

    if args.verbose:
        print(f"Parsing CGNS benchmark output from: {args.input_file}")
        print(f"Output will be written to: {args.output_file}")

    try:
        results = parse_cgns_output(args.input_file)

        # Skip timing file parsing as requested - only use benchmark output
        if args.verbose:
            print("Skipping timing file parsing - using only benchmark output")

        if not results:
            print("Warning: No benchmark results found in the output file")
            if args.verbose:
                print("This could mean:")
                print("  - CGNS benchmark didn't run successfully")
                print("  - Output format is different than expected")
                print("  - File contains no performance data")

            # Check if the input file is actually empty before creating fallback
            try:
                with open(args.input_file, 'r') as f:
                    file_content = f.read()

                if len(file_content.strip()) == 0:
                    print("Input file is empty, creating fallback result")
                    # Create a minimal result to avoid workflow failure
                    results = [{
                        "name": "No Results Found",
                        "unit": "N/A",
                        "value": 0
                    }]
                else:
                    print(f"Input file contains {len(file_content)} characters but no valid benchmark data was parsed")
                    print("This suggests a parsing issue rather than missing data")

                    # Show first few lines for debugging
                    lines = file_content.split('\n')[:10]
                    print("First 10 lines of input file:")
                    for i, line in enumerate(lines, 1):
                        print(f"  {i:2d}: {line[:80]}{'...' if len(line) > 80 else ''}")

                    # Exit with error instead of creating fallback when data exists
                    print("\nError: Failed to parse benchmark data from non-empty file")
                    sys.exit(1)

            except Exception as e:
                print(f"Error checking input file: {e}")
                # Create fallback only on file read errors
                results = [{
                    "name": "No Results Found",
                    "unit": "N/A",
                    "value": 0
                }]

        # Ensure output directory exists
        output_path = Path(args.output_file)
        output_path.parent.mkdir(parents=True, exist_ok=True)

        # Output in format expected by github-action-benchmark
        with open(args.output_file, 'w') as f:
            json.dump(results, f, indent=2)

        print(f"[SUCCESS] Successfully parsed {len(results)} benchmark results:")
        for result in results:
            print(f"  [RESULT] {result['name']}: {result['value']} {result['unit']}")

        if args.verbose:
            print(f"\n[INFO] Results written to: {args.output_file}")

    except Exception as e:
        print(f"[ERROR] Error parsing benchmark results: {e}")

        # Create a minimal result to avoid workflow failure
        try:
            output_path = Path(args.output_file)
            output_path.parent.mkdir(parents=True, exist_ok=True)

            with open(args.output_file, 'w') as f:
                json.dump([{
                    "name": "Parse Error",
                    "unit": "error",
                    "value": 0
                }], f, indent=2)
        except Exception as write_error:
            print(f"[ERROR] Failed to write error result: {write_error}")

        sys.exit(1)


if __name__ == "__main__":
    main()