// 78. Subsets

console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0])); // [[],[0]]

function subsets(nums) {
  let output = [];
  const bfs = (i, nums, slate) => {
    if (i === nums.length) {
      output.push(slate.slice());
      return;
    }

    // exclude
    bfs(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    bfs(i + 1, nums, slate);
    slate.pop();
  };

  bfs(0, nums, []);
  return output;
}
