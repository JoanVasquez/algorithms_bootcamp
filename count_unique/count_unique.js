const countUniqueOne = arr => {
    const unique = [];
    arr.forEach(num => {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    })

    return unique.length;
}

const countUniqueTwo = arr => {
    return new Set([...arr]).size;
}

module.exports = countUniqueTwo;
