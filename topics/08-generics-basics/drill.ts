// Topic 08 — Generics: Basics
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic generic functions
// ─────────────────────────────────────────────

// Exercise 1
// Write a generic function `identity<T>` that takes a value and returns it unchanged.
// TODO

// Exercise 2
// Call identity with a number, string, and boolean to test it.
// TODO

// Exercise 3
// Write a generic function `getFirst<T>` that returns the first element of an array.
// TODO

// Exercise 4
// Write a generic function `getLast<T>` that returns the last element of an array.
// TODO

// Exercise 5
// Write a generic function `reverse<T>` that reverses an array and returns it.
// TODO

// ─────────────────────────────────────────────
// SECTION B — Generic types and constraints
// ─────────────────────────────────────────────

// Exercise 6
// Define a generic type `Box<T>` with a single property `value: T`.
// TODO

// Exercise 7
// Create a Box<number> and a Box<string>.
// TODO

// Exercise 8
// Write a generic function that takes a Box<T> and returns its value.
// TODO

// Exercise 9
// Define a generic type `Response<T>` with:
// - success (boolean)
// - data (optional T)
// - error (optional string)
// TODO

// Exercise 10
// Create a Response<number> for success and an error Response.
// TODO

// ─────────────────────────────────────────────
// SECTION C — Constraints
// ─────────────────────────────────────────────

// Exercise 11
// Write a function `getLength<T extends { length: number }>` that returns the length.
// TODO

// Exercise 12
// Test getLength with a string, array, and object with length property.
// TODO

// Exercise 13
// Define an interface `HasName` with a name property.
// Write a function `getName<T extends HasName>` that returns the name.
// TODO

// Exercise 14
// Create objects that satisfy HasName and test the getName function.
// TODO

// Exercise 15
// Write a function `getProperty<T>` that gets a property value by key.
// Make sure the key must be a valid property of T using `keyof`.
// TODO

// ─────────────────────────────────────────────
// SECTION D — Multiple type variables
// ─────────────────────────────────────────────

// Exercise 16
// Write a function `pair<T, U>` that takes two values and returns them as a tuple [T, U].
// TODO

// Exercise 17
// Call pair with different type combinations.
// TODO

// Exercise 18
// Write a function `merge<T, U>` that takes two objects and returns them combined.
// TODO

// Exercise 19
// Write a function `map<T, U>` that takes an array of T and a transform function,
// returning an array of U.
// TODO

// Exercise 20
// Test the map function by converting an array of numbers to strings.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Advanced patterns
// ─────────────────────────────────────────────

// Exercise 21
// Define a generic type `Result<T>` as a discriminated union:
// - Success with data: T
// - Failure with error: string
// TODO

// Exercise 22
// Write a function that handles a Result<T> and returns a message.
// TODO

// Exercise 23
// Write a generic function `filter<T>` that takes an array and a predicate,
// returning a filtered array.
// TODO

// Exercise 24
// Write a generic function `findById<T extends { id: number }>` that finds an item by id.
// TODO

// Exercise 25
// Write a generic function `pick<T, K extends keyof T>` that extracts specific properties.
// Hint: return an object with only the picked properties.
// TODO
