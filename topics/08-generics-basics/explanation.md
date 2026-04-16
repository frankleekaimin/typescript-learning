# Topic 08 — Generics: Basics

## 1. What are generics?

**Generics** allow you to write flexible, reusable code that works with **any type**. Instead of fixing a type, you use a **type variable** (like a placeholder) that gets filled in later.

Think of it like a function parameter, but for **types** instead of values.

```ts
// Without generics — stuck with one type
function getFirst(arr: string[]): string {
  return arr[0];
}

// With generics — works with any type
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst([1, 2, 3]);        // T = number
getFirst(["a", "b", "c"]); // T = string
```

## 2. Generic functions

Use `<T>` to declare a type variable:

```ts
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello");  // T = string
identity<number>(42);       // T = number
identity(true);             // T inferred as boolean
```

TypeScript can often **infer** the type from the argument, so you don't always need to write `<T>`.

### Multiple type variables

```ts
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

pair<string, number>("age", 30);  // [string, number]
pair(true, "yes");                // inferred as [boolean, string]
```

## 3. Generic types

You've seen this already with `Container<T>`:

```ts
type Box<T> = {
  value: T;
};

const numBox: Box<number> = { value: 42 };
const strBox: Box<string> = { value: "hello" };
```

This is much more flexible than:
```ts
type NumberBox = { value: number };
type StringBox = { value: string };
// ... need a type for every combination!
```

## 4. Type constraints

You can **constrain** what types are allowed:

```ts
// T must have a length property
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("hello");     // ✅ strings have length
getLength([1, 2, 3]);   // ✅ arrays have length
getLength(42);          // ❌ numbers don't have length
```

### Constraining to a specific type

```ts
// T must be a string or string array
function processString<T extends string | string[]>(value: T): string {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value.toUpperCase();
}

processString("hello");           // ✅
processString(["a", "b", "c"]);  // ✅
processString(42);                // ❌
```

### Extending interfaces

```ts
interface HasName {
  name: string;
}

function getName<T extends HasName>(obj: T): string {
  return obj.name;
}

getName({ name: "Alice", age: 30 });  // ✅ has name
getName({ age: 30 });                  // ❌ no name property
```

## 5. Default type parameters

You can provide a default type:

```ts
type Maybe<T = string> = T | null;

const a: Maybe = "hello";           // T = string (default)
const b: Maybe<number> = 42;        // T = number (explicit)
const c: Maybe<number> = null;      // T = number (explicit)
```

## 6. Generic arrays

Work with arrays of any type:

```ts
function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse([1, 2, 3]);           // number[]
reverse(["a", "b"]);          // string[]
```

Common pattern: **map over arrays and transform items**:

```ts
function map<T, U>(arr: T[], transform: (item: T) => U): U[] {
  return arr.map(transform);
}

const nums = [1, 2, 3];
const strings = map(nums, (n) => n.toString());  // string[]
```

## 7. Generic constraints are powerful

You can chain constraints:

```ts
// T must be an object with a "key" property of type K
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
getProperty(user, "name");  // ✅ returns string
getProperty(user, "age");   // ✅ returns number
getProperty(user, "email"); // ❌ email doesn't exist
```

## 8. Common generic patterns

### Wrapping a value

```ts
type Result<T> = { success: true; data: T } | { success: false; error: string };

const goodResult: Result<number> = { success: true, data: 42 };
const badResult: Result<string> = { success: false, error: "oops" };
```

### Filtering/transforming

```ts
function filterByProperty<T, K extends keyof T>(
  items: T[],
  property: K,
  value: T[K]
): T[] {
  return items.filter((item) => item[property] === value);
}

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];

filterByProperty(users, "age", 30);  // Only Alice
```

## 9. When to use generics

Use generics when:
- You want **reusable code** that works with multiple types
- You're building **utilities, libraries, or frameworks**
- You need **type-safe data structures** (containers, lists, etc.)

Don't overuse generics — simple, concrete types are often clearer.

```ts
// ❌ Overusing generics (confusing)
function process<T extends unknown>(value: T): T {
  return value;
}

// ✅ Simpler and clearer
function identity<T>(value: T): T {
  return value;
}
```

---

## Key takeaways

1. **Generics** use type variables (like `<T>`) to write flexible code.
2. **Type inference** — TypeScript can often guess the type from arguments.
3. **Constraints** with `extends` limit what types are allowed.
4. **Multiple type variables** — `<T, U>` for more flexibility.
5. **Default types** — `<T = string>` provides a fallback.
6. **Generic functions, types, and interfaces** all support generics.
7. **Common patterns**: containers, filters, transformers, utilities.
