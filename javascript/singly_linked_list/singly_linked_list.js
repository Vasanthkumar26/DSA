class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class singlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      counter++;
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    let prev = this.get(index - 1);
    let newNode = new Node(val);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevValue = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prevValue;
      prevValue = node;
      node = next;
    }
    return this;
  }
}

console.log("Test");
const newList = new singlyLinkedList();
newList.push(123);
newList.push(234);
newList.push(789);
newList.push(567);
console.log(newList);
// newList.pop();
newList.set(1, "1");
console.log(newList);
console.log(newList.reverse());

// Big O Notation:
// Insertion : O(1)
// Removal : O(1) or O(n)
// Searching : O(n)
// Access : O(n)
// Singly Linked List are an excellent alternative to Array when we insert or delete at the beginning
// Arrays contain built in index whereas Linked list doesn't
// Idea of list data structure that consists of nodes is the foundation for Stacks & Queues
