import type { User } from "./types";

export function createUser(name: string, age: number): User {
  return { name, age };
}

export function formatUser(user: User): string {
  return `${user.name} (${user.age})`;
}
