const takeUntil = (array, callback) => {
  result = [];
  for (item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;
