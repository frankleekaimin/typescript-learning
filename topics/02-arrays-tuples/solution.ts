// Topic 02 — Arrays & Tuples
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic array annotations
// ─────────────────────────────────────────────

// Exercise 1
let colors: string[] = ["red", "green", "blue"];

// Exercise 2
let array: number[] = [];

// Exercise 3
const fruits = ["apple", "banana", "cherry"];
// Inferred type: string[]

// Exercise 4
const scores = [90, 85, 78, 92];
// Inferred type: number[]

// ─────────────────────────────────────────────
// SECTION B — Array<T> syntax
// ─────────────────────────────────────────────

// Exercise 5
let names: Array<string> = ["Alice", "Bob"];

// Exercise 6
let values: number[] = [1, 2, 3];

// ─────────────────────────────────────────────
// SECTION C — Mixed-type arrays with unions
// ─────────────────────────────────────────────

// Exercise 7
let mixed: (string | number)[] = ["hello", 42, "world"];

// Exercise 8
// Annotation: (string | number | boolean)[]

// ─────────────────────────────────────────────
// SECTION D — Arrays of objects (preview of interfaces)
// ─────────────────────────────────────────────

// Exercise 9
interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

// Exercise 10
let coordinates: { x: number; y: number }[] = [
  { x: 10, y: 12 },
  { x: 20, y: 5 },
];

// ─────────────────────────────────────────────
// SECTION E — Tuples (fixed-length, positional types)
// ─────────────────────────────────────────────

// Exercise 11
let user: [string, number] = ["Frank", 30];

// Exercise 12
let config: [string, number, boolean] = ["production", 5, true];

// Exercise 13
let greetTuple: [string, number] = ["hello", 42];
const greeting = greetTuple[0].toUpperCase();

// Exercise 14
let response: [string, number, boolean] = ["ok", 200, true];
// response[1] type: number

// Exercise 15
let pair: [string, number] = ["hello", 42];
// let invalidPair1: [string, number] = ["hello"];          // INVALID — missing 2nd element
// let invalidPair2: [string, number] = ["hello", 42, 99]; // INVALID — too many elements

// ─────────────────────────────────────────────
// SECTION F — Optional tuple elements
// ─────────────────────────────────────────────

// Exercise 16
let optionalTuple: [string, number?] = ["required"];

// Exercise 17
let optionalTupleWithBoth: [string, number?] = ["required", 42];

// ─────────────────────────────────────────────
// SECTION G — readonly arrays
// ─────────────────────────────────────────────

// Exercise 18
let immutableArray: readonly string[] = ["a", "b", "c"];

// Exercise 19
let immutableTuple: readonly [string, number] = ["immutable", 100];

// Exercise 20
let readonlyConfig: readonly string[] = ["a", "b", "c"];
// readonlyConfig.push("d");  // ERROR: .push() mutates, but readonly arrays cannot be modified

// ─────────────────────────────────────────────
// SECTION H — Array methods (map, filter, find)
// ─────────────────────────────────────────────

// Exercise 21
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map((n) => n * 2);

// Exercise 22
const evens = nums.filter((n) => n % 2 === 0);

// Exercise 23
const largeNumbers = [5, 10, 15, 20];
const firstLarge = largeNumbers.find((n) => n > 10);
// Type of firstLarge: number | undefined (undefined if no match found)

// Exercise 24
const hasNegative = [1, 2, 3, -1, 5].some((n) => n < 0);

// Exercise 25
const allPositive = [1, 2, 3].every((n) => n > 0);
