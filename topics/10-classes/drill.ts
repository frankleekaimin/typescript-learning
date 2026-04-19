// Topic 10 — Classes & Access Modifiers
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic classes
// ─────────────────────────────────────────────

// Exercise 1
// Define a class `Car` with properties: make (string), model (string), year (number).
// Add a constructor that sets all three.
class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe(): string {return this.year.toString() + " " + this.model + " " + this.make}
}

// Exercise 2
// Create an instance of Car.
const carX = new Car("modern", "pro max", 2100)

// Exercise 3
// Add a method `describe()` to Car that returns a string like "2020 Toyota Camry".
// Completed in exercise 1

// Exercise 4
// Define a class `Rectangle` with width and height (numbers).
// Add a method `area()` that returns width * height.
class Rectangle{
    constructor(public width: number, public height: number) {}
    area(): number {return this.width * this.height}
}

// Exercise 5
// Create a Rectangle and call area().
const rec = new Rectangle(3,5)
rec.area()

// ─────────────────────────────────────────────
// SECTION B — Access modifiers
// ─────────────────────────────────────────────

// Exercise 6
// Define a class `BankAccount` with:
// - public owner (string)
// - private balance (number)
// - readonly id (string)
// Add a constructor that sets all three.
class BankAccount {
    constructor(public owner: string, private balance: number, readonly id: string) {}
    deposit(amount: number) {this.balance += amount}
    getBalance(): number {return this.balance}
}

// Exercise 7
// Add a method `deposit(amount: number)` to BankAccount that adds to the balance.
// Add a method `getBalance()` that returns the balance.
// done in exercise 6

// Exercise 8
// Create a BankAccount and test deposit and getBalance.
let myAccount = new BankAccount("Me", 5000, "001")
myAccount.deposit(100)
console.log(myAccount.getBalance())

// Exercise 9
// Try to access the private balance directly — write the error as a comment.
// Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// Exercise 10
// Use the constructor shorthand to rewrite Car (Exercise 1) more concisely.
class Car2{
    constructor(public make: string, public model: string, public year: number) {}
    describe(): string {return this.year.toString() + " " + this.model + " " + this.make}
}

// ─────────────────────────────────────────────
// SECTION C — Inheritance
// ─────────────────────────────────────────────

// Exercise 11
// Define a base class `Animal` with a public name and a method speak() that returns a string.
class Animal {
    constructor(public name: string) {}
    speak(): string {return this.name + " speaks!"}
}

// Exercise 12
// Define a class `Dog` that extends Animal.
// Override speak() to return "Rex barks" (or whatever name is set).
// Call super() in the constructor.
class Dog extends Animal {
    constructor(name: string) {super(name)}
    speak(): string {return this.name + " barks"}
}

// Exercise 13
// Define a class `Cat` that extends Animal and overrides speak() too.
class Cat extends Animal {
    constructor(name: string) {super(name)}
    speak(): string {return this.name + " meows"}
}

// Exercise 14
// Create instances of Dog and Cat and call speak() on both.
const dog = new Dog("Spark")
const cat = new Cat("Tom")
dog.speak()
cat.speak()

// Exercise 15
// What does `super()` do? Write your answer as a comment.
// Answer: It calls the constructor defined by the parent to initialize the new object.

// ─────────────────────────────────────────────
// SECTION D — Interfaces and abstract classes
// ─────────────────────────────────────────────

// Exercise 16
// Define an interface `Printable` with a method print(): void.
// Define a class `Invoice` that implements Printable.
interface Printable {
    print(): void
}
class Invoice implements Printable {
    print() {console.log("Invoice")}
}

// Exercise 17
// Define an abstract class `Shape` with an abstract method area(): number.
// Add a non-abstract method describe() that uses area().
abstract class Shape {
    abstract area(): number
    describe(): void {console.log("The area of this shape is " + this.area().toString())}
}

// Exercise 18
// Define a class `Circle` that extends Shape and implements area().
class Circle extends Shape {
    constructor(public radius: number) {super()}
    area(): number {return this.radius ** 2 * Math.PI}
}

// Exercise 19
// Define a class `Square` that extends Shape and implements area().
class Square extends Shape {
    constructor(public length: number) {super()}
    area(): number {return this.length ** 2}
}

// Exercise 20
// Create a Circle and Square and call describe() on both.
const circle = new Circle(5)
const square = new Square(5)
circle.describe()
square.describe()

// ─────────────────────────────────────────────
// SECTION E — Static members and getters/setters
// ─────────────────────────────────────────────

// Exercise 21
// Define a class `Counter` with a static count property (starts at 0).
// Add a static method increment() that increases count.
// Add a static method getCount() that returns count.
class Counter {
    static count = 0
    static increment(): number {this.count++; return this.count}
    static getCount(): number {return this.count}
}

// Exercise 22
// Call Counter.increment() three times and then log Counter.getCount().
Counter.increment()
Counter.increment()
Counter.increment()
console.log(Counter.getCount())

// Exercise 23
// Define a class `Temperature` with a private _celsius property.
// Add a getter `fahrenheit` that converts and returns the value.
// Add a setter `celsius` that sets the value (reject values below -273.15).
class Temperature {
    private _celsius: number;
    constructor(celsius: number) {
        this._celsius = celsius
    }
    get fahrenheit(): number {
        return this._celsius * 9/5 + 32;
    }
    set celsius(value: number) {
        if (value < - 273.15) throw new Error("Below absolute zero");
        this._celsius = value;
    }
}

// Exercise 24
// Create a Temperature and test both getter and setter.
const todayWeather = new Temperature(30)
console.log(todayWeather.fahrenheit)
todayWeather.celsius = 32
console.log(todayWeather.fahrenheit)

// Exercise 25
// Explain: What's the difference between `private` and `protected`?
// Answer: Private restricts to the class only; protected allows subclasses to access.
