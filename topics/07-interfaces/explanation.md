# Topic 07 — Interfaces

## 1. What is an interface?

An **interface** is a way to define the **shape** of an object — what properties and methods it must have. It's similar to a `type`, but with some key differences and unique features.

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30
};
```

## 2. Interface vs type

Both define object shapes, but:

| Feature | `type` | `interface` |
|---------|--------|-----------|
| Define object shape | ✅ | ✅ |
| Define unions | ✅ | ❌ |
| Define primitives | ✅ | ❌ |
| Extend other interfaces | ✅ with `&` | ✅ with `extends` |
| Declaration merging | ❌ | ✅ |

For now: **use `interface` for object shapes, `type` for everything else**.

```ts
// interface — object shape
interface Person {
  name: string;
}

// type — anything
type Status = "active" | "inactive";
```

## 3. Optional properties

Use `?` to make a property optional (like with types):

```ts
interface Config {
  host: string;
  port?: number;        // Optional
  debug?: boolean;
}

const config: Config = {
  host: "localhost"    // port and debug are optional
};
```

## 4. Readonly properties

Mark properties that shouldn't be modified:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 10, y: 20 };
p.x = 30;  // ERROR — cannot assign to readonly property
```

## 5. Methods in interfaces

Define methods that objects must implement:

```ts
interface Animal {
  name: string;
  speak(): void;            // Method with no parameters
  move(distance: number): void;   // Method with parameters
  describe(): string;       // Method with return type
}

const dog: Animal = {
  name: "Rex",
  speak() { console.log("Woof!"); },
  move(distance: number) { console.log(`Moved ${distance}m`); },
  describe() { return "A dog named Rex"; }
};
```

## 6. Function types in interfaces

You can define function signatures:

```ts
interface Logger {
  log(message: string): void;
}

const consoleLogger: Logger = {
  log(message: string) { console.log(message); }
};

// You can also use type for function signatures
type LogFunction = (message: string) => void;
```

## 7. Extending interfaces

Interfaces can extend other interfaces (inheritance):

```ts
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Labrador"
};
```

You can extend multiple interfaces:

```ts
interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

interface Duck extends Swimmer, Flyer {
  quack(): void;
}
```

## 8. Interface merging

If you declare the same interface twice, TypeScript **merges** them:

```ts
interface Window {
  myCustomProperty: string;
}

interface Window {
  anotherProperty: number;
}

// Now Window has both properties
```

This is useful for extending third-party libraries, but it can be confusing. Use it carefully.

## 9. Implementing interfaces

Classes can implement interfaces to guarantee they have certain properties and methods:

```ts
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start() { console.log("Engine started"); }
  stop() { console.log("Engine stopped"); }
}

const car = new Car();  // car is both Car and Vehicle
```

## 10. Generic interfaces

Interfaces can have type parameters (like functions with template parameters):

```ts
interface Container<T> {
  value: T;
  getValue(): T;
}

const numberContainer: Container<number> = {
  value: 42,
  getValue() { return this.value; }
};

const stringContainer: Container<string> = {
  value: "hello",
  getValue() { return this.value; }
};
```

## 11. Indexable interfaces

Define how objects can be indexed with arbitrary keys:

```ts
interface StringDict {
  [key: string]: string;
}

const dict: StringDict = {
  hello: "world",
  foo: "bar"
};

console.log(dict["hello"]);  // "world"
```

## 12. Interfaces as contracts

Think of interfaces as **contracts** — they say "anything using this interface must have these properties and methods":

```ts
interface PaymentProcessor {
  process(amount: number): boolean;
}

function checkout(processor: PaymentProcessor, amount: number) {
  const success = processor.process(amount);
  if (success) {
    console.log("Payment successful");
  }
}

// Both of these work because they implement PaymentProcessor
const creditCard: PaymentProcessor = {
  process(amount: number) { return true; }
};

const paypal: PaymentProcessor = {
  process(amount: number) { return false; }
};

checkout(creditCard, 100);
checkout(paypal, 50);
```

---

## Key takeaways

1. **Interfaces define object shapes** — similar to `type`, but better for objects.
2. **Use `interface` for objects, `type` for unions and primitives**.
3. **`extends` is cleaner than `&`** for extending interfaces.
4. **Readonly prevents mutation** of properties.
5. **Methods are defined directly** in interfaces.
6. **Generic interfaces** work like generic types.
7. **Interfaces as contracts** — use them to define what methods/properties are required.
8. **Declaration merging** is unique to interfaces (usually avoid unless extending libraries).
