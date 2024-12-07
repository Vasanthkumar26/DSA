// Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
// The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const graph1 = {
  v: ["x", "w"],
  w: [],
  x: [],
  y: ["z"],
  z: [],
};

// const hasPath = (graph, src, dst) => {
//   let source = [src];
//   let visited = new Set();
//   while (source.length) {
//     const node = source.pop();
//     for (let neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         source.push(neighbor);
//       }
//       visited.add(neighbor);
//       if (neighbor === dst) return true;
//     }
//   }
//   return false;
// };

// const hasPath = (graph, src, dst) => {
//   if (src === dst) return true;
//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst)) return true;
//   }
//   return false;
// };

const hasPath = (graph, src, dst) => {
  const queue = [src];
  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
};

console.log(hasPath(graph, "f", "k")); // true
console.log(hasPath(graph, "f", "j")); // false
console.log(hasPath(graph, "i", "h")); // true
console.log(hasPath(graph1, "v", "w")); // true
console.log(hasPath(graph1, "v", "z")); // false
