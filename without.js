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

const without = (source, itemsToRemove) => {
  let newArr = source.filter((item) => !itemsToRemove.includes(item));
  console.log(newArr);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
