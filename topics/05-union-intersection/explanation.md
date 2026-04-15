# Topic 05 — Union & Intersection Types

## 1. Union types — alternatives with `|`

A **union type** says a value can be **one of several types**:

```ts
let status: string | number;
status = "pending";   // OK — string
status = 200;         // OK — number
status = true;        // ERROR — not string or number
```

Union types are useful when a value has multiple possibilities.

### Unions in function parameters

```ts
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId("ABC123");     // OK
printId(12345);        // OK
printId(true);         // ERROR
```

### Unions with objects (types)

```ts
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };

type Result = Success | Error;

let outcome: Result = { status: "success", data: "done" };
outcome = { status: "error", message: "failed" };
```

## 2. Type narrowing

When you have a union type, you can't use properties unique to one type without checking first:

```ts
function printId(id: string | number): void {
  console.log(id.toUpperCase());  // ERROR — number doesn't have toUpperCase()
}
```

You must **narrow** the type using a check:

```ts
function printId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());  // OK — TypeScript knows id is string here
  } else {
    console.log(id.toFixed(2));     // OK — TypeScript knows id is number here
  }
}
```

### Common narrowing techniques

| Technique | Example |
|-----------|---------|
| `typeof` check | `typeof value === "string"` — for primitives |
| `instanceof` check | `value instanceof Date` — for objects/classes |
| Property check | `"email" in user` |
| Truthiness | `if (value) { ... }` |
| Equality | `value === null`, `value !== undefined` |

## 3. Discriminated unions (tagged unions)

When union members share a **common property** with different literal values, you can use that property to narrow:

```ts
type Success = {
  status: "success";
  data: string;
};

type Error = {
  status: "error";
  message: string;
};

type Result = Success | Error;

function handle(result: Result) {
  if (result.status === "success") {
    // TypeScript knows result is Success here
    console.log(result.data);
  } else {
    // TypeScript knows result is Error here
    console.log(result.message);
  }
}
```

The `status` property **discriminates** between the two types. This is powerful and type-safe!

## 4. Intersection types — combining with `&`

An **intersection type** combines multiple types into one. The result has **all** properties from each type:

```ts
type Animal = {
  name: string;
  age: number;
};

type HasOwner = {
  owner: string;
};

type Pet = Animal & HasOwner;

let dog: Pet = {
  name: "Buddy",
  age: 5,
  owner: "Frank"
};
```

A `Pet` must have **all** properties from both `Animal` and `HasOwner`.

### Intersections with functions

Intersections are less common with functions, but possible:

```ts
type Fn1 = (x: number) => string;
type Fn2 = (x: number) => number;

type Intersection = Fn1 & Fn2;  // A function that somehow returns both string and number?
```

This doesn't make much sense in practice. **Intersections are mainly for combining object types.**

## 5. Union vs Intersection — quick comparison

| Union (`|`) | Intersection (`&`) |
|-------------|-------------------|
| "A **or** B" | "A **and** B" |
| Value is one of the types | Value is all of the types |
| Narrowing required to use type-specific properties | All properties always available |
| Common for alternatives | Common for composition |

```ts
// Union — either string or number
let value: string | number = "hello";

// Intersection — both Animal and HasOwner properties
let pet: Animal & HasOwner = { name: "Buddy", age: 5, owner: "Frank" };
```

## 6. Overlapping properties in intersections

If both types have the same property, they must be compatible:

```ts
type A = { name: string };
type B = { name: string; age: number };

type Combined = A & B;
// Combined has: { name: string; age: number }
// name is string in both, so no conflict

type Conflict = { x: string } & { x: number };
// ERROR — x cannot be both string and number at the same time
```

## 7. Optional properties in unions

Optional properties in unions require careful handling:

```ts
type User = {
  name: string;
  email?: string;
};

type Admin = {
  name: string;
  role: "admin";
};

type Account = User | Admin;

let account: Account = { name: "Frank", email: "frank@example.com" };
// account might be User or Admin
// We can safely access name (both have it)
// But email is only on User, so we must narrow first

if ("email" in account) {
  console.log(account.email);  // OK — narrowed to User
}
```

## 8. `never` type in unions

If you narrow a union to an impossible type, TypeScript assigns `never`:

```ts
type Result = string | number;

function check(value: Result) {
  if (typeof value === "string") {
    // value is string
  } else if (typeof value === "number") {
    // value is number
  } else {
    // value is never — impossible to reach
    const x: never = value;
  }
}
```

`never` is useful for exhaustiveness checking — ensuring you've handled all cases.

---

## Key takeaways

1. **Union types** (`A | B`) allow values to be one of several types.
2. Use **type narrowing** to check the actual type before using type-specific properties.
3. **Discriminated unions** use a common literal property for type-safe narrowing.
4. **Intersection types** (`A & B`) combine all properties from both types.
5. Unions model alternatives; intersections model composition.
6. Use `typeof`, `instanceof`, property checks, and equality to narrow types.
