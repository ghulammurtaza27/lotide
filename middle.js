
const middle = function(inputArr) {
  const result = [];
  if(inputArr.length % 2 === 0) {
    result.push(inputArr[inputArr.length / 2 - 1]);
    result.push(inputArr[inputArr.length / 2]);
  }
  if(inputArr.length % 2 === 1) {
    result.push(inputArr[(inputArr.length -1) / 2 ]);
  }
  return result;
}

module.exports = middle;

