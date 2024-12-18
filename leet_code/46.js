// 46. Permutations

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [1]

function permute(nums) {
    let result = [];
    const helperFunction = (path, remaining) => {
        if (remaining.length === 0) {
            result.push(path.slice());
            return
        }
        for (let i = 0; i < remaining.length; i++) {
            path.push(remaining[i])
            helperFunction(path, remaining.slice(0, i).concat(remaining.slice(i + 1)))
            path.pop()
        }
    }
    helperFunction([], nums);
    return result
};