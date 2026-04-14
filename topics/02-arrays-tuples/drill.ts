// Topic 02 — Arrays & Tuples
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic array annotations
// ─────────────────────────────────────────────

// Exercise 1
// Declare an array of strings with initial values ["red", "green", "blue"].
// TODO

// Exercise 2
// Declare an array of numbers (empty for now).
// TODO

// Exercise 3
// Use type inference — what type does TypeScript infer for this array?
// Write the inferred type as a comment.
const fruits = ["apple", "banana", "cherry"];
// Inferred type: // TODO

// Exercise 4
// Use type inference — what type does TypeScript infer for this array?
const scores = [90, 85, 78, 92];
// Inferred type: // TODO

// ─────────────────────────────────────────────
// SECTION B — Array<T> syntax
// ─────────────────────────────────────────────

// Exercise 5
// Rewrite this array annotation using Array<T> syntax instead of T[]:
// let names: string[] = ["Alice", "Bob"];
// TODO

// Exercise 6
// Rewrite using T[] syntax (the common way):
// let values: Array<number> = [1, 2, 3];
// TODO

// ─────────────────────────────────────────────
// SECTION C — Mixed-type arrays with unions
// ─────────────────────────────────────────────

// Exercise 7
// Declare an array that holds both strings AND numbers.
// Initialize with at least one of each: ["hello", 42, "world"]
// TODO

// Exercise 8
// What type annotation would allow an array with strings, numbers, OR booleans?
// Write just the annotation (e.g., Type[]) as a comment.
// Annotation: // TODO

// ─────────────────────────────────────────────
// SECTION D — Arrays of objects (preview of interfaces)
// ─────────────────────────────────────────────

// Exercise 9
// Define a simple object and an array of those objects.
// Create an array called `people` with at least two objects:
// Each object has: { name: string, age: number }
// TODO

// Exercise 10
// Declare an array of coordinate pairs: { x: number, y: number }
// Include at least two coordinates.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Tuples (fixed-length, positional types)
// ─────────────────────────────────────────────

// Exercise 11
// Declare a tuple with exactly 2 elements: [string, number]
// Initialize with ["Frank", 30]
// TODO

// Exercise 12
// Declare a tuple with 3 elements: [string, number, boolean]
// Initialize with ["production", 5, true]
// TODO

// Exercise 13
// Access the first element of a tuple and convert to uppercase.
// (The tuple is: ["hello", 42])
let greetTuple: [string, number] = ["hello", 42];  // do not edit
// TODO: Write code that accesses greetTuple[0] and calls .toUpperCase()

// Exercise 14
// Accessing a position-specific type. What type is the second element?
// Write the type as a comment.
let response: [string, number, boolean] = ["ok", 200, true];  // do not edit
// response[1] type: // TODO

// Exercise 15
// Tuples enforce exact length. Try to declare a tuple with the wrong number of elements.
// Which of these is INVALID? (Write "INVALID" as a comment above the error line.)
let pair: [string, number] = ["hello", 42];        // do not edit
// let pair: [string, number] = ["hello"];          // TODO: is this valid?
// let pair: [string, number] = ["hello", 42, 99]; // TODO: is this valid?

// ─────────────────────────────────────────────
// SECTION F — Optional tuple elements
// ─────────────────────────────────────────────

// Exercise 16
// Declare a tuple where the second element (number) is optional: [string, number?]
// Initialize with just ["required"]
// TODO

// Exercise 17
// Declare the same tuple, but this time initialize with both elements: ["required", 42]
// TODO

// ─────────────────────────────────────────────
// SECTION G — readonly arrays
// ─────────────────────────────────────────────

// Exercise 18
// Declare a readonly array of strings.
// TODO

// Exercise 19
// Declare a readonly tuple: [string, number]
// Initialize with ["immutable", 100]
// TODO

// Exercise 20
// Why does this fail? Explain in a comment.
// (The array is readonly)
let config: readonly string[] = ["a", "b", "c"];  // do not edit
// config.push("d");  // Why does this fail? // TODO

// ─────────────────────────────────────────────
// SECTION H — Array methods (map, filter, find)
// ─────────────────────────────────────────────

// Exercise 21
// Use .map() to double each number in [1, 2, 3, 4, 5]
// Assign the result to `doubled`
const numbers = [1, 2, 3, 4, 5];
// TODO

// Exercise 22
// Use .filter() to keep only even numbers from [1, 2, 3, 4, 5, 6]
// Assign the result to `evens`
// TODO

// Exercise 23
// Use .find() to return the first number greater than 10 in [5, 10, 15, 20]
// Assign the result to `firstLarge`
// What type might `firstLarge` have if the number isn't found?
// TODO

// Exercise 24
// Use .some() to check if any element is negative: [1, 2, 3, -1, 5]
// Assign the result to `hasNegative`
// TODO

// Exercise 25
// Use .every() to check if all elements are greater than 0: [1, 2, 3]
// Assign the result to `allPositive`
// TODO
