// In this method we will not compare the values
// It exploits the fact that information about the size of number is encoded in number of digits
// More digits mean bigger number

// Cons : Below code will not work proper when we have both positive and negative numbers

const getDigit = (number, position) => {
  return Math.floor(Math.abs(number) / Math.pow(10, position)) % 10;
  //   return Math.floor(Math.abs(number) / 10 ** position) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  //   console.log(maxDigits);
  return maxDigits;
};

const radixSort = (arr) => {
  let maxDigit = mostDigits(arr);
  for (let i = 0; i < maxDigit; i++) {
    let digitBucket = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      let indexValue = getDigit(num, i);
      digitBucket[indexValue].push(num);
    }
    arr = [].concat(...digitBucket);
  }
  console.log(arr);
  return arr;
};

getDigit(12345, 0);
getDigit(12345, 1);
getDigit(12345, 2);
getDigit(12345, 3);
getDigit(12345, 4);
getDigit(12345, 5);
digitCount();
digitCount(3);
digitCount(1034);
mostDigits([123, 8987812, 344, 632432]);
radixSort([1, 3, 4, 2, 9, 5]);
radixSort([8, 1, 2, 3, 4, 5, 6]);
radixSort([3, 0, 2, 5, -1, 4, 1]);
radixSort([]);
