// Write a function, depthFirstValues, that takes in the root of a binary tree.
// The function should return an array containing all values of the tree in depth-first order.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(depthFirstValues(a)); // ['a', 'b', 'd', 'e', 'c', 'f']

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");
const g = new Node("g");
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g;
console.log(depthFirstValues(a1)); // ['a', 'b', 'd', 'e', 'g', 'c', 'f']

const a2 = new Node("a");
console.log(depthFirstValues(a2)); // ['a']

const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
a3.right = b3;
b3.left = c3;
c3.right = d3;
d3.right = e3;
console.log(depthFirstValues(a3)); // ['a', 'b', 'c', 'd', 'e']

console.log(depthFirstValues(null)); // []

// function depthFirstValues(root) {
//   let result = [];
//   if (root === null) return result;
//   let stack = [root];
//   while (stack.length) {
//     let current = stack.pop();
//     result.push(current.val);
//     if (current.right) {
//       stack.push(current.right);
//     }
//     if (current.left) {
//       stack.push(current.left);
//     }
//   }
//   return result;
// }

function depthFirstValues(root) {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
}
