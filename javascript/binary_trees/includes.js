// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
// The function should return a boolean indicating whether or not the value is contained in the tree.

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
console.log(treeIncludes(a, "e")); // -> true
console.log(treeIncludes(a, "a")); // -> true
console.log(treeIncludes(a, "n")); // -> false

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d1 = new Node("d");
const e1 = new Node("e");
const f1 = new Node("f");
const g = new Node("g");
const h = new Node("h");
a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.right = f1;
e1.left = g;
f1.right = h;
console.log(treeIncludes(a1, "f")); // -> true
console.log(treeIncludes(a1, "p")); // -> false

console.log(treeIncludes(null, "b")); // -> false

// function treeIncludes(root, target) {
//   if (root === null) return false;
//   let queue = [root];
//   while (queue.length) {
//     let current = queue.shift();
//     if (current.val === target) return true;
//     if (current.left) {
//       queue.push(current.left);
//     }
//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return false;
// }

function treeIncludes(root, target) {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
}
