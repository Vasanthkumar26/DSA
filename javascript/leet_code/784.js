// 784. Letter Case Permutation

function helperFunction(visited, notvisited, output) {
  if (notvisited === "") {
    output.push(visited);
    return;
  }
  if (isNaN(notvisited[0])) {
    helperFunction(
      visited + notvisited[0].toLowerCase(),
      notvisited.slice(1),
      output
    );
    helperFunction(
      visited + notvisited[0].toUpperCase(),
      notvisited.slice(1),
      output
    );
  } else {
    helperFunction(visited + notvisited[0], notvisited.slice(1), output);
  }
}

var letterCasePermutation = function (s) {
  let output = [];
  helperFunction("", s, output);
  return output;
};

console.log(letterCasePermutation("a1b2")) // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation("3z4")) // ["3z4","3Z4"]
console.log(letterCasePermutation("12345")) // ["12345"]