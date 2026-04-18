// Topic 09 — Enums
// Drill exercises
//
// Instructions:
//   - Work through each exercise in order.
//   - Replace every `// TODO` line with working TypeScript code.
//   - Run `tsc --noEmit drill.ts` (or use VS Code's Problems panel) to check your work.
//   - Do NOT change any line marked "// do not edit".

// ─────────────────────────────────────────────
// SECTION A — Basic numeric enums
// ─────────────────────────────────────────────

// Exercise 1
// Define a numeric enum `Color` with Red, Green, Blue (auto-incrementing from 0).
enum Color {Red, Green, Blue};

// Exercise 2
// Create a variable of type Color and assign Color.Red.
const red: Color = Color.Red;

// Exercise 3
// Access the numeric value of Color.Green and log it.
console.log(Color.Green);

// Exercise 4
// Define a numeric enum `Day` starting at 1 (Monday = 1, Tuesday = 2, ..., Sunday = 7).
enum Day {Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7};

// Exercise 5
// Create a variable for Friday and log its numeric value.
const friday = Day.Friday;
console.log(friday)

// ─────────────────────────────────────────────
// SECTION B — String enums
// ─────────────────────────────────────────────

// Exercise 6
// Define a string enum `Status` with: Pending = "PENDING", Active = "ACTIVE", Inactive = "INACTIVE".
enum Status {Pending = "PENDING", Active = "ACTIVE", Inactive = "INACTIVE"}

// Exercise 7
// Create a variable of type Status and assign Status.Pending.
const pending: Status = Status.Pending;

// Exercise 8
// Log the value of Status.Active (should be the string "ACTIVE").
console.log(Status.Active)

// Exercise 9
// Define a string enum `Direction` with North, South, East, West (all uppercase).
enum Direction {North = "NORTH", South = "SOUTH", East = "EAST", West = "WEST"}

// Exercise 10
// Create a variable of type Direction and assign Direction.North.
const north: Direction = Direction.North

// ─────────────────────────────────────────────
// SECTION C — Reverse mapping and enum operations
// ─────────────────────────────────────────────

// Exercise 11
// Define a numeric enum `Priority` with High = 1, Medium = 2, Low = 3.
// Use reverse mapping to get the name from the value.
enum Priority {High = 1, Medium = 2, Low = 3}
console.log(Priority[1]) // returns "High"

// Exercise 12
// Access Priority[1] to get the name "High" (reverse mapping).
console.log(Priority[1])

// Exercise 13 — Skipped (exercise design issue with TypeScript narrowing)

// Exercise 14
// Write a function that takes a Status enum and returns a message.
function statusout(s: Status): void  {
    console.log(s)
}

// Exercise 15
// Use a switch statement on an enum value and handle each case.
function statusswitch(s: Status): string {
    switch (s) {
        case Status.Pending: return "Pending"
        case Status.Active: return "Active"
        case Status.Inactive: return "Inactive"
    }
}

// ─────────────────────────────────────────────
// SECTION D — Const enums
// ─────────────────────────────────────────────

// Exercise 16
// Define a const enum `LogLevel` with Debug = 0, Info = 1, Warn = 2, Error = 3.
const enum LogLevel {Debug = 0, Info = 1, Warn = 2, Error = 3}

// Exercise 17
// Create a variable of type LogLevel and assign LogLevel.Info.
const info: LogLevel = LogLevel.Info

// Exercise 18
// Explain: What's the difference between `enum` and `const enum`?
// Answer: const enum is removing during compilation. Only final value is stored in variable.

// Exercise 19
// Define another const enum `HttpMethod` with GET, POST, PUT, DELETE.
const enum HttpMethod {GET, POST, PUT, DELETE}

// Exercise 20
// Use the const enum in a function parameter and call the function.
function http(h: HttpMethod): void {
    if (h === HttpMethod.GET) {
        console.log("GET")
    } else {
        console.log("Not Get")
    }
}

// ─────────────────────────────────────────────
// SECTION E — Practical enum patterns
// ─────────────────────────────────────────────

// Exercise 21
// Define a string enum `UserRole` with Admin, Editor, Viewer.
// Write a function that checks if a role can delete (only Admin).
enum UserRole {Admin, Editor, Viewer}
const canDelete = (r: UserRole) => {return r === UserRole.Admin}

// Exercise 22
// Define an enum `PaymentMethod` with Credit, Debit, PayPal.
// Create a function that returns a description for each method.
enum PaymentMethod {Credit, Debit, Paypal}
const describePayment = (p: PaymentMethod): string => {
    if (p === PaymentMethod.Credit) {
        return "Credit"
    } else if (p === PaymentMethod.Debit) {
        return "Debit"
    } else {
        return "Paypal"
    }
}

// Exercise 23
// Define a string enum `RequestStatus` with Pending, Success, Error.
// Create objects representing different request states using this enum.
enum RequestStatus {Pending = "Pending", Success = "Success", Error = "Error"}
const pending2 = RequestStatus.Pending
const success = RequestStatus.Success
const error = RequestStatus.Error


// Exercise 24
// Write a function that takes a RequestStatus and returns an appropriate HTTP status code.
const request2http = (r: RequestStatus): number => {
    if (r === RequestStatus.Pending) {
        return 202
    } else if (r === RequestStatus.Success) {
        return 200
    } else {
        return 500
    }
}

// Exercise 25
// Explain: When should you use an enum vs a literal union type?
// Answer: Use an enum only when we have many related constants and want to reference them by name. Otherwise, use literal unions.
