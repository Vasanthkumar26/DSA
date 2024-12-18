// In this method for each cycle high value is pushed towards the last
// Link : https://visualgo.net/en/sorting

function bubbleSort(arr) {
  let noSwaps;
  //   Solution 1
  //   for (let i = arr.length; i > 0; i--) {
  //     noSwaps = true;
  //     for (let j = 0; j < i - 1; j++) {
  //       if (arr[j] > arr[j + 1]) {
  //         let temp = arr[j + 1];
  //         arr[j + 1] = arr[j];
  //         arr[j] = temp;
  //         noSwaps = false;
  //       }
  //     }
  //     if (noSwaps) break;
  //   }

  //   Solution 2
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  console.log(arr);
  return arr;

  //   Solution 3
  //   let len = arr.length;
  //   let swapped;
  //   do {
  //     swapped = false;
  //     for (let i = 0; i < len - 1; i++) {
  //       if (arr[i] > arr[i + 1]) {
  //         let temp = arr[i];
  //         arr[i] = arr[i + 1];
  //         arr[i + 1] = temp;
  //         swapped = true;
  //       }
  //     }
  //   } while (swapped);
  //   return arr;
}

bubbleSort([1, 3, 4, 2, 9, 5]);
bubbleSort([8, 1, 2, 3, 4, 5, 6]);
bubbleSort([3, 0, 2, 5, -1, 4, 1]);
bubbleSort([]);
