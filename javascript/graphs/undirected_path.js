// Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
// The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

const edges1 = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

const edges2 = [
  ["s", "r"],
  ["t", "q"],
  ["q", "r"],
];

const createAdjacencyList = (edges) => {
  let list = {};
  edges.map(([start, end]) => {
    if (!(start in list)) {
      list[start] = [];
    }
    if (!(end in list)) {
      list[end] = [];
    }
    list[start].push(end);
    list[end].push(start);
  });
  return list;
};

const hasPath = (graph, src, dst, hasVisited) => {
  if (src === dst) return true;

  if (hasVisited.has(src)) return false;
  hasVisited.add(src);

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst, hasVisited)) return true;
  }

  return false;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const list = createAdjacencyList(edges);
  const hasVisited = new Set();
  return hasPath(list, nodeA, nodeB, hasVisited);
};

console.log(undirectedPath(edges, "j", "m")); // true
console.log(undirectedPath(edges, "m", "j")); // true
console.log(undirectedPath(edges, "l", "j")); // true
console.log(undirectedPath(edges, "k", "o")); // false
console.log(undirectedPath(edges, "i", "o")); // false
console.log(undirectedPath(edges1, "a", "b")); // true
console.log(undirectedPath(edges1, "a", "c")); // true
console.log(undirectedPath(edges1, "r", "t")); // true
console.log(undirectedPath(edges1, "r", "b")); // false
console.log(undirectedPath(edges2, "r", "t")); // true
