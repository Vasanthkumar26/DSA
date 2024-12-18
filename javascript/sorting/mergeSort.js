// It's a combination of merging & sorting
// Exploits the fact that array of 0 or 1 element are always sorted
// Works by decomposing an array into smaller array of 0 or 1 elements & building new sorted array

const mergingArrays = (arr1, arr2) => {
  let output = [];
  let i = 0,
    j = 0;
  //   Solution 1
  //   while (arr1.length && arr2.length) {
  //     if (arr1[0] < arr2[0]) {
  //       output.push(arr1[0]);
  //       arr1.splice(0, 1);
  //     } else {
  //       output.push(arr2[0]);
  //       arr2.splice(0, 1);
  //     }
  //   }
  //   while (arr1.length) {
  //     output.push(arr1[0]);
  //     arr1.splice(0, 1);
  //   }
  //   while (arr2.length) {
  //     output.push(arr2[0]);
  //     arr2.splice(0, 1);
  //   }

  // Solution 2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }
  //   console.log(output);
  return output;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, midPoint));
  let rightSide = mergeSort(arr.slice(midPoint));
  console.log(mergingArrays(leftSide, rightSide));
  return mergingArrays(leftSide, rightSide);
};

mergingArrays([1, 3, 5], [2, 4, 6, 7]);
mergingArrays([], [2, 4, 6, 7]);

mergeSort([1, 3, 4, 2, 9, 5]);
mergeSort([8, 1, 2, 3, 4, 5, 6]);
mergeSort([3, 0, 2, 5, -1, 4, 1]);
mergeSort([]);
