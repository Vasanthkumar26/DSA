// Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
// The function should return the total sum of all values in the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(sumList(a)); // 19

const x = new Node(38);
const y = new Node(4);
x.next = y;
console.log(sumList(x)); // 42

const z = new Node(100);
console.log(sumList(z)); // 100

console.log(sumList(null)); // 0

// function sumList(head) {
//   let output = 0;
//   if (head === null) return output;
//   let current = head;
//   while (current) {
//     output += parseInt(current.val);
//     current = current.next;
//   }
//   return output;
// }

function sumList(head) {
  if (head === null) return 0;
  return head.val + sumList(head.next);
}
