const islandCount = (grid) => {
  const visited = new Set();
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (explore(grid, r, c, visited)) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};

const explore = (grid, r, c, visited) => {
  let rowInbounds = r >= 0 && r < grid.length;
  let columnInbounds = c >= 0 && c < grid[0].length;
  if (!rowInbounds || !columnInbounds) return false;
  if (grid[r][c] === "W") return false;

  let position = r + "," + c;
  if (visited.has(position)) return;
  visited.add(position);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

islandCount(grid); // -> 3

const grid1 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

islandCount(grid1); // -> 4

const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

islandCount(grid2); // -> 1

const grid3 = [
  ["W", "W"],
  ["W", "W"],
  ["W", "W"],
];

islandCount(grid3); // -> 0
