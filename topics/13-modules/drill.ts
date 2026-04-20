// Topic 13 — Modules: import / export
// Drill exercises
//
// Instructions:
//   - This topic spans MULTIPLE files. Each exercise tells you which file to create/edit.
//   - Replace every `// TODO` comment with working TypeScript code.
//   - Run `tsc --noEmit` from the topics/13-modules folder to check your work.
//   - Do NOT change any line marked "// do not edit".
//
// Note: Because modules require separate files, most exercises ask you to
//       create a new .ts file alongside this one. The expected filenames are
//       listed in each exercise.

// ─────────────────────────────────────────────
// SECTION A — Named exports
// ─────────────────────────────────────────────

// Exercise 1
// Create a file called `math.ts`.
// In it, export a function `add(a: number, b: number): number` that returns a + b.
// TODO: create math.ts

// Exercise 2
// In math.ts, also export a function `subtract(a: number, b: number): number`.
// TODO: add subtract to math.ts

// Exercise 3
// In math.ts, also export a const `PI = 3.14159`.
// TODO: add PI to math.ts

// Exercise 4
// Back in this file (drill.ts), import `add`, `subtract`, and `PI` from "./math".
import {add, subtract, PI} from "./math"

// Exercise 5
// Use each import — log add(10, 3), subtract(10, 3), and PI.
// TODO: three console.log calls
console.log(add(10, 3))
console.log(subtract(10, 3))
console.log(PI)

// ─────────────────────────────────────────────
// SECTION B — Default export
// ─────────────────────────────────────────────

// Exercise 6
// Create a file called `greet.ts`.
// Export a default function `greet(name: string): string` that returns "Hello, {name}!".
// TODO: create greet.ts

// Exercise 7
// Import the default export from "./greet" and call it with your own name. Log the result.
import hello from "./greet"
console.log(hello("Owen"))

// Exercise 8
// Import the same default export again, but use a different local name (e.g. `sayHello`).
// Log sayHello("TypeScript").
// TODO: import with a different name
import heya from "./greet"
console.log(heya("Owen"))

// Exercise 9
// What is the difference in import syntax between a named export and a default export?
// Answer: named export require curly braces, default exports do not

// ─────────────────────────────────────────────
// SECTION C — Renaming with `as`
// ─────────────────────────────────────────────

// Exercise 10
// Import `add` from "./math" but rename it to `sum` using `as`.
// Log sum(5, 5).
// TODO: import with alias
import {add as sum} from "./math"
console.log(sum(5, 5))

// Exercise 11
// Create a file called `geometry.ts`.
// Inside it, define a function `area(width: number, height: number): number`.
// Export it using `export { area as calculateArea }` (rename on export).
// TODO: create geometry.ts

// Exercise 12
// Import `calculateArea` from "./geometry" and log calculateArea(4, 5).
// TODO: import and use calculateArea
import {calculateArea} from "./geometry"
console.log(calculateArea(4,5))

// ─────────────────────────────────────────────
// SECTION D — Exporting and importing types
// ─────────────────────────────────────────────

// Exercise 13
// Create a file called `types.ts`.
// In it, export an interface `User` with fields: name: string, age: number.
// Also export a type alias `ID = number`.
// TODO: create types.ts

// Exercise 14
// Import `User` and `ID` from "./types" using `import type`.
// TODO: import type statement
import type {User, ID} from "./types"

// Exercise 15
// Create a variable of type `User` and a variable of type `ID`.
// Assign values and log them.
// TODO: declare and log
let user: User = {name: "Ken", age: 23}
let id: ID = 456
console.log(user, id)


// Exercise 16
// Why would you use `import type` instead of plain `import` for types?
// Answer: It prevents accidentally treating a type as something else, and is erased at compile time.

// ─────────────────────────────────────────────
// SECTION E — Re-exports and barrel files
// ─────────────────────────────────────────────

// Exercise 17
// Create a file called `index.ts`.
// In it, re-export `add` and `subtract` from "./math", and `greet` from "./greet".
// TODO: create index.ts

// Exercise 18
// In this file, import `add` and `greet` from "./index" (the barrel file).
// Log add(1, 2) and greet("World").
// TODO: import from barrel and log
import {add as addd, greet} from "./index"
console.log(addd(1, 2))
console.log(greet("World"))

// Exercise 19
// Create a file called `shapes.ts`.
// Export two functions: `circleArea(r: number): number` (returns Math.PI * r * r)
//                       and `squareArea(s: number): number` (returns s * s).
// TODO: create shapes.ts

// Exercise 20
// Import everything from "./shapes" as a namespace called `Shapes`.
// Log Shapes.circleArea(5) and Shapes.squareArea(4).
// TODO: namespace import
import * as Shapes from "./shapes"
console.log(Shapes.circleArea(5))
console.log(Shapes.squareArea(4))

// ─────────────────────────────────────────────
// SECTION F — Putting it all together
// ─────────────────────────────────────────────

// Exercise 21
// Create a file called `userService.ts`.
// It should import the `User` type from "./types".
// Export a function `createUser(name: string, age: number): User`
// that returns a User object.
// TODO: create userService.ts


// Exercise 22
// Import `createUser` from "./userService" and create a user object.
// Log the result.
// TODO: import and use createUser
import {createUser} from "./userService"
const ben = createUser("Ben",22)
console.log(ben)

// Exercise 23
// In `userService.ts`, add a second export:
// a function `formatUser(user: User): string` that returns "name (age)".
// For example, formatUser({ name: "Alice", age: 30 }) → "Alice (30)".
// TODO: add formatUser to userService.ts

// Exercise 24
// Import and use formatUser here. Log formatUser applied to your createUser result.
// TODO: import and use formatUser
import {formatUser} from "./userService"
console.log(formatUser(ben))

// Exercise 25
// What is a "barrel file" (index.ts) and why is it useful?
// Answer: A barrel file re-exports all the public exports from a library, creating a clean public AP for that module. It cleans the imports, define internal vs public, is easy to refactor and is better for organization.