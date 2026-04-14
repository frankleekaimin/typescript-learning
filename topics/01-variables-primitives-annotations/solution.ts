// Topic 01 — Variables, Primitives & Type Annotations
// Solution file

// ─────────────────────────────────────────────
// SECTION A — const vs let
// ─────────────────────────────────────────────

// Exercise 1
const language = "TypeScript";

// Exercise 2
let score = 0;

// Exercise 3
let city = "Taipei";
city = "Kaohsiung";

// Exercise 4
let pi = 3.14;
pi = 3.14159;

// ─────────────────────────────────────────────
// SECTION B — Primitive type annotations
// ─────────────────────────────────────────────

// Exercise 5
let username: string = "frank";

// Exercise 6
let age: number = 28;

// Exercise 7
let isActive: boolean = true;

// Exercise 8
let greeting: string;

// Exercise 9
let maxItems: number;

// Exercise 10
let label: string;
label = "hello";

// ─────────────────────────────────────────────
// SECTION C — Type inference (no annotation needed)
// ─────────────────────────────────────────────

// Exercise 11
let product = "laptop";

// Exercise 12
let quantity = 5;

// Exercise 13
let isAvailable = false;

// Exercise 14
const result = 10 + 5;
// Answer: number

// ─────────────────────────────────────────────
// SECTION D — Avoiding `any`
// ─────────────────────────────────────────────

// Exercise 15
let playerName: string = "Alex";

// Exercise 16
let level: number = 1;

// Exercise 17
function greet(name: string): string {
  return "Hello, " + name;
}

// Exercise 18
// Answer: `any` is dangerous because it disables all type checking on a value.
// This means you could assign incompatible values, call non-existent methods,
// or make mistakes that would normally be caught at compile time. This defeats
// the purpose of using TypeScript for safety.

// ─────────────────────────────────────────────
// SECTION E — null and undefined (strictNullChecks)
// ─────────────────────────────────────────────

// Exercise 19
let nickname: string | null = null;

// Exercise 20
let middleName: string | undefined;

// Exercise 21
let title: string | null = null as string | null;
if (title !== null) {
  console.log(title.toUpperCase());
}

// ─────────────────────────────────────────────
// SECTION F — typeof at runtime
// ─────────────────────────────────────────────

// Exercise 22
const typeOfNumber: string = "number";

// Exercise 23
const typeOfString: string = "string";

// Exercise 24
function logIfNumber(value: unknown): void {
  if (typeof value === "number") {
    console.log("Number:", value);
  }
}

// Exercise 25
// Answer: `typeof null` returns "object". This is surprising because `null` is not
// an object in conceptual terms — it's a distinct primitive value. This quirk exists
// for historical reasons in JavaScript and remains unfixed for backwards compatibility.
