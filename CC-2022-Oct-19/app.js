// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

// Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
// Note: Math.pow and some other Math functions like eval() and ** are disabled.

//P:2 integers
//R: an integer
//E: // Examples
// numberToPower(3,2)  // -> 9 ( = 3 * 3 )
// numberToPower(2,3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10,6) // -> 1000000
//P: We cannot use the Math.pow so first I will create an array with the list of numbers, power amount of times with the for loop
//use the reduce method to multiply all the elements of the array with 1 as the starting value

function numberToPower(number, power) {
    console.info(Math.log2(1024));
    // Code here
    let arr = []
    for (let i = 1; i <= power; i++) {
        arr.push(number);
    }

    if (power === 0) {
        return 1
    } else {
        return arr.reduce((a, b) => a * b, 1)
    }

}

function numberToPower(number, power) {
    let total = 1;
    for (let i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}