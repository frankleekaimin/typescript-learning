// Topic 07 — Interfaces
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic interface syntax
// ─────────────────────────────────────────────

// Exercise 1
interface Product {
  name: string;
  price: number;
}

// Exercise 2
const product: Product = {
  name: "Laptop",
  price: 999
};

// Exercise 3
interface Book {
  title: string;
  author: string;
  pages: number;
}

// Exercise 4
const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180
};

// Exercise 5
// Answer: Interface is for object shapes (cleaner than type for objects),
// interfaces can extend other interfaces using `extends` (better than `&`),
// and interfaces support declaration merging (combining two declarations).

// ─────────────────────────────────────────────
// SECTION B — Optional and readonly properties
// ─────────────────────────────────────────────

// Exercise 6
interface Config {
  host: string;
  port?: number;
  debug?: boolean;
}

// Exercise 7
const minimalConfig: Config = {
  host: "localhost"
};

// Exercise 8
const fullConfig: Config = {
  host: "localhost",
  port: 3000,
  debug: true
};

// Exercise 9
interface Coordinate {
  readonly x: number;
  readonly y: number;
}

// Exercise 10
// Error: Cannot assign to 'x' because it is a read-only property
// const coord: Coordinate = { x: 10, y: 20 };
// coord.x = 30;  // ERROR

// ─────────────────────────────────────────────
// SECTION C — Methods in interfaces
// ─────────────────────────────────────────────

// Exercise 11
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// Exercise 12
const calc: Calculator = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  }
};

// Exercise 13
interface Logger {
  log(message: string): void;
}

// Exercise 14
const logger: Logger = {
  log(message: string) {
    console.log(message);
  }
};

// Exercise 15
interface Stringifiable {
  toString(): string;
}

// ─────────────────────────────────────────────
// SECTION D — Extending interfaces
// ─────────────────────────────────────────────

// Exercise 16
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

// Exercise 17
const myDog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Labrador"
};

// Exercise 18
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
const myDuck: Duck = {
  swim() {
    console.log("Swimming...");
  },
  fly() {
    console.log("Flying...");
  },
  quack() {
    console.log("Quack!");
  }
};

// Exercise 20
// Answer: `extends` allows one interface to inherit properties and methods from another.
// The extended interface includes all members from the parent plus its own members.

// ─────────────────────────────────────────────
// SECTION E — Generic interfaces
// ─────────────────────────────────────────────

// Exercise 21
interface Container<T> {
  value: T;
  getValue(): T;
}

// Exercise 22
const numContainer: Container<number> = {
  value: 42,
  getValue() {
    return this.value;
  }
};

const strContainer: Container<string> = {
  value: "hello",
  getValue() {
    return this.value;
  }
};

// Exercise 23
interface Repository<T> {
  get(id: number): T | null;
  add(item: T): void;
}

// Exercise 24
type User = {
  id: number;
  name: string;
};

const userRepository: Repository<User> = {
  get(id: number) {
    return { id, name: "Alice" };
  },
  add(item: User) {
    console.log(`Added user: ${item.name}`);
  }
};

// Exercise 25
interface ApiResponse<T> {
  status: "success" | "error";
  data?: T;
  error?: string;
}

const userResponse: ApiResponse<User> = {
  status: "success",
  data: { id: 1, name: "Alice" }
};

const errorResponse: ApiResponse<User> = {
  status: "error",
  error: "User not found"
};
