// Topic 10 — Classes & Access Modifiers
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic classes
// ─────────────────────────────────────────────

// Exercise 1
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  describe(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Exercise 2
const myCar = new Car("Toyota", "Camry", 2020);

// Exercise 3 — completed in Exercise 1

// Exercise 4
class Rectangle {
  constructor(public width: number, public height: number) {}

  area(): number {
    return this.width * this.height;
  }
}

// Exercise 5
const rect = new Rectangle(4, 6);
rect.area();

// ─────────────────────────────────────────────
// SECTION B — Access modifiers
// ─────────────────────────────────────────────

// Exercise 6 & 7
class BankAccount {
  constructor(
    public owner: string,
    private balance: number,
    readonly id: string
  ) {}

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

// Exercise 8
const account = new BankAccount("Alice", 1000, "ACC-001");
account.deposit(500);
console.log(account.getBalance());

// Exercise 9
// Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// Exercise 10
class Car2 {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  describe(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// ─────────────────────────────────────────────
// SECTION C — Inheritance
// ─────────────────────────────────────────────

// Exercise 11
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

// Exercise 12
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): string {
    return `${this.name} barks`;
  }
}

// Exercise 13
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  speak(): string {
    return `${this.name} meows`;
  }
}

// Exercise 14
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");
dog.speak();
cat.speak();

// Exercise 15
// Answer: super() calls the parent class constructor to initialize inherited
// properties. It must be called before accessing `this` in a subclass.

// ─────────────────────────────────────────────
// SECTION D — Interfaces and abstract classes
// ─────────────────────────────────────────────

// Exercise 16
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  constructor(public amount: number) {}

  print(): void {
    console.log(`Invoice: $${this.amount}`);
  }
}

// Exercise 17
abstract class Shape {
  abstract area(): number;

  describe(): void {
    console.log(`The area of this shape is ${this.area()}`);
  }
}

// Exercise 18
class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

// Exercise 19
class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side ** 2;
  }
}

// Exercise 20
const circle = new Circle(5);
const square = new Square(4);
circle.describe();
square.describe();

// ─────────────────────────────────────────────
// SECTION E — Static members and getters/setters
// ─────────────────────────────────────────────

// Exercise 21
class Counter {
  static count = 0;

  static increment(): void {
    Counter.count++;
  }

  static getCount(): number {
    return Counter.count;
  }
}

// Exercise 22
Counter.increment();
Counter.increment();
Counter.increment();
console.log(Counter.getCount());   // 3

// Exercise 23
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get fahrenheit(): number {
    return this._celsius * 9 / 5 + 32;
  }

  set celsius(value: number) {
    if (value < -273.15) throw new Error("Below absolute zero");
    this._celsius = value;
  }
}

// Exercise 24
const temp = new Temperature(100);
console.log(temp.fahrenheit);  // 212
temp.celsius = 0;
console.log(temp.fahrenheit);  // 32

// Exercise 25
// private: accessible only within the class itself.
// protected: accessible within the class AND any subclasses that extend it.
