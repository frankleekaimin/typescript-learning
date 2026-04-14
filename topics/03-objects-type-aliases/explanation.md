# Topic 03 — Objects & Type Aliases

## 1. Object literals and type inference

In JavaScript, objects are collections of key-value pairs:

```ts
let user = {
  name: "Frank",
  age: 30,
  isActive: true
};
```

TypeScript infers the type automatically. It sees the shape and creates a type internally:

```ts
// TypeScript infers:
// {
//   name: string;
//   age: number;
//   isActive: boolean;
// }
```

## 2. Explicit object type annotations

When type inference isn't clear enough, you can annotate the object's shape inline:

```ts
let user: { name: string; age: number; isActive: boolean } = {
  name: "Frank",
  age: 30,
  isActive: true
};
```

Use semicolons (or commas) to separate properties in the type.

## 3. Type aliases with `type`

Repeating long object types is tedious. **Type aliases** let you name a type once and reuse it:

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

let user1: User = { name: "Frank", age: 30, isActive: true };
let user2: User = { name: "Alice", age: 25, isActive: false };
```

Think of `type` like a variable for types — once defined, use it anywhere you need that shape.

### Syntax for type aliases

```ts
type NameOfType = TypeDefinition;
```

Type alias names should be **PascalCase** (e.g., `User`, `Product`, `ApiResponse`).

## 4. Optional properties with `?`

Some properties might not always be present. Mark them optional with `?`:

```ts
type User = {
  name: string;
  age: number;
  email?: string;  // optional
};

let user1: User = { name: "Frank", age: 30 };           // OK — email omitted
let user2: User = { name: "Alice", age: 25, email: "alice@example.com" };  // OK
```

When a property is optional, its value can be `undefined`:

```ts
if (user1.email !== undefined) {
  console.log(user1.email.toLowerCase());  // safe to call string methods
}
```

## 5. Readonly properties

Prevent modification of a property using `readonly`:

```ts
type Config = {
  readonly apiKey: string;
  readonly environment: string;
};

let config: Config = { apiKey: "secret", environment: "prod" };
config.apiKey = "new-key";  // ERROR — cannot reassign readonly property
```

## 6. Nested objects

Objects can contain other objects:

```ts
type Address = {
  street: string;
  city: string;
  zipCode: string;
};

type User = {
  name: string;
  address: Address;
};

let user: User = {
  name: "Frank",
  address: {
    street: "123 Main St",
    city: "Singapore",
    zipCode: "123456"
  }
};
```

## 7. Union types for alternatives

Sometimes a property can be one of several types. Use **union types** with `|`:

```ts
type Status = {
  message: string;
  code: number | string;  // can be number or string
};

let status1: Status = { message: "OK", code: 200 };        // number
let status2: Status = { message: "Error", code: "ERR_001" };  // string
```

## 8. Intersection types with `&`

Combine multiple types together with `&`:

```ts
type Animal = {
  name: string;
  age: number;
};

type HasOwner = {
  owner: string;
};

type Pet = Animal & HasOwner;  // both Animal AND HasOwner properties

let dog: Pet = {
  name: "Buddy",
  age: 5,
  owner: "Frank"
};
```

## 9. `type` vs inline object types

| Approach | Use case |
|----------|----------|
| Inline | One-off, simple shapes used once |
| Type alias | Reusable, named, appear in multiple places |

**Inline example** (simple, used once):
```ts
let config: { host: string; port: number } = { host: "localhost", port: 3000 };
```

**Type alias example** (reusable):
```ts
type ServerConfig = {
  host: string;
  port: number;
};

let config1: ServerConfig = { host: "localhost", port: 3000 };
let config2: ServerConfig = { host: "example.com", port: 8080 };
```

## 10. Object methods (functions inside objects)

Objects can contain methods:

```ts
type Calculator = {
  add: (a: number, b: number) => number;  // function that returns number
};

let calc: Calculator = {
  add: (a, b) => a + b
};
```

You'll explore this more in the Functions topic.

---

## Key takeaways

1. TypeScript infers object shapes from their values.
2. Use **type aliases** (`type Name = {...}`) to name and reuse object shapes.
3. Mark properties optional with `?`.
4. Mark properties immutable with `readonly`.
5. Nest objects by including type aliases in other types.
6. Use `|` for union types (alternatives) and `&` for intersection types (combinations).
7. Type aliases are powerful for keeping code DRY (Don't Repeat Yourself).
