//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Parameters: Two arrays
// Examples: Input: l1 = [2,4,3], l2 = [5,6,4]; Output: [7,0,8] ; Explanation: 342 + 465 = 807.
//Exple 2: Input: l1 = [0], l2 = [0] ; Output: [0]
//Exple 3: Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]; Output: [8,9,9,9,0,0,0,1]
//PseudoCode: Reverse the array; join the array; Make sure to return a number ; sum the two numbers you get; turn the sum you got into a string ; split the string and reverse it. Create a new array and push each string turned into a numer into the new array. Finally return the new array.

function addTwoNumbers(l1, l2) {

    //reverse, join and return a numeric
    l1 = Number(l1.reverse().join(''))

    l2 = Number(l2.reverse().join(''))
    //sum both numbers
    let newSum = l1 + l2
    //Turn into a string, split and reverse the sum
    let reverseSum = newSum.toString().split('').reverse()
    // return the sum as an array  
    let numArr = [];
    for (let i = 0; i < reverseSum.length; i++) {
        numArr.push(Number(reverseSum[i]))
    }
    return numArr;
};