class NewArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  checkValid(index) {
    return index < 0 || index > this.length;
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
  }

  pop() {
    let deleteIndex = this.length - 1;
    if (this.checkValid(deleteIndex)) return;
    let poppingValue = this.data[deleteIndex];
    delete this.data[deleteIndex];
    this.length--;
    return poppingValue;
  }

  get(index) {
    if (this.checkValid(index)) return;
    return this.data[index];
  }

  shift() {
    let deleteIndex = 0;
    if (this.checkValid(deleteIndex)) return;
    let shiftValue = this.data[deleteIndex];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    return shiftValue;
  }

  deleteByIndex(index) {
    if (this.checkValid(index)) return;
    let deleteValue = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    return deleteValue;
  }
}

const arr = new NewArray();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
console.log(arr.pop());
console.log(arr.get(3));
console.log(arr.get(2));
console.log(arr.shift());
