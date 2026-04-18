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
// TODO

// Exercise 2
// Create an instance of Car.
// TODO

// Exercise 3
// Add a method `describe()` to Car that returns a string like "2020 Toyota Camry".
// TODO

// Exercise 4
// Define a class `Rectangle` with width and height (numbers).
// Add a method `area()` that returns width * height.
// TODO

// Exercise 5
// Create a Rectangle and call area().
// TODO

// ─────────────────────────────────────────────
// SECTION B — Access modifiers
// ─────────────────────────────────────────────

// Exercise 6
// Define a class `BankAccount` with:
// - public owner (string)
// - private balance (number)
// - readonly id (string)
// Add a constructor that sets all three.
// TODO

// Exercise 7
// Add a method `deposit(amount: number)` to BankAccount that adds to the balance.
// Add a method `getBalance()` that returns the balance.
// TODO

// Exercise 8
// Create a BankAccount and test deposit and getBalance.
// TODO

// Exercise 9
// Try to access the private balance directly — write the error as a comment.
// Error: // TODO

// Exercise 10
// Use the constructor shorthand to rewrite Car (Exercise 1) more concisely.
// TODO

// ─────────────────────────────────────────────
// SECTION C — Inheritance
// ─────────────────────────────────────────────

// Exercise 11
// Define a base class `Animal` with a public name and a method speak() that returns a string.
// TODO

// Exercise 12
// Define a class `Dog` that extends Animal.
// Override speak() to return "Rex barks" (or whatever name is set).
// Call super() in the constructor.
// TODO

// Exercise 13
// Define a class `Cat` that extends Animal and overrides speak() too.
// TODO

// Exercise 14
// Create instances of Dog and Cat and call speak() on both.
// TODO

// Exercise 15
// What does `super()` do? Write your answer as a comment.
// Answer: // TODO

// ─────────────────────────────────────────────
// SECTION D — Interfaces and abstract classes
// ─────────────────────────────────────────────

// Exercise 16
// Define an interface `Printable` with a method print(): void.
// Define a class `Invoice` that implements Printable.
// TODO

// Exercise 17
// Define an abstract class `Shape` with an abstract method area(): number.
// Add a non-abstract method describe() that uses area().
// TODO

// Exercise 18
// Define a class `Circle` that extends Shape and implements area().
// TODO

// Exercise 19
// Define a class `Square` that extends Shape and implements area().
// TODO

// Exercise 20
// Create a Circle and Square and call describe() on both.
// TODO

// ─────────────────────────────────────────────
// SECTION E — Static members and getters/setters
// ─────────────────────────────────────────────

// Exercise 21
// Define a class `Counter` with a static count property (starts at 0).
// Add a static method increment() that increases count.
// Add a static method getCount() that returns count.
// TODO

// Exercise 22
// Call Counter.increment() three times and then log Counter.getCount().
// TODO

// Exercise 23
// Define a class `Temperature` with a private _celsius property.
// Add a getter `fahrenheit` that converts and returns the value.
// Add a setter `celsius` that sets the value (reject values below -273.15).
// TODO

// Exercise 24
// Create a Temperature and test both getter and setter.
// TODO

// Exercise 25
// Explain: What's the difference between `private` and `protected`?
// Answer: // TODO
