// Topic 11 — Type Assertions & `unknown`
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — The `unknown` type
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable of type `unknown` and assign a string to it.
let value: unknown = "hello"

// Exercise 2
// Declare a variable of type `unknown` and assign a number to it.
let value2: unknown = 42

// Exercise 3
// Try to call .toUpperCase() on an unknown string WITHOUT narrowing.
// Write the TypeScript error as a comment instead of actual code.
// Error: 'value' is of type 'unknown'.

// Exercise 4
// Now do it correctly: narrow the unknown variable from Exercise 1 with typeof,
// then call .toUpperCase() inside the if block.
if (typeof value === "string") {value.toUpperCase()}

// Exercise 5
// What is the difference between `any` and `unknown`?
// Answer: any doesn't require narrowing before use, bypassing typescript checks and is thus dangerous

// ─────────────────────────────────────────────
// SECTION B — Type assertions with `as`
// ─────────────────────────────────────────────

// Exercise 6
// Declare an `unknown` variable and assign a string value.
// Use `as string` to assert the type, then call .toUpperCase() on it.
let value3: unknown = "hello"
let value4 = value3 as string
value4.toUpperCase()

// Exercise 7
// Declare an `unknown` variable and assign a number.
// Assert it as a number and call .toFixed(2) on it.
let value5: unknown = 1.234
let value6 = value5 as number
value6.toFixed(2)

// Exercise 8
// Why is this dangerous?
//   let x: unknown = 42;
//   let s = x as string;
//   s.toUpperCase();
// Write your answer as a comment.
// Answer: We are overriding Typescript's judgement. If x is not a string, we might run into issues.

// Exercise 9
// Use a type assertion to type the result of this function call correctly.
// The function below returns `unknown` — assert it as { name: string }.
function getUser(): unknown {
  return { name: "Alice" };
}
// TODO: call getUser(), assert the type, then log the name
let alice = getUser() as {name: string}
console.log(alice.name)

// Exercise 10
// What does `as unknown as T` do, and when might you use it?
// Answer: It allows us to assert completely unrelated types, and might be used to override a known issue during compilation.

// ─────────────────────────────────────────────
// SECTION C — Non-null assertion `!`
// ─────────────────────────────────────────────

// Exercise 11
// The function below returns string | null.
// Use the non-null assertion operator to treat the result as always a string.
function findName(): string | null {
  return "Alice";
}
const name2 = findName()!;
name2.toUpperCase();

// Exercise 12
// Now do Exercise 11 the safe way — use an `if` check instead of `!`.
const name3 = findName();
if (typeof name3 === "string") {
  name3.toUpperCase();
}

// Exercise 13
// When is `!` acceptable to use? Write your answer as a comment.
// Answer: When we know better than typescript that the data is not null, such as when handling data from external sources.

// Exercise 14
// The variable below is string | undefined. Use `!` to assert it's defined,
// then call .toLowerCase() on it.
let maybeStr: string | undefined = "HELLO";
maybeStr!.toLowerCase();

// Exercise 15
// Rewrite Exercise 14 without `!`, using a proper null check.
let maybeStr2: string | undefined = "HELLO";
if (typeof maybeStr2 === "string") {
  maybeStr2.toLowerCase();
}


// ─────────────────────────────────────────────
// SECTION D — `unknown` in functions
// ─────────────────────────────────────────────

// Exercise 16
// Write a function `stringify(value: unknown): string` that:
// - returns the string as-is if it's a string
// - converts it with .toString() if it's a number
// - returns "true" or "false" if it's a boolean
// - returns "unknown" for anything else
function stringify(value: unknown): string {
  switch (typeof value) {
    case "string":
      return value
    case "number":
      return value.toString()
    case "boolean":
      if (value) {return "true"} else {return "false"}
    default:
      return "unknown"
  }
}

// Exercise 17
// Test stringify with a string, number, boolean, and object.
console.log(stringify("hello"))
console.log(stringify(123))
console.log(stringify(true))
console.log(stringify({a:1}))

// Exercise 18
// Write a function `isObject(value: unknown): value is object` that checks
// if a value is a non-null object.
const isObject = (value: unknown): value is object => {return typeof value === "object" && value !== null}

// Exercise 19
// Write a function `hasProperty(value: unknown, key: string): boolean`
// that checks if a value is an object with that property.
function hasProperty(value: unknown, key: string): value is Record<string, unknown> {
  if (typeof value === "object" && value !== null && key in value) {
    return true
  }
  return false
}

// Exercise 20
// Use hasProperty to safely read a property from an unknown value.
async function fetchUser(): Promise<unknown> {
  const response = await fetch("/api/user");
  return response.json();
}
async function ex20() {
  const data = await fetchUser();
  if (hasProperty(data, "status")) {
    console.log(data.status)
  }
}

// ─────────────────────────────────────────────
// SECTION E — Practical patterns
// ─────────────────────────────────────────────

// Exercise 21
// The function below returns unknown (simulating an API response).
// Safely extract and log the `title` property using narrowing + assertion.
function fetchPost(): unknown {
  return { title: "Hello World", views: 100 };
}
const s = fetchPost()
if (typeof s === "object" && s !== null && "title" in s) {
  console.log(s.title)
}

// Exercise 22
// Write a function `parseNumber(value: unknown): number | null` that:
// - returns the number if value is a number
// - parses and returns a number if value is a numeric string (use Number())
// - returns null otherwise
function parseNumber(value: unknown): number | null {
  if (typeof value === "number") {
    return value
  } else if (typeof value === "string" && !Number.isNaN(Number(value))) {
    return Number(value)
  }
  return null
}

// Exercise 23
// Test parseNumber with: 42, "3.14", "hello", true.
console.log(parseNumber(42))
console.log(parseNumber("3.14"))
console.log(parseNumber("hello"))
console.log(parseNumber(true))

// Exercise 24
// Explain: why should you prefer `unknown` over `any` for function parameters
// that accept arbitrary input?
// Answer: With unknown, typescript will enforce narrowing before potentially dangerous statements.

// Exercise 25
// Write a function `safeJsonParse(json: string): unknown` that wraps JSON.parse.
// Then call it and safely access a property from the result.
function safeJsonParse(json: string): unknown {
  try {
  return JSON.parse(json)
  } catch {
    return null
  }
}
const result = safeJsonParse('{"name": "Alan", "age": 30}');
if (typeof result === "object" && result !== null && "name" in result) {
  console.log(result.name)
}