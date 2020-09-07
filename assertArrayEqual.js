const eqArrays = require("./eqArrays");

const assertArrayEqual = (arrA, arrB) => {
  if (eqArrays(arrA, arrB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrA} === ${arrB}`);
  }
};

module.exports = assertArrayEqual;
