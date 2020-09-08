const findKey = (object, callback) => {
  for (let person in object) {
    if (callback(object[person])) {
      return person;
    }
  }
  return undefined;
};

module.exports = findKey;
