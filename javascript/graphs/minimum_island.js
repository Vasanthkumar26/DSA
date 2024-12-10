// Write a function, minimumIsland, that takes in a grid containing Ws and Ls.
// W represents water and L represents land.
// The function should return the size of the smallest island.
// An island is a vertically or horizontally connected region of land.

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

const grid1 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

const grid3 = [
  ["W", "W"],
  ["L", "L"],
  ["W", "W"],
  ["W", "L"],
];

const helperFunction = (grid, r, c, visited) => {
  let rowWithinRange = r >= 0 && r < grid.length;
  let colWithinRange = c >= 0 && c < grid[0].length;
  if (!rowWithinRange || !colWithinRange) return 0;

  if (grid[r][c] === "W") return 0;

  let path = r + "," + c;
  if (visited.has(path)) return 0;
  visited.add(path);

  let size = 1;
  size += helperFunction(grid, r - 1, c, visited);
  size += helperFunction(grid, r + 1, c, visited);
  size += helperFunction(grid, r, c - 1, visited);
  size += helperFunction(grid, r, c + 1, visited);
  return size;
};

const minimumIsland = (grid) => {
  let minSizeCount = Infinity;
  const visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let islandSize = helperFunction(grid, i, j, visited);
      // minSizeCount = Math.min(minSizeCount, islandSize);
      if (islandSize < minSizeCount && islandSize > 0) {
        minSizeCount = islandSize;
      }
    }
  }

  return minSizeCount;
};

console.log(minimumIsland(grid)); // -> 2
console.log(minimumIsland(grid1)); // -> 1
console.log(minimumIsland(grid2)); // -> 9
console.log(minimumIsland(grid3)); // -> 1
