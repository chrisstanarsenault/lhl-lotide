const words = ["ground", "control", "to", "major", "tom"];

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

const map = (array, cb) => {
  results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[0] + word[0]);
const results3 = map([1, 2, 3, 4], (num) => num * 2);
assertArrayEqual(results1, ["g", "c", "t", "m", "t"]);
assertArrayEqual(results2, ["gg", "cc", "tt", "mm", "tt"]);
assertArrayEqual(results3, [2, 4, 6, 8]);
