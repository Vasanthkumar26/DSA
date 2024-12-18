// LIFO Data Structure
// Last element added to stack will be first element removed from stack

// Where stacks are used
// - Managing function invocations
// - Undo / Redo
// - Routing (history object) is treated like a stack

// let stack = [];
// stack.push("google");
// stack.push("insta");
// stack.push("YouTube");
// stack.pop();
// stack.push("amazon");
// stack.pop();

// let stack1 = [];
// stack1.unshift("Open a File");
// stack1.unshift("Edit the file");
// stack1.unshift("Save the file");
// stack1.shift();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }

  pop() {
    if (!this.first) return undefined;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// Insertion, Removal - O(1)
// Searching, Access - O(n)
