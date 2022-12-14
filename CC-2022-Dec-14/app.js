// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//P: Array
//R: inverted array
//E:invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
//R: Inverted array

function invert(array) {
    return array.map(x => x * (-1));
}