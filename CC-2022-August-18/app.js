// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//Parameters: 1 array

//Return: return the sum of elements in the array and make sure to convert the strings into integers first

//Example: describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
//   })
// });

//PseudoCode: Use the function reduce to sum the numbers, use the Munber() to convert the strings to numbers

function sumMix(x) {

    return x.reduce((p, c) => Number(p) + Number(c), 0)
}