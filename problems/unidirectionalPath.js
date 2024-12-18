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

const unidirectionalPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, starting, destination, visited) => {
  if (starting === destination) return true;
  if (visited.has(starting)) return false;
  visited.add(starting);
  for (let place of graph[starting]) {
    if (hasPath(graph, place, destination, visited) === true) {
      return true;
    }
  }
  return false;
};

const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [start, end] = edge;
    if (!(start in graph)) graph[start] = [];
    if (!(end in graph)) graph[end] = [];
    graph[start].push(end);
    graph[end].push(start);
  }
  return graph;
};

console.log(unidirectionalPath(edges, "j", "m")); //true
console.log(unidirectionalPath(edges, "j", "o")); //false
console.log(unidirectionalPath(edges, "m", "j")); //true
console.log(unidirectionalPath(edges, "l", "j")); //true
console.log(unidirectionalPath(edges, "k", "o")); //false
console.log(unidirectionalPath(edges, "i", "o")); //false
console.log(unidirectionalPath(edges1, "a", "b")); //true
console.log(unidirectionalPath(edges1, "a", "c")); //true
console.log(unidirectionalPath(edges1, "r", "t")); //true
console.log(unidirectionalPath(edges1, "r", "b")); //false
console.log(unidirectionalPath(edges2, "r", "t")); //true
