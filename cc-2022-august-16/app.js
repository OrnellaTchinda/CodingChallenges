// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

//Parameters: 1 array of positive and negative numbers

//Return: return the sum of positive numbers and if no positive number, return 0

//Example: describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//     assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//     assert.strictEqual(positiveSum([]),0);
//     assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//     assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//     });
//   });

//PseudoCode: write a for loop to only get the positive numbers and then sum all those numbers
function positiveSum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 0) {

            sum += arr[i]
        }
    }
    return sum
}