# Topic 09 — Enums

## 1. What is an enum?

An **enum** (enumeration) is a way to define a set of **named constants**. It's useful when you have a fixed set of related values.

```ts
enum Direction {
  North,
  South,
  East,
  West
}

let heading: Direction = Direction.North;
```

Enums are similar to literal unions (`"north" | "south" | "east" | "west"`), but they provide a different mechanism for working with named values.

## 2. Numeric enums

By default, enums are **numeric** and auto-increment starting from 0:

```ts
enum Color {
  Red,      // 0
  Green,    // 1
  Blue      // 2
}

console.log(Color.Red);     // 0
console.log(Color.Green);   // 1
```

You can start from a different number:

```ts
enum Status {
  Pending = 1,
  Active = 2,
  Inactive = 3
}
```

Or assign custom values:

```ts
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404
}
```

## 3. String enums

You can also use **strings**:

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red);    // "RED"
```

String enums are more readable and better for debugging (the value is the name itself).

## 4. Heterogeneous enums

You can mix strings and numbers (though this is rarely a good idea):

```ts
enum Mixed {
  No = 0,
  Yes = "YES"
}
```

Avoid this — it's confusing. Choose either all strings or all numbers.

## 5. Enum members as types

You can use a specific enum member as a type:

```ts
enum Direction {
  North,
  South,
  East,
  West
}

function move(direction: Direction.North): void {
  // Only Direction.North is allowed
}

move(Direction.North);   // ✅
move(Direction.South);   // ❌
```

## 6. Reverse mapping

Numeric enums have **reverse mapping** — you can look up the name from the value:

```ts
enum Status {
  Pending = 0,
  Active = 1
}

console.log(Status[0]);    // "Pending"
console.log(Status[1]);    // "Active"
console.log(Status.Pending);  // 0
```

String enums **don't** have reverse mapping.

## 7. Const enums

Use `const enum` for enums that are only used for type checking. They're removed during compilation:

```ts
const enum Direction {
  North,
  South,
  East,
  West
}

let heading: Direction = Direction.North;
```

The compiled JavaScript won't include the enum definition — just the value. This reduces bundle size.

```ts
// Before compilation
let x: Direction = Direction.North;

// After compilation (const enum)
let x = 0;  // Just the value
```

## 8. Enums vs literal unions

Enums and literal unions are different:

```ts
// Literal union — recommended for most cases
type Direction = "north" | "south" | "east" | "west";

// Enum — useful for named constants
enum DirectionEnum {
  North,
  South,
  East,
  West
}
```

**When to use:**
- **Literal unions** — most of the time, they're simpler and more flexible
- **Enums** — when you have many related constants and want to reference them by name
- **Const enums** — when you need zero-runtime overhead

## 9. Common enum patterns

### Status codes

```ts
enum RequestStatus {
  Pending = "PENDING",
  Success = "SUCCESS",
  Error = "ERROR"
}

function handleResponse(status: RequestStatus): void {
  if (status === RequestStatus.Success) {
    console.log("Done!");
  }
}
```

### User roles

```ts
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER"
}

function canDelete(role: UserRole): boolean {
  return role === UserRole.Admin;
}
```

### Days of the week

```ts
enum Day {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}
```

## 10. Gotchas and best practices

### Don't over-use enums

Enums add runtime overhead compared to literal unions:

```ts
// ❌ Enum (compiles to object)
enum Color { Red, Green, Blue }

// ✅ Literal union (type-only, no runtime cost)
type Color = "red" | "green" | "blue";
```

Use `const enum` to eliminate the runtime cost:

```ts
const enum Color { Red, Green, Blue }
```

### String enums for readability

Numeric enums are confusing (what does `0` mean?). String enums are self-documenting:

```ts
// ❌ Hard to read
enum Status { Pending = 0, Active = 1 }

// ✅ Clear
enum Status { Pending = "PENDING", Active = "ACTIVE" }
```

---

## Key takeaways

1. **Enums** define named constants for a set of related values.
2. **Numeric enums** auto-increment (useful for ordering).
3. **String enums** are self-documenting and better for debugging.
4. **Const enums** have zero runtime cost.
5. **Literal unions** are often better than enums for most cases.
6. **Reverse mapping** only works for numeric enums.
7. Use enums when you have many related constants to reference by name.
