function largestMedian(nums, k) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let left = 0,
    right = nums.length - k,
    mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + k]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums.slice(left, left + k).reduce((acc, curr) => acc + curr, 0) / k;
}

// Example usage:
const nums = [4, 2, 5, 6, 7];
const k = 3;
console.log(largestMedian(nums, k)); // Output: 6 (Median of subarray [5, 6, 7])
