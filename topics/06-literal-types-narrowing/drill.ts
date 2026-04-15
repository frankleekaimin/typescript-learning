// Topic 06 — Literal Types & Type Narrowing
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Literal types
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable with literal type "red" (not string, but exactly "red").
let var1: "red"

// Exercise 2
// Declare a variable with literal type 200 (not number, but exactly 200).
let var2: 200

// Exercise 3
// Declare a variable with literal type true (not boolean, but exactly true).
let var3: true

// Exercise 4
// What's the difference between `let x: string` and `let x: "hello"`?
// Write your answer as a comment.
// Answer: The first is mutable and has no value, the second is fixed to "hello"

// ─────────────────────────────────────────────
// SECTION B — Literal unions
// ─────────────────────────────────────────────

// Exercise 5
// Define a type `Direction` as a union of literal strings:
// "north" | "south" | "east" | "west"
type Direction = "north" | "south" | "east" | "west"

// Exercise 6
// Define a type `HttpStatus` as a union of literal numbers:
// 200 | 201 | 400 | 404 | 500
type HttpStatus = 200 | 201 | 400 | 404 | 500

// Exercise 7
// Create a variable of type Direction and assign "north".
let north: Direction = "north"

// Exercise 8
// Create a variable of type HttpStatus and assign 404.
let fourofour: HttpStatus = 404

// ─────────────────────────────────────────────
// SECTION C — Type narrowing with literals
// ─────────────────────────────────────────────

// Exercise 9
// Write a function `respondToDirection` that takes a Direction (from Exercise 5).
// If "north", return "Go north!". If "south", return "Go south!".
// (Handle all four directions.)
function respondToDirection (a: Direction) {
    if (a === "north") {
        return "Go north!"
    } else if (a ==="south") {
        return "Go south!"
    } else if (a === "east") {
        return "Go east!"
    } else if (a ==="west") {
        return "Go west!"
    }
}

// Exercise 10
// Write a function `describeStatus` that takes an HttpStatus and returns a description.
// 200 => "OK", 201 => "Created", 400 => "Bad Request", 404 => "Not Found", 500 => "Server Error"
function describeStatus(x: HttpStatus) {
    if (x === 200) {
        return "OK"
    } else if (x === 201) {
        return "Created"
    } else if (x === 400) {
        return "Bad Request"
    } else if (x === 404) {
        return "Not Found"
    } else if (x === 500) {
        return "Server Error"
    }
}

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions with literals
// ─────────────────────────────────────────────

// Exercise 11
// Define a discriminated union with a literal "kind" property:
// - `DownloadResponse` with kind: "download" and fileName: string
// - `UploadResponse` with kind: "upload" and success: boolean
// Create a union type `Response`.
type DownloadResponse = {kind: "download", fileName: string}
type UploadResponse = {kind: "upload", success: boolean}
type Response2 = DownloadResponse | UploadResponse

// Exercise 12
// Write a function that handles a Response (from Exercise 11).
// Use the kind property to narrow and return appropriate message.
function handle(x: Response2): void {
    if (x.kind === "download") {
        console.log(x.fileName)
    } else if (x.kind === "upload") {
        console.log(x.success)
    }
}

// Exercise 13
// Create a DownloadResponse and pass to the function from Exercise 12.
let down: DownloadResponse = {kind: "download", fileName: "ABC"}
handle(down)

// Exercise 14
// Create an UploadResponse and pass to the function from Exercise 12.
let up: UploadResponse = {kind: "upload", success: true}
handle(up)

// ─────────────────────────────────────────────
// SECTION E — Type guards with predicates
// ─────────────────────────────────────────────

// Exercise 15
// Write a type guard function `isString` that checks if a value is a string.
// Use the `value is string` syntax.
function isString(value: unknown): value is string {return typeof value === "string"}

// Exercise 16
// Write a type guard `isNumber` that checks if a value is a number.
const isNumber = (value: unknown): value is number => {return typeof value === "number"}

// Exercise 17
// Use the isString guard (from Exercise 15) to safely call .toUpperCase().
// Create a variable of type unknown, check it, then use it.
let var4: unknown = "a3B"
if (isString(var4)) {
    console.log(var4.toUpperCase())
}

// ─────────────────────────────────────────────
// SECTION F — Exhaustiveness checking
// ─────────────────────────────────────────────

// Exercise 18
// Define a type `Color` with literals: "red" | "green" | "blue"
// Write a function that returns a hex code for each color.
// Add an exhaustiveness check at the end (use never).
type Color = "red" | "green" | "blue"
function text2hex(color: Color): string {
    if (color === "red") {
        return "#ff0000"
    } else if (color === "green") {
        return "#00ff00"
    } else if (color === "blue") {
        return "#0000ff"
    } else {
        const _exhaustive: never = color
        return _exhaustive
    }
}

// Exercise 19
// (No new code needed — explain exhaustiveness in comments)
// When you use `const x: never = value`, what does it do?
// Answer: Typescript will return an error on the never assignment if we add a new literal to Color without handling it.

// ─────────────────────────────────────────────
// SECTION G — Narrowing with property checks
// ─────────────────────────────────────────────

// Exercise 20
// Define two types:
// - `Email` with address: string
// - `Phone` with number: string
// Create a union `Contact` = Email | Phone
type Email = {address: string}
type Phone = {number: string}
type Contact = Email | Phone

// Exercise 21
// Write a function that uses property checks ("address" in contact) to narrow.
// Return the appropriate contact info.
function contactType(contact: Contact): string {
    if ("address" in contact) {
        return contact.address
    } else {
        return contact.number
    }
}

// Exercise 22
// Create an Email contact and test the function from Exercise 21.
let John: Email = {address: "john@mail.com"}
console.log(contactType(John))

// Exercise 23
// Create a Phone contact and test the function from Exercise 21.
let Paul: Phone = {number: "12345"}
console.log(contactType(Paul))

// ─────────────────────────────────────────────
// SECTION H — Practical narrowing patterns
// ─────────────────────────────────────────────

// Exercise 24
// Define an `Event` union type with different kinds:
// - Click event with x (number), y (number)
// - KeyPress event with key (string)
// Write a function that handles each event type.
type Click = {x: number; y: number}
type KeyPress = {key: string}
type Event2 = Click | KeyPress
function handle2(event: Event2): void {
    if ("x" in event) {
        console.log("click!")
    } else {
        console.log("keypress!")
    }
}

// Exercise 25
// Define a type for API responses that can be:
// - Success with status: "success", data: any
// - Error with status: "error", message: string
// - Loading with status: "loading"
// Write a function that handles each case and returns a string.
type Success = {status: "success", data: unknown}
type Error2 = {status: "error", message: string}
type Loading = {status: "loading"}
type APIResponse = Success | Error2 | Loading
function handle3(r: APIResponse): string {
    if (r.status === "success") {
        return "success"
    } else if (r.status === "error"){
        return "error"
    } else if (r.status === "loading") {
        return " loading"
    } else {
        const _exhaustive: never = r
        return _exhaustive;
    }
}