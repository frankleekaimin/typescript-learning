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
function identity<T>(value: T):T {return value}

// Exercise 2
// Call identity with a number, string, and boolean to test it.
identity("hello")
identity(123)
identity(true)

// Exercise 3
// Write a generic function `getFirst<T>` that returns the first element of an array.
function getFirst<T>(arr :T[]): T {return arr[0]}

// Exercise 4
// Write a generic function `getLast<T>` that returns the last element of an array.
function getLast<T>(arr: T[]): T {return arr[arr.length - 1]}

// Exercise 5
// Write a generic function `reverse<T>` that reverses an array and returns it.
function reverse<T>(arr: T[]): T[] {return arr.reverse()}

// ─────────────────────────────────────────────
// SECTION B — Generic types and constraints
// ─────────────────────────────────────────────

// Exercise 6
// Define a generic type `Box<T>` with a single property `value: T`.
type Box<T> = {value: T}

// Exercise 7
// Create a Box<number> and a Box<string>.
const numberBox: Box<number> = {value: 3}
const stringBox: Box<string> = {value: "c"}

// Exercise 8
// Write a generic function that takes a Box<T> and returns its value.
function ReturnBox<T>(x: Box<T>): T {return x.value}
const ReturnBox2 = <T>(x: Box<T>): T => {return x.value} // ensuring I remain familiar with arrow functions

// Exercise 9
// Define a generic type `Response<T>` with:
// - success (boolean)
// - data (optional T)
// - error (optional string)
type Response2<T> = {success: boolean, data?: T, error?: string}

// Exercise 10
// Create a Response<number> for success and an error Response.
const numberResponse: Response2<number> = {success: true, data: 42}
const errorResponse: Response2<number> = {success: false, error: "Not found"}

// ─────────────────────────────────────────────
// SECTION C — Constraints
// ─────────────────────────────────────────────

// Exercise 11
// Write a function `getLength<T extends { length: number }>` that returns the length.
function getLength<T extends {length: number}>(obj: T): number {return obj.length}

// Exercise 12
// Test getLength with a string, array, and object with length property.
getLength("abc")
getLength([1,2,3])
getLength({length: 10})

// Exercise 13
// Define an interface `HasName` with a name property.
// Write a function `getName<T extends HasName>` that returns the name.
interface HasName {name: string}
function getName<T extends HasName>(obj: T): string {return obj.name}

// Exercise 14
// Create objects that satisfy HasName and test the getName function.
const Alan: HasName = {name: "Alan"}
getName(Alan)

// Exercise 15
// Write a function `getProperty<T>` that gets a property value by key.
// Make sure the key must be a valid property of T using `keyof`.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {return obj[key]} 

// ─────────────────────────────────────────────
// SECTION D — Multiple type variables
// ─────────────────────────────────────────────

// Exercise 16
// Write a function `pair<T, U>` that takes two values and returns them as a tuple [T, U].
function pair<T, U>(t:T, u:U): [T,U] {return [t,u]}

// Exercise 17
// Call pair with different type combinations.
pair("a",1)

// Exercise 18
// Write a function `merge<T, U>` that takes two objects and returns them combined.
function merge<T, U>(t:T, u:U): T&U {return {...t,...u}}

// Exercise 19
// Write a function `map<T, U>` that takes an array of T and a transform function,
// returning an array of U.
function map<T, U>(t:T[], transform: (item: T) => U): U[] {return t.map(transform)} 

// Exercise 20
// Test the map function by converting an array of numbers to strings.
const strings = map([1,2,3], (n) => n.toString())

// ─────────────────────────────────────────────
// SECTION E — Advanced patterns
// ─────────────────────────────────────────────

// Exercise 21
// Define a generic type `Result<T>` as a discriminated union:
// - Success with data: T
// - Failure with error: string
type Result<T>  = {kind: "success", data: T} | {kind: "error", data: string}

// Exercise 22
// Write a function that handles a Result<T> and returns a message.
function printResult <T>(result: Result<T>): string {
  if (result.kind === "success") {
    return "Success: operation completed"
  } else {
    return "Error: " + result.data
  }
}

// Exercise 23
// Write a generic function `filter<T>` that takes an array and a predicate,
// returning a filtered array.
function filter<T>(arr: T[], predicate: (item: T) => boolean): T[] {return arr.filter(predicate)}

// Exercise 24
// Write a generic function `findById<T extends { id: number }>` that finds an item by id.
function findById<T extends {id: number}>(arr:T[], id: number): T | undefined {return arr.find(item => item.id === id)}

// Exercise 25
// Write a generic function `pick<T, K extends keyof T>` that extracts specific properties.
// Hint: return an object with only the picked properties.
function pick<T, K extends keyof T>(t: T, k: K) {
  return { [k]: t[k] }
}
