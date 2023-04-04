// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

//P = integer
//R = boolean
//E= -121 is false; 121 true, 01 false
//P= Convert integer to string; split, reverse and join. Compare the value we got with the integer "=="

var isPalindrome = function (x) {

    let newX = x.toString().split('').reverse().join('')

    return newX == x

};