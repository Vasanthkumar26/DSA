const shortestPath = (array, src, target) => {
  let queue = [[src, 0]];
  let visited = new Set([src]);
  const graph = convertToGraph(array);
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === target) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  return -1;
};

const convertToGraph = (array) => {
  let graph = {};
  for (let nodes of array) {
    const [a, b] = nodes;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

shortestPath(edges, "w", "z"); // -> 2
shortestPath(edges, "y", "x"); // -> 1

const edges1 = [
  ["a", "c"],
  ["a", "b"],
  ["c", "b"],
  ["c", "d"],
  ["b", "d"],
  ["e", "d"],
  ["g", "f"],
];

shortestPath(edges1, "a", "e"); // -> 3
shortestPath(edges1, "e", "c"); // -> 2
shortestPath(edges1, "b", "g"); // -> -1

const edges2 = [
  ["c", "n"],
  ["c", "e"],
  ["c", "s"],
  ["c", "w"],
  ["w", "e"],
];

shortestPath(edges2, "w", "e"); // -> 1
shortestPath(edges2, "n", "e"); // -> 2

const edges3 = [
  ["m", "n"],
  ["n", "o"],
  ["o", "p"],
  ["p", "q"],
  ["t", "o"],
  ["r", "q"],
  ["r", "s"],
];

shortestPath(edges3, "m", "s"); // -> 6
