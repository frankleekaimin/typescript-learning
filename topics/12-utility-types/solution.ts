// Topic 12 — Utility Types
// Solution file

// Shared types
interface User {
  name: string;
  email: string;
  age: number;
  password: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

// ─────────────────────────────────────────────
// SECTION A — Partial & Required
// ─────────────────────────────────────────────

// Exercise 1
type UserUpdate = Partial<User>;

// Exercise 2
function updateUser(id: number, changes: UserUpdate): void {
  console.log("Updating user " + id.toString());
}
updateUser(1, { email: "new@example.com" });

// Exercise 3
type StrictProduct = Required<Product>;

// Exercise 4
interface AppConfig {
  theme?: string;
  language?: string;
  debugMode?: boolean;
}
type RequiredConfig = Required<AppConfig>;

// Exercise 5
// Partial<T> is functionally identical to marking every field `?` manually,
// but it scales — if you add a new field to User, Partial<User> automatically
// includes it without touching the derived type.

// ─────────────────────────────────────────────
// SECTION B — Readonly
// ─────────────────────────────────────────────

// Exercise 6
type ReadonlyUser = Readonly<User>;
const readonlyUser: ReadonlyUser = { name: "Adam", email: "Adam@mail.com", age: 32, password: "123" };
// readonlyUser.name = "Ben"; // Error: Cannot assign to 'name' because it is a read-only property.

// Exercise 7
function freezeProduct(p: Product): Readonly<Product> {
  return p;
}

// Exercise 8
const config: Readonly<{ host: string; port: number }> = { host: "localhost", port: 3000 };

// ─────────────────────────────────────────────
// SECTION C — Record
// ─────────────────────────────────────────────

// Exercise 9
type ScoreMap = Record<string, number>;
const scores: ScoreMap = { adam: 50, ben: 60 };

// Exercise 10
type Fruit = "apple" | "banana" | "cherry";
type FruitCalories = Record<Fruit, number>;
const calories: FruitCalories = { apple: 10, banana: 15, cherry: 17 };

// Exercise 11
function countWords(words: string[]): Record<string, number> {
  const result: Record<string, number> = {};
  for (const word of words) {
    if (word in result) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }
  return result;
}

// Exercise 12
console.log(countWords(["cat", "dog", "cat", "fish", "dog", "cat"]));

// ─────────────────────────────────────────────
// SECTION D — Pick & Omit
// ─────────────────────────────────────────────

// Exercise 13
type PublicUser = Pick<User, "name" | "email">;

// Exercise 14
type SafeUser = Omit<User, "password">;

// Exercise 15
type ProductPreview = Pick<Product, "id" | "title">;

// Exercise 16
type ProductWithoutStock = Omit<Product, "stock">;

// Exercise 17
const toPublicUser = (user: User): PublicUser => {
  return { name: user.name, email: user.email };
};

// Exercise 18
console.log(toPublicUser({ name: "Adam", email: "Adam@mail.com", age: 32, password: "123" }));

// ─────────────────────────────────────────────
// SECTION E — Exclude & Extract & NonNullable
// ─────────────────────────────────────────────

// Exercise 19
type Status = "active" | "inactive" | "banned" | "pending";
type ActiveStatus = Extract<Status, "active" | "pending">;

// Exercise 20
type NonBanned = Exclude<Status, "banned">;

// Exercise 21
type MaybeNumber = number | null | undefined;
type DefiniteNumber = NonNullable<MaybeNumber>;

// Exercise 22
// Exclude works on union types (removes union members).
// Omit works on object types (removes named properties).

// ─────────────────────────────────────────────
// SECTION F — ReturnType & Parameters
// ─────────────────────────────────────────────

// Exercise 23
function fetchUser() {
  return { id: 1, name: "Alice" };
}
type UserResult = ReturnType<typeof fetchUser>;

// Exercise 24
function createUser(name: string, email: string, age: number): User {
  return { name, email, age, password: "" };
}
type CreateUserParams = Parameters<typeof createUser>;

// Exercise 25
type UpdateUserPayload = Partial<Omit<User, "password" | "age">>;
