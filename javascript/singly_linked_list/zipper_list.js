// Write a function, zipperLists, that takes in the head of two linked lists as arguments.
// The function should zipper the two lists together into single linked list by alternating nodes.
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.
// The function should return the head of the zippered linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
console.log(zipperLists(a, x)); // a -> x -> b -> y -> c -> z

const a1 = new Node("a");
const b1 = new Node("b");
const c1 = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
a1.next = b1;
b1.next = c1;
c1.next = d;
d.next = e;
e.next = f;
const x1 = new Node("x");
const y1 = new Node("y");
const z1 = new Node("z");
x1.next = y1;
y1.next = z1;
console.log(zipperLists(a, x)); // a -> x -> b -> y -> c -> z -> d -> e -> f

const s = new Node("s");
const t = new Node("t");
s.next = t;
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
console.log(zipperLists(s, one)); // s -> 1 -> t -> 2 -> 3 -> 4

const w = new Node("w");
const one1 = new Node(1);
const two1 = new Node(2);
const three1 = new Node(3);
one1.next = two1;
two1.next = three1;
console.log(zipperLists(w, one)); // w -> 1 -> 2 -> 3

const one2 = new Node(1);
const two2 = new Node(2);
const three2 = new Node(3);
one2.next = two2;
two2.next = three2;
const w1 = new Node("w");
console.log(zipperLists(one, w)); // 1 -> w -> 2 -> 3

// function zipperLists(head1, head2) {
//   let tail = head1;
//   let current1 = head1.next;
//   let current2 = head2;
//   let count = 0;

//   while (current1 !== null && current2 !== null) {
//     if (count % 2 === 0) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }
//     tail = tail.next;
//     count += 1;
//   }

//   if (current1 !== null) tail.next = current1;
//   if (current2 !== null) tail.next = current2;

//   return head1;
// }

function zipperLists(head1, head2) {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
}
