# TypeScript Learning Roadmap

Topics follow the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/), ordered
from zero JavaScript knowledge upward. Each topic builds on the previous one.

---

## Topic 01 — Variables, Primitives & Type Annotations
**Folder:** `topics/01-variables-primitives-annotations/`  
**You will be able to:** Declare variables with `const`/`let`, name every primitive type, write
type annotations, and understand when TypeScript can infer types on its own.

## Topic 02 — Arrays & Tuples
**Folder:** `topics/02-arrays-tuples/`  
**You will be able to:** Type homogeneous arrays (`string[]`, `Array<number>`), create fixed-length
tuples, and use readonly arrays to prevent mutation.

## Topic 03 — Objects & Type Aliases
**Folder:** `topics/03-objects-type-aliases/`  
**You will be able to:** Describe object shapes with inline types and `type` aliases, mark
properties as optional (`?`) or readonly, and understand structural typing.

## Topic 04 — Functions
**Folder:** `topics/04-functions/`  
**You will be able to:** Annotate parameters and return types, use optional and default parameters,
write arrow functions with types, and use `void` vs `never`.

## Topic 05 — Union & Intersection Types
**Folder:** `topics/05-union-intersection/`  
**You will be able to:** Combine types with `|` and `&`, narrow unions with `typeof` and `in`
checks, and understand when each operator is appropriate.

## Topic 06 — Literal Types & Type Narrowing
**Folder:** `topics/06-literal-types-narrowing/`  
**You will be able to:** Create precise literal types (`"left" | "right"`), use discriminated
unions, and apply narrowing guards (`typeof`, `instanceof`, truthiness).

## Topic 07 — Interfaces
**Folder:** `topics/07-interfaces/`  
**You will be able to:** Define contracts with `interface`, extend interfaces, implement them on
classes, and explain the difference between `interface` and `type` alias.

## Topic 08 — Generics — Basics
**Folder:** `topics/08-generics-basics/`  
**You will be able to:** Write generic functions and types with `<T>`, apply constraints
(`extends`), and understand why generics are better than `any` for reusable code.

## Topic 09 — Enums
**Folder:** `topics/09-enums/`  
**You will be able to:** Use numeric and string enums, understand their compiled output, and
know when a union of literals is preferable to an enum.

## Topic 10 — Classes & Access Modifiers
**Folder:** `topics/10-classes/`  
**You will be able to:** Write classes with constructors, typed fields, `public`/`private`/
`protected`/`readonly` modifiers, and inheritance with `extends`.

## Topic 11 — Type Assertions & `unknown`
**Folder:** `topics/11-type-assertions-unknown/`  
**You will be able to:** Use `as` assertions and the `satisfies` operator, distinguish `unknown`
from `any`, and safely narrow `unknown` before using it.

## Topic 12 — Utility Types
**Folder:** `topics/12-utility-types/`  
**You will be able to:** Transform existing types using `Partial`, `Required`, `Readonly`,
`Pick`, `Omit`, `Record`, `ReturnType`, and `Parameters`.

## Topic 13 — Modules — import / export
**Folder:** `topics/13-modules/`  
**You will be able to:** Use ES module `import`/`export` syntax, understand `export default` vs
named exports, and configure module resolution in `tsconfig.json`.
