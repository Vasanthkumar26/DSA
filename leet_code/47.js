// 47. Permutations II
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

function permuteUnique(nums) {
  let result = [];
  const helperFunction = (path, remaining) => {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      path.push(remaining[i]);
      helperFunction(
        path,
        remaining.slice(0, i).concat(remaining.slice(i + 1))
      );
      path.pop();
    }
  };
  helperFunction([], nums);

  let hash = {};
  for (let val of result) {
    if (!(val in hash)) {
      hash[val] = val;
    }
  }

  return Object.values(hash);
}
