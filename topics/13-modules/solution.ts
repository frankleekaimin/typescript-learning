// Topic 13 — Modules: import / export
// Solution file — drill.ts answers
//
// Supporting files referenced below:
//   math.ts, greet.ts, geometry.ts, types.ts, index.ts, shapes.ts, userService.ts
// See solution-files/ for the complete set.

// ─────────────────────────────────────────────
// SECTION A — Named exports
// ─────────────────────────────────────────────

// Exercise 1-3: math.ts
// export function add(a: number, b: number): number { return a + b; }
// export function subtract(a: number, b: number): number { return a - b; }
// export const PI = 3.14159;

// Exercise 4
import { add, subtract, PI } from "./math";

// Exercise 5
console.log(add(10, 3));       // 13
console.log(subtract(10, 3));  // 7
console.log(PI);               // 3.14159

// ─────────────────────────────────────────────
// SECTION B — Default export
// ─────────────────────────────────────────────

// Exercise 6: greet.ts
// export default function greet(name: string): string { return `Hello, ${name}!`; }

// Exercise 7
import greet from "./greet";
console.log(greet("Frank"));

// Exercise 8
import sayHello from "./greet";
console.log(sayHello("TypeScript"));

// Exercise 9
// Named exports use curly braces: import { foo } from "./file"
// Default exports have no braces, and the local name is chosen by the importer: import foo from "./file"

// ─────────────────────────────────────────────
// SECTION C — Renaming with `as`
// ─────────────────────────────────────────────

// Exercise 10
import { add as sum } from "./math";
console.log(sum(5, 5));  // 10

// Exercise 11: geometry.ts
// function area(width: number, height: number): number { return width * height; }
// export { area as calculateArea };

// Exercise 12
import { calculateArea } from "./geometry";
console.log(calculateArea(4, 5));  // 20

// ─────────────────────────────────────────────
// SECTION D — Exporting and importing types
// ─────────────────────────────────────────────

// Exercise 13: types.ts
// export interface User { name: string; age: number; }
// export type ID = number;

// Exercise 14
import type { User, ID } from "./types";

// Exercise 15
const user: User = { name: "Alice", age: 30 };
const userId: ID = 1;
console.log(user, userId);

// Exercise 16
// `import type` is erased at compile time — it generates no JavaScript output.
// It signals clearly that you only need the type, not a runtime value,
// and prevents accidentally using a type as a value.

// ─────────────────────────────────────────────
// SECTION E — Re-exports and barrel files
// ─────────────────────────────────────────────

// Exercise 17: index.ts
// export { add, subtract } from "./math";
// export { default as greet } from "./greet";

// Exercise 18
import { add as addFromBarrel, greet as greetFromBarrel } from "./index";
console.log(addFromBarrel(1, 2));         // 3
console.log(greetFromBarrel("World"));   // Hello, World!

// Exercise 19: shapes.ts
// export function circleArea(r: number): number { return Math.PI * r * r; }
// export function squareArea(s: number): number { return s * s; }

// Exercise 20
import * as Shapes from "./shapes";
console.log(Shapes.circleArea(5));   // ~78.54
console.log(Shapes.squareArea(4));   // 16

// ─────────────────────────────────────────────
// SECTION F — Putting it all together
// ─────────────────────────────────────────────

// Exercise 21-23: userService.ts
// import type { User } from "./types";
// export function createUser(name: string, age: number): User { return { name, age }; }
// export function formatUser(user: User): string { return `${user.name} (${user.age})`; }

// Exercise 22 & 24
import { createUser, formatUser } from "./userService";
const newUser = createUser("Frank", 28);
console.log(newUser);
console.log(formatUser(newUser));  // "Frank (28)"

// Exercise 25
// A barrel file (typically index.ts) re-exports from multiple modules in one place.
// Consumers import from a single path instead of knowing every internal file,
// making it easy to reorganise internals without changing import paths elsewhere.
