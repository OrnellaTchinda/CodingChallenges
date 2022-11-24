// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

const removeConsecutiveDuplicates = s => // your perfect code...
    //string
    //return a string
    //split and filter to remove the duplicates, join

    s.split(" ").filter((w, i, a) => w != a[i - 1]).join(" ")