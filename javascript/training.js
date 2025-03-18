const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Hello World"));

const checkPalindrome = (str) => str.split("").reverse().join("") === str;
console.log(checkPalindrome("ada"));

const reverseInteger = (num) => num.toString().split("").reverse().join("");
console.log(reverseInteger(12345));

const sentenceCapitalize = (sentence) =>
  sentence
    .split(" ")
    .map((letter) => letter[0].toUpperCase() + letter.slice(1))
    .join(" ");
console.log(sentenceCapitalize("hello world 123"));

const fizzBuzz = (val) => {
  let output = "";
  for (let i = 1; i <= val; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
    } else {
      output += i;
    }
  }
  return output;
};
console.log(fizzBuzz(16));

const maxProfit = (prices) => {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    profit = Math.max(prices[i] - minPrice, profit);
  }
  return profit;
};

const maxProfit1 = (prices) => {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i];
    minPrice = Math.min(currentPrice, minPrice);
    let potentialProfit = currentPrice - minPrice;
    profit = Math.max(potentialProfit, profit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit1([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit1([7, 6, 4, 3, 1])); // 0

const chunk = function (arr, size) {
  let output = [];
  for (let i = 0; i < arr.length; i += size) {
    let subArray = arr.slice(i, i + size);
    output.push(subArray);
  }
  return output;
};

const chunk1 = function (arr, size) {
  let output = [];
  let index = 0;
  while (index < arr.length) {
    const chunk = arr.slice(index, index + size);
    output.push(chunk);
    index += size;
  }
  return output;
};

console.log(chunk([8, 5, 3, 2, 6], 1)); // [ [ 8 ], [ 5 ], [ 3 ], [ 2 ], [ 6 ] ]
console.log(chunk([1, 9, 6, 3, 2], 3)); // [ [ 1, 9, 6 ], [ 3, 2 ] ]
console.log(chunk([8, 5, 3, 2, 6], 6)); // [ [ 8, 5, 3, 2, 6 ] ]
console.log(chunk([], 1)); // []
console.log(chunk1([8, 5, 3, 2, 6], 1)); // [ [ 8 ], [ 5 ], [ 3 ], [ 2 ], [ 6 ] ]
console.log(chunk1([1, 9, 6, 3, 2], 3)); // [ [ 1, 9, 6 ], [ 3, 2 ] ]
console.log(chunk1([8, 5, 3, 2, 6], 6)); // [ [ 8, 5, 3, 2, 6 ] ]
console.log(chunk1([], 1)); // []

function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

// Linked list
// Linear data structure where elements called nodes are not stored continously in memory
// Each node contains data and reference to the next node in sequence

// Singly Linked List
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  append(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  pop() {
    if (!this.head) return null;
    let current = this.head;
    let prev = null;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (prev) {
      prev.next = null;
      this.tail = prev;
    } else {
      this.head = this.tail = null;
    }
    this.size--;
    return current.data;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  shift() {
    if (!this.head) return null;
    const removeHead = this.head;
    this.head = this.head.next;
    if (!this.head) this.next = null;
    this.size--;
    return removeHead.data;
  }

  getFirst() {
    return this.head ? this.head.data : null;
  }

  getLast() {
    return this.tail ? this.tail.data : null;
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.data + " ->> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
    return output;
  }

  get(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  set(index, value) {
    if (index < 0 || index >= this.size) return false;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.data = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.size) return !!this.push(value);

    const newNode = new Node(value);
    let current = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.next;
    }

    newNode.next = current;
    prev.next = newNode;
    this.size++;
    return true;
  }

  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }
}

const reverseLinkedList = (list) => {
  let current = list.head;
  let node = null;
  while (current) {
    let temp = current.next;
    current.next = node;
    node = current;
    current = temp;
  }
  return node;
};

const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.print(); // 10 -> 20 -> 30 -> null

console.log("Pop:", list.pop()); // 30
list.print(); // 10 -> 20 -> null

list.unshift(5);
list.print(); // 5 -> 10 -> 20 -> null

console.log("Shift:", list.shift()); // 5
list.print(); // 10 -> 20 -> null

console.log("Get First:", list.getFirst()); // 10
console.log("Get Last:", list.getLast()); // 20

console.log("Get Index 1:", list.get(1)); // 20
console.log("Set Index 1 to 25:", list.set(1, 25)); // true
list.print(); // 10 -> 25 -> null

console.log("Insert 15 at Index 1:", list.insert(1, 15)); // true
list.print(); // 10 -> 15 -> 25 -> null
console.log("*******");
reverseLinkedList(list);

list.print(); // null
console.log("Size:", list.getSize()); // 3

list.clear();
list.print(); // null
console.log("Size after clear:", list.getSize()); // 0

// Doubly Linked List
class DNode {
  constructor(value) {
    this.prev = null;
    this.data = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new DNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) return null;

    let removedNode = this.tail;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      // removedNode.prev = null;
    }
    this.size--;
    return removedNode.data;
  }

  unshift(value) {
    const newNode = new DNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  shift() {
    if (!this.head) return null;
    const deleteNode = this.head;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      // deleteNode.next = null;
    }
    this.size--;
    return deleteNode.data;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " <-> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
    return result;
  }

  reversePrint() {
    let current = this.tail;
    let result = "null <->";
    while (current) {
      result += current.data + " <-> ";
      current = current.prev;
    }
    console.log(result);
    return result;
  }
}

const list1 = new DoublyLinkedList();
list1.push(10);
list1.push(20);
list1.push(30);
list1.print(); // 10 <-> 20 <-> 30 <-> null

console.log("Pop:", list1.pop()); // 30
list1.print(); // 10 <-> 20 <-> null

list1.unshift(5);
list1.print(); // 5 <-> 10 <-> 20 <-> null

console.log("Shift:", list1.shift()); // 5
list1.print(); // 10 <-> 20 <-> null

list1.reversePrint(); // null <-> 20 <-> 10 <->

// Stack & Queues:
// Stack is linear DS, which follows LIFO [Last In First Out]
// Queue is linear DS, which follows FIFO [First In First Out]

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    // Get the top element without removing it
    return this.isEmpty() ? null : this.items[this.size() - 1];
  }

  print() {
    return this.items.join(" ->> ");
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: 10 -> 20 -> 30

console.log("Pop:", stack.pop()); // Output: 30
stack.print(); // Output: 10 -> 20

console.log("Peek:", stack.peek()); // Output: 20
console.log("Size:", stack.size()); // Output: 2
console.log("Is Empty:", stack.isEmpty()); // Output: false

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  min() {
    if (this.isEmpty()) return null;
    return Math.min(...this.items);
  }

  peek() {
    return this.isEmpty() ? null : this.items[0];
  }

  print() {
    return this.items.join(" <- ");
  }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(5);
queue.enqueue(20);
queue.print(); // Output: 10 <- 5 <- 20

console.log("Dequeue:", queue.dequeue()); // Output: 10
queue.print(); // Output: 5 <- 20

console.log("Min:", queue.min()); // Output: 5
console.log("Peek:", queue.peek()); // Output: 5
console.log("Size:", queue.size()); // Output: 2
console.log("Is Empty:", queue.isEmpty()); // Output: false

function isValidParanthesis(s) {
  let stack = [];
  let paranthesis = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (let val of s) {
    if (val in paranthesis) {
      if (stack.length === 0 || stack.pop() !== paranthesis[val]) return false;
    } else {
      stack.push(val);
    }
  }
  return stack.length === 0;
}

console.log(isValidParanthesis("()")); // true
console.log(isValidParanthesis("()[]{}")); // true
console.log(isValidParanthesis("(]")); // false
console.log(isValidParanthesis("([])")); // true

const reverseString1 = (str) => {
  let stack = [];
  for (let val of str) {
    stack.unshift(val);
  }
  return stack.join("");
};
console.log(reverseString1("Hello World"));

const reverseString2 = (str) => {
  let stack = [];
  for (let val of str) {
    stack.push(val);
  }
  let reversedString = "";
  while (stack.length) {
    reversedString += stack.pop();
  }
  return reversedString;
};
console.log(reverseString2("Hello World"));

// Hash Table
// Used to store key - value pair
// Hash Function
// Acts like translator, taking an input of any size [key] and converting it into a fixed size value [hash code]
// Process of mapping arbitary keys to fixed length indices is called hashing

class HashTable {
  constructor(size = 53) {
    this.buckets = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let hash = 0;
    for (let char of key) {
      hash = (hash + char.charCodeAt(0) * 23) % this.size;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.buckets[index]) return undefined;
    for (let pair of this.buckets[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }

  keys() {
    let keysArray = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          keysArray.push(pair[0]);
        }
      }
    }
    return keysArray;
  }

  values() {
    let valuesArray = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let pair of bucket) {
          valuesArray.push(pair[1]);
        }
      }
    }
    return valuesArray;
  }

  print() {
    console.log(this.buckets);
  }
}

