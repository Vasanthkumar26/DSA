class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
console.log(getNodeValue(a, 2)); // 'c'
console.log(getNodeValue(a, 3)); // 'd'
console.log(getNodeValue(a, 7)); // null

const node1 = new Node("banana");
const node2 = new Node("mango");
node1.next = node2;
console.log(getNodeValue(node1, 0)); // 'banana'
console.log(getNodeValue(node1, 1)); // 'mango'

// function getNodeValue(graph, position) {
//   if (position < 0) return null;
//   let index = 0;
//   let current = graph;
//   while (current) {
//     if (position === index) return current.val;
//     index++;
//     current = current.next;
//   }
//   return null;
// }

function getNodeValue(head, position) {
  if (head === null) return null;
  if (position === 0) return head.val;
  return getNodeValue(head.next, position - 1);
}
