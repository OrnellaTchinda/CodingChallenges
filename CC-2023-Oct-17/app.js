
function fizzBuzz(num) {
    //loop 1 to num
    for (let i = 1; i <= num; i++) {
        //conditional
        //if num%3 && num%5 --- 0 -> fizzbuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
    //if num%3 ->fizz
    //if num%5 -> buzz

    //log num
}

fizzBuzz(5)
fizzBuzz(9)
fizzBuzz(15)