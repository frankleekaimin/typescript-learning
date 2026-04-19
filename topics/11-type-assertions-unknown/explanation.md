# Topic 11 — Type Assertions & `unknown`

## 1. The `unknown` type

`unknown` is the **type-safe alternative to `any`**. A value of type `unknown` can hold anything — but unlike `any`, TypeScript won't let you use it until you've narrowed it.

```ts
let value: unknown = "hello";

value.toUpperCase();   // ERROR — TypeScript doesn't know it's a string
```

You must narrow first:

```ts
if (typeof value === "string") {
  value.toUpperCase();  // OK — narrowed to string
}
```

### `unknown` vs `any`

| | `any` | `unknown` |
|--|-------|-----------|
| Can hold anything | ✅ | ✅ |
| Requires narrowing before use | ❌ | ✅ |
| Spreads unsafely | ✅ (dangerous) | ❌ |

```ts
let a: any = "hello";
a.toUpperCase();   // OK — no error, but unsafe

let b: unknown = "hello";
b.toUpperCase();   // ERROR — must narrow first
```

**Rule of thumb:** use `unknown` instead of `any` whenever you don't know the type upfront. It forces you to handle the uncertainty explicitly.

## 2. Type assertions with `as`

A **type assertion** tells TypeScript "trust me, I know what type this is":

```ts
let value: unknown = "hello";
let str = value as string;
str.toUpperCase();   // OK — you asserted it's a string
```

Think of it as a cast in Python — you're overriding TypeScript's judgment.

```ts
// Another syntax (older style, avoid in JSX)
let str = <string>value;
```

### When to use assertions

Use assertions when **you know more than TypeScript does** — typically when dealing with external data (APIs, DOM, JSON):

```ts
const input = document.getElementById("name") as HTMLInputElement;
console.log(input.value);   // TypeScript now knows .value exists
```

Without the assertion, TypeScript only knows `getElementById` returns `HTMLElement | null`, which doesn't have a `.value` property.

## 3. Assertions don't change the runtime value

A type assertion is **purely a TypeScript instruction** — it compiles away to nothing. It does not convert or cast the value at runtime:

```ts
let value: unknown = 42;
let str = value as string;   // No error at compile time...
str.toUpperCase();           // ...but crashes at runtime! 42 has no toUpperCase
```

This is why assertions should be used carefully. They bypass TypeScript's safety checks.

## 4. The `as unknown as T` double assertion

You can't assert between completely unrelated types:

```ts
let num = 42 as string;   // ERROR — number and string have no overlap
```

If you need to force it (rarely justified), go through `unknown`:

```ts
let num = 42 as unknown as string;   // Works, but dangerous
```

Treat this as a red flag in code — it usually means something is wrong with the design.

## 5. Non-null assertion `!`

If you know a value is not `null` or `undefined`, use `!` to assert that:

```ts
function getUser(): string | null {
  return "Alice";
}

const name = getUser()!;   // Asserts it's not null
name.toUpperCase();        // OK
```

Again — this removes TypeScript's null check. Only use it when you're certain.

```ts
// Dangerous
const el = document.getElementById("app")!;   // assumes the element exists

// Safer
const el = document.getElementById("app");
if (el) {
  el.textContent = "Hello";
}
```

## 6. `unknown` in practice — API responses

The most common use of `unknown` is handling data from external sources:

```ts
async function fetchUser(): Promise<unknown> {
  const response = await fetch("/api/user");
  return response.json();
}

const data = await fetchUser();

// Can't use data directly — must narrow
if (typeof data === "object" && data !== null && "name" in data) {
  console.log((data as { name: string }).name);
}
```

## 7. Type narrowing recap

The safe way to use `unknown` — combine with narrowing techniques from Topic 06:

```ts
function process(value: unknown): string {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value.toFixed(2);
  if (Array.isArray(value))     return value.join(", ");
  return "unknown";
}
```

---

## Key takeaways

1. **`unknown`** is the safe version of `any` — must narrow before use.
2. **`any`** skips type checking entirely — avoid it.
3. **`as Type`** asserts a type — use when you know more than TypeScript.
4. **Assertions are compile-time only** — wrong assertions cause runtime errors.
5. **`!`** non-null assertion removes null/undefined from a type.
6. **Double assertion** (`as unknown as T`) is a red flag — avoid if possible.
7. Use `unknown` for external data (APIs, JSON) and narrow safely.
