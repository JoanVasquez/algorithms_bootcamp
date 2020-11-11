/*
Write a program that determine whether two words are anagrams.
*/

const anagramsOne = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    return false;
  }

  const strOneMap = buildMap(strOne);
  const strTwoMap = buildMap(strTwo);

  for (let key in strOneMap) {
    if (strOneMap[key] !== strTwoMap[key]) {
      return false;
    }
  }
  return true;
};

const buildMap = (str) => {
  str = str.toLowerCase();
  const charObj = {};
  for (let char of str) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const anagramsTwo = (strOne, strTwo) => cleanStr(strOne) === cleanStr(strTwo);
const cleanStr = (str) =>
  str.toLowerCase().replace(/[\^w]/g, "").split("").sort().join("");

module.exports = anagramsTwo;
