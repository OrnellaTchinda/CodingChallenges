// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Graph square with an arc from points in diagonal and le rayon un cote du carre

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {

    let r = (A * 4) / (2 * Math.PI)  //Circumference formula =2*pi*r and those arcs form a circle when 4 of them are added

    return Math.pow(r, 2)
}

function squareArea(A) {
    // Calculate the circumference of A 
    const circumference = A * 4;

    // Calculate the radius of A
    const radius = circumference / (Math.PI * 2);

    // Calculate the area of the square, rounded to 2 decimal places
    const area = Number((radius ** 2).toFixed(2));

    // Return the result
    return area;
}