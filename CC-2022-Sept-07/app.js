//Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

// Task
// Create a function that takes in a list of button inputs and returns the final state.

//Parameters : one array
//Return : Like Dislike or Nothing

//exemples: likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

//Pseudocode:
//if the last two elements of the array are the same, return "Nothing"
//if the last two elements of the array are the different, return the last element
//if the last there is only element, return the element

function likeOrDislike(buttons) { //Not working don't know why yet
    let i = 0;
    if ((buttons.length) === 1) {
        return buttons[i];
    } else if ((buttons[buttons.length - 1]) === (buttons[buttons.length - 2])) {
        return "Nothing"
    } else if ((buttons[buttons.length - 1]) !== (buttons[buttons.length - 2])) {
        return (buttons[buttons.length - 1])
    }

}  //Not working don't know why yet

function likeOrDislike(buttons) {
    return buttons.reduce((p, c) => c == p ? Nothing : c, Nothing)

}