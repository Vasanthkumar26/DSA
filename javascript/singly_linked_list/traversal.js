// Write a function, linkedListValues, that takes in the head of a linked list as an argument.
// The function should return an array containing all values of the nodes in the linked list.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

// A -> B -> C -> D -> NULL
a.next = b;
b.next = c;
c.next = d;

// const printLinkedList = (head) => {
//   let current = head;
//   while (current) {
//     console.log(current.val);
//     current = current.next;
//   }
// };

// using recursion
const printLinkedList = (head) => {
  if (head === null) return;
  console.log(head.val);
  printLinkedList(head.next);
};

printLinkedList(a);
