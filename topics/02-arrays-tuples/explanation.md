# Topic 02 — Arrays & Tuples

## 1. Arrays — the basics

An **array** is an ordered list of values. In TypeScript, all elements in an array must have the same type.

### Array type annotation syntax

There are two ways to annotate an array type:

```ts
let names: string[] = ["Alice", "Bob", "Charlie"];
let ages: Array<number> = [25, 30, 35];
```

Both mean the same thing. `string[]` is more common and concise.

### Type inference for arrays

If you initialize with values, TypeScript infers the array type:

```ts
let colors = ["red", "green", "blue"];   // inferred: string[]
let scores = [100, 85, 90];              // inferred: number[]
```

### Mixed-type arrays (intentional)

If you genuinely need an array with mixed types, use a **union type**:

```ts
let mixed: (string | number)[] = ["hello", 42, "world", 100];
```

This says "array where each element is either a string or a number."

## 2. Arrays of objects

Arrays can hold objects too:

```ts
interface User {
  name: string;
  age: number;
}

let users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
```

(You'll learn `interface` formally in a later topic — for now, think of it as defining the shape of an object.)

## 3. Tuples — fixed-length, positional types

A **tuple** is an array with a **fixed length** and a **known type at each position**.

Think of it like a struct in Python's dataclass or a named tuple — each slot has semantic meaning.

```ts
// A tuple: [name, age, isActive]
let user: [string, number, boolean] = ["Frank", 30, true];

// These would cause errors:
let user: [string, number, boolean] = ["Frank", 30, "yes"];   // ERROR: 3rd must be boolean
let user: [string, number, boolean] = ["Frank", 30];          // ERROR: missing 3rd element
```

### Accessing tuple elements

You access them by index, just like arrays:

```ts
let user: [string, number, boolean] = ["Frank", 30, true];

console.log(user[0]);  // "Frank" (string)
console.log(user[1]);  // 30 (number)
console.log(user[2]);  // true (boolean)
```

TypeScript knows the type at each position, so it catches type errors:

```ts
let uppercase = user[0].toUpperCase();  // OK — user[0] is a string
let incremented = user[1] + 1;          // OK — user[1] is a number
let inverted = !user[2];                // OK — user[2] is a boolean
```

### Optional tuple elements

You can mark tuple elements as optional with `?`:

```ts
let config: [string, number?] = ["prod"];     // OK
let config: [string, number?] = ["prod", 3];  // Also OK
```

### Tuples with named labels (modern TypeScript)

For clarity, you can name each position:

```ts
let user: [name: string, age: number, active: boolean] = ["Frank", 30, true];
```

The names are documentation only — they don't affect runtime behavior.

## 4. `readonly` arrays

You can prevent modification with the `readonly` keyword:

```ts
let immutable: readonly string[] = ["a", "b", "c"];

immutable.push("d");  // ERROR — readonly arrays cannot be modified
immutable[0] = "x";   // ERROR
```

For tuples:

```ts
let config: readonly [string, number] = ["prod", 5];
config[0] = "dev";    // ERROR
```

## 5. Common array methods and their types

| Method | Signature | Returns |
|--------|-----------|---------|
| `push(...items)` | Add to end | `number` (new length) |
| `pop()` | Remove last | `T \| undefined` |
| `shift()` | Remove first | `T \| undefined` |
| `unshift(...items)` | Add to start | `number` (new length) |
| `map(fn)` | Transform each | `Array<U>` (new array) |
| `filter(fn)` | Keep matching | `Array<T>` (filtered array) |
| `find(fn)` | First match | `T \| undefined` |
| `some(fn)` | Any match? | `boolean` |
| `every(fn)` | All match? | `boolean` |

Example:

```ts
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(n => n * 2);     // [2, 4, 6, 8, 10]
let evens = numbers.filter(n => n % 2 === 0);  // [2, 4]
let hasThree = numbers.some(n => n === 3);     // true
```

## 6. Array length

You can check array length with `.length`:

```ts
let arr = [1, 2, 3];
console.log(arr.length);  // 3
```

For tuples, `.length` is a literal type (the exact number):

```ts
let pair: [string, number] = ["hello", 42];
let len: 2 = pair.length;  // OK — length is exactly 2
let len: 3 = pair.length;  // ERROR — length is 2, not 3
```

---

## Key takeaways

1. Use `Type[]` for arrays of one type.
2. Use `(Type1 | Type2)[]` for arrays of mixed types.
3. Use `[Type1, Type2, ...]` for tuples (fixed length, known position types).
4. Tuples are great for return values (e.g., `[success, data]` or `[error, null]`).
5. `readonly` prevents modification at the type level.
6. Array methods like `map()`, `filter()`, `find()` are type-safe.
