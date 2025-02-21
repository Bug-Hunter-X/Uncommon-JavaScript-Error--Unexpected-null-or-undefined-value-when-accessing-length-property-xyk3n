# Uncommon JavaScript Error: Unexpected null or undefined value when accessing length property

This repository demonstrates a common JavaScript error that occurs when attempting to access the `length` property of a variable that is null or undefined.  This often happens when dealing with user input or data from external sources that may not always be in the expected format. 

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a corrected version with improved error handling.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run the `foo()` function with a `null` or `undefined` value as input.
3. Observe the error message in your console. 

## Solution

The solution involves adding explicit null and undefined checks before attempting to access the `length` property.  This prevents the error and ensures that the code handles unexpected input gracefully.