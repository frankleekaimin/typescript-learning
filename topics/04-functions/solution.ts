// Topic 04 — Functions
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic function declarations
// ─────────────────────────────────────────────

// Exercise 1
function add(a: number, b: number): number {
  return a + b;
}

// Exercise 2
function greet(name: string): string {
  return "Hello, " + name;
}

// Exercise 3
function isEven(num: number): boolean {
  return num % 2 === 0;
}

// Exercise 4
// Answer: number

// ─────────────────────────────────────────────
// SECTION B — Arrow functions
// ─────────────────────────────────────────────

// Exercise 5
const addArrow = (a: number, b: number): number => {
  return a + b;
};

// Exercise 6
const double = (n: number): number => n * 2;

// Exercise 7
const greetFormal = (name: string): string => "Good morning, " + name;

// ─────────────────────────────────────────────
// SECTION C — Optional parameters
// ─────────────────────────────────────────────

// Exercise 8
function describe(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name} is ${age} years old`;
  }
  return `${name}'s age is unknown`;
}

// Exercise 9
describe("Alice");

// Exercise 10
describe("Alice", 25);

// ─────────────────────────────────────────────
// SECTION D — Default parameters
// ─────────────────────────────────────────────

// Exercise 11
const welcome = (name: string, greeting: string = "Welcome"): string =>
  greeting + ", " + name;

// Exercise 12
welcome("Bob");

// Exercise 13
welcome("Bob", "Hello");

// ─────────────────────────────────────────────
// SECTION E — Rest parameters
// ─────────────────────────────────────────────

// Exercise 14
const sumAll = (...numbers: number[]): number => {
  return numbers.reduce((sum, n) => sum + n, 0);
};

// Exercise 15
sumAll(1, 2, 3, 4, 5);

// Exercise 16
const joinWords = (...words: string[]): string => words.join(" ");

// ─────────────────────────────────────────────
// SECTION F — Function types
// ─────────────────────────────────────────────

// Exercise 17
type Calculator = (a: number, b: number) => number;

// Exercise 18
const multiply: Calculator = (a, b) => a * b;

// Exercise 19
type Logger = (message: string) => void;

// Exercise 20
const log: Logger = (message) => console.log(message);

// ─────────────────────────────────────────────
// SECTION G — Callbacks
// ─────────────────────────────────────────────

// Exercise 21
function applyOperation(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}

// Exercise 22
const result1 = applyOperation(10, 5, add);

// Exercise 23
const result2 = applyOperation(10, 5, (x, y) => x * y);

// ─────────────────────────────────────────────
// SECTION H — Functions returning functions
// ─────────────────────────────────────────────

// Exercise 24
function makeMultiplier(factor: number): (n: number) => number {
  return (n) => n * factor;
}

// Exercise 25
const triple = makeMultiplier(3);
console.log(triple(4));  // 12
