// Topic 05 — Union & Intersection Types
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic union types
// ─────────────────────────────────────────────

// Exercise 1
let id: string | number;

// Exercise 2
id = "ABC123";

// Exercise 3
id = 12345;

// Exercise 4
function formatId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}

// ─────────────────────────────────────────────
// SECTION B — Type narrowing with typeof
// ─────────────────────────────────────────────

// Exercise 5
function processId(id: string | number): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  } else {
    return id.toString();
  }
}

// Exercise 6
function printValue(value: string | boolean): void {
  if (typeof value === "string") {
    console.log(value);
  } else {
    console.log(value ? "true" : "false");
  }
}

// Exercise 7
// Answer: typeof value === "string"

// ─────────────────────────────────────────────
// SECTION C — Union types with objects
// ─────────────────────────────────────────────

// Exercise 8
type Circle = {
  radius: number;
};

type Square = {
  side: number;
};

type Shape = Circle | Square;

// Exercise 9
let myCircle: Shape = { radius: 5 };

// Exercise 10
let mySquare: Shape = { side: 10 };

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions
// ─────────────────────────────────────────────

// Exercise 11
type SuccessResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type Response = SuccessResponse | ErrorResponse;

// Exercise 12
function handleResponse(response: Response): string {
  if (response.status === "success") {
    return response.data;
  } else {
    return response.message;
  }
}

// Exercise 13
const successResp: Response = { status: "success", data: "Operation completed" };
handleResponse(successResp);

// Exercise 14
const errorResp: Response = { status: "error", message: "Something went wrong" };
handleResponse(errorResp);

// ─────────────────────────────────────────────
// SECTION E — Intersection types
// ─────────────────────────────────────────────

// Exercise 15
type Person = {
  name: string;
  age: number;
};

type EmployeeInfo = {
  employeeId: number;
  department: string;
};

type Staff = Person & EmployeeInfo;

// Exercise 16
const employee: Staff = {
  name: "Alice",
  age: 30,
  employeeId: 101,
  department: "Engineering"
};

// Exercise 17
type Manager = {
  teamSize: number;
};

type TeamLead = Person & EmployeeInfo & Manager;

// Exercise 18
const manager: TeamLead = {
  name: "Bob",
  age: 45,
  employeeId: 202,
  department: "Management",
  teamSize: 8
};

// ─────────────────────────────────────────────
// SECTION F — Unions with multiple types
// ─────────────────────────────────────────────

// Exercise 19
function processValue(value: string | number | boolean): string {
  return String(value);
}

// Exercise 20
// Answer: You get a compile error. TypeScript doesn't know which union
// member you have, so it only allows properties common to all members.
// You must narrow the type first using typeof, instanceof, or property checks.

// ─────────────────────────────────────────────
// SECTION G — Property checks for narrowing
// ─────────────────────────────────────────────

// Exercise 21
type BookInfo = {
  title: string;
  author: string;
};

type MovieInfo = {
  title: string;
  director: string;
};

type Media = BookInfo | MovieInfo;

// Exercise 22
function describeMedia(media: Media): string {
  if ("author" in media) {
    return `Book: ${media.title} by ${media.author}`;
  } else {
    return `Movie: ${media.title} directed by ${media.director}`;
  }
}

// Exercise 23
const book: Media = { title: "The Great Gatsby", author: "F. Scott Fitzgerald" };
describeMedia(book);

// Exercise 24
const movie: Media = { title: "Inception", director: "Christopher Nolan" };
describeMedia(movie);

// ─────────────────────────────────────────────
// SECTION H — Practical union usage
// ─────────────────────────────────────────────

// Exercise 25
type CreditCardPayment = {
  cardNumber: string;
  cvv: number;
};

type PayPalPayment = {
  email: string;
};

type PaymentMethod = CreditCardPayment | PayPalPayment;

function processPayment(payment: PaymentMethod): string {
  if ("cardNumber" in payment) {
    return `Processed CreditCard payment ending in ${payment.cardNumber.slice(-4)}`;
  } else {
    return `Processed PayPal payment for ${payment.email}`;
  }
}
