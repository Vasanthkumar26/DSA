const minimumIsland = (grid) => {
  let visited = new Set();
  let minSize = Infinity;

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let size = countIslandSize(grid, r, c, visited);
      if (size < minSize && size !== 0) {
        minSize = size;
      }
    }
  }

  console.log(minSize);
  return minSize;
};

const countIslandSize = (grid, r, c, visited) => {
  const rowInbounds = r >= 0 && r < grid.length;
  const columnInbounds = c >= 0 && c < grid[0].length;
  if (!rowInbounds || !columnInbounds) return 0;

  if (grid[r][c] === "W") return 0;

  let position = r + "," + c;
  if (visited.has(position)) return 0;
  visited.add(position);

  let size = 1;
  size += countIslandSize(grid, r - 1, c, visited);
  size += countIslandSize(grid, r + 1, c, visited);
  size += countIslandSize(grid, r, c - 1, visited);
  size += countIslandSize(grid, r, c + 1, visited);

  return size;
};

const grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];

minimumIsland(grid); // -> 2

const grid1 = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

minimumIsland(grid1); // -> 1

const grid2 = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];

minimumIsland(grid2); // -> 9

const grid3 = [
  ["W", "W"],
  ["L", "L"],
  ["W", "W"],
  ["W", "L"],
];

minimumIsland(grid3); // -> 1
