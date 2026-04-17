// Topic 08 — Generics: Basics
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic generic functions
// ─────────────────────────────────────────────

// Exercise 1
function identity<T>(value: T): T {
  return value;
}

// Exercise 2
identity("hello");
identity(42);
identity(true);

// Exercise 3
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Exercise 4
function getLast<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

// Exercise 5
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

// ─────────────────────────────────────────────
// SECTION B — Generic types and constraints
// ─────────────────────────────────────────────

// Exercise 6
type Box<T> = {
  value: T;
};

// Exercise 7
const numBox: Box<number> = { value: 42 };
const strBox: Box<string> = { value: "hello" };

// Exercise 8
function unbox<T>(box: Box<T>): T {
  return box.value;
}

// Exercise 9
type Response<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Exercise 10
const successResponse: Response<number> = {
  success: true,
  data: 42
};

const failureResponse: Response<number> = {
  success: false,
  error: "Something went wrong"
};

// ─────────────────────────────────────────────
// SECTION C — Constraints
// ─────────────────────────────────────────────

// Exercise 11
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

// Exercise 12
getLength("hello");
getLength([1, 2, 3]);
getLength({ length: 5 });

// Exercise 13
interface HasName {
  name: string;
}

function getName<T extends HasName>(obj: T): string {
  return obj.name;
}

// Exercise 14
const person: HasName = { name: "Alice" };
getName(person);

// Exercise 15
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// ─────────────────────────────────────────────
// SECTION D — Multiple type variables
// ─────────────────────────────────────────────

// Exercise 16
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Exercise 17
pair("hello", 42);
pair(true, "yes");

// Exercise 18
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 } as T & U;
}

// Exercise 19
function map<T, U>(arr: T[], transform: (item: T) => U): U[] {
  return arr.map(transform);
}

// Exercise 20
const nums = [1, 2, 3];
const strs = map(nums, (n) => n.toString());

// ─────────────────────────────────────────────
// SECTION E — Advanced patterns
// ─────────────────────────────────────────────

// Exercise 21
type Result<T> =
  | { kind: "success"; data: T }
  | { kind: "failure"; error: string };

// Exercise 22
function handleResult<T>(result: Result<T>): string {
  if (result.kind === "success") {
    return "Operation succeeded";
  } else {
    return `Error: ${result.error}`;
  }
}

// Exercise 23
function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

// Exercise 24
function findById<T extends { id: number }>(arr: T[], id: number): T | undefined {
  return arr.find((item) => item.id === id);
}

// Exercise 25
function pick<T, K extends keyof T>(obj: T, key: K) {
  return { [key]: obj[key] };
}

// Test pick
const user = { name: "Alice", age: 30 };
const nameOnly = pick(user, "name");  // { name: "Alice" }
