## Debugging

### Question 1
The bug was that the input numbers that were being fetched from the html code (`num1` and `num2`) were being returned as strings. Thus, when `calculateSum` was run, `result` was created as the result of concatenating the two strings. That is, if `num1` was `1` and `num2` was `2` then `result` was `12` instead of `3`.

### Question 2
I would fix it by converting the values returned in `printSum` for `num1` and `num2` to integers. This can be done using `parseInt` on the returned value in the initialization of both variables.