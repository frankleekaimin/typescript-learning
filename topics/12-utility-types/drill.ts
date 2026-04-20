// Topic 12 — Utility Types
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// Shared types used throughout this file — do not edit
interface User {
  name: string;
  email: string;
  age: number;
  password: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

// ─────────────────────────────────────────────
// SECTION A — Partial & Required
// ─────────────────────────────────────────────

// Exercise 1
// Create a type `UserUpdate` that is a Partial version of User.
type UserUpdate = Partial<User>

// Exercise 2
// Write a function `updateUser(id: number, changes: UserUpdate): void`
// that just logs "Updating user {id}".
// Then call it with only { email: "new@example.com" }.
function updateUser(id: number, changes: UserUpdate): void {
  console.log("Updating user"+ id.toString())
}
updateUser(1,{email: "new@example.com" })

// Exercise 3
// Create a type `StrictProduct` that makes all Product properties required.
// (Product already has all required fields — this is practice with the syntax.)
type StrictProduct = Required<Product>

// Exercise 4
// Create an interface `AppConfig` with three optional fields:
//   theme?: string; language?: string; debugMode?: boolean
// Then create a type `RequiredConfig` where all fields are required.
interface AppConfig {
  theme?: string
  language?: string
  debugMode?: boolean
}
type RequiredConfig = Required<AppConfig>

// Exercise 5
// Explain: what is the difference between `Partial<T>` and just marking
// every field `?` manually?
// Answer: It is identical, but Partial<T> is better for future maintenance in case additional fields need to be added.

// ─────────────────────────────────────────────
// SECTION B — Readonly
// ─────────────────────────────────────────────

// Exercise 6
// Create a type `ReadonlyUser` that is a Readonly version of User.
// Then create a variable of that type and try to (mentally) assign to one
// of its properties — write the TypeScript error as a comment.
type ReadonlyUser = Readonly<User>
let readonlyuser: ReadonlyUser = {name: "Adam", email: "Adam@mail.com",age: 32, password: "123"}
// readonlyuser.name = "Ben" // Error: Cannot assign to 'name' because it is a read-only property.


// Exercise 7
// Write a function `freezeProduct(p: Product): Readonly<Product>`
// that just returns the product as-is.
function freezeProduct(p:Product): Readonly<Product> {
  const p2: Readonly<Product> = p
  return p2
}

// Exercise 8
// Create a `const` object literal for a config:
//   { host: "localhost", port: 3000 }
// Type it as `Readonly<{ host: string; port: number }>`.
const config: Readonly<{ host: string; port: number }> = { host: "localhost", port: 3000 }

// ─────────────────────────────────────────────
// SECTION C — Record
// ─────────────────────────────────────────────

// Exercise 9
// Create a type `ScoreMap` that maps string keys to number values.
// Then create a variable `scores` with two entries.
type ScoreMap = Record<string, number>
const scores: ScoreMap = {"adam": 50, "ben": 60}

// Exercise 10
// Create a union type `Fruit` with members "apple" | "banana" | "cherry".
// Then create a type `FruitCalories` using Record<Fruit, number>.
// Assign a value with all three entries filled in.
type Fruit =  "apple" | "banana" | "cherry"
type FruitCalories = Record<Fruit, number>
const calories: FruitCalories = {"apple": 10, "banana":15, "cherry":17}

// Exercise 11
// Write a function `countWords(words: string[]): Record<string, number>`
// that counts how many times each word appears.
// Example: countWords(["a", "b", "a"]) → { a: 2, b: 1 }
function countWords(words: string[]): Record<string, number> {
  let result: Record<string,number> = {}
  for (const word of words) {
    if (word in result){
      result[word]++
    }
    else {
      result[word] = 1
    }
  }
  return result
}

// Exercise 12
// Test countWords with ["cat", "dog", "cat", "fish", "dog", "cat"].
// Log the result.
console.log(countWords(["cat", "dog", "cat", "fish", "dog", "cat"]))

// ─────────────────────────────────────────────
// SECTION D — Pick & Omit
// ─────────────────────────────────────────────

// Exercise 13
// Create a type `PublicUser` using Pick — keep only `name` and `email` from User.
type PublicUser = Pick<User, "name" | "email">

// Exercise 14
// Create a type `SafeUser` using Omit — remove `password` from User.
type SafeUser = Omit<User, "password">

// Exercise 15
// Create a type `ProductPreview` using Pick — keep only `id` and `title`.
type ProductPreview = Pick<Product,"id" | "title">

// Exercise 16
// Create a type `ProductWithoutStock` using Omit — remove `stock` from Product.
type ProductWithoutStock = Omit<Product, "stock">

// Exercise 17
// Write a function `toPublicUser(user: User): PublicUser`
// that returns only the name and email fields.
const toPublicUser = (user: User): PublicUser => {
  return {name: user.name, email: user.email}
}

// Exercise 18
// Call toPublicUser with a full User object and log the result.
console.log(toPublicUser({name: "Adam", email: "Adam@mail.com",age: 32, password: "123"}))

// ─────────────────────────────────────────────
// SECTION E — Exclude & Extract & NonNullable
// ─────────────────────────────────────────────

// Exercise 19
// Given: type Status = "active" | "inactive" | "banned" | "pending"
// Create a type `ActiveStatus` using Extract that keeps only "active" | "pending".
type Status = "active" | "inactive" | "banned" | "pending"
type ActiveStatus = Extract<Status, "active" | "pending">

// Exercise 20
// Using the same Status type, create `NonBanned` using Exclude to remove "banned".
type NonBanned = Exclude<Status, "banned">

// Exercise 21
// Given: type MaybeNumber = number | null | undefined
// Create a type `DefiniteNumber` using NonNullable.
type MaybeNumber = number | null | undefined
type DefiniteNumber = NonNullable<MaybeNumber>

// Exercise 22
// What is the difference between Exclude and Omit?
// Answer: Exclude work on union types, while Omit works on object types

// ─────────────────────────────────────────────
// SECTION F — ReturnType & Parameters
// ─────────────────────────────────────────────

// Exercise 23
// Given the function below, use ReturnType to create a type `UserResult`.
function fetchUser() {                  // do not edit
  return { id: 1, name: "Alice" };     // do not edit
}                                       // do not edit

// TODO: create type UserResult using ReturnType<typeof fetchUser>
type UserResult = ReturnType<typeof fetchUser>

// Exercise 24
// Given the function below, use Parameters to create a type `CreateUserParams`.
function createUser(name: string, email: string, age: number): User {  // do not edit
  return { name, email, age, password: "" };                           // do not edit
}                                                                       // do not edit

// TODO: create type CreateUserParams using Parameters<typeof createUser>
type CreateUserParams = Parameters<typeof createUser>

// Exercise 25
// Compose utility types: create a type `UpdateUserPayload` that:
//   - starts with User
//   - removes `password` and `age`
//   - makes the remaining fields optional
type UpdateUserPayload = Partial<Omit<User, "password" | "age">>
