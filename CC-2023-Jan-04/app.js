//Sort an array

function quicksort(arr) {
    let i = -1;
    let p = arr[arr.length - 1];

    for (let j = 0; j < arr.length - 2; j++) {
        if (arr[j] < p || arr[j] === p) {
            i = i + 1;
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }

    }

    arr.splice(i + 1, 0, p);
    arr.pop();
    return arr;
}

