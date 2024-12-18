// check each index and replace the highest value with the lowest value of that array
// In this method min values are pushed towards the front
// Link : https://visualgo.net/en/sorting

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  console.log(arr);
  return arr;
};

selectionSort([1, 3, 4, 2, 9, 5]);
selectionSort([8, 1, 2, 3, 4, 5, 6]);
selectionSort([3, 0, 2, 5, -1, 4, 1]);
selectionSort([]);
