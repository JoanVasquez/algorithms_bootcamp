module.exports = (str) => {
  const strMap = buildMap(str);
  let counter = 0;
  let mostRepeatedChar = "";

  for (let key in strMap) {
    if (counter < strMap[key]) {
      counter = strMap[key];
      mostRepeatedChar = key;
    }
  }
  return mostRepeatedChar;
};

const buildMap = (str) => {
  const strObj = {};
  for (let char of str) {
    strObj[char] = strObj[char] + 1 || 1;
  }
  return strObj;
};
