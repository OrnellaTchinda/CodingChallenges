// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.


//Parameters: 1 array and 1 value

//Return: true or false

//Example: describe("Basic tests",() =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(check([66, 101], 66), true);
//     assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
//     assert.strictEqual(check(['t', 'e', 's', 't'], 'e'), true);
//     assert.strictEqual(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//   })
// })

//PseudoCode: use a function that look into an array and find if that value exist inside

function check(a, x) {
    return a.includes(x);
}