// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17
// (goals(0,0,0), 0)
//(goals(43, 10, 5), 58)

//Parameters : 3 integers

//Return: a integer

//PseudoCode: add the 3 integers together to get the sum.

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}