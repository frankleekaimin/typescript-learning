// Topic 05 — Union & Intersection Types
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic union types
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable that can be either a string or a number.
// TODO

// Exercise 2
// Assign a string value to a string | number union.
// TODO

// Exercise 3
// Assign a number value to a string | number union.
// TODO

// Exercise 4
// Write a function that accepts string | number and returns a string.
// TODO

// ─────────────────────────────────────────────
// SECTION B — Type narrowing with typeof
// ─────────────────────────────────────────────

// Exercise 5
// Write a function `processId` that takes id: string | number.
// If id is a string, return it in uppercase.
// If id is a number, return it as a string (use toString()).
// TODO

// Exercise 6
// Write a function `printValue` that takes value: string | boolean.
// If string, print it as-is.
// If boolean, print "true" or "false".
// (Use typeof to narrow.)
// TODO

// Exercise 7
// What type guard would you use to check if a value is a string?
// Write the check as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION C — Union types with objects
// ─────────────────────────────────────────────

// Exercise 8
// Define two types:
// - `Circle` with properties: radius (number)
// - `Square` with properties: side (number)
// Then create a union type `Shape` that is Circle | Square.
// TODO

// Exercise 9
// Create a Circle object of type Shape.
// TODO

// Exercise 10
// Create a Square object of type Shape.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions
// ─────────────────────────────────────────────

// Exercise 11
// Define a discriminated union for API responses:
// - `SuccessResponse` with properties: status: "success", data: string
// - `ErrorResponse` with properties: status: "error", message: string
// Create a union type `Response` = SuccessResponse | ErrorResponse
// TODO

// Exercise 12
// Write a function that handles a Response (from Exercise 11).
// Use the status field to narrow and return either the data or message.
// TODO

// Exercise 13
// Create a SuccessResponse object and pass it to the function from Exercise 12.
// TODO

// Exercise 14
// Create an ErrorResponse object and pass it to the function from Exercise 12.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Intersection types
// ─────────────────────────────────────────────

// Exercise 15
// Define two types:
// - `Person` with properties: name (string), age (number)
// - `Employee` with properties: employeeId (number), department (string)
// Create an intersection type `Staff` = Person & Employee
// TODO

// Exercise 16
// Create a Staff object with all required properties.
// TODO

// Exercise 17
// Add a third type `Manager` with properties: teamSize (number).
// Create an intersection `TeamLead` = Person & Employee & Manager
// TODO

// Exercise 18
// Create a TeamLead object with all properties.
// TODO

// ─────────────────────────────────────────────
// SECTION F — Unions with multiple types
// ─────────────────────────────────────────────

// Exercise 19
// Create a union of three types: string | number | boolean.
// Write a function that narrows all three cases and returns a string.
// TODO

// Exercise 20
// What happens if you try to access a property that only exists on one union member?
// Example: (value: string | number).toUpperCase()
// Write your answer as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION G — Property checks for narrowing
// ─────────────────────────────────────────────

// Exercise 21
// Define two types with different properties:
// - `Book` with title (string), author (string)
// - `Movie` with title (string), director (string)
// Create a union `Media` = Book | Movie
// TODO

// Exercise 22
// Write a function that narrows the union using property checks.
// Check if the object has "author" (Book) or "director" (Movie).
// TODO

// Exercise 23
// Create a Book object and test the function from Exercise 22.
// TODO

// Exercise 24
// Create a Movie object and test the function from Exercise 22.
// TODO

// ─────────────────────────────────────────────
// SECTION H — Practical union usage
// ─────────────────────────────────────────────

// Exercise 25
// Define a union for different payment methods:
// - `CreditCard` with cardNumber (string), cvv (number)
// - `PayPal` with email (string)
// Create a function that processes payment and returns a success message.
// Use narrowing to handle each payment type differently.
// TODO
