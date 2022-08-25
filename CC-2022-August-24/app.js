// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)



// Examples:

// "john McClane" --> "McClane john"


//Parameters: 1 string

//Return: the string reverse

//Example: 
//('john McClane'),'McClane john')
//('Mary jeggins'),'jeggins Mary')
//('tom jerry'),'jerry tom')

//PseudoCode: split the string at the space to get an array, reverse the array and join the elements with a space between them. 

function nameShuffler(str) {
    //Shuffle It
    return str.split(' ').reverse().join(" ");
}