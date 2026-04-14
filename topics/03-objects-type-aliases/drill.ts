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
let user = {
    name: "Frank",
    age: 30,
    isActive: true
}

// Exercise 2
// What type does TypeScript infer for this object? Write the inferred type as a comment.
const product = { title: "Laptop", price: 1200, inStock: true };
// Inferred type: 
// {
//     title: string;
//     price: number;
//     inStock: boolean;
// }

// ─────────────────────────────────────────────
// SECTION B — Explicit object type annotations
// ─────────────────────────────────────────────

// Exercise 3
// Declare an object with an explicit inline type annotation.
// Properties: id (number), email (string), verified (boolean)
type aUser = {
    id: number;
    email: string;
    verified: boolean;
}

// Exercise 4
// Fix this annotation — there's a syntax error. (Hint: use semicolons or commas to separate.)
// let config: { host: string, port: number } = { host: "localhost", port: 3000 };
let config: { host: string; port: number } = { host: "localhost", port: 3000 };

// ─────────────────────────────────────────────
// SECTION C — Type aliases (type keyword)
// ─────────────────────────────────────────────

// Exercise 5
// Define a type alias `Book` with properties:
// - title (string)
// - author (string)
// - pages (number)
type Book = {
    title: string;
    author: string;
    pages: number;
}

// Exercise 6
// Use the `Book` type alias to create a variable.
let story: Book;

// Exercise 7
// Define a type alias `Point` with:
// - x (number)
// - y (number)
// Then create a Point object.
type Point = {
    x: number;
    y: number;
}
let Point1: Point;

// Exercise 8
// Create TWO different Point objects using the same type alias.
let Point2:Point;

// ─────────────────────────────────────────────
// SECTION D — Optional properties with `?`
// ─────────────────────────────────────────────

// Exercise 9
// Define a type `Person` with:
// - name (string)
// - age (number)
// - phone (string, OPTIONAL)
type Person = {
    name: string;
    age: number;
    phone?: string;
}

// Exercise 10
// Create a Person object WITHOUT the phone property.
let Alan: Person = {name: "Alan", age: 30}

// Exercise 11
// Create a Person object WITH the phone property.
let Ben: Person = {name: "Ben", age: 30, phone: "12345678"}

// Exercise 12
// What type does the `phone` property have when it's optional?
// Write your answer as a comment.
// Answer: undefined

// ─────────────────────────────────────────────
// SECTION E — Readonly properties
// ─────────────────────────────────────────────

// Exercise 13
// Define a type `Secret` with readonly properties:
// - apiKey (string, readonly)
// - token (string, readonly)
type Secret = {
    readonly apiKey: string;
    readonly token: string
}

// Exercise 14
// Create a Secret object. Can you reassign a readonly property?
// Try to change apiKey and see what TypeScript says.
let shh:Secret = {apiKey: "a", token: "b"};
//shh["apiKey"] = "c"; // Returns "Cannot assign to 'apiKey' because it is a read-only property"

// ─────────────────────────────────────────────
// SECTION F — Nested objects
// ─────────────────────────────────────────────

// Exercise 15
// Define a type `Address` with:
// - street (string)
// - city (string)
// - zipCode (string)
type Address = {
    street: string;
    city: string;
    zipcode: string;
}

// Exercise 16
// Define a type `User` with:
// - name (string)
// - address (Address type from Exercise 15)
type User = {
    name: string;
    address: Address;
}

// Exercise 17
// Create a User object with a nested Address object.
let Charlie:User = {
    name: "Charlie",
    address: {
    street: "123 Main St",
    city: "Singapore",
    zipcode: "123456"
    }
}

// Exercise 18
// Access the city property of the nested address.
// (Use the user object from Exercise 17.)
console.log(Charlie.address.city);

// ─────────────────────────────────────────────
// SECTION G — Union types for properties
// ─────────────────────────────────────────────

// Exercise 19
// Define a type `ApiResponse` with:
// - statusCode (number)
// - data (string OR number) — union of string and number
type ApiResponse = {
    statusCode: number,
    data: string|number;
}

// Exercise 20
// Create an ApiResponse with statusCode: 200 and string data.
let response: ApiResponse = {statusCode: 200, data: "OK"}

// Exercise 21
// Create an ApiResponse with statusCode: 404 and number data.
let response2: ApiResponse = {statusCode: 404, data: 1}

// ─────────────────────────────────────────────
// SECTION H — Intersection types with `&`
// ─────────────────────────────────────────────

// Exercise 22
// Define a type `HasId` with:
// - id (number)
type HasId = {id: number}

// Exercise 23
// Define a type `HasName` with:
// - name (string)
type HasName = {name: string}

// Exercise 24
// Create a type alias `Entity` that combines HasId & HasName.
type Entity = HasId & HasName;

// Exercise 25
// Create an Entity object with both id and name properties.
let Dennis: Entity = {id: 123, name: "Dennis"}
