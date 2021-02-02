const flatten = function(input) {
  const result = [];
  for (let item of input) {
    if (Array.isArray(item)) {
      for (let i of item) {
        result.push(i);
      }
    }
    else {
      result.push(item);
    }
  }
  console.log(result);
  return result;
}

flatten([1, 2, [3, 4], 5, [6]]) 