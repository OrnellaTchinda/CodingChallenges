// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]


//Parameters: 2 values

//Return: array of elements starting with the first value and ending with the second element and containing multiples of the first value

//Example: describe("Basic Tests",function(){
//   it("Testing for fixed tests", () => {
//     assert.deepEqual(countBy(1,10), [1,2,3,4,5,6,7,8,9,10], "Array does not match")
//     assert.deepEqual(countBy(2,5), [2,4,6,8,10], "Array does not match")
//   });
// });  

//PseudoCode: create an empty array, 
//create a for loop with a condition that start with the first value, adding 1 everytime  and multiply it by the value and stop at the second value

function countBy(x, n) {
    let z = [];

    for (let i = 1; i <= n; i++) {
        z.push(x * i)
    }

    return z;
}