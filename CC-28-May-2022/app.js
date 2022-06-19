// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

//Params: 2 arrays
//Returns: returns -1 if a1 and/or a2 are empty; return a number which is the max between the maximum 
//Example: var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]; var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
//Pseudocode: count the number of letters of each string inside the array;  find the maximum difference between

function mxdiflg(a1, a2) {

    if ((a1.length === 0 || a2.length === 0) || (a1.length === 0 && a2.length === 0)) {
        return -1
    }

    let a1length = a1.map(x => x.length)
    let a2length = a2.map(y => y.length)

    return Math.max((Math.max(...a1length) - Math.min(...a2length)), (Math.max(...a2length) - Math.min(...a1length)));

}

// Different solution:
function mxdiflg(a1, a2) {
    if (a1.length * a2.length == 0) {
        return -1
    }
    //Get an array of the lenght of each string in the array
    let a1Length = a1.map((x) => (x.length))
    let a2Length = a2.map((y) => (y.length))

    //Get the minimum value of the array of the length of the strings in arrays in parameters
    let minimumA1 = Math.min(...a1Length)
    let minimumA2 = Math.min(...a2Length)

    //Get the maximum value of the array of length of strings in arrays in parameters
    let maximumA1 = Math.max(...a1Length)
    let maximumA2 = Math.max(...a2Length)

    //Get the difference of the maximum string length in the first and the minimum string length of the second array
    let diffA1 = Math.abs(maximumA1 - minimumA2)
    let diffA2 = Math.abs(maximumA2 - minimumA1)

    //MAXIMUM DIFFERENCE between any string length between the first and the second array
    return (Math.max(diffA1, diffA2))

}