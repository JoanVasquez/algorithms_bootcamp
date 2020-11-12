const removeVowelsOne = arr => {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (vowels.includes(arr[i].toLowerCase().charAt(j))) {
                arr[i] = arr[i].replace(arr[i].charAt(j), "");
            }
        }
    }
    return arr;
}

const removeVowelsTwo = arr => arr.map(word => word.replace(/[aeiouAEIOU]/g, ""));

module.exports = removeVowelsTwo;
