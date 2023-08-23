// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.



// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""


// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

var gcdOfStrings = function (str1, str2) {

    //If str2 is a substring of str1 that means that whether we add it to the end or the start of str1 we will always get the same length and the same string
    if ((str1 + str2) !== (str2 + str1)) {
        return ""
    }

    //Let's use the Euclidian Algorithm to find get the common divisor of the length of both string
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b)
    }

    //return the substring start the first index until the common divisor 
    return str1.substring(0, gcd(str1.length, str2.length))

};
// What About time complexity???? What about it? Hein? What about it? Leave me alone

//Time? O(n) we only compute the GCD of the lenghts of str1 and str2 once which takes O(log n) time

//Space? O(1) We only store a constant number of variables(strings and length) throughout the algorithm 
