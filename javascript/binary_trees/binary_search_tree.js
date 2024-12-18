// Root - Top Node in a tree
// Child - Node directly connected to another node when moving away from the root
// Parent - Converse notion of a child
// Siblings - Group of nodes with same parent
// Leaf - Node with no children

// Uses
// HTML DOM
// Network Routing
// Abstract Syntax tree
// Artificial Intelligence
// Folders in OS

// BST - Bindary Search Tree
// Binary Search Trees are mostly used in Sorted Array
// Every parent node has atmost 2 children
// Every node on the left of parent node is always smaller than the parent
// Every node to the right of parent node is always greater than the parent

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    // if (!this.root) {
    //   this.root = newNode;
    //   return this;
    // } else {
    //   let current = this.root;
    //   while (true) {
    //     if (value === current.value) return undefined;
    //     if (value < current.value) {
    //       if (!current.left) {
    //         current.left = newNode;
    //         return this;
    //       } else {
    //         current = current.left;
    //       }
    //     } else if (value > current.value) {
    //       if (!current.right) {
    //         current.right = newNode;
    //         return this;
    //       } else {
    //         current = current.right;
    //       }
    //     }
    //   }
    // }
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let binary = new BinarySearchTree();
console.log(binary);
binary.insert(11);
console.log(binary);
binary.insert(19);
binary.insert(9);
console.log(binary);
binary.insert(7);
binary.insert(91);
binary.insert(13);
console.log(binary.root.left);
console.log(binary.root.right);
console.log(binary.find(1));
console.log(binary.find(50));
console.log(binary.find(7));

// Big O
// Insert, Search - O(log n)
