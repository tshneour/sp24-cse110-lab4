### Question 1
`values added: 20` is printed
### Question 2
`final result: 20` is printed
### Question 3
`values added: 20` is printed
### Question 4
A `ReferenceError` is caused because the variable `result` is of type `let` which means that it is only in scope of the first if statement. The code at line 13 tries to use result outside of this scope so it causes an error.
### Question 5
A `TypeError` is caused because there is an assignment to `result` on line 7 and since `result` is a `const` variable, assignment/changes to it are not allowed.
### Question 6
A `ReferenceError` is caused because the variable `result` is of type `const` which means that it is only in scope of the first if statement. The code at line 13 tries to use result outside of this scope so it causes an error.