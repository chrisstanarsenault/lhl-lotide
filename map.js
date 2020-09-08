const map = (array, cb) => {
  results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;
