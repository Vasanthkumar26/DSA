// 1
let createHelloWorld = function () {
  return function (...args) {
    console.log("Hello World");
    return;
  };
};

let fun = createHelloWorld();
fun(); // Hello World

// 2
let createCounter = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};
let c1 = createCounter(-1);
console.log(c1());
console.log(c1());
let c2 = createCounter(10);
console.log(c2());
console.log(c2());

// 3
let expect = function (val) {
  return {
    toBe: (nextVal) => {
      if (val === nextVal) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (nextVal) {
      if (val !== nextVal) return true;
      else throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
// console.log(expect(5).notToBe(5)); // throws "Equal"

// 4
let createCounter1 = function (init) {
  let count = init;
  return {
    increment: () => {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    reset() {
      count = init;
      return count;
    },
  };
};

const counter1 = createCounter1(5);
console.log(counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4

// 5
let map = function (arr, fn) {
  arr.forEach((element, i) => {
    arr[i] = fn(element, i);
  });
  return arr;
};

let arr = [1, 2, 3];
function plusone(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

function repconstant() {
  return 42;
}

console.log(map(arr, plusone)); // [2,3,4]
console.log(map(arr, plusI)); // [2,4,6]
console.log(map(arr, repconstant)); // [42,42,42]

// 6
let filter = function (arr, fn) {
  let output = [];
  arr.forEach((element, i) => {
    if (fn(element, i)) output.push(element);
  });
  return output;
};

let arr1 = [0, 10, 20, 30];
function greaterThan10(n) {
  return n > 10;
}

let arr2 = [1, 2, 3];
function firstIndex(n, i) {
  return i === 0;
}

let arr3 = [-2, -1, 0, 1, 2];
function plusOne(n) {
  return n + 1;
}

console.log(filter(arr1, greaterThan10)); // [20,30]
console.log(filter(arr2, firstIndex)); // [1]
console.log(filter(arr3, plusOne)); // [-2,0,1,2]

// 7
let reduce = function (nums, fn, init) {
  let output = init;
  nums.forEach((element, i) => {
    output = fn(output, element);
  });
  return output;
};

let arr4 = [1, 2, 3, 4];
function sum(accum, curr) {
  return accum + curr;
}
function sum1(accum, curr) {
  return accum + curr * curr;
}
function sum2(accum, curr) {
  return 0;
}

console.log(reduce(arr4, sum, 0)); // 10
console.log(reduce(arr4, sum1, 100)); // 130
console.log(reduce([], sum2, 25)); // 25
