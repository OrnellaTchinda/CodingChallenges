// The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

// In this kata we will recreate that stunt... sort of.

// You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

// The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

// Return the resulting lamps string. See example tests for more clarity.

//P: 2 strings
//R = 1 string
//E = flyBy('xxxxxx', '====T'), 'ooooox' ; flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx' ; flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'
//P =Split the string into an array ; replace 'x' by 'o' fllowing the drone's length

function flyBy(lamps, drone) {

    let lampsArr = lamps.split('') //split the string to get an array

    for (let i = 0; i < drone.length; i++) {

        if (lampsArr[i] === 'x') {

            lampsArr.splice(i, 1, 'o') // at each index replace 'x' by 'o'

        }
    }

    return lampsArr.join('')//join to make a string
}

//Another solution

function flyBy(lamps, drone) {

    return lamps.split('')
        .map((el, i, arr) => i < drone.length ? 'o' : el)
        .join('')
}

//Another solution
const flyBy = (lamps, drone) => {
    for (letter of drone) {
        if (letter === '=' || letter === 'T')
            lamps = lamps.replace('x', 'o');
    }
    return lamps;
};