const eqArrays = (arrA, arrB) => {
  if (arrA.length !== arrB.length) {
    return false;
  } else {
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArrayEqual = (arrA, arrB) => {
  if (eqArrays(arrA, arrB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrA} === ${arrB}`);
  }
};

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
assertArrayEqual(results1, [1, 2, 5, 7, 2]);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);
