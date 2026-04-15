// Topic 06 — Literal Types & Type Narrowing
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Literal types
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable with literal type "red" (not string, but exactly "red").
// TODO

// Exercise 2
// Declare a variable with literal type 200 (not number, but exactly 200).
// TODO

// Exercise 3
// Declare a variable with literal type true (not boolean, but exactly true).
// TODO

// Exercise 4
// What's the difference between `let x: string` and `let x: "hello"`?
// Write your answer as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION B — Literal unions
// ─────────────────────────────────────────────

// Exercise 5
// Define a type `Direction` as a union of literal strings:
// "north" | "south" | "east" | "west"
// TODO

// Exercise 6
// Define a type `HttpStatus` as a union of literal numbers:
// 200 | 201 | 400 | 404 | 500
// TODO

// Exercise 7
// Create a variable of type Direction and assign "north".
// TODO

// Exercise 8
// Create a variable of type HttpStatus and assign 404.
// TODO

// ─────────────────────────────────────────────
// SECTION C — Type narrowing with literals
// ─────────────────────────────────────────────

// Exercise 9
// Write a function `respondToDirection` that takes a Direction (from Exercise 5).
// If "north", return "Go north!". If "south", return "Go south!".
// (Handle all four directions.)
// TODO

// Exercise 10
// Write a function `describeStatus` that takes an HttpStatus and returns a description.
// 200 => "OK", 201 => "Created", 400 => "Bad Request", 404 => "Not Found", 500 => "Server Error"
// TODO

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions with literals
// ─────────────────────────────────────────────

// Exercise 11
// Define a discriminated union with a literal "kind" property:
// - `DownloadResponse` with kind: "download" and fileName: string
// - `UploadResponse` with kind: "upload" and success: boolean
// Create a union type `Response`.
// TODO

// Exercise 12
// Write a function that handles a Response (from Exercise 11).
// Use the kind property to narrow and return appropriate message.
// TODO

// Exercise 13
// Create a DownloadResponse and pass to the function from Exercise 12.
// TODO

// Exercise 14
// Create an UploadResponse and pass to the function from Exercise 12.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Type guards with predicates
// ─────────────────────────────────────────────

// Exercise 15
// Write a type guard function `isString` that checks if a value is a string.
// Use the `value is string` syntax.
// TODO

// Exercise 16
// Write a type guard `isNumber` that checks if a value is a number.
// TODO

// Exercise 17
// Use the isString guard (from Exercise 15) to safely call .toUpperCase().
// Create a variable of type unknown, check it, then use it.
// TODO

// ─────────────────────────────────────────────
// SECTION F — Exhaustiveness checking
// ─────────────────────────────────────────────

// Exercise 18
// Define a type `Color` with literals: "red" | "green" | "blue"
// Write a function that returns a hex code for each color.
// Add an exhaustiveness check at the end (use never).
// TODO

// Exercise 19
// (No new code needed — explain exhaustiveness in comments)
// When you use `const x: never = value`, what does it do?
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION G — Narrowing with property checks
// ─────────────────────────────────────────────

// Exercise 20
// Define two types:
// - `Email` with address: string
// - `Phone` with number: string
// Create a union `Contact` = Email | Phone
// TODO

// Exercise 21
// Write a function that uses property checks ("address" in contact) to narrow.
// Return the appropriate contact info.
// TODO

// Exercise 22
// Create an Email contact and test the function from Exercise 21.
// TODO

// Exercise 23
// Create a Phone contact and test the function from Exercise 21.
// TODO

// ─────────────────────────────────────────────
// SECTION H — Practical narrowing patterns
// ─────────────────────────────────────────────

// Exercise 24
// Define an `Event` union type with different kinds:
// - Click event with x (number), y (number)
// - KeyPress event with key (string)
// Write a function that handles each event type.
// TODO

// Exercise 25
// Define a type for API responses that can be:
// - Success with status: "success", data: any
// - Error with status: "error", message: string
// - Loading with status: "loading"
// Write a function that handles each case and returns a string.
// TODO
