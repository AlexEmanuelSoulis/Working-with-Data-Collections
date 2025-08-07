# Working-with-Data-Collections
Project Breakdown
##art 1 – Refactor CSV String into 2D Array
The CSV string is split into lines, and then each line is split by commas to form a 2D array.

## Part 2 – Count the Data Rows
The program calculates how many data rows exist (excluding the header).

## Part 3 – Convert 2D Array to Array of Objects
The header row is converted to lowercase keys, and each data row becomes an object with key-value pairs.

## Part 4 – Manipulate the Data
The last object is removed

A new object is added at the end

A second object is replaced

The average age is calculated across all entries

## Part 5 – Convert Back to CSV
The array of objects is transformed back into a properly formatted CSV string using map() and join().

