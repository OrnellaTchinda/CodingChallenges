// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


// Example(Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)



//Parameters: 1 string

//Return: the string reverse

//Example: 
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual( isIsogram("Dermatoglyphics"), true );
//     assert.strictEqual( isIsogram("isogram"), true );
//     assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
//     assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
//     assert.strictEqual( isIsogram("isIsogram"), false );
//     assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
//   });
// });

//PseudoCode:  split the string at the space to get an array, reverse the array and join the elements with a space between them. 

function isIsogram(str) {
  let str2 = {};
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str2[str[i]]) {
      return false
    }
    str2[str[i]] = true
  }
  return true
}