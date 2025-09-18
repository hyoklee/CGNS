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

    # Split by test sections
    test_sections = re.split(r'=== Test \d+:', content)

    for i, section in enumerate(test_sections[1:], 1):  # Skip first empty section
        test_name = f"Test {i}"

        # Extract test description from the section header
        lines = section.split('\n')
        if lines:
            desc_match = re.match(r'\s*(.+?)\s*===', lines[0])
            if desc_match:
                test_name = f"Test {i}: {desc_match.group(1).strip()}"

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

        # Extract timing data for various operations
        timing_patterns = {
            'Grid Coordinates Write': r'Grid coordinates written in ([\d.]+) seconds',
            'Element Connectivity Write': r'Element connectivity written in ([\d.]+) seconds',
            'Flow Solution Write': r'Flow solution written in ([\d.]+) seconds',
            'Total Write Time': r'Total write time: ([\d.]+) seconds',
            'Total Time': r'Total Time to Run Program[^:]*:\s*([\d.]+)s',
            'Write Coordinates': r'Time to Write Coordinates[^:]*:\s*([\d.]+)s',
            'Write Elements': r'Time to Write Elements[^:]*:\s*([\d.]+)s',
            'Write Fields': r'Time to Write Fields[^:]*:\s*([\d.]+)s',
            'Write Arrays': r'Time to Write Arrays[^:]*:\s*([\d.]+)s',
            'Read Coordinates': r'Time to Read Coordinates[^:]*:\s*([\d.]+)s',
            'Read Elements': r'Time to Read Elements[^:]*:\s*([\d.]+)s',
            'Read Fields': r'Time to Read Fields[^:]*:\s*([\d.]+)s',
            'Read Arrays': r'Time to Read Arrays[^:]*:\s*([\d.]+)s'
        }

        # Try to find timing data in the section
        for metric_name, pattern in timing_patterns.items():
            matches = re.findall(pattern, section, re.IGNORECASE)
            if matches:
                # Take the last match (most recent/relevant)
                timing_value = float(matches[-1])
                results.append({
                    "name": f"{test_name} - {metric_name}",
                    "unit": "seconds",
                    "value": timing_value
                })

        # Also look for file size and performance information
        size_patterns = {
            'File Size': r'File size: ([\d.]+) MB',
            'Coordinate Data': r'(\d+)\s+MB.*coord',
            'Element Data': r'(\d+)\s+MB.*elem',
            'Field Data': r'(\d+)\s+MB.*field',
            'Array Data': r'(\d+)\s+MB.*array'
        }

        for metric_name, pattern in size_patterns.items():
            matches = re.findall(pattern, section, re.IGNORECASE)
            if matches:
                size_value = float(matches[-1])
                results.append({
                    "name": f"{test_name} - {metric_name}",
                    "unit": "MB",
                    "value": size_value
                })

        # Look for performance metrics (MB/s)
        perf_patterns = {
            'Write Performance': r'Write performance: ([\d.]+) MB/s'
        }

        for metric_name, pattern in perf_patterns.items():
            matches = re.findall(pattern, section, re.IGNORECASE)
            if matches:
                perf_value = float(matches[-1])
                results.append({
                    "name": f"{test_name} - {metric_name}",
                    "unit": "MB/s",
                    "value": perf_value
                })

        # Look for number of elements/nodes processed
        elem_matches = re.findall(r'(\d+(?:K|M)?)\s+elements', section, re.IGNORECASE)
        if elem_matches:
            elem_count = elem_matches[-1]
            # Convert K/M suffixes to numbers
            if elem_count.endswith('K'):
                elem_value = float(elem_count[:-1]) * 1000
            elif elem_count.endswith('M'):
                elem_value = float(elem_count[:-1]) * 1000000
            else:
                elem_value = float(elem_count)

            results.append({
                "name": f"{test_name} - Elements Processed",
                "unit": "elements",
                "value": elem_value
            })

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
                results.append({
                    "name": metric_name,
                    "unit": "seconds",
                    "value": timing_value
                })

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

                    # Add timing results
                    timing_metrics = [
                        ("Total Runtime", total_time, "seconds"),
                        ("Total Write Time", total_write_time, "seconds"),
                        ("Total Read Time", total_read_time, "seconds"),
                        ("Write Coordinates", write_coord, "seconds"),
                        ("Write Elements", write_elem, "seconds"),
                        ("Write Fields", write_field, "seconds"),
                        ("Write Arrays", write_array, "seconds"),
                        ("Read Coordinates", read_coord, "seconds"),
                        ("Read Elements", read_elem, "seconds"),
                        ("Read Fields", read_field, "seconds"),
                        ("Read Arrays", read_array, "seconds"),
                        ("Data Size Coordinates", mb_coord, "MB"),
                        ("Data Size Elements", mb_elem, "MB"),
                        ("Data Size Fields", mb_field, "MB"),
                        ("Data Size Arrays", mb_array, "MB"),
                        ("Total Data Size", total_data_mb, "MB"),
                        ("Write Throughput", write_throughput, "MB/s"),
                        ("Read Throughput", read_throughput, "MB/s")
                    ]

                    for name, value, unit in timing_metrics:
                        # Skip zero values for cleaner output (except total times)
                        if value > 0 or "Total" in name:
                            results.append({
                                "name": f"Serial HDF5 - {name}",
                                "unit": unit,
                                "value": value
                            })

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

        # Also try to parse any timing files in the same directory
        input_path = Path(args.input_file)

        # Look for standard timing.dat file and timing_*.dat files
        timing_files = list(input_path.parent.glob("timing_*.dat"))
        standard_timing = input_path.parent / "timing.dat"
        if standard_timing.exists():
            timing_files.append(standard_timing)

        # Also look in current working directory for timing.dat
        cwd_timing = Path.cwd() / "timing.dat"
        if cwd_timing.exists() and cwd_timing not in timing_files:
            timing_files.append(cwd_timing)

        for timing_file in timing_files:
            if args.verbose:
                print(f"Found timing file: {timing_file}")
            timing_results = parse_timing_file(str(timing_file))
            results.extend(timing_results)

        if not results:
            print("Warning: No benchmark results found in the output file")
            if args.verbose:
                print("This could mean:")
                print("  - CGNS benchmark didn't run successfully")
                print("  - Output format is different than expected")
                print("  - File contains no performance data")

            # Create a minimal result to avoid workflow failure
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