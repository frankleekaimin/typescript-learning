// Topic 05 — Union & Intersection Types
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic union types
// ─────────────────────────────────────────────

// Exercise 1
// Declare a variable that can be either a string or a number.
let id: string | number;

// Exercise 2
// Assign a string value to a string | number union.
id = "OK";

// Exercise 3
// Assign a number value to a string | number union.
id = 200;

// Exercise 4
// Write a function that accepts string | number and returns a string.
function checkstatus(s: string | number): string {
    if (typeof(s) === "string") {
        return s;
    }
    return "Not OK"
}

// ─────────────────────────────────────────────
// SECTION B — Type narrowing with typeof
// ─────────────────────────────────────────────

// Exercise 5
// Write a function `processId` that takes id: string | number.
// If id is a string, return it in uppercase.
// If id is a number, return it as a string (use toString()).
function processId (id: string | number): string {
    if (typeof id === "string") {
        return id.toUpperCase();
    } else {
        return id.toString();
    }
}

// Exercise 6
// Write a function `printValue` that takes value: string | boolean.
// If string, print it as-is.
// If boolean, print "true" or "false".
// (Use typeof to narrow.)
function printValue (value: string | boolean): void {
    if (typeof(value) === "string") {
        console.log(value)
    } else {
        console.log(value)
    }
}

// Exercise 7
// What type guard would you use to check if a value is a string?
// Write the check as a comment.
// Answer: typeof

// ─────────────────────────────────────────────
// SECTION C — Union types with objects
// ─────────────────────────────────────────────

// Exercise 8
// Define two types:
// - `Circle` with properties: radius (number)
// - `Square` with properties: side (number)
// Then create a union type `Shape` that is Circle | Square.
type Circle = {radius: number}
type Square = {side: number}
type Shape = Circle | Square

// Exercise 9
// Create a Circle object of type Shape.
let circle: Shape = {radius: 0}

// Exercise 10
// Create a Square object of type Shape.
let square: Shape = {side: 0}

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions
// ─────────────────────────────────────────────

// Exercise 11
// Define a discriminated union for API responses:
// - `SuccessResponse` with properties: status: "success", data: string
// - `ErrorResponse` with properties: status: "error", message: string
// Create a union type `Response` = SuccessResponse | ErrorResponse
type SuccessResponse = {status: "success"; data: string}
type ErrorResponse = {status: "error", message: string}
type Response2 = SuccessResponse | ErrorResponse

// Exercise 12
// Write a function that handles a Response (from Exercise 11).
// Use the status field to narrow and return either the data or message.
function handle(r: Response2) {
    if (r.status === "success") {
        return r.data
    } else {
        return r.message
    }
}

// Exercise 13
// Create a SuccessResponse object and pass it to the function from Exercise 12.
const success: SuccessResponse = {status: "success", data: "OK"}
let data = handle(success)

// Exercise 14
// Create an ErrorResponse object and pass it to the function from Exercise 12.
const error: ErrorResponse = {status: "error", message: "NOT OK"}
let message = handle(error)

// ─────────────────────────────────────────────
// SECTION E — Intersection types
// ─────────────────────────────────────────────

// Exercise 15
// Define two types:
// - `Person` with properties: name (string), age (number)
// - `Employee` with properties: employeeId (number), department (string)
// Create an intersection type `Staff` = Person & Employee
type Person = {name: string; age: number}
type Employee = {employeeId: number; department: string}
type Staff = Person & Employee

// Exercise 16
// Create a Staff object with all required properties.
const Alan: Staff = {name:"Alan", age: 30, employeeId: 10, department: "Sales"}

// Exercise 17
// Add a third type `Manager` with properties: teamSize (number).
// Create an intersection `TeamLead` = Person & Employee & Manager
type Manager = {teamSize: number}
type TeamLead = Person & Employee & Manager

// Exercise 18
// Create a TeamLead object with all properties.
const Ben: TeamLead = {name: "Ben", age: 45, employeeId: 2, department: "Leadership", teamSize: 6}

// ─────────────────────────────────────────────
// SECTION F — Unions with multiple types
// ─────────────────────────────────────────────

// Exercise 19
// Create a union of three types: string | number | boolean.
// Write a function that narrows all three cases and returns a string.
type types = string | number | boolean;
function narrow(x: string | number | boolean): string {
    return x.toString()
} 

// Exercise 20
// What happens if you try to access a property that only exists on one union member?
// Example: (value: string | number).toUpperCase()
// Write your answer as a comment.
// Answer: Error. We need to narrow the type with a check first.

// ─────────────────────────────────────────────
// SECTION G — Property checks for narrowing
// ─────────────────────────────────────────────

// Exercise 21
// Define two types with different properties:
// - `Book` with title (string), author (string)
// - `Movie` with title (string), director (string)
// Create a union `Media` = Book | Movie
type Book = {title: string; author: string}
type Movie = {title: string; director: string}
type Media = Book | Movie

// Exercise 22
// Write a function that narrows the union using property checks.
// Check if the object has "author" (Book) or "director" (Movie).
function narrow2(x: Media): void {
    if ("author" in x) {
        console.log(x.author)
    } else {
        console.log(x.director)
    }
}

// Exercise 23
// Create a Book object and test the function from Exercise 22.
let agoodman: Media = {title: "A Good Man", author: "Alan"}
narrow2(agoodman)

// Exercise 24
// Create a Movie object and test the function from Exercise 22.
let abadman: Media = {title: "A Bad Man", director: "Alan"}
narrow2(abadman)

// ─────────────────────────────────────────────
// SECTION H — Practical union usage
// ─────────────────────────────────────────────

// Exercise 25
// Define a union for different payment methods:
// - `CreditCard` with cardNumber (string), cvv (number)
// - `PayPal` with email (string)
// Create a function that processes payment and returns a success message.
// Use narrowing to handle each payment type differently.
type CreditCard = {cardNumber: string; cvv: number}
type PayPal = {email: string}
function payment(p: CreditCard | PayPal): string {
    if ("cardNumber" in p) {
        return "CreditCard payment";
    } else {
        return "PayPal payment";
    }
}
