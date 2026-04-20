// Topic 11 — Type Assertions & `unknown`
// Solution file

// ─────────────────────────────────────────────
// SECTION A — The `unknown` type
// ─────────────────────────────────────────────

// Exercise 1
let value: unknown = "hello";

// Exercise 2
let value2: unknown = 42;

// Exercise 3
// Error: 'value' is of type 'unknown'. You must narrow before using it.

// Exercise 4
if (typeof value === "string") {
  value.toUpperCase();
}

// Exercise 5
// Answer: `any` bypasses TypeScript's type checks entirely — you can call any
// method on it without error. `unknown` requires you to narrow the type first,
// making it safe.

// ─────────────────────────────────────────────
// SECTION B — Type assertions with `as`
// ─────────────────────────────────────────────

// Exercise 6
let str: unknown = "hello";
(str as string).toUpperCase();

// Exercise 7
let num: unknown = 1.234;
(num as number).toFixed(2);

// Exercise 8
// Answer: The assertion tells TypeScript to treat 42 as a string, but at runtime
// 42 is still a number. Calling .toUpperCase() on a number crashes at runtime.
// Assertions bypass TypeScript's safety — wrong ones cause runtime errors.

// Exercise 9
function getUser(): unknown {
  return { name: "Alice" };
}
const user = getUser() as { name: string };
console.log(user.name);

// Exercise 10
// Answer: `as unknown as T` lets you assert between completely unrelated types
// by going through `unknown` as an intermediate step. Use it only when you're
// certain the runtime value matches T and there's no better alternative.

// ─────────────────────────────────────────────
// SECTION C — Non-null assertion `!`
// ─────────────────────────────────────────────

// Exercise 11
function findName(): string | null {
  return "Alice";
}
const name1 = findName()!;
name1.toUpperCase();

// Exercise 12
const name2 = findName();
if (name2 !== null) {
  name2.toUpperCase();
}

// Exercise 13
// Answer: When you know with certainty the value cannot be null/undefined —
// e.g. after an initialisation step that guarantees the value, or when working
// with external APIs where you control the data source.

// Exercise 14
let maybeStr: string | undefined = "HELLO";
maybeStr!.toLowerCase();

// Exercise 15
let maybeStr2: string | undefined = "HELLO";
if (typeof maybeStr2 === "string") {
  maybeStr2.toLowerCase();
}

// ─────────────────────────────────────────────
// SECTION D — `unknown` in functions
// ─────────────────────────────────────────────

// Exercise 16
function stringify(value: unknown): string {
  switch (typeof value) {
    case "string":  return value;
    case "number":  return value.toString();
    case "boolean": return value ? "true" : "false";
    default:        return "unknown";
  }
}

// Exercise 17
console.log(stringify("hello"));  // "hello"
console.log(stringify(42));       // "42"
console.log(stringify(true));     // "true"
console.log(stringify({ a: 1 })); // "unknown"

// Exercise 18
const isObject = (value: unknown): value is object =>
  typeof value === "object" && value !== null;

// Exercise 19
function hasProperty(value: unknown, key: string): value is Record<string, unknown> {
  return isObject(value) && key in value;
}

// Exercise 20
async function fetchUser(): Promise<unknown> {
  const response = await fetch("/api/user");
  return response.json();
}

async function ex20() {
  const data = await fetchUser();
  if (hasProperty(data, "name")) {
    console.log(data.name);
  }
}

// ─────────────────────────────────────────────
// SECTION E — Practical patterns
// ─────────────────────────────────────────────

// Exercise 21
function fetchPost(): unknown {
  return { title: "Hello World", views: 100 };
}
const post = fetchPost();
if (typeof post === "object" && post !== null && "title" in post) {
  console.log(post.title);
}

// Exercise 22
function parseNumber(value: unknown): number | null {
  if (typeof value === "number") return value;
  if (typeof value === "string" && !Number.isNaN(Number(value))) {
    return Number(value);
  }
  return null;
}

// Exercise 23
console.log(parseNumber(42));       // 42
console.log(parseNumber("3.14"));   // 3.14
console.log(parseNumber("hello"));  // null
console.log(parseNumber(true));     // null

// Exercise 24
// Answer: With `unknown`, TypeScript enforces narrowing before any operation,
// so callers can't accidentally misuse the value. `any` silently allows unsafe
// operations that may crash at runtime.

// Exercise 25
function safeJsonParse(json: string): unknown {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

const result = safeJsonParse('{"name": "Alice", "age": 30}');
if (typeof result === "object" && result !== null && "name" in result) {
  console.log((result as { name: string }).name);
}
