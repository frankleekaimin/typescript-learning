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
// TODO

// Exercise 2
// Declare a function `greet` that takes a name (string) and returns a greeting string.
// TODO

// Exercise 3
// Declare a function `isEven` that takes a number and returns a boolean.
// TODO

// Exercise 4
// What would be the return type of this function?
// function getValue(): ??? { return 42; }
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION B — Arrow functions
// ─────────────────────────────────────────────

// Exercise 5
// Rewrite the add function as an arrow function.
// TODO

// Exercise 6
// Create an arrow function `double` that takes a number and returns it doubled.
// Use the shorthand syntax (one-liner).
// TODO

// Exercise 7
// Create an arrow function `greetFormal` that takes a name and returns "Good morning, {name}".
// TODO

// ─────────────────────────────────────────────
// SECTION C — Optional parameters
// ─────────────────────────────────────────────

// Exercise 8
// Declare a function `describe` that takes:
// - name (string, required)
// - age (number, OPTIONAL)
// Returns a string description. Include age in the description only if provided.
// TODO

// Exercise 9
// Call the describe function with just the name.
// TODO

// Exercise 10
// Call the describe function with both name and age.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Default parameters
// ─────────────────────────────────────────────

// Exercise 11
// Declare a function `welcome` that takes:
// - name (string, required)
// - greeting (string, DEFAULT = "Welcome")
// TODO

// Exercise 12
// Call welcome with just the name.
// TODO

// Exercise 13
// Call welcome with a custom greeting.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Rest parameters
// ─────────────────────────────────────────────

// Exercise 14
// Declare a function `sumAll` that takes any number of numbers and returns their sum.
// Use rest parameters (...numbers).
// TODO

// Exercise 15
// Call sumAll with several numbers: 1, 2, 3, 4, 5
// TODO

// Exercise 16
// Declare a function `joinWords` that takes any number of strings and joins them with spaces.
// Example: joinWords("Hello", "TypeScript", "World") => "Hello TypeScript World"
// TODO

// ─────────────────────────────────────────────
// SECTION F — Function types
// ─────────────────────────────────────────────

// Exercise 17
// Define a function type `Calculator` that takes two numbers and returns a number.
// TODO

// Exercise 18
// Use the Calculator type from Exercise 17 to declare a multiply function.
// TODO

// Exercise 19
// Define a function type `Logger` that takes a string and returns void.
// TODO

// Exercise 20
// Implement a Logger function that logs the message.
// TODO

// ─────────────────────────────────────────────
// SECTION G — Callbacks
// ─────────────────────────────────────────────

// Exercise 21
// Declare a function `applyOperation` that takes:
// - two numbers (a, b)
// - a callback of type (number, number) => number
// Returns the result of applying the callback to a and b.
// TODO

// Exercise 22
// Call applyOperation with add as the callback (from Exercise 1).
// Store the result in a variable.
// TODO

// Exercise 23
// Call applyOperation with a multiply callback (create it inline).
// TODO

// ─────────────────────────────────────────────
// SECTION H — Functions returning functions
// ─────────────────────────────────────────────

// Exercise 24
// Declare a function `makeMultiplier` that:
// - takes a factor (number)
// - returns a function that takes a number and returns number
// Example: const double = makeMultiplier(2); double(5) => 10
// TODO

// Exercise 25
// Use makeMultiplier to create a `triple` function and call it with 4.
// TODO
