// Topic 04 — Functions
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic function declarations
// ─────────────────────────────────────────────

// Exercise 1
// Declare a function `add` that takes two numbers and returns their sum.
function add(a: number, b: number): number {
    return a + b
}

// Exercise 2
// Declare a function `greet` that takes a name (string) and returns a greeting string.
function greet(name: string): string {
    return "Hello, " + name;
}

// Exercise 3
// Declare a function `isEven` that takes a number and returns a boolean.
function isEven(num: number): boolean {
    return num % 2 === 0;
}

// Exercise 4
// What would be the return type of this function?
// function getValue(): ??? { return 42; }
// Answer: number

// ─────────────────────────────────────────────
// SECTION B — Arrow functions
// ─────────────────────────────────────────────

// Exercise 5
// Rewrite the add function as an arrow function.
const add2 = (a:number, b: number): number => {
    return a + b;
};

// Exercise 6
// Create an arrow function `double` that takes a number and returns it doubled.
// Use the shorthand syntax (one-liner).
const double = (a:number): number => a * 2;

// Exercise 7
// Create an arrow function `greetFormal` that takes a name and returns "Good morning, {name}".
const greetFormal = (name:string) => "Good morning, " + name;

// ─────────────────────────────────────────────
// SECTION C — Optional parameters
// ─────────────────────────────────────────────

// Exercise 8
// Declare a function `describe` that takes:
// - name (string, required)
// - age (number, OPTIONAL)
// Returns a string description. Include age in the description only if provided.
function describe(name: string, age?: number) {
    if (age) {
        return name + ", " + age;
    }
    return name;
}

// Exercise 9
// Call the describe function with just the name.
describe("Alan")

// Exercise 10
// Call the describe function with both name and age.
describe("Alan",30)

// ─────────────────────────────────────────────
// SECTION D — Default parameters
// ─────────────────────────────────────────────

// Exercise 11
// Declare a function `welcome` that takes:
// - name (string, required)
// - greeting (string, DEFAULT = "Welcome")
const welcome = (name: string, greeting: string = "Welcome") => greeting + " " + name;

// Exercise 12
// Call welcome with just the name.
welcome("Alan")

// Exercise 13
// Call welcome with a custom greeting.
welcome("Alan", "Hello")

// ─────────────────────────────────────────────
// SECTION E — Rest parameters
// ─────────────────────────────────────────────

// Exercise 14
// Declare a function `sumAll` that takes any number of numbers and returns their sum.
// Use rest parameters (...numbers).
const sumAll = (...numbers: number[]) => numbers.reduce((a,b) => a+b, 0);

// Exercise 15
// Call sumAll with several numbers: 1, 2, 3, 4, 5
sumAll(1,2,3,4,5);

// Exercise 16
// Declare a function `joinWords` that takes any number of strings and joins them with spaces.
// Example: joinWords("Hello", "TypeScript", "World") => "Hello TypeScript World"
const joinWords = (...strings: string[]) => strings.join(" ");

// ─────────────────────────────────────────────
// SECTION F — Function types
// ─────────────────────────────────────────────

// Exercise 17
// Define a function type `Calculator` that takes two numbers and returns a number.
type Calculator = (a: number, b: number) => number;

// Exercise 18
// Use the Calculator type from Exercise 17 to declare a multiply function.
const multiple: Calculator = (a, b) => a * b;

// Exercise 19
// Define a function type `Logger` that takes a string and returns void.
type Logger = (s: string) => void;

// Exercise 20
// Implement a Logger function that logs the message.
const consolelog: Logger = s => console.log(s);

// ─────────────────────────────────────────────
// SECTION G — Callbacks
// ─────────────────────────────────────────────

// Exercise 21
// Declare a function `applyOperation` that takes:
// - two numbers (a, b)
// - a callback of type (number, number) => number
// Returns the result of applying the callback to a and b.
function applyOperation (
    a: number,
    b: number,
    callback: (a: number, b: number) => number): number {
    return callback(a, b)
}

// Exercise 22
// Call applyOperation with add as the callback (from Exercise 1).
// Store the result in a variable.
let total = applyOperation(3,5,add)

// Exercise 23
// Call applyOperation with a multiply callback (create it inline).
const multiply = (a: number, b: number): number => a*b
let multiple2 = applyOperation(3,5, multiply);

// ─────────────────────────────────────────────
// SECTION H — Functions returning functions
// ─────────────────────────────────────────────

// Exercise 24
// Declare a function `makeMultiplier` that:
// - takes a factor (number)
// - returns a function that takes a number and returns number
// Example: const double = makeMultiplier(2); double(5) => 10
function makeMultiplier(factor: number): (n: number) => number {
    return (n) => n * factor;
}

// Exercise 25
// Use makeMultiplier to create a `triple` function and call it with 4.
const triple = makeMultiplier(3)
console.log(triple(4))
