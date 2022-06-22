// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

//Parameters: one array
//Examples : (sumOfDifferences([1, 2, 10]), 9) ; ([-3, -2, -1]), 2)
//PseudoCode : if arr.length === 0 or arr.length ===1 return 0 ; rearrange the array in descending order ; New array with the difference between the elements ; return the sum of the difference

function sumOfDifferences(arr) {

    //if arr.length === 0 or arr.length ===1 return 0
    if ((arr.length === 0) || arr.length === 1) {
        return 0
    }

    //rearrange the array in descending order
    arr.sort((a, b) => b - a)

    //New array with the difference between the elements
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] - arr[i - 1])
    }

    //return the sum of the difference
    return (Math.abs(newArr.reduce((a, b) => a + b, 0)))
}