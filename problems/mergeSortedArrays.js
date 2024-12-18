// Two pointer method
// Time complexity - O(n)
// O(1) - Not possible
function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0,
    mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1, 2, 3], [1, 4]));
