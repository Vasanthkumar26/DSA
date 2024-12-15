// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
// The function should return the minimum value within the tree.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(treeMinValue(a)); // -> -2

const a1 = new Node(5);
const b1 = new Node(11);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(14);
const f1 = new Node(12);
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
console.log(treeMinValue(a1)); // -> 3

const a2 = new Node(-1);
const b2 = new Node(-6);
const c2 = new Node(-5);
const d2 = new Node(-3);
const e2 = new Node(-4);
const f2 = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g;
f2.right = h;
console.log(treeMinValue(a2)); // -> 13

const a3 = new Node(42);
console.log(treeMinValue(a3)); // -> 42

// function treeMinValue(root) {
//   let output = Infinity;
//   let queue = [root];
//   while (queue.length) {
//     let current = queue.shift();
//     output = Math.min(output, current.val);
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return output;
// }

function treeMinValue(root) {
  if (root === null) return Infinity;
  return Math.min(root.val, treeMinValue(root.left), treeMinValue(root.right));
}
