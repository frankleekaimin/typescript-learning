// Topic 03 — Objects & Type Aliases
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Object literals and type inference
// ─────────────────────────────────────────────

// Exercise 1
// Create an object with properties: name (string), age (number), city (string)
// Let TypeScript infer the type (no annotation needed).
// TODO

// Exercise 2
// What type does TypeScript infer for this object? Write the inferred type as a comment.
const product = { title: "Laptop", price: 1200, inStock: true };
// Inferred type: // TODO

// ─────────────────────────────────────────────
// SECTION B — Explicit object type annotations
// ─────────────────────────────────────────────

// Exercise 3
// Declare an object with an explicit inline type annotation.
// Properties: id (number), email (string), verified (boolean)
// TODO

// Exercise 4
// Fix this annotation — there's a syntax error. (Hint: use semicolons or commas to separate.)
// let config: { host: string, port: number } = { host: "localhost", port: 3000 };
// TODO

// ─────────────────────────────────────────────
// SECTION C — Type aliases (type keyword)
// ─────────────────────────────────────────────

// Exercise 5
// Define a type alias `Book` with properties:
// - title (string)
// - author (string)
// - pages (number)
// TODO

// Exercise 6
// Use the `Book` type alias to create a variable.
// TODO

// Exercise 7
// Define a type alias `Point` with:
// - x (number)
// - y (number)
// Then create a Point object.
// TODO

// Exercise 8
// Create TWO different Point objects using the same type alias.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Optional properties with `?`
// ─────────────────────────────────────────────

// Exercise 9
// Define a type `Person` with:
// - name (string)
// - age (number)
// - phone (string, OPTIONAL)
// TODO

// Exercise 10
// Create a Person object WITHOUT the phone property.
// TODO

// Exercise 11
// Create a Person object WITH the phone property.
// TODO

// Exercise 12
// What type does the `phone` property have when it's optional?
// Write your answer as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION E — Readonly properties
// ─────────────────────────────────────────────

// Exercise 13
// Define a type `Secret` with readonly properties:
// - apiKey (string, readonly)
// - token (string, readonly)
// TODO

// Exercise 14
// Create a Secret object. Can you reassign a readonly property?
// Try to change apiKey and see what TypeScript says.
// TODO

// ─────────────────────────────────────────────
// SECTION F — Nested objects
// ─────────────────────────────────────────────

// Exercise 15
// Define a type `Address` with:
// - street (string)
// - city (string)
// - zipCode (string)
// TODO

// Exercise 16
// Define a type `User` with:
// - name (string)
// - address (Address type from Exercise 15)
// TODO

// Exercise 17
// Create a User object with a nested Address object.
// TODO

// Exercise 18
// Access the city property of the nested address.
// (Use the user object from Exercise 17.)
// TODO

// ─────────────────────────────────────────────
// SECTION G — Union types for properties
// ─────────────────────────────────────────────

// Exercise 19
// Define a type `ApiResponse` with:
// - statusCode (number)
// - data (string OR number) — union of string and number
// TODO

// Exercise 20
// Create an ApiResponse with statusCode: 200 and string data.
// TODO

// Exercise 21
// Create an ApiResponse with statusCode: 404 and number data.
// TODO

// ─────────────────────────────────────────────
// SECTION H — Intersection types with `&`
// ─────────────────────────────────────────────

// Exercise 22
// Define a type `HasId` with:
// - id (number)
// TODO

// Exercise 23
// Define a type `HasName` with:
// - name (string)
// TODO

// Exercise 24
// Create a type alias `Entity` that combines HasId & HasName.
// TODO

// Exercise 25
// Create an Entity object with both id and name properties.
// TODO
