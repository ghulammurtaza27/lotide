const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const middle = function(inputArr) {
  const result = [];
  if(inputArr.length % 2 === 0) {
    result.push(inputArr[inputArr.length / 2 - 1]);
    result.push(inputArr[inputArr.length / 2]);
  }
  if(inputArr.length % 2 === 1) {
    result.push(inputArr[(inputArr.length -1) / 2 ]);
  }
  console.log(result);
  return result;
}

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]