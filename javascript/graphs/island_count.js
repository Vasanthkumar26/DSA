// Write a function, islandCount, that takes in a grid containing Ws and Ls.
// W represents water and L represents land.
// The function should return the number of islands on the grid.
// An island is a vertically or horizontally connected region of land

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
  ["W", "W"],
  ["W", "W"],
];

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;

  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === "W") return false;

  let position = r + "," + c;
  if (visited.has(position)) return false;
  visited.add(position);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

const islandCount = (islandGrid) => {
  let count = 0;
  let visited = new Set();

  for (let i = 0; i < islandGrid.length; i += 1) {
    for (let j = 0; j < islandGrid[0].length; j += 1) {
      if (explore(islandGrid, i, j, visited)) {
        count += 1;
      }
    }
  }

  return count;
};

console.log(islandCount(grid)); // -> 3
console.log(islandCount(grid1)); // -> 4
console.log(islandCount(grid2)); // -> 1
console.log(islandCount(grid3)); // -> 0
