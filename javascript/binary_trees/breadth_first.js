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
console.log(breadthFirstValues(a)); // ['a', 'b', 'c', 'd', 'e', 'f']

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
console.log(breadthFirstValues(a1)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const a2 = new Node("a");
console.log(breadthFirstValues(a2)); // ['a']

const a3 = new Node("a");
const b3 = new Node("b");
const c3 = new Node("c");
const d3 = new Node("d");
const e3 = new Node("e");
const x = new Node("x");
a3.right = b3;
b3.left = c3;
c3.left = x;
c3.right = d3;
d3.right = e3;
console.log(breadthFirstValues(a3)); // ['a', 'b', 'c', 'x', 'd', 'e']

console.log(breadthFirstValues(null)); // []

function breadthFirstValues(root) {
  let result = [];
  if (root === null) return result;
  let queue = [root];
  while (queue.length) {
    const current = queue.shift();
    result.push(current.val);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}
