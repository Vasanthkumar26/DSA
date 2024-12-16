// 90. Subsets II

console.log(subsetsWithDup([1, 2, 2])); // [[],[1],[1,2],[1,2,2],[2],[2,2]]
console.log(subsetsWithDup([0])); // [[],[0]]

function subsetsWithDup(nums) {
  let result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }
    // exclude
    dfs(i + 1, nums, slate);
    // include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);

  const hash = {};
  for (let key of result) {
    if (!(key in hash)) {
      hash[key] = key;
    }
  }

  return Object.values(hash);
}
