const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// const depthFirstPrint = (graph, source) => {
//   const stack = [source];
//   while (stack.length) {
//     const current = stack.pop();
//     console.log(current);
//     if (graph[current].length) {
//       for (let node of graph[current]) {
//         stack.push(node);
//       }
//     }
//   }
// };

const depthFirstPrint = (graph, source) => {
  console.log(source);
  for (let neighbor of graph[source]) {
    depthFirstPrint(graph, neighbor);
  }
};

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length) {
    const current = queue.shift();
    console.log(current);
    if (graph[current].length) {
      for (let node of graph[current]) {
        queue.push(node);
        // depthFirstPrint(graph, node);
      }
    }
  }
};

depthFirstPrint(graph, "a"); // abdfce
console.log("*******************************");
breadthFirstPrint(graph, "a"); //acbedf
