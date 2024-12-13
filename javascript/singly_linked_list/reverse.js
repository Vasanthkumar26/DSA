// Write a function, reverseList, that takes in the head of a linked list as an argument.
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

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
const e = new Node("e");
const f = new Node("f");
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(reverseList(a)); // f -> e -> d -> c -> b -> a

const x = new Node("x");
const y = new Node("y");
x.next = y;
console.log(reverseList(x)); // y -> x

const p = new Node("p");
console.log(reverseList(p)); // p

// function reverseList(head) {
//   let prev = null;
//   let current = head;
//   while (current) {
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }
//   console.log(prev);
//   return prev;
// }

function reverseList(head, prev = null) {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
}
