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
console.log(linkedListFind(a, "c")); // true
console.log(linkedListFind(a, "d")); // true
console.log(linkedListFind(a, "q")); // false

const node1 = new Node("jason");
const node2 = new Node("leneli");
node1.next = node2;
console.log(linkedListFind(node1, "jason")); // true

const node3 = new Node(42);
console.log(linkedListFind(node3, 42)); // true
console.log(linkedListFind(node3, 100)); // false

// function linkedListFind(head, target) {
//   let current = head;
//   while (current) {
//     if (current.val === target) return true;
//     current = current.next;
//   }
//   return false;
// }

function linkedListFind(head, target) {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
}