const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "New York");
ht.print(); // Shows the hash table structure

console.log("Get name:", ht.get("name")); // Alice
console.log("Get age:", ht.get("age")); // 25
console.log("All Keys:", ht.keys()); // ['name', 'age', 'city']
console.log("All Values:", ht.values()); // ['Alice', 25, 'New York']

// Tree
// It is a fundamental hierarchical data structure
// It represents collection of elements called nodes, connected by edges forming tree like structure

// BST [Binary Search Tree]
// Special kind of tree/binary tree used to organize data in sorted way
// Works like filing a cabinet, where we can effectively search, add or remove items
// Go left if value is smaller and right when value is larger

class BSTNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new BSTNode(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value === val) return undefined;
      if (val < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  includes(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.value === value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  bfs() {
    // This follows queue DS
    let queue = [];
    if (this.root === null) return queue;
    let data = [this.root];
    while (data.length) {
      let current = data.shift();
      queue.push(current.value);
      if (current?.left) data.push(current?.left);
      if (current?.right) data.push(current?.right);
    }
    return queue;
  }

  dfsPreOrder(node = this.root, result = []) {
    if (node === null) return result;
    result.push(node.value);
    if (node?.left) this.dfsPreOrder(node.left, result);
    if (node?.right) this.dfsPreOrder(node.right, result);
    return result;
  }

  dfsPostOrder(node = this.root, result = []) {
    if (node === null) return result;
    if (node?.left) this.dfsPreOrder(node.left, result);
    if (node?.right) this.dfsPreOrder(node.right, result);
    result.push(node.value);
    return result;
  }

  dfsInOrder(node = this.root, result = []) {
    if (node) {
      this.dfsInOrder(node?.left, result);
      result.push(node.value);
      this.dfsInOrder(node?.right, result);
    }
    return result;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);
console.log(bst);
console.log("BST contains 7:", bst.includes(7)); // Output: true
console.log("BST contains 100:", bst.includes(100)); // Output: false
console.log("Inorder Traversal:", bst.dfsInOrder()); // Output: [2, 5, 7, 10, 12, 15, 20]
console.log("BFS", bst.bfs()); // [10, 5, 15, 2,7, 12, 20]
console.log("Preorder", bst.dfsPreOrder()); // [10, 5, 2, 7, 15, 12, 20]
console.log("Postorder", bst.dfsPostOrder()); // [5, 2, 7, 15, 12, 20, 10]

const factorial = (num) => {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};
console.log(factorial(5));
// 290, 1091 => LC

// Graph
// Non-linear DS that models relationships between objects
// It consists of two main components Vertices(nodes) & Edges
// We will be working with Adjacency Matrix & Adjacency List

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
    }
    return false;
  }

  addEdges(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v !== vtx2
      );
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx2
      );
      return true;
    }
    return false;
  }

  removeVertex(vtx) {
    if (this.adjacencyList[vtx]) {
      for (let val of this.adjacencyList[vtx]) {
        this.removeEdge(vtx, val);
      }
      delete this.adjacencyList[vtx];
      return true;
    }
    return false;
  }
}

// Example Usage
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdges("A", "B");
graph.addEdges("A", "C");
// graph.printGraph();
// Output: { A: ['B', 'C'], B: ['A'], C: ['A'] }

graph.removeEdge("A", "C");
// graph.printGraph();
// Output: { A: ['B'], B: ['A'], C: [] }

graph.removeVertex("A");
// graph.printGraph();
// Output: { B: [], C: [] }

let arr = [64, 34, 25, 12, 22, 11, 90, 13];
// Bubble Sort
// Done by pushing the biggest to the last and continues till the first gets min value
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Sorted Array:", bubbleSort(arr));

function bubbleSort1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log("Sorted Array1:", bubbleSort1(arr));

// selectionSort
// Pushing the min to front first and continue till we get max till the last

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
console.log("Selection Sorted Array1:", selectionSort(arr));

// Insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + i] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log("Insertion Sorted Array1:", insertionSort(arr));

// Merge Sort
// Split the arr to size of 1 and then merge them
function merge(arr1, arr2) {
  let output = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    output.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    output.push(arr2[j]);
    j++;
  }
  return output;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

console.log("Merge Sorted Array1:", mergeSort(arr));
