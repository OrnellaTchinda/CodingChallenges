// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.



//Example: highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"

//Parmeters: a string of number
//Return: a string
//PseudoCode: split thr string; Convert the string elements to integers, Sort integers in ascending orders, get the first and last element return the first and last element which will be the highest and the lowest

function highAndLow(numbers) {
    // ...
    let splited = numbers.split(" ") //split the string

    let sortedMap = splited.map(x => parseInt(x)) //convert string element to integers

    let sorted = sortedMap.sort(function (a, b) { return a - b }); //sort integers in ascending order

    let end = sorted[0]; //Get the first element

    let first = sorted[sorted.length - 1] //Get the last element

    return (`${first} ${end}`)

}