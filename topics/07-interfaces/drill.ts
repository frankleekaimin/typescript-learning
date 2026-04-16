// Topic 07 — Interfaces
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic interface syntax
// ─────────────────────────────────────────────

// Exercise 1
// Define an interface `Product` with properties: name (string), price (number).
interface Product{
    name: string;
    price: number;
}

// Exercise 2
// Create a variable of type Product and assign values.
const product:Product = {name: "Apple",price: 123}

// Exercise 3
// Define an interface `Book` with properties: title (string), author (string), pages (number).
interface Book {
    title:string;
    author: string;
    pages: number;
}

// Exercise 4
// Create a Book object and assign it to a variable.
const book:Book = {title: "Book1", author: "Bon", pages: 10}

// Exercise 5
// What's the difference between `type` and `interface`?
// Write your answer as a comment.
// Answer: Not sure. It seems like the main use for interface is to extend other interfaces, such as for libraries.

// ─────────────────────────────────────────────
// SECTION B — Optional and readonly properties
// ─────────────────────────────────────────────

// Exercise 6
// Define an interface `Config` with:
// - host (required string)
// - port (optional number)
// - debug (optional boolean)
interface Config {
    host: string;
    port?: number;
    debug?: boolean;
}

// Exercise 7
// Create a Config with only the host property.
let config:Config = {host: "home"}

// Exercise 8
// Create a Config with all properties.
let config2:Config = {host: "work", port: 80, debug: false}

// Exercise 9
// Define an interface `Coordinate` with readonly properties x and y (both numbers).
interface Coordinate {
    readonly x: number;
    readonly y: number;
}

// Exercise 10
// Create a Coordinate and try to modify a property (this should error).
// Write the error as a comment instead of actual code.
// Error: // Cannot assign to 'x' because it is a read-only property.
// let coordinate:Coordinate = {x: 0,y: 0}
// coordinate.x = 5;

// ─────────────────────────────────────────────
// SECTION C — Methods in interfaces
// ─────────────────────────────────────────────

// Exercise 11
// Define an interface `Calculator` with methods:
// - add(a: number, b: number): number
// - subtract(a: number, b: number): number
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

// Exercise 12
// Create an object of type Calculator that implements add and subtract.
const object: Calculator = {
    add(a: number, b: number) {return a+b},
    subtract(a: number, b: number) {return a-b}
}

// Exercise 13
// Define an interface `Logger` with a method log(message: string): void.
interface Logger {
    log(message: string): void;
}

// Exercise 14
// Create a Logger object and test it.
const consoleLogger: Logger = {
    log(message: string): void {
        console.log(message)
    } 
}

// Exercise 15
// Define an interface `Stringifiable` with a method toString(): string.
interface Stringifiable {
    toString(): string;
}

// ─────────────────────────────────────────────
// SECTION D — Extending interfaces
// ─────────────────────────────────────────────

// Exercise 16
// Define a base interface `Animal` with properties: name (string), age (number).
// Define an interface `Dog` that extends Animal and adds: breed (string).
interface Animal {
    name: string;
    age: number;
}
interface Dog extends Animal {
    breed: string,
}

// Exercise 17
// Create a Dog object with all properties.
const dog: Dog = {
    name: "dog",
    age: 1,
    breed: "yellow"
}

// Exercise 18
// Define interfaces `Swimmer` and `Flyer`, each with one method.
// Then define `Duck` that extends both.
interface Swimmer {
    swim(): void;
}
interface Flyer {
    fly(): void;
}
interface Duck extends Swimmer, Flyer {
    quack(): void;
}

// Exercise 19
// Create a Duck object and implement all required methods.
const ducky:Duck = {
    swim() {console.log("swimming")},
    fly() {console.log("flying")},
    quack() {console.log("quacking")}
}

// Exercise 20
// Explain: What does `extends` do in interfaces?
// Answer: `extends` allows us to create a new interface that inherits the original interface's methods

// ─────────────────────────────────────────────
// SECTION E — Generic interfaces
// ─────────────────────────────────────────────

// Exercise 21
// Define a generic interface `Container<T>` with:
// - value: T
// - getValue(): T
interface Container<T> {
    value: T
    getValue(): T
}

// Exercise 22
// Create a Container<number> and a Container<string>.
const numberContainer: Container<number> = {
    value: 10,
    getValue() {return this.value}
}
const stringContainer: Container<string> = {
    value: "Hello",
    getValue() {return this.value}
}

// Exercise 23
// Define a generic interface `Repository<T>` with methods:
// - get(id: number): T | null
// - add(item: T): void
interface Repository<T> {
    get(id: number): T | null,
    add(item: T): void
}

// Exercise 24
// Define a User type, then create a Repository<User> object.
type User = {
    name: string
}
const AliceRepo: Repository<User> = {
    get(id: number) {return {name: "Alice"}},
    add(item) {console.log("Added!")}
}

// Exercise 25
// Define an interface `ApiResponse<T>` with:
// - status: "success" | "error"
// - data?: T
// - error?: string
// Create a response for a User type.
interface ApiResponse<T> {
    status: "success" | "error",
    data?: T,
    error?: string
}
const AliceApiResponse: ApiResponse<User> = {
    status: "success",
    data: {name: "Alice"}
}