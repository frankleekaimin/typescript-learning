# Topic 12 — Utility Types

TypeScript ships with a set of built-in **utility types** — generic helpers that transform existing types into new ones. Instead of rewriting types from scratch, you compose them.

---

## 1. `Partial<T>`

Makes every property in `T` **optional**.

```ts
interface User {
  name: string;
  email: string;
  age: number;
}

type PartialUser = Partial<User>;
// Equivalent to:
// { name?: string; email?: string; age?: number }
```

Common use case — update payloads where you only send the fields that changed:

```ts
function updateUser(id: number, changes: Partial<User>): void {
  // changes may have any subset of User's fields
}

updateUser(1, { email: "new@example.com" });  // only updating email — OK
```

---

## 2. `Required<T>`

The opposite of `Partial` — makes every property **required** (removes `?`).

```ts
interface Config {
  host?: string;
  port?: number;
}

type StrictConfig = Required<Config>;
// { host: string; port: number }
```

---

## 3. `Readonly<T>`

Makes every property **read-only** — you can't reassign them after creation.

```ts
interface Point {
  x: number;
  y: number;
}

const p: Readonly<Point> = { x: 1, y: 2 };
p.x = 10;  // ERROR — cannot assign to 'x' because it is a read-only property
```

Useful for configuration objects or values that should never change.

---

## 4. `Record<K, V>`

Creates an object type where **keys are of type `K`** and **values are of type `V`**.

```ts
type Scores = Record<string, number>;
const scores: Scores = { alice: 90, bob: 85 };

// Often used with union types as keys:
type Status = "active" | "inactive" | "pending";
type StatusMap = Record<Status, boolean>;
const flags: StatusMap = { active: true, inactive: false, pending: true };
```

Think of it as a typed dictionary — like Python's `Dict[str, int]` but with key constraints.

---

## 5. `Pick<T, K>`

Creates a new type by **picking a subset of properties** from `T`.

```ts
interface User {
  name: string;
  email: string;
  age: number;
  password: string;
}

type PublicUser = Pick<User, "name" | "email">;
// { name: string; email: string }
```

Useful when you have a large type but only want to expose part of it — e.g., a public API response.

---

## 6. `Omit<T, K>`

The opposite of `Pick` — creates a new type by **removing** properties `K` from `T`.

```ts
type SafeUser = Omit<User, "password">;
// { name: string; email: string; age: number }
```

`Omit` is often more ergonomic than `Pick` when you want to remove just one or two sensitive fields.

---

## 7. `Exclude<T, U>`

Works on **union types**, not object types. Removes from `T` any members that are assignable to `U`.

```ts
type A = "cat" | "dog" | "fish";
type NoDog = Exclude<A, "dog">;
// "cat" | "fish"

type NumOrStr = number | string | boolean;
type OnlyNumOrStr = Exclude<NumOrStr, boolean>;
// number | string
```

---

## 8. `Extract<T, U>`

The opposite of `Exclude` — keeps only members of `T` that are assignable to `U`.

```ts
type A = "cat" | "dog" | "fish";
type JustDog = Extract<A, "dog" | "cat">;
// "cat" | "dog"
```

---

## 9. `NonNullable<T>`

Removes `null` and `undefined` from a type.

```ts
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
// string
```

---

## 10. `ReturnType<T>`

Extracts the **return type** of a function type `T`.

```ts
function getUser() {
  return { name: "Alice", age: 30 };
}

type User = ReturnType<typeof getUser>;
// { name: string; age: number }
```

Useful when you don't control the function definition but need its return type elsewhere.

---

## 11. `Parameters<T>`

Extracts the **parameter types** of a function as a tuple.

```ts
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age}`;
}

type GreetParams = Parameters<typeof greet>;
// [name: string, age: number]
```

---

## 12. Composing utility types

You can chain utility types together:

```ts
interface User {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

// A type for update requests: omit server-set fields, make rest optional
type UpdateUserRequest = Partial<Omit<User, "createdAt">>;
// { name?: string; email?: string; password?: string }
```

---

## Key takeaways

| Utility type | What it does |
|---|---|
| `Partial<T>` | All properties become optional |
| `Required<T>` | All properties become required |
| `Readonly<T>` | All properties become read-only |
| `Record<K, V>` | Object with keys `K` and values `V` |
| `Pick<T, K>` | Keep only the listed properties |
| `Omit<T, K>` | Remove the listed properties |
| `Exclude<T, U>` | Remove union members assignable to `U` |
| `Extract<T, U>` | Keep only union members assignable to `U` |
| `NonNullable<T>` | Remove `null` and `undefined` |
| `ReturnType<T>` | Extract a function's return type |
| `Parameters<T>` | Extract a function's parameter types as a tuple |
