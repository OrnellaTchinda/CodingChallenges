// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {
    //array of strings
    //array of string with non consecutive/duplicate letters
    //lowercase
    let newArr = []
    return s.forEach(x => newArr.push((x.split('').filter((w, i, a) => w != a[i - 1]).join(''))))


};

function dup(s) {
    //..
    return s.map(x => x.split('').filter((w, i, a) => w != a[i - 1]).join(''))

};