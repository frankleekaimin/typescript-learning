// Topic 01 — Variables, Primitives & Type Annotations
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — const vs let
// ─────────────────────────────────────────────

// Exercise 1
// Declare a constant called `language` with the value "TypeScript".
// TODO
const language = "TypeScript"; // example answer hidden — write your own above

// Exercise 2
// Declare a variable called `score` that starts at 0 and can be reassigned later.
// TODO

// Exercise 3
// The line below will cause a compile error. Fix it by changing ONE keyword.
var city = "Taipei";   // TODO: replace `var` with the correct keyword
city = "Kaohsiung";

// Exercise 4
// Identify the error: why does this fail?  Fix it without changing the value.
// const pi = 3.14;
// pi = 3.14159;  // TODO: uncomment both lines and fix the declaration

// ─────────────────────────────────────────────
// SECTION B — Primitive type annotations
// ─────────────────────────────────────────────

// Exercise 5
// Annotate `username` as a string.
let username /* TODO: add annotation here */ = "frank";

// Exercise 6
// Annotate `age` as a number.
let age /* TODO */ = 28;

// Exercise 7
// Annotate `isActive` as a boolean.
let isActive /* TODO */ = true;

// Exercise 8
// Declare a variable `greeting` of type string WITHOUT giving it an initial value.
// (An annotation is required here — TypeScript cannot infer from nothing.)
// TODO

// Exercise 9
// Declare a variable `maxItems` of type number WITHOUT giving it an initial value.
// TODO

// Exercise 10
// Which annotation is missing? Fix the line so TypeScript knows the type.
let label /* TODO */;
label = "hello";

// ─────────────────────────────────────────────
// SECTION C — Type inference (no annotation needed)
// ─────────────────────────────────────────────

// Exercise 11
// Remove the redundant annotation — TypeScript can infer this type on its own.
let product: string = "laptop";   // TODO: remove the `: string`

// Exercise 12
// Remove the redundant annotation.
let quantity: number = 5;   // TODO: remove the `: number`

// Exercise 13
// Remove the redundant annotation.
let isAvailable: boolean = false;   // TODO: remove the `: boolean`

// Exercise 14
// TypeScript infers the type from the right-hand side.
// Without adding an annotation, what type does TypeScript assign to `result`?
// Write your answer as a comment below.
const result = 10 + 5;
// Answer: TODO

// ─────────────────────────────────────────────
// SECTION D — Avoiding `any`
// ─────────────────────────────────────────────

// Exercise 15
// The annotation below uses `any`. Replace it with the correct primitive type.
let playerName: any = "Alex";   // TODO: fix the annotation

// Exercise 16
// Same problem — replace `any` with the right type.
let level: any = 1;   // TODO: fix the annotation

// Exercise 17
// This function parameter is typed as `any`.
// Change the annotation so it only accepts strings.
function greet(name: any): string {   // TODO: fix the parameter type
  return "Hello, " + name;
}

// Exercise 18
// Explain in a comment: why is `any` dangerous?
// TODO (your explanation here)

// ─────────────────────────────────────────────
// SECTION E — null and undefined (strictNullChecks)
// ─────────────────────────────────────────────

// Exercise 19
// The assignment below is an error with `strictNullChecks` on.
// Fix the type annotation so it accepts both string and null.
let nickname: string = null;   // TODO: fix the annotation

// Exercise 20
// Declare `middleName` as either a string or undefined.
// TODO

// Exercise 21
// Write a guard that checks for null before using `title`.
// Fill in the if-condition so the console.log only runs when title is not null.
let title: string | null = null;
if (/* TODO */) {
  console.log(title.toUpperCase());
}

// ─────────────────────────────────────────────
// SECTION F — typeof at runtime
// ─────────────────────────────────────────────

// Exercise 22
// What does `typeof 42` return?  Write your answer as a string literal below.
const typeOfNumber: string = /* TODO */ "";

// Exercise 23
// What does `typeof "hello"` return?
const typeOfString: string = /* TODO */ "";

// Exercise 24
// Fill in the typeof check so the function only logs when value is a number.
function logIfNumber(value: unknown): void {
  if (typeof value === /* TODO */ "") {
    console.log("Number:", value);
  }
}

// Exercise 25
// Famous JS quirk — what does `typeof null` return?
// Write your answer as a comment and explain why it is surprising.
// TODO
