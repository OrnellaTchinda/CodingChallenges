// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


//Parameters: 1 string of two words separated by a space

//Return: 2 first letters of the string separated by a dot

//Example: describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(abbrevName("Sam Harris"), "S.H");
//     assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
//     assert.strictEqual(abbrevName("Evan Cole"), "E.C");
//     assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
//     assert.strictEqual(abbrevName("David Mendieta"), "D.M");
//   });
// });

//PseudoCode: Separate the words; take the first letter; join with a dot; return the 2 first letters separated by the dot

function abbrevName(name) {

    let firstLetters = name.toLowerCase().split(' ').map(letter => letter[0].toUpperCase()).join('.')
    return firstLetters
}

console.log(abbrevName('Ornella Tchinda'))