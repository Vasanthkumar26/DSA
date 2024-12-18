// One of the most famous & widely used algorithm
// Find shortest paht between two vertices on a graph

// Uses
// GPS - Finding fastest route
// Network Routing - Finds open shortest path for data
// Biology - Used to model the spread of viruses ammong humans
// Airline tickets - Finding cheapest route to your destination

// Weighed Graph
class WeightedGraph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) this.adjacentList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacentList[vertex1].push({ node: vertex2, weight });
    this.adjacentList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;

    // Build up initial state
    for (let vertex in this.adjacentList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue();
    }
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");
