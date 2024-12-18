// Similar to bubble sort
// takes each element and places in sorted portion
// builds up the sort by gradually creating a larger left half which is always sorted
// Link : https://visualgo.net/en/sorting

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  console.log(arr);
  return arr;
}

insertionSort([1, 3, 4, 2, 9, 5]);
insertionSort([8, 1, 2, 3, 4, 5, 6]);
insertionSort([3, 0, 2, 5, -1, 4, 1]);
insertionSort([]);
