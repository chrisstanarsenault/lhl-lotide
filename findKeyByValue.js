const findKeyByValue = (object, value) => {
  for (item in object) {
    if (object[item] === value) {
      return item;
    }
  }
};

module.exports = findKeyByValue;
