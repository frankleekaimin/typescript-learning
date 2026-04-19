// Topic 11 — Type Assertions & `unknown`
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — The `unknown` type
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable of type `unknown` and assign a string to it.
// TODO

// Exercise 2
// Declare a variable of type `unknown` and assign a number to it.
// TODO

// Exercise 3
// Try to call .toUpperCase() on an unknown string WITHOUT narrowing.
// Write the TypeScript error as a comment instead of actual code.
// Error: // TODO

// Exercise 4
// Now do it correctly: narrow the unknown variable from Exercise 1 with typeof,
// then call .toUpperCase() inside the if block.
// TODO

// Exercise 5
// What is the difference between `any` and `unknown`?
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION B — Type assertions with `as`
// ─────────────────────────────────────────────

// Exercise 6
// Declare an `unknown` variable and assign a string value.
// Use `as string` to assert the type, then call .toUpperCase() on it.
// TODO

// Exercise 7
// Declare an `unknown` variable and assign a number.
// Assert it as a number and call .toFixed(2) on it.
// TODO

// Exercise 8
// Why is this dangerous?
//   let x: unknown = 42;
//   let s = x as string;
//   s.toUpperCase();
// Write your answer as a comment.
// Answer: // TODO

// Exercise 9
// Use a type assertion to type the result of this function call correctly.
// The function below returns `unknown` — assert it as { name: string }.
function getUser(): unknown {
  return { name: "Alice" };
}
// TODO: call getUser(), assert the type, then log the name

// Exercise 10
// What does `as unknown as T` do, and when might you use it?
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION C — Non-null assertion `!`
// ─────────────────────────────────────────────

// Exercise 11
// The function below returns string | null.
// Use the non-null assertion operator to treat the result as always a string.
function findName(): string | null {
  return "Alice";
}
// TODO

// Exercise 12
// Now do Exercise 11 the safe way — use an `if` check instead of `!`.
// TODO

// Exercise 13
// When is `!` acceptable to use? Write your answer as a comment.
// Answer: // TODO

// Exercise 14
// The variable below is string | undefined. Use `!` to assert it's defined,
// then call .toLowerCase() on it.
let maybeStr: string | undefined = "HELLO";
// TODO

// Exercise 15
// Rewrite Exercise 14 without `!`, using a proper null check.
// TODO

// ─────────────────────────────────────────────
// SECTION D — `unknown` in functions
// ─────────────────────────────────────────────

// Exercise 16
// Write a function `stringify(value: unknown): string` that:
// - returns the string as-is if it's a string
// - converts it with .toString() if it's a number
// - returns "true" or "false" if it's a boolean
// - returns "unknown" for anything else
// TODO

// Exercise 17
// Test stringify with a string, number, boolean, and object.
// TODO

// Exercise 18
// Write a function `isObject(value: unknown): value is object` that checks
// if a value is a non-null object.
// TODO

// Exercise 19
// Write a function `hasProperty(value: unknown, key: string): boolean`
// that checks if a value is an object with that property.
// TODO

// Exercise 20
// Use hasProperty to safely read a property from an unknown value.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Practical patterns
// ─────────────────────────────────────────────

// Exercise 21
// The function below returns unknown (simulating an API response).
// Safely extract and log the `title` property using narrowing + assertion.
function fetchPost(): unknown {
  return { title: "Hello World", views: 100 };
}
// TODO

// Exercise 22
// Write a function `parseNumber(value: unknown): number | null` that:
// - returns the number if value is a number
// - parses and returns a number if value is a numeric string (use Number())
// - returns null otherwise
// TODO

// Exercise 23
// Test parseNumber with: 42, "3.14", "hello", true.
// TODO

// Exercise 24
// Explain: why should you prefer `unknown` over `any` for function parameters
// that accept arbitrary input?
// Answer: // TODO

// Exercise 25
// Write a function `safeJsonParse(json: string): unknown` that wraps JSON.parse.
// Then call it and safely access a property from the result.
// TODO
