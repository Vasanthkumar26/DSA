// call, apply, bind:
// method of function prototype
// used to control "this" context
// call:
// Invokes a function immediately and arguments are passed individually
// apply:
// Invokes a function immediately and arguments are passed as an array
// bind:
// It returns a new function with specified "this" context and arguments are optional.
// It doesnot invoke the function immediately

// Approach 1
class Person {
  constructor(name) {
    this.name = name;
  }
  printName = () => {
    console.log(`Hi i am printing from class ${this.name}`);
  };
}
const person1 = new Person("Testing");
person1.printName();

// Approach 2 (Call, Apply, Bind)
const person = { name: "Vasanth" };
function printDetails(org, role) {
  console.log(`Hi, I am ${this.name}. I am working in ${org} as ${role}`);
}
printDetails.call(person, "Wipro", "Senior Software Engineer");
printDetails.apply(person, ["RNTBCI", "Senior Engineer"]);

const bindPrintDetails = printDetails.bind(person, "XYZ");
bindPrintDetails();
bindPrintDetails("ABC");

// ************************************************************************************************************ //

// Closures
// Remembers the variables from its lexical scope, even after the scope is exited
// It allows inner function to access values from outer function / surrounding scope
// Example 1
const outerFunction = () => {
  let dummyText = "Text from outer function";
  const innerFunction = () => {
    console.log(`Printing ${dummyText} from inner function`);
  };
  return innerFunction;
};
const test1 = outerFunction();
test1();

// Example 2
const counter = () => {
  let start = 0;
  return {
    increment: () => {
      start++;
      console.log("Count :", start);
    },
    decrement: () => {
      start--;
      console.log("Count :", start);
    },
    getCount: () => {
      console.log(start);
    },
  };
};
let a = counter();
let b = counter();
a.increment();
a.increment();
a.increment();
a.getCount();
b.getCount();

// ************************************************************************************************************ //

// Hoisting
// Hoisting in JavaScript is a mechanism where variable, function, or class declarations are moved (or "hoisted") to the top of their scope during the compile phase of execution
console.log(ah); // undefined
var ah = 5;

// console.log(bh); // ReferenceError: Cannot access 'b' before initialization
// let bh = 10;

foo(); // "I am a function"
function foo() {
  console.log("I am a function");
}

// bar(); // TypeError: bar is not a function
// const bar = function () {
//   console.log("I am a function expression");
// };

// ************************************************************************************************************ //

// What will happen when we merge 2 objects with spread operator
// Properties of second object will overwrite properties of first object if they have same key
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }

const obj3 = { a: 1, nested: { x: 10 } };
const obj4 = { b: 2, nested: { y: 20 } };
const merged1 = { ...obj3, ...obj4 };
console.log(merged1); // Output: { a: 1, b: 2, nested: { y: 20 } }

const obj5 = { a: 1, nested: { x: 10 } };
const obj6 = { b: 2, nested: { y: 20 } };
const merged2 = {
  ...obj5,
  ...obj6,
  nested: { ...obj5.nested, ...obj6.nested },
};
console.log(merged2); // Output: { a: 1, b: 2, nested: { x: 10, y: 20 } }

// ************************************************************************************************************ //

// map vs filter vs reduce
// Higher order functions in JS used to manipulate arrays

// map:
// Purpose: Creates a new array by applying a function to each element in the original array.
// Does Not Modify Original Array: Returns a new array.
// Use Case: When you want to transform each element of an array
// const newArray = array.map(callback(currentValue, index, array));
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((num) => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (unchanged)

// filter:
// Purpose: Creates a new array containing only the elements that pass a specified test (i.e., the callback function returns true).
// Does Not Modify Original Array: Returns a new array.
// Use Case: When you want to filter elements of an array based on a condition.
// const newArray = array.filter(callback(currentValue, index, array));
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (unchanged)

// reduce
// Purpose: Reduces the array to a single value (e.g., sum, product, concatenated string, etc.) by applying a function to an accumulator and each element.
// Does Not Modify Original Array: Returns the accumulated result.
// Use Case: When you want to aggregate or compute a single value from an array.
// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15
console.log(numbers); // Output: [1, 2, 3, 4, 5] (unchanged)

// ************************************************************************************************************ //

// Webpack
// Webpack is a module bundler for JavaScript applications.
// It takes your project's JavaScript files and bundles them into a single file that can be served to a browser.

// core concepts:

// entry:
// The starting point of your application, usually the main JavaScript file where React is initialized.
// entry: './src/index.js'

// output:
// Specifies the location and name of the bundled file(s).
// output: {
//   path: path.resolve(__dirname, 'dist'),
//   filename: 'bundle.js',
// }

// Loaders:
// Transform non-JavaScript files into modules that Webpack can understand.
// Common loaders in React projects:
// Babel Loader: Transforms ES6+ and JSX into plain JavaScript.
// CSS Loader: Handles import or require of CSS files.
// Style Loader: Injects CSS into the DOM.
// File Loader: Manages image and font files.

// Plugins
// Extend Webpack’s functionality with features like HTML generation, minification, etc.

// Dev server
// Provides a local server for development with features like hot module replacement and live reloading.
// devServer: {
//   contentBase: path.resolve(__dirname, 'dist'),
//   port: 3000, // Local server port
//   hot: true, // Enables hot module replacement
// }

// Mode
// Specifies the environment: development, production, or none.
// mode: 'development' or 'production'

// Webpack vs Create React App (CRA)
// If you're using Create React App (CRA), Webpack is already configured under the hood.
// If you're using Create React App (CRA), Webpack is already configured under the hood.
// npm run eject

// ************************************************************************************************************ //

// useMemo
// used to optimize performance in React by memoizing (caching) a computed value.
// It prevents re-computation of expensive calculations unless the dependencies change.
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// ************************************************************************************************************ //

// useCallback
// used to memoize (cache) a callback function so it is not re-created on every render.
// It is helpful when passing functions as props to child components to prevent unnecessary re-renders.
// const memoizedCallback = useCallback(() => { // Your logic here }, [dependencies]);

// ************************************************************************************************************ //

// Lazy loading
// Lazy loading delays the loading of resources (e.g., components, images, or files) until they are actually needed.
// This improves performance and reduces initial loading time.
// const LazyComponent = React.lazy(() => import('./LazyComponent'));

// import React, { Suspense } from 'react';
// const LazyComponent = React.lazy(() => import('./LazyComponent'));
// function App() {
//   return (
//     <div>
//       <h1>Lazy Loading Example</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyComponent />
//       </Suspense>
//     </div>
//   );
// }

// ************************************************************************************************************ //

// IIFE (Immediately Invoked Function Expression)
// An IIFE is a function that is executed immediately after it is defined.
// It helps avoid polluting the global scope and creates a private scope.
// (function () { // Code here })();
