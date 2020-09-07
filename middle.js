const middle = (arr) => {
  if (arr.length % 2 !== 0) {
    return [arr[Math.ceil(arr.length * 0.5 - 1)]];
  } else {
    return [
      arr[Math.ceil(arr.length * 0.5 - 1)],
      arr[Math.ceil(arr.length * 0.5)],
    ];
  }
};

module.exports = middle;
