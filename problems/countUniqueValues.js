function countUniqueValues(array) {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!outputArray.includes(array[i])) {
      outputArray.push(array[i]);
    }
  }
  return outputArray.length;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
