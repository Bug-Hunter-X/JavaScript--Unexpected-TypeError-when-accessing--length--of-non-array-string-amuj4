# JavaScript: Unexpected TypeError when accessing 'length' of non-array/string

This repository demonstrates a common JavaScript error: attempting to access the `length` property of a value that isn't an array or string.  The `bug.js` file shows the erroneous code, and `bugSolution.js` provides a corrected version.

**Problem:**
The original `foo` function doesn't handle cases where the input `x` is not an array or string.  This results in a `TypeError` when trying to access `x.length`.

**Solution:**
The corrected function includes explicit checks to handle `null`, `undefined`, and non-array/string inputs appropriately.  It uses `typeof` to determine the data type and returns a default value or handles the different cases as necessary.