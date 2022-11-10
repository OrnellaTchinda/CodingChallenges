// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
    s = s.split('').filter(n => n !== "!").join('')
    return s;
}