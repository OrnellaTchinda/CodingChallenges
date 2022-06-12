// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]


function digitize(n) {
    //code here
    //convert digits to String
    return n.toString()
        //split the string
        .split("")
        //reverse the string
        .reverse()
        //Convert back to digits
        .map(Number)


}

// Longue version

function digitize(n) {
    return n.toString().split("").reverse().map(Number)
}