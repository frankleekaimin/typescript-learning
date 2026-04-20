# Topic 13 — Modules: import / export

In TypeScript (and JavaScript), a **module** is any file that uses `import` or `export`. Everything inside a module is private by default — you must explicitly export what you want to share, and import what you want to use.

---

## 1. Named exports

You can export any declaration — variables, functions, types, interfaces, classes — by putting `export` in front of it.

```ts
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;
```

To use them in another file:

```ts
// main.ts
import { add, subtract, PI } from "./math";

console.log(add(2, 3));    // 5
console.log(PI);           // 3.14159
```

The curly braces `{ }` mean "pick these named exports from that file."

---

## 2. Default export

Each file can have at most **one** default export. It has no fixed name — the importer chooses the name.

```ts
// greet.ts
export default function greet(name: string): string {
  return `Hello, ${name}!`;
}
```

```ts
// main.ts
import greet from "./greet";      // no curly braces
import sayHello from "./greet";   // same thing, different local name
```

Default exports are common for the "main thing" a module provides — a component, a class, a single function.

---

## 3. Named vs default — when to use which

| | Named | Default |
|---|---|---|
| Number per file | Many | One |
| Import syntax | `{ name }` | `name` (no braces) |
| Rename at import | `{ add as sum }` | automatic |
| Best for | Utility modules, collections | Single-purpose files |

Many teams prefer named exports exclusively because they're more explicit and easier to find with editor tooling.

---

## 4. Renaming with `as`

You can rename an export on the way in (or out):

```ts
// importing with alias
import { add as sum } from "./math";
console.log(sum(1, 2));

// exporting with alias
const multiply = (a: number, b: number) => a * b;
export { multiply as times };
```

---

## 5. Re-exporting

A file can re-export things from another module — useful for creating a single entry point:

```ts
// index.ts — a "barrel" file
export { add, subtract } from "./math";
export { greet } from "./greet";
```

Now consumers import from one place: `import { add, greet } from "./utils"`.

---

## 6. Importing types

Types and interfaces can be imported and exported just like values. TypeScript 4.5+ allows `import type` to make it clear you're only importing a type (useful for performance and clarity):

```ts
// types.ts
export interface User {
  name: string;
  age: number;
}
```

```ts
// main.ts
import type { User } from "./types";   // type-only import

const u: User = { name: "Alice", age: 30 };
```

`import type` is erased at compile time — no runtime cost.

---

## 7. Namespace imports

If a module exports many things and you want them all under one name:

```ts
import * as MathUtils from "./math";

console.log(MathUtils.add(1, 2));
console.log(MathUtils.PI);
```

---

## 8. `export type` for types

You can also mark individual exports as type-only:

```ts
export type { User };          // type-only named export
export type { User as IUser }; // renamed type export
```

---

## 9. Module resolution — file paths

When you import with a relative path, TypeScript looks for:
- `./math.ts`
- `./math/index.ts`

When you import without a path (e.g. `import _ from "lodash"`), TypeScript looks in `node_modules`.

Always use `./` for local files.

---

## Key takeaways

| Concept | Syntax |
|---|---|
| Named export | `export function foo() {}` |
| Default export | `export default function foo() {}` |
| Named import | `import { foo } from "./file"` |
| Default import | `import foo from "./file"` |
| Rename import | `import { foo as bar } from "./file"` |
| Namespace import | `import * as Foo from "./file"` |
| Type-only import | `import type { Foo } from "./file"` |
| Re-export | `export { foo } from "./file"` |
