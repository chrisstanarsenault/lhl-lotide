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

const flatten = (arr) => {
  let flattenedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattenedArr.push(arr[i][j]);
      }
    } else {
      flattenedArr.push(arr[i]);
    }
  }
  return flattenedArr;
};

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArrayEqual(flatten([[4, 7, 1], 2, [9, 0]]), [4, 7, 1, 2, 9, 0]);
assertArrayEqual(flatten([[4, 7, 1], 2, [9, 0]]), [4, 7, 1, 3, 9, 0]);
