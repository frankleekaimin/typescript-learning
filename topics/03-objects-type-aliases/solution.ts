// Topic 03 — Objects & Type Aliases
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Object literals and type inference
// ─────────────────────────────────────────────

// Exercise 1
let user = {
  name: "Frank",
  age: 30,
  city: "Singapore"
};

// Exercise 2
const product = { title: "Laptop", price: 1200, inStock: true };
// Inferred type: {
//   title: string;
//   price: number;
//   inStock: boolean;
// }

// ─────────────────────────────────────────────
// SECTION B — Explicit object type annotations
// ─────────────────────────────────────────────

// Exercise 3
let account: { id: number; email: string; verified: boolean } = {
  id: 1,
  email: "frank@example.com",
  verified: true
};

// Exercise 4
let config: { host: string; port: number } = { host: "localhost", port: 3000 };

// ─────────────────────────────────────────────
// SECTION C — Type aliases (type keyword)
// ─────────────────────────────────────────────

// Exercise 5
type Book = {
  title: string;
  author: string;
  pages: number;
};

// Exercise 6
let myBook: Book = {
  title: "The Pragmatic Programmer",
  author: "David Thomas",
  pages: 352
};

// Exercise 7
type Point = {
  x: number;
  y: number;
};

let origin: Point = { x: 0, y: 0 };

// Exercise 8
let p1: Point = { x: 10, y: 20 };
let p2: Point = { x: -5, y: 15 };

// ─────────────────────────────────────────────
// SECTION D — Optional properties with `?`
// ─────────────────────────────────────────────

// Exercise 9
type Person = {
  name: string;
  age: number;
  phone?: string;
};

// Exercise 10
let alice: Person = { name: "Alice", age: 25 };

// Exercise 11
let bob: Person = { name: "Bob", age: 30, phone: "555-1234" };

// Exercise 12
// Answer: string | undefined
// (When optional, the property can be the declared type OR undefined)

// ─────────────────────────────────────────────
// SECTION E — Readonly properties
// ─────────────────────────────────────────────

// Exercise 13
type Secret = {
  readonly apiKey: string;
  readonly token: string;
};

// Exercise 14
let credentials: Secret = { apiKey: "abc123", token: "xyz789" };
// credentials.apiKey = "new-key";  // ERROR: Cannot assign to 'apiKey' because it is readonly

// ─────────────────────────────────────────────
// SECTION F — Nested objects
// ─────────────────────────────────────────────

// Exercise 15
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

// Exercise 16
type Employee = {
  name: string;
  address: Address;
};

// Exercise 17
let employee: Employee = {
  name: "Charlie",
  address: {
    street: "123 Main St",
    city: "Singapore",
    zipCode: "123456"
  }
};

// Exercise 18
console.log(employee.address.city);  // "Singapore"

// ─────────────────────────────────────────────
// SECTION G — Union types for properties
// ─────────────────────────────────────────────

// Exercise 19
type ApiResponse = {
  statusCode: number;
  data: string | number;
};

// Exercise 20
let response1: ApiResponse = { statusCode: 200, data: "OK" };

// Exercise 21
let response2: ApiResponse = { statusCode: 404, data: 1 };

// ─────────────────────────────────────────────
// SECTION H — Intersection types with `&`
// ─────────────────────────────────────────────

// Exercise 22
type HasId = {
  id: number;
};

// Exercise 23
type HasName = {
  name: string;
};

// Exercise 24
type Entity = HasId & HasName;

// Exercise 25
let entity: Entity = { id: 1, name: "Entity" };
