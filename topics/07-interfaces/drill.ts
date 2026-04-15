// Topic 07 — Interfaces
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic interface syntax
// ─────────────────────────────────────────────

// Exercise 1
// Define an interface `Product` with properties: name (string), price (number).
// TODO

// Exercise 2
// Create a variable of type Product and assign values.
// TODO

// Exercise 3
// Define an interface `Book` with properties: title (string), author (string), pages (number).
// TODO

// Exercise 4
// Create a Book object and assign it to a variable.
// TODO

// Exercise 5
// What's the difference between `type` and `interface`?
// Write your answer as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION B — Optional and readonly properties
// ─────────────────────────────────────────────

// Exercise 6
// Define an interface `Config` with:
// - host (required string)
// - port (optional number)
// - debug (optional boolean)
// TODO

// Exercise 7
// Create a Config with only the host property.
// TODO

// Exercise 8
// Create a Config with all properties.
// TODO

// Exercise 9
// Define an interface `Coordinate` with readonly properties x and y (both numbers).
// TODO

// Exercise 10
// Create a Coordinate and try to modify a property (this should error).
// Write the error as a comment instead of actual code.
// Error: // TODO

// ─────────────────────────────────────────────
// SECTION C — Methods in interfaces
// ─────────────────────────────────────────────

// Exercise 11
// Define an interface `Calculator` with methods:
// - add(a: number, b: number): number
// - subtract(a: number, b: number): number
// TODO

// Exercise 12
// Create an object of type Calculator that implements add and subtract.
// TODO

// Exercise 13
// Define an interface `Logger` with a method log(message: string): void.
// TODO

// Exercise 14
// Create a Logger object and test it.
// TODO

// Exercise 15
// Define an interface `Stringifiable` with a method toString(): string.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Extending interfaces
// ─────────────────────────────────────────────

// Exercise 16
// Define a base interface `Animal` with properties: name (string), age (number).
// Define an interface `Dog` that extends Animal and adds: breed (string).
// TODO

// Exercise 17
// Create a Dog object with all properties.
// TODO

// Exercise 18
// Define interfaces `Swimmer` and `Flyer`, each with one method.
// Then define `Duck` that extends both.
// TODO

// Exercise 19
// Create a Duck object and implement all required methods.
// TODO

// Exercise 20
// Explain: What does `extends` do in interfaces?
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION E — Generic interfaces
// ─────────────────────────────────────────────

// Exercise 21
// Define a generic interface `Container<T>` with:
// - value: T
// - getValue(): T
// TODO

// Exercise 22
// Create a Container<number> and a Container<string>.
// TODO

// Exercise 23
// Define a generic interface `Repository<T>` with methods:
// - get(id: number): T | null
// - add(item: T): void
// TODO

// Exercise 24
// Define a User type, then create a Repository<User> object.
// TODO

// Exercise 25
// Define an interface `ApiResponse<T>` with:
// - status: "success" | "error"
// - data?: T
// - error?: string
// Create a response for a User type.
// TODO
