### Question 1
Since `i` is a `var`, it has function scope so even if it is created inside a for loop inside the function, it is still in scope for line 12 since it is also in the function. Therefore, it prints `3` A.K.A. `i`.
### Question 2
Line 13 will print `discountedPrice`, which was calculated in the for loop. Since `discountedPrice` is a `var`, it is still in-scope for line 13 despite being used in the for loop since both instances are in the same function.
### Question 3
Line 14 will print `finalPrice`, which was created as a `var` in the beginning of the function. Since `finalPrice` is a `var` and it is used in the same function where it is created, it is in scope and thus doesn't throw an error.
### Question 4
`discountPrices()` will return a list of integers which are half the amount of the input list `prices`. `discounted` is created as `var` so it is still in scope at line 16 since it is created an returned in the same function.
### Question 5
At line 12, a `ReferenceError` will occur. This is because `i` is a `let` variable and so it has block scope in the for loop it was made. Therefore, something outside of it (line 12) cannot access it because it doesn't exist.
### Question 6
At line 13, a `ReferenceError` will occur. This is because `discountedPrice` is a `let` variable and so it has block scope in the for loop it was made. Therefore, something outside of it (line 13) cannot access it because it doesn't exist.
### Question 7
Line 14 will print `finalPrice`, which was created as a `let` in the beginning of the function. Since `finalPrice` is a `let`, it is used in the same function where it is created, and along the same indentation level, it is in scope and thus line 14 doesn't throw an error.
### Question 8
`discountPrices()` will return a list of integers which are half the amount of the input list `prices`. `discounted` is created as `let` and since it is returned in the same indentation level as it is created, it is still in scope at line 16 so no error is thrown.
### Question 9
At line 11, a `ReferenceError` will occur. This is because `i` is a `let` variable and so it has block scope in the for loop it was made. Therefore, something outside of it (line 11) cannot access it because it doesn't exist.
### Question 10
At line 12, `3` will be printed (A.K.A `i`). Since `i` is a `const`, it is used in the same function where it is created, and along the same indentation level, it is in scope and thus line 12 doesn't throw an error.
### Question 11
`discountPrices()` will return a list of integers which are half the amount of the input list `prices`. `discounted` is created as `const` and since it is returned in the same indentation level as it is created, it is still in scope at line 14 so no error is thrown.
## Data Types

### Question 12
- `student.name`
- `student['Grad Year']`
- `student.greeting()`
- `student['Favorite Teacher'].name`
- `student.courseLoad[0]`

### Question 13
- The output is `'32'` since the first term is a string so `2` is cast to a string and then concatenated.
- The output is `1` since although the first term is a string, subtraction is being done with a number so `'3'` is cast to a number.
- The output is `3` since the first term is a number so `null` is converted to `0`.
- The output is `'3null'` since the first term is a string so `null` is converted to a string and concatenated.
- The output is `4` since the second term is a number so `true` is interpreted as the number `1` and added.
- The output is `0` since both `false` and `null` are interpreted as 0 when casted.
- The output is `'3undefined'` since the first term is a string so `undefined` is cast to a string and concatenated.
- The output is `NaN` since the subtraction sign causes both terms to be cast to a number. `undefined` is cast to `NaN` as a result so it takes precedence in the difference.

### Question 14
- The output is `true` because one term is a string and the other is a number so it is computed as `2 > 1`.
- The output is `false` because both terms are strings and so `12` is lexographically *less* than `2`.
- The output is `true` because one term is a string and the other is a number so the string is cast to a number and it is computed as `2 == 2`.
- The output is `false` because the strict equality operator is used and both terms are of different data types.
- The output is `false` because `2` is a number so `true` is cast to a number, being `1`. Thus, it is computed as `1 == 2`.
- The output is `true` because `Boolean(2)` converts `2` to a boolean and anything other than `0` is cast to `true` when using `Boolean()`. Thus, it is computed as `true === true` which is `true` since they are identical (in value and data type).

### Question 15
The `==` operator compares two values, type casting one or the other so both are the same data type if both are different data types. The `===` is a strict comparison of values, not allowing any type conversion, meaning if the two terms are two different data types then the result is instantly `false`.
## Loops

### Question 16
In "part2-question16.js"

# Functions

### Question 17
The result will be `[2, 4, 6]`. To begin with, we call `modifyArray()` with list `[1, 2, 3]` and callback `doSomething` which has already been declared. Then `const newArr` was made and a for loop is run 3 times. For each iteration of the for loop, we use the callback with input `array[i]`. This calls `doSomething` which returns two times the value of `array[i]` which is then pushed to `newArr`. Each element is double and the modified array is returned.
## setInterval(), setTimeout(), clearTimeout()

### Question 18
In "part2-question18.js"

### Question 19
The output of the code is `1 4 3 2`. Since `setTimeout()` runs asynchronously, `1` and `4` are printed first in order. Then, since the second `setTimeout()` has a delay of 0 ms which is less than the previous 1000 ms, `3` is printed next and then after 1 second, `2` is printed.