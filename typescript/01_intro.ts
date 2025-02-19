// data types
let greetings: string = "Hello Vasanth";
let myNum: number = 26;
let randomNumber: number = 26.06;
let isDeveloper: boolean = true;
let checkNumber = 26.061995;
// checkNumber = "Vasanth"
// above line automatically type inferences checkNumber to number if we assign string it will throw error
console.log(greetings);

// functions
function getHero() {
    return "My Hero";
}

function addTwo(num: number): number {
    return num + 2;
}
console.log(addTwo(6));

function getUpper(str: string): string {
    return str.toUpperCase();
}
console.log(getUpper("Vasanth"));

function signUpUser(name: string, email: string, isPaid: boolean) { }
// console.log(signUpUser("Vasanth", "vasanth37cbe@gmail.com", false));

let loginUser = (name: string, email: string, isPaid: boolean = false) => { };
// console.log(loginUser("Sangeetha", "sangeethachitra121@gmail.com"));

const heros = [1, 2, 3];
heros.map((hero): string => {
    return `Hero name is ${hero}`;
});

function consoleHeros(hero: string): void {
    console.log(hero);
}
// void data type will not return a value

function returnError(msg: string): never {
    throw new Error(msg);
}
// never neither return a value not a void, it will be used for exception or terminates execution

// Objects
const user = {
    name: "Vasanth",
    mail: "test@mail.com",
    isActive: true,
};
function createUser({ name: string, isPaid: boolean }) { }
createUser({ name: "Vasanth1", isPaid: false });

function createCourse(): {} {
    return {};
}
// createCourse function has no argements, but expects an empty object as an output

function updateCourse(): { name: string; amount: number } {
    return {
        name: "Book1",
        amount: 100,
    };
}
// updateCourse function will always wants an objet as output with name and amount in it

// Type aliases
type User = {
    name: string;
    mail: string;
    isActive: boolean;
};
function createUser1(user: User): User {
    return { name: "", mail: "", isActive: false };
}
createUser1({ name: "", mail: "", isActive: false });

// Readonly and Optional
// If we have an array in readonly we cannot able to push or update values
// readonlyArray.push(4); // This will throw a TypeScript error
// readonlyArray[0] = 10; // This will also throw an error
type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    salary: number;
}
let myUser: User1 = {
    _id: "12wqeq3213",
    name: "Vasanth",
    email: "v@gmail.com",
    isActive: true,
    salary: 10000,
}
myUser._id = 123213;

export { };
