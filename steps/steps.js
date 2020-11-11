module.exports = (num) => {
  for (let i = 1; i <= num; i++) {
    let blanks = [...Array(num - i)].map(() => " ");
    let hashes = [...Array(num - (num - i))].map(() => "#");

    console.log([...hashes, ...blanks].join(""));
  }
};
