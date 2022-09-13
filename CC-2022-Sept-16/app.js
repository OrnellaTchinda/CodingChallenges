//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//P: 3 integers
//R: true or false
//E: (isTriangle(1,2,2), true) ; (isTriangle(7,2,2), false)
//P: The mathematical formula is : To know if you have a triangle, the sum of the length two side should be superior to the third side length. If this formula is correct, return true if not return false

function isTriangle(a, b, c) {

    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true;
    } else {
        return false;
    }

}