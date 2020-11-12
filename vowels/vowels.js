module.exports = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let counter = 0;

    for(let char of str) {
        if(vowels.includes(char)) {
            counter += 1;
        }
    }

    return counter;
}
