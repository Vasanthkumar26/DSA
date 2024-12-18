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

function medianOfTwoArrays(arr1, arr2) {
  const mergedArray = mergeSortedArrays(arr1, arr2);
  const totalLength = mergedArray?.length;
  if (totalLength % 2 === 0) {
    return (
      (mergedArray[totalLength / 2] + mergedArray[totalLength / 2 - 1]) / 2
    );
  } else {
    return mergedArray[Math.floor(totalLength / 2)];
  }
}

console.log(medianOfTwoArrays([4, 5], [1, 3]));
