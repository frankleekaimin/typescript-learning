# Topic 01 — Variables, Primitives & Type Annotations

## 1. Declaring variables

JavaScript (and TypeScript) has three ways to declare a variable:

| Keyword | Re-assignable? | Block-scoped? | Notes |
|---------|---------------|---------------|-------|
| `const` | No | Yes | Prefer this by default |
| `let` | Yes | Yes | Use when you need to reassign |
| `var` | Yes | No (function-scoped) | Avoid — legacy JS only |

```ts
const name = "Frank";   // can never be reassigned
let age = 30;           // can be reassigned later
age = 31;               // ok
```

## 2. Primitive types

TypeScript has six primitive types that map directly to JavaScript values:

| Type | Example literals | Notes |
|------|-----------------|-------|
| `string` | `"hello"`, `'world'`, `` `hi` `` | Text |
| `number` | `42`, `3.14`, `-7` | All JS numbers (no int/float split) |
| `boolean` | `true`, `false` | |
| `bigint` | `100n` | Large integers beyond `Number.MAX_SAFE_INTEGER` |
| `symbol` | `Symbol("id")` | Unique identity tokens |
| `null` | `null` | Intentional absence of a value |
| `undefined` | `undefined` | Variable declared but not assigned |

## 3. Type annotations

A type annotation is a `: Type` label you place after a variable (or parameter) name.
TypeScript uses it to enforce that only compatible values can be assigned.

```ts
let username: string = "frank";
let score: number = 0;
let isLoggedIn: boolean = false;
```

Annotations are **optional** when TypeScript can infer the type from the initial value:

```ts
let username = "frank";   // inferred as string — no annotation needed
let score = 0;            // inferred as number
```

Write annotations explicitly when:
- the variable is declared without an initial value,
- the inferred type is too wide and you want to be more precise, or
- the type isn't obvious to the reader.

```ts
let errorMessage: string;   // declared but not yet assigned — annotation required
errorMessage = "Something went wrong";
```

## 4. `any` — the escape hatch (avoid it)

`any` tells TypeScript to stop type-checking a value entirely:

```ts
let x: any = 42;
x = "now a string";   // no error — but you lose all safety
x.foo.bar.baz;        // also no error — but will crash at runtime
```

Avoid `any` unless you are migrating old JavaScript code. Prefer `unknown` (covered
in a later topic) when you genuinely don't know the type yet.

## 5. `null` and `undefined`

By default (with `strictNullChecks: true`, which you should always enable), `null` and
`undefined` are their own distinct types — they are **not** assignable to `string` etc.

```ts
let title: string = null;   // ERROR with strictNullChecks on
let title: string | null = null;   // OK — explicit union
```

## 6. The `typeof` operator at runtime

You can check a primitive's type at runtime with `typeof`:

```ts
typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object"  ← famous JS quirk
```

---

## Key takeaways
1. Use `const` by default; `let` when you must reassign.
2. TypeScript infers types from initial values — you don't always need annotations.
3. Add an annotation when a variable is declared without a value, or for clarity.
4. Avoid `any`; it erases all type safety.
5. Enable `strictNullChecks` so `null`/`undefined` are caught at compile time.
