// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.

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
console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

const x = new Node("x");
const y = new Node("y");
x.next = y;
console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

const q = new Node("q");

console.log(linkedListValues(q)); // -> [ 'q' ]
console.log(linkedListValues(null)); // -> [ ]

// function linkedListValues(head) {
//   let output = [];
//   if (head === null) return output;
//   let current = head;
//   while (current) {
//     output.push(current.val);
//     current = current.next;
//   }
//   return output;
// }

function helperFunction(head, output) {
  if (head === null) return output;
  output.push(head.val);
  return helperFunction(head.next, output);
}

function linkedListValues(head) {
  let output = [];
  if (head === null) return output;
  return helperFunction(head, output);
}
