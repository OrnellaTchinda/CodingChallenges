// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//Example: (["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 

//Parmeters: 1 array of strings
//Return: string
//PseudoCode: Sort the array alphabetically, get the first element of the array, split the string and join with *** between letters

function twoSort(s) {

    let str = s.sort(); //Sort alphabetically
    return str[0].split('').join("***"); //Take the first element of the array, split it and join with 3 stars

}