# Topic 06 — Literal Types & Type Narrowing

## 1. Literal types — exact values

A **literal type** is a type that represents a **single specific value**, not a range of values:

```ts
let direction: "north";  // Only "north" is allowed, not any string
direction = "north";     // OK
direction = "south";     // ERROR
```

Literal types are useful when you want a variable to be one of a few specific options.

### Literal types for different primitives

```ts
let httpStatus: 200;        // Only 200
let success: true;          // Only true
let empty: null;            // Only null
let precisely: 3.14159;     // Exactly 3.14159
```

## 2. Literal unions — the power pattern

Combine literal types to create a set of allowed values:

```ts
type Direction = "north" | "south" | "east" | "west";
let heading: Direction = "north";   // OK
heading = "northeast";              // ERROR — not in the union
```

This is like an enum, but more flexible. It's commonly used for:
- API status values: `"pending" | "success" | "error"`
- HTTP methods: `"GET" | "POST" | "PUT" | "DELETE"`
- Log levels: `"info" | "warn" | "error"`

### Literal unions with numbers

```ts
type HttpStatus = 200 | 201 | 400 | 404 | 500;
let code: HttpStatus = 200;   // OK
let code: HttpStatus = 201;   // OK
let code: HttpStatus = 418;   // ERROR
```

## 3. Type narrowing with literal types

When you have a union of literals, you can narrow by checking the value:

```ts
type Status = "success" | "pending" | "error";

function handleStatus(status: Status): void {
  if (status === "success") {
    console.log("Done!");
  } else if (status === "pending") {
    console.log("Still working...");
  } else if (status === "error") {
    console.log("Failed!");
  }
}
```

## 4. Discriminated unions with literals (recap)

Remember from Topic 05: combining a **literal property** with union types creates a powerful pattern:

```ts
type Success = { kind: "success"; value: number };
type Failure = { kind: "failure"; error: string };

type Result = Success | Failure;

function processResult(result: Result): void {
  if (result.kind === "success") {
    console.log(result.value);   // Narrowed — value exists
  } else {
    console.log(result.error);   // Narrowed — error exists
  }
}
```

The `kind` property acts as a **discriminator**.

## 5. Type guards — custom narrowing

You can write **type guard functions** that tell TypeScript when something is a certain type:

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

let mixed: unknown = "hello";

if (isString(mixed)) {
  console.log(mixed.toUpperCase());  // TypeScript knows mixed is string
}
```

The `value is string` syntax is a **type predicate**. It tells TypeScript: "if this function returns true, you can treat the value as a `string`."

### Common type guard patterns

```ts
// Check for object
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

// Check for specific class
function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

// Check for property
function hasEmail(value: unknown): value is { email: string } {
  return isObject(value) && "email" in value && typeof value.email === "string";
}
```

## 6. Exhaustiveness checking

When narrowing a union of literals, you can use `never` to ensure you've handled all cases:

```ts
type TrafficLight = "red" | "yellow" | "green";

function action(light: TrafficLight): string {
  if (light === "red") {
    return "Stop";
  } else if (light === "yellow") {
    return "Slow down";
  } else if (light === "green") {
    return "Go";
  } else {
    // If we've handled all cases, this should be unreachable
    const _exhaustive: never = light;
    return _exhaustive;
  }
}
```

If you add a new literal to `TrafficLight` (e.g., `"blue"`) but forget to handle it, TypeScript will error on the `never` assignment.

## 7. Narrowing with `in` operator

Check if an object has a property:

```ts
type Car = { wheels: 4; engine: string };
type Bike = { wheels: 2; pedals: boolean };

function describe(vehicle: Car | Bike): string {
  if ("engine" in vehicle) {
    return `Car with ${vehicle.engine}`;
  } else {
    return `Bike with pedals: ${vehicle.pedals}`;
  }
}
```

## 8. Narrowing with `instanceof`

Check if an object is an instance of a class:

```ts
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(pet: Dog | Cat): void {
  if (pet instanceof Dog) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

---

## Key takeaways

1. **Literal types** represent single specific values: `"success"`, `200`, `true`.
2. **Literal unions** create constrained sets: `"north" | "south" | "east" | "west"`.
3. Use literals with discriminated unions for type-safe unions.
4. **Type guards** are functions with `value is Type` predicates for custom narrowing.
5. **Exhaustiveness checking** with `never` ensures you've handled all cases.
6. Common narrowing techniques: `typeof`, `instanceof`, property checks (`in`), equality.
7. Literal types are better than strings when you want to restrict to specific values.
