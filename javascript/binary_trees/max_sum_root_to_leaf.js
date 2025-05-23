// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.

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
console.log(maxPathSum(a)); // -> 18

const a1 = new Node(5);
const b1 = new Node(11);
const c1 = new Node(54);
const d1 = new Node(20);
const e1 = new Node(15);
const f1 = new Node(1);
const g = new Node(3);
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
e1.left = f1;
e1.right = g;
console.log(maxPathSum(a1)); // -> 59

const a2 = new Node(-1);
const b2 = new Node(-6);
const c2 = new Node(-5);
const d2 = new Node(-3);
const e2 = new Node(0);
const f2 = new Node(-13);
const g2 = new Node(-1);
const h = new Node(-2);
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.right = f2;
e2.left = g2;
f2.right = h;
console.log(maxPathSum(a2)); // -> -8

const a3 = new Node(42);
console.log(maxPathSum(a3)); // -> 42

function maxPathSum(root) {
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;
  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
}
