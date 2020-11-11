module.exports = (num) => {
  if (num < 0) {
    return false;
  }
  const reversedInt = parseInt(num.toString().split("").reverse().join(""));
  return num === reversedInt;
};
