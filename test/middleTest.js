const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});
// const assertArrayEqual = require("../assertArrayEqual");

// assertArrayEqual(middle([1, 2, 3]), [2]);
// assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
