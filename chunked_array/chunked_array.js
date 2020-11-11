/*

*/

const chunkedArrayOne = (arr, target) => {
  const chunked = [];

  arr.forEach((item) => {
    const lastChunked = chunked[chunked.length - 1];
    if (!lastChunked || lastChunked.length === target) {
      chunked.push([item]);
    } else {
      lastChunked.push(item);
    }
  });
  return chunked;
};

const chunkedArrayTwo = (arr, target) => {
  const chunked = [];
  arr.forEach((item, index) => {
    if (index === 0 || index % target === 0) {
      chunked.push([]);
    }
    chunked[chunked.length - 1].push(item);
  });
  return chunked;
};

const chunkedArrayThree = (arr, target) => {
  const chunked = [];
  while (arr.length > 0) {
    chunked.push(arr.splice(0, target));
  }
  return chunked;
};

module.exports = chunkedArrayThree;
