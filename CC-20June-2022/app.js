// Suzuki has a long list of chores required to keep the monastery in good order. Each chore can be completed independent of the others and assigned to any student. He needs to assign two chores to each student in a way which minimizes the total duration of the day's work. There will always be an even number of chores and enough students to complete them.

// You will be given an array containing the estimated duration of each chore such as:

// 10 ≤ chores length ≤ 30

// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

// Return an array with each students work duration in ascending order such that the last element represents the total duration of the day's work. Each integer in the return array is the sum of each students two assigned chores.

// chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]

// Chore 1 = 2hrs
// Chore 2 = 9hrs

// 2 + 9 = 11 hours duration

// return [7, 8, 8, 10, 10, 11]

//Params: 1 array
//Returns: returns an array with the sum of each students two assigned chores.
//Example: var s1 =  const TESTS =[[[5, 2, 1, 6, 4, 4],[7, 7, 8]],
//[[1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9],[7, 8, 8, 10, 10, 11]],
//[[5, 8, 3, 5, 3, 10, 5, 3, 10, 2, 4, 8, 7, 3, 9, 6],[10, 11, 11, 11, 11, 12, 12, 13]],
//[[9, 2, 10, 10, 5, 5, 8, 7, 4, 2, 8, 3, 6, 8, 7, 3, 6, 2],[11, 11, 11, 12, 12, 12, 12, 12, 12]],
//[[1, 6, 5, 5, 1, 10, 10, 9, 2, 10, 3, 9, 5, 4, 5, 6, 1, 9, 1, 8],[10, 10, 11, 11, 11, 11, 11, 11, 12, 12]];
//Pseudocode: sort the elements in ascending order; add the first element to the last element; push the result into a new array; sort the new array in an ascending order

function choreAssignment(chores) {
    let theChores = []; //Create a new array for the results
    chores.sort((a, b) => (a - b)); //Sort the first array in an ascending order
    while (chores.length) {
        theChores.push((chores.shift()) + (chores.pop())) //push into the new array the first and last element of the chores' array

        return theChores.sort((a, b) => (a - b)) //return the new array in an ascending order
    }

}

