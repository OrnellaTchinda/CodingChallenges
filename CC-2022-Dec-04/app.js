// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseStr(str) {
    let newStr = [];
    let splitedStr = str.split('');
    for (let i = splitedStr.length - 1; i > 0; i--) {
        newStr.push([splitedStr[i]]);
    }

    return newStr.join('');
}

function reverseStr(str) {
    let newStr = "";

    for (let char of newStr) {
        newStr = char + newStr;
    }
    return newStr;
}