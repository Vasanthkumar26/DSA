// Write a function, treeSum, that takes in the root of a binary tree that contains number values.
// The function should return the total sum of all values in the tree.

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
console.log(treeSum(a)); // -> 21

const a1 = new Node(1);
const b1 = new Node(6);
const c1 = new Node(0);
const d1 = new Node(3);
const e1 = new Node(-6);
const f1 = new Node(2);
const g = new Node(2);
const h = new Node(2);
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g;
f1.right = h;
console.log(treeSum(a1)); // -> 10

console.log(treeSum(null)); // -> 0

// function treeSum(root) {
//   let result = 0;
//   if (root === null) return result;
//   let queue = [root];
//   while (queue.length) {
//     let current = queue.shift();
//     result += current.val;
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return result;
// }

function treeSum(root) {
  if (root === null) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
}
