// like merge sort, it exploits the fact arrays of 0 or 1 elements are always sorted
// works by selecting one element (named "pivot") and finding the index where the pivot should end up in sorted array

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right);
    //   sorting left side
    quickSort(arr, 0, pivotIndex - 1);
    //   sorting right side
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
};

quickSort([1, 3, 4, 2, 9, 5]);
quickSort([8, 1, 2, 3, 4, 5, 6]);
quickSort([3, 0, 2, 5, -1, 4, 1]);
quickSort([]);
