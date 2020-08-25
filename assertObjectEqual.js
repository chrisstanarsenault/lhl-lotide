const eqObjects = (actual, expected) => {
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    return false;
  } else {
    for (item of Object.keys(actual)) {
      if (Array.isArray(actual[item]) && Array.isArray(expected[item])) {
        return eqArrays(actual[item], expected[item]);
      } else {
        if (actual[item] !== expected[item]) {
          return false;
        }
      }
    }
    return true;
  }
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  console.log(`example: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

assertObjectsEqual(
  { a: "a", b: "b", c: "c" },
  { a: "a", b: "b", c: "c", d: "d" }
);
