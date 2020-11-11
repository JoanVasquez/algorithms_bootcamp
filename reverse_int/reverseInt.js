module.exports = (num) => {
  if (num === 0) {
    return 0;
  }
  const reversedInt = parseInt(num.toString().split("").reverse().join(""));
  return reversedInt * Math.sign(num);
};
