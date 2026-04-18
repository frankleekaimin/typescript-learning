// Topic 09 — Enums
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Basic numeric enums
// ─────────────────────────────────────────────

// Exercise 1
enum Color { Red, Green, Blue }

// Exercise 2
const red: Color = Color.Red;

// Exercise 3
console.log(Color.Green);   // 1

// Exercise 4
enum Day {
  Monday = 1, Tuesday = 2, Wednesday = 3,
  Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7
}

// Exercise 5
const friday = Day.Friday;
console.log(friday);   // 5

// ─────────────────────────────────────────────
// SECTION B — String enums
// ─────────────────────────────────────────────

// Exercise 6
enum Status { Pending = "PENDING", Active = "ACTIVE", Inactive = "INACTIVE" }

// Exercise 7
const pending: Status = Status.Pending;

// Exercise 8
console.log(Status.Active);   // "ACTIVE"

// Exercise 9
enum Direction { North = "NORTH", South = "SOUTH", East = "EAST", West = "WEST" }

// Exercise 10
const north: Direction = Direction.North;

// ─────────────────────────────────────────────
// SECTION C — Reverse mapping and enum operations
// ─────────────────────────────────────────────

// Exercise 11
enum Priority { High = 1, Medium = 2, Low = 3 }
console.log(Priority[1]);   // "High"

// Exercise 12
console.log(Priority[1]);   // "High"

// Exercise 13 — Skipped (TypeScript's narrowing makes equality checks on local enum
// vars a type error — real comparison happens in functions, as in Exercise 21)

// Exercise 14
function describeStatus(s: Status): void {
  console.log(s);
}

// Exercise 15
function statusswitch(s: Status): string {
  switch (s) {
    case Status.Pending:  return "Pending";
    case Status.Active:   return "Active";
    case Status.Inactive: return "Inactive";
  }
}

// ─────────────────────────────────────────────
// SECTION D — Const enums
// ─────────────────────────────────────────────

// Exercise 16
const enum LogLevel { Debug = 0, Info = 1, Warn = 2, Error = 3 }

// Exercise 17
const info: LogLevel = LogLevel.Info;

// Exercise 18
// Answer: `const enum` is erased at compile time — only the final numeric value
// is inlined in the output. Regular `enum` compiles to a JavaScript object at runtime.

// Exercise 19
const enum HttpMethod { GET, POST, PUT, DELETE }

// Exercise 20
function httpRequest(method: HttpMethod): void {
  if (method === HttpMethod.GET) {
    console.log("GET");
  } else {
    console.log("Not GET");
  }
}

// ─────────────────────────────────────────────
// SECTION E — Practical enum patterns
// ─────────────────────────────────────────────

// Exercise 21
enum UserRole { Admin = "ADMIN", Editor = "EDITOR", Viewer = "VIEWER" }

const canDelete = (role: UserRole): boolean => role === UserRole.Admin;

// Exercise 22
enum PaymentMethod { Credit, Debit, PayPal }

const describePayment = (p: PaymentMethod): string => {
  if (p === PaymentMethod.Credit) return "Credit card";
  if (p === PaymentMethod.Debit)  return "Debit card";
  return "PayPal";
};

// Exercise 23
enum RequestStatus { Pending = "PENDING", Success = "SUCCESS", Error = "ERROR" }

const pendingReq  = RequestStatus.Pending;
const successReq  = RequestStatus.Success;
const errorReq    = RequestStatus.Error;

// Exercise 24
const request2http = (r: RequestStatus): number => {
  if (r === RequestStatus.Pending) return 202;
  if (r === RequestStatus.Success) return 200;
  return 500;
};

// Exercise 25
// Answer: Use a literal union for simple, type-only values — no runtime cost,
// more flexible. Use an enum when you have many related constants and want to
// reference them by a meaningful name throughout the codebase (e.g. UserRole.Admin).
