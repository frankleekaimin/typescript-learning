// Topic 09 — Enums
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic numeric enums
// ─────────────────────────────────────────────

// Exercise 1
// Define a numeric enum `Color` with Red, Green, Blue (auto-incrementing from 0).
// TODO

// Exercise 2
// Create a variable of type Color and assign Color.Red.
// TODO

// Exercise 3
// Access the numeric value of Color.Green and log it.
// TODO

// Exercise 4
// Define a numeric enum `Day` starting at 1 (Monday = 1, Tuesday = 2, ..., Sunday = 7).
// TODO

// Exercise 5
// Create a variable for Friday and log its numeric value.
// TODO

// ─────────────────────────────────────────────
// SECTION B — String enums
// ─────────────────────────────────────────────

// Exercise 6
// Define a string enum `Status` with: Pending = "PENDING", Active = "ACTIVE", Inactive = "INACTIVE".
// TODO

// Exercise 7
// Create a variable of type Status and assign Status.Pending.
// TODO

// Exercise 8
// Log the value of Status.Active (should be the string "ACTIVE").
// TODO

// Exercise 9
// Define a string enum `Direction` with North, South, East, West (all uppercase).
// TODO

// Exercise 10
// Create a variable of type Direction and assign Direction.North.
// TODO

// ─────────────────────────────────────────────
// SECTION C — Reverse mapping and enum operations
// ─────────────────────────────────────────────

// Exercise 11
// Define a numeric enum `Priority` with High = 1, Medium = 2, Low = 3.
// Use reverse mapping to get the name from the value.
// TODO

// Exercise 12
// Access Priority[1] to get the name "High" (reverse mapping).
// TODO

// Exercise 13
// Compare two enum values for equality.
// TODO

// Exercise 14
// Write a function that takes a Status enum and returns a message.
// TODO

// Exercise 15
// Use a switch statement on an enum value and handle each case.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Const enums
// ─────────────────────────────────────────────

// Exercise 16
// Define a const enum `LogLevel` with Debug = 0, Info = 1, Warn = 2, Error = 3.
// TODO

// Exercise 17
// Create a variable of type LogLevel and assign LogLevel.Info.
// TODO

// Exercise 18
// Explain: What's the difference between `enum` and `const enum`?
// Answer: // TODO

// Exercise 19
// Define another const enum `HttpMethod` with GET, POST, PUT, DELETE.
// TODO

// Exercise 20
// Use the const enum in a function parameter and call the function.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Practical enum patterns
// ─────────────────────────────────────────────

// Exercise 21
// Define a string enum `UserRole` with Admin, Editor, Viewer.
// Write a function that checks if a role can delete (only Admin).
// TODO

// Exercise 22
// Define an enum `PaymentMethod` with Credit, Debit, PayPal.
// Create a function that returns a description for each method.
// TODO

// Exercise 23
// Define a string enum `RequestStatus` with Pending, Success, Error.
// Create objects representing different request states using this enum.
// TODO

// Exercise 24
// Write a function that takes a RequestStatus and returns an appropriate HTTP status code.
// TODO

// Exercise 25
// Explain: When should you use an enum vs a literal union type?
// Answer: // TODO
