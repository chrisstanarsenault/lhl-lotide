const without = (source, itemsToRemove) => {
  let newArr = source.filter((item) => !itemsToRemove.includes(item));
  return newArr;
};

module.exports = without;
