// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
    return s.repeat(n); //The repeat method return a string with a number of copis of a string without spaces
}

function repeatStr(n, s) {
    //Params: a number and a string
    //Returns: a string with the initial string repeated n times
    //Examples: repeatStr(3, "*"), "***"); repeatStr(5, "#"), "#####"); repeatStr(2, "ha "), "ha ha ");
    //Pseudocode: initialize new string, loop from 0 to n, every loop add the value of the initial string to the new string. return new string
    let newStr = ""
    for (let i = 0; i < n; i++) {
        newStr += s
    }
    return newStr;
}

//Try using the for loop I know you don't always like it

function repeatStr(n, s) {
    let result = ""
    for (let i = 0; i < n; i++) {
        result += s
    }
    return result
}
