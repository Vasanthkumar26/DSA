const largestComponent = (graph) => {
  let longest = 0;
  let visited = new Set();
  for (let key in graph) {
    let size = checkForLargest(graph, key, visited);
    longest = Math.max(longest, size);
  }
  console.log(longest);
  return longest;
};

const checkForLargest = (graph, key, visited) => {
  if (visited.has(key)) return 0;
  visited.add(key);
  let size = 1;
  for (let neighbor of graph[key]) {
    size += checkForLargest(graph, neighbor, visited);
  }
  return size;
};

largestComponent({
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
}); // -> 4

largestComponent({
  1: ["2"],
  2: ["1", "8"],
  6: ["7"],
  9: ["8"],
  7: ["6", "8"],
  8: ["9", "7", "2"],
}); // -> 6

largestComponent({
  3: [],
  4: ["6"],
  6: ["4", "5", "7", "8"],
  8: ["6"],
  7: ["6"],
  5: ["6"],
  1: ["2"],
  2: ["1"],
}); // -> 5

largestComponent({}); // -> 0

largestComponent({
  0: ["4", "7"],
  1: [],
  2: [],
  3: ["6"],
  4: ["0"],
  6: ["3"],
  7: ["0"],
  8: [],
}); // -> 3
