// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//What to do: 
//Return an array ; first value of the array: return count of positive numbers ; second value: return sum of negative numbers
// if array is empty or null return [].
function countPositivesSumNegatives(input) {
    //if array is empty or null return []
    if (input === null || input.length < 1) {
        return [];
    }

    //let's establish our final array
    var array = [0, 0];

    //As long as the index is less than the length of the array because array[i]<arr.length or arr[i] = arr.length - 1
    for (var i = 0; i < input.length; i++) {
        //if the element of the array is less than 0
        if (input[i] <= 0) {
            //Add to the elements that are less than 0 togethet AND add the value in the second index of our final array
            array[1] += input[i];
        } else { //if the element of the array is > 0

            array[0] += 1; //Count ++ the elements AND add the result to the first element of the final array
        }
    }
    return array;
}