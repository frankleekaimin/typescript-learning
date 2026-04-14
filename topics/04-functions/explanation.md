# Topic 04 — Functions

## 1. Function declarations with type annotations

In TypeScript, you annotate both **parameters** and the **return type**:

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(5, 10);     // OK — returns 15
add("5", "10"); // ERROR — parameters must be numbers
```

The syntax is: `(paramName: Type): ReturnType`

### Return type inference

TypeScript can infer the return type from the function body, but it's good practice to write it explicitly:

```ts
function greet(name: string): string {
  return "Hello, " + name;
}
```

## 2. Arrow functions

Arrow function syntax is the same — annotate parameters and return type:

```ts
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Shorthand for single-line functions:
const double = (n: number): number => n * 2;
```

## 3. Optional parameters with `?`

Mark a parameter optional with `?`. Optional parameters must come **after** required ones:

```ts
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return greeting + ", " + name;
  }
  return "Hello, " + name;
}

greet("Frank");                    // OK
greet("Frank", "Good morning");    // OK
```

When a parameter is optional, the value can be `undefined`:

```ts
function describe(name: string, age?: number): string {
  if (age !== undefined) {
    return `${name} is ${age} years old`;
  }
  return `${name}'s age is unknown`;
}
```

## 4. Default parameters

Provide a default value so a parameter is never `undefined`:

```ts
function greet(name: string, greeting: string = "Hello"): string {
  return greeting + ", " + name;
}

greet("Frank");                    // "Hello, Frank"
greet("Frank", "Good morning");    // "Good morning, Frank"
```

With defaults, the parameter is **not** optional — it has a fallback value.

## 5. Rest parameters (`...`)

Accept a variable number of arguments using `...args`:

```ts
function sum(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Usage:
const total = sum([1, 2, 3, 4, 5]);  // 15
```

Or use rest parameters in the parameter list (more concise):

```ts
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

// Usage:
const total = sum(1, 2, 3, 4, 5);  // 15 — cleaner syntax
```

## 6. Function types

You can assign a type to a **function itself** (not just its parameters):

```ts
type Greeter = (name: string) => string;

const myGreeter: Greeter = (name) => {
  return "Hello, " + name;
};
```

This says: "`myGreeter` is a function that takes a string and returns a string."

### Function type with multiple parameters

```ts
type Adder = (a: number, b: number) => number;

const add: Adder = (a, b) => a + b;
```

## 7. Callback functions

Functions can accept other functions as parameters:

```ts
function processArray(
  arr: number[],
  callback: (n: number) => number
): number[] {
  return arr.map(callback);
}

const doubled = processArray([1, 2, 3], (n) => n * 2);
// doubled = [2, 4, 6]
```

The callback parameter is typed as `(n: number) => number`.

## 8. Functions returning functions

Functions can return other functions:

```ts
function makeMultiplier(factor: number): (n: number) => number {
  return (n) => n * factor;
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## 9. `void` return type

Use `void` when a function doesn't return anything:

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello");  // Returns undefined implicitly
```

## 10. `never` return type (advanced)

`never` means the function never returns (throws an error, infinite loop, etc.):

```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while (true) {
    // loops forever
  }
}
```

You'll use `never` rarely, mostly in advanced patterns.

---

## Key takeaways

1. Annotate **all** function parameters with types.
2. Annotate the **return type** explicitly (even if TypeScript could infer it).
3. Use `?` for optional parameters; they must come after required parameters.
4. Use default values to provide fallbacks without making parameters optional.
5. Use `...args: Type[]` for variadic (variable-length) arguments.
6. Function types describe the shape of a function: `(param: Type) => ReturnType`.
7. Functions can accept and return other functions (higher-order functions).
8. Use `void` for functions that don't return a value.
