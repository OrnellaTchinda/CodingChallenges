// 541. Reverse String II

// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.



// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"


// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

var reverseStr = function (s, k) {

    const len = s.length;
    const sArr = s.split('');
    let i = 0;
    let res = "";

    while (i < len) {
        res += sArr.splice(i, i + k).reverse().join('');
        i += k;
        res += sArr.splce(i, i + k).join('')
        i += k;
    }

    return res;

};