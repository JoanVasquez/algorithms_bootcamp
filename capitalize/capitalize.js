const capitalizeOne = (str) => {
  const tmpStr = str.split(" ");
  let result = [];

  tmpStr.forEach((text) => {
    text = text[0].toUpperCase() + text.slice(1);
    result.push(text);
  });

  return result.join(" ");
};

const capitalizeTwo = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
};

module.exports = capitalizeTwo;
