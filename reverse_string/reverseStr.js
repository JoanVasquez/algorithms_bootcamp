const reverseStrOne = (str) => {
  let reversedStr = "";
  for (let char of str) {
    reversedStr = char + reversedStr;
  }
  return reversedStr;
};

const reverseStrTwo = (str) => str.split("").reverse().join("");

module.exports = {
  reverseStrOne,
  reverseStrTwo,
};
