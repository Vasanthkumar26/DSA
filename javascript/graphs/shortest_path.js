// Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return the length of the shortest path between A and B.
// Consider the length as the number of edges in the path, not the number of nodes.
// If there is no path between A and B, then return -1.
// You can assume that A and B exist as nodes in the graph.

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];
const edges1 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];
const edges2 = [
  ["c", "n"],
  ["c", "e"],
  ["c", "s"],
  ["c", "w"],
  ["w", "e"],
];
const edges3 = [
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["t", "o"],
  ["r", "q"],
  ["r", "s"],
];

const createAdjacencyList = (graph) => {
  const list = {};
  for (let [start, end] of graph) {
    if (!(start in list)) list[start] = [];
    if (!(end in list)) list[end] = [];
    list[start].push(end);
    list[end].push(start);
  }
  return list;
};

const shortestPath = (graph, str, dts) => {
  let adjacencyList = createAdjacencyList(graph);
  // console.log(adjacencyList);

  let visited = new Set(str);
  let queue = [[str, 0]];

  while (queue.length) {
    const [node, distance] = queue.shift();
    if (node === dts) return distance;

    for (let neighbor of adjacencyList[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

console.log(shortestPath(edges, "w", "z")); // -> 2
console.log(shortestPath(edges, "y", "x")); // -> 1
console.log(shortestPath(edges1, "a", "e")); // -> 3
console.log(shortestPath(edges1, "e", "c")); // -> 2
console.log(shortestPath(edges1, "b", "g")); // -> -1
console.log(shortestPath(edges2, "w", "e")); // -> 1
console.log(shortestPath(edges2, "n", "e")); // -> 2
console.log(shortestPath(edges3, "m", "s")); // -> 6
