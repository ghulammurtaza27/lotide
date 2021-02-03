const countLetters = function(input) {
  const results = {};
  for (let i of input) {
    if (i !== ' '){
      if(results[i]){
        results[i] += 1;
      }
      else {
        results[i] = 1;
      }
    }
  }
  console.log(results);
}


countLetters('hello baby');