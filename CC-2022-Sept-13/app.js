//The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

// Write a function which takes an integer array and returns its Stanton measure.



//Parameters: one array
//Return : an integer
// Examples
// The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

// The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

//Pseudocode: Count the number one 1s in the array; count the number of number of 1s in the array.

function stantonMeasure(a) {

    let counter = 0; //count the number of 1s in the array
    for (arr of a) {
        if (arr === 1) {
            counter++
        }
    }

    let newCounter = 0 //count the number of number of 1s in the array
    for (element of a) {
        if (element === counter) {
            newCounter++
        }
    }

    return newCounter
}

//Different solution
function stantonMeasure(array) {
    const count = array.filter(num => num === 1).length; //number of 1s in the array
    const stanton = array.filter(num => num === count).length; //number of number of 1s in the array

    return stanton;
}