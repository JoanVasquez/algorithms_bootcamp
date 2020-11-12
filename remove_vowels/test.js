const removeVowels = require('./remove_vowels');

test('Remove Vowels should be defined', () => {
    expect(removeVowels).toBeDefined();
});

test("Should remove vowels from array", () => {
    expect(removeVowels(["computer", "programming", "is", "the", "best"]))
        .toEqual(["cmptr", "prgrmmng", "s", "th", "bst"])

    expect(removeVowels(["we", "are", "practicing", "algorithms"]))
        .toEqual(["w", "r", "prctcng", "lgrthms"])
})
