// Topic 06 — Literal Types & Type Narrowing
// Solution file

// ─────────────────────────────────────────────
// SECTION A — Literal types
// ─────────────────────────────────────────────

// Exercise 1
let colorRed: "red";

// Exercise 2
let httpCode: 200;

// Exercise 3
let isTrue: true;

// Exercise 4
// Answer: `let x: string` allows any string value; `let x: "hello"` allows only "hello"

// ─────────────────────────────────────────────
// SECTION B — Literal unions
// ─────────────────────────────────────────────

// Exercise 5
type Direction = "north" | "south" | "east" | "west";

// Exercise 6
type HttpStatus = 200 | 201 | 400 | 404 | 500;

// Exercise 7
let heading: Direction = "north";

// Exercise 8
let statusCode: HttpStatus = 404;

// ─────────────────────────────────────────────
// SECTION C — Type narrowing with literals
// ─────────────────────────────────────────────

// Exercise 9
function respondToDirection(dir: Direction): string {
  if (dir === "north") {
    return "Go north!";
  } else if (dir === "south") {
    return "Go south!";
  } else if (dir === "east") {
    return "Go east!";
  } else {
    return "Go west!";
  }
}

// Exercise 10
function describeStatus(status: HttpStatus): string {
  if (status === 200) {
    return "OK";
  } else if (status === 201) {
    return "Created";
  } else if (status === 400) {
    return "Bad Request";
  } else if (status === 404) {
    return "Not Found";
  } else {
    return "Server Error";
  }
}

// ─────────────────────────────────────────────
// SECTION D — Discriminated unions with literals
// ─────────────────────────────────────────────

// Exercise 11
type DownloadResponse = {
  kind: "download";
  fileName: string;
};

type UploadResponse = {
  kind: "upload";
  success: boolean;
};

type Response = DownloadResponse | UploadResponse;

// Exercise 12
function handleResponse(response: Response): string {
  if (response.kind === "download") {
    return `Downloading: ${response.fileName}`;
  } else {
    return `Upload ${response.success ? "succeeded" : "failed"}`;
  }
}

// Exercise 13
const download: DownloadResponse = {
  kind: "download",
  fileName: "document.pdf"
};
handleResponse(download);

// Exercise 14
const upload: UploadResponse = {
  kind: "upload",
  success: true
};
handleResponse(upload);

// ─────────────────────────────────────────────
// SECTION E — Type guards with predicates
// ─────────────────────────────────────────────

// Exercise 15
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Exercise 16
function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

// Exercise 17
let unknownValue: unknown = "HELLO";
if (isString(unknownValue)) {
  console.log(unknownValue.toUpperCase());
}

// ─────────────────────────────────────────────
// SECTION F — Exhaustiveness checking
// ─────────────────────────────────────────────

// Exercise 18
type Color = "red" | "green" | "blue";

function getHexCode(color: Color): string {
  if (color === "red") {
    return "#FF0000";
  } else if (color === "green") {
    return "#00FF00";
  } else if (color === "blue") {
    return "#0000FF";
  } else {
    const _exhaustive: never = color;
    return _exhaustive;
  }
}

// Exercise 19
// Answer: `const x: never = value` forces TypeScript to ensure all cases are handled.
// If any branch of the union is unhandled, it causes a type error.

// ─────────────────────────────────────────────
// SECTION G — Narrowing with property checks
// ─────────────────────────────────────────────

// Exercise 20
type Email = {
  address: string;
};

type Phone = {
  number: string;
};

type Contact = Email | Phone;

// Exercise 21
function getContactInfo(contact: Contact): string {
  if ("address" in contact) {
    return contact.address;
  } else {
    return contact.number;
  }
}

// Exercise 22
const emailContact: Email = {
  address: "alice@example.com"
};
getContactInfo(emailContact);

// Exercise 23
const phoneContact: Phone = {
  number: "+1-555-1234"
};
getContactInfo(phoneContact);

// ─────────────────────────────────────────────
// SECTION H — Practical narrowing patterns
// ─────────────────────────────────────────────

// Exercise 24
type Click = {
  x: number;
  y: number;
};

type KeyPress = {
  key: string;
};

type Event = Click | KeyPress;

function handleEvent(event: Event): string {
  if ("x" in event) {
    return `Clicked at (${event.x}, ${event.y})`;
  } else {
    return `Key pressed: ${event.key}`;
  }
}

// Exercise 25
type SuccessResponse = {
  status: "success";
  data: unknown;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type LoadingResponse = {
  status: "loading";
};

type APIResponse = SuccessResponse | ErrorResponse | LoadingResponse;

function handleAPIResponse(response: APIResponse): string {
  if (response.status === "success") {
    return "Request succeeded";
  } else if (response.status === "error") {
    return `Error: ${response.message}`;
  } else if (response.status === "loading") {
    return "Request in progress...";
  } else {
    const _exhaustive: never = response;
    return _exhaustive;
  }
}
