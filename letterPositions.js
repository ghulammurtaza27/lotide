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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ' && sentence[i] !== ','){
      if(sentence[i]){
        results[sentence[i]] = [];
      }
    }
  }
  for (let k = 0; k < sentence.length; k++) {
    for (let r in results) {
      if (sentence[k] === r) {
        results[sentence[k]].push(k);
      }
    }
  }
  // logic to update results here
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
