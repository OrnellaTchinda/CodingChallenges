// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.


//P: string
//R: index of string
//E: absentVowel("John Doe hs seven red pples under his bsket"), 0
//absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3
//P: create a string with the vowels ; check if an element of the vowel string is included in the string and indexOf()====-1 is the same as includes()

function absentVowel(str) {

    let vowel = "aeiou";

    for (let i = 0; i < vowel.length; i++) {

        if (str.indexOf(vowel[i]) === -1) {

            return i;

        }
    }

}