// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: string
//R: string
//exples: removeChar('eloquent'), 'loquen' ; removeChar('country'), 'ountr'

//split the string. pop the last one; shift the first one join the final string.
//don't forget .pop() ; .shift() ; unshift() ; push() return the value removed or added. 

function removeChar(str) {
    //You got this!
    str = str.split('')
    str.shift()
    str.pop()
    return str.join("")

};