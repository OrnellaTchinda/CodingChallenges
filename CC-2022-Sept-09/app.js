//Given the triangle of consecutive odd numbers:

//                  1
//              3     5
//          7     9    11
//      13    15    17    19
//   21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//Parameters: integer which is the number of the row

//Return: integer which is the sum of the odd numbers of the nth row

//Example: (rowSumOddNumbers(1), 1);
//(rowSumOddNumbers(42), 74088);

//PseudoCode: Use the arithmetic formula to get the sum of consecutive odd numbers on the nth row which is n*n2(n au carré)

function rowSumOddNumbers(n) {
    // TODO
    return (n * Math.pow(n, 2))
}