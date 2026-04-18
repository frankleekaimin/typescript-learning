# Topic 10 — Classes & Access Modifiers

## 1. What is a class?

A **class** is a blueprint for creating objects. It bundles data (properties) and behaviour (methods) together.

If you've used Python classes, this will feel familiar — the syntax is just different.

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}

const alice = new Person("Alice", 30);
alice.greet();   // "Hi, I'm Alice"
```

Python equivalent:
```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

    def greet(self) -> str:
        return f"Hi, I'm {self.name}"
```

## 2. Access modifiers

TypeScript adds **access modifiers** to control visibility:

| Modifier | Accessible from |
|----------|----------------|
| `public` | Anywhere (default) |
| `private` | Only inside this class |
| `protected` | Inside this class and subclasses |
| `readonly` | Anywhere, but cannot be reassigned |

```ts
class BankAccount {
  public owner: string;       // accessible everywhere
  private balance: number;    // only inside BankAccount
  readonly id: string;        // readable everywhere, not writable

  constructor(owner: string, balance: number, id: string) {
    this.owner = owner;
    this.balance = balance;
    this.id = id;
  }

  deposit(amount: number): void {
    this.balance += amount;   // OK — inside the class
  }
}

const account = new BankAccount("Alice", 1000, "ACC-001");
account.owner = "Bob";         // OK — public
account.balance = 5000;        // ERROR — private
account.id = "ACC-002";        // ERROR — readonly
```

## 3. Constructor shorthand

TypeScript lets you declare and assign properties in one step with access modifiers in the constructor:

```ts
// Long form
class Dog {
  name: string;
  breed: string;

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }
}

// Shorthand — same result
class Dog {
  constructor(public name: string, public breed: string) {}
}
```

This is very common in TypeScript — you'll see it everywhere.

## 4. Getters and setters

Use `get` and `set` to control property access:

```ts
class Temperature {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get fahrenheit(): number {
    return this._celsius * 9/5 + 32;
  }

  set celsius(value: number) {
    if (value < -273.15) throw new Error("Below absolute zero");
    this._celsius = value;
  }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit);  // 212 — called like a property, not a method
temp.celsius = 0;              // uses the setter
```

## 5. Inheritance with extends

Classes can extend other classes:

```ts
class Animal {
  constructor(public name: string) {}

  speak(): string {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);   // must call super() first
  }

  speak(): string {
    return `${this.name} barks`;  // overrides parent method
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();   // "Rex barks"
```

## 6. Implementing interfaces

A class can implement an interface — it guarantees the class has those properties/methods:

```ts
interface Printable {
  print(): void;
}

class Document implements Printable {
  constructor(public content: string) {}

  print(): void {
    console.log(this.content);
  }
}
```

A class can implement multiple interfaces:

```ts
class Report implements Printable, Serializable {
  // must have all methods from both interfaces
}
```

## 7. Abstract classes

An **abstract class** cannot be instantiated directly — it's meant to be extended:

```ts
abstract class Shape {
  abstract area(): number;   // subclasses must implement this

  describe(): string {
    return `This shape has area ${this.area()}`;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const shape = new Shape();   // ERROR — cannot instantiate abstract class
const circle = new Circle(5);
circle.area();
circle.describe();
```

## 8. Static members

`static` properties and methods belong to the **class itself**, not instances:

```ts
class MathHelper {
  static PI = 3.14159;

  static double(n: number): number {
    return n * 2;
  }
}

MathHelper.PI;           // 3.14159 — no instance needed
MathHelper.double(5);    // 10
```

---

## Key takeaways

1. Classes bundle **data and behaviour** together.
2. **Access modifiers** (`public`, `private`, `protected`, `readonly`) control visibility.
3. **Constructor shorthand** lets you declare properties inline.
4. **`extends`** for inheritance; always call `super()` in the child constructor.
5. **`implements`** to guarantee a class satisfies an interface.
6. **Abstract classes** define a template — subclasses must fill in the gaps.
7. **Static members** belong to the class, not instances.
