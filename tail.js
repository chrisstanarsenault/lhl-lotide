const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  return arr.slice(1);
};

// Test Case 2: Check the returned array elements
const result1 = tail([1, 2, 3, 4]);
assertEqual(result1.length, 3);
assertEqual(result1[0], 2);
assertEqual(result1[1], 3);
assertEqual(result1[2], 4);

// Test Case 2
const result2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result2[1], "Labs"); // ensure second element is "Labs"
