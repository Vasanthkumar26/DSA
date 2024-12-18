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