const student = {
  myName: "John Doe",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};
// console.log(student?.myName?.firstName);
const { myName, age, ...rest } = student;
const hobbies = ["coding", "music", "sports"];
// const first = hobbies[0];
// const second = hobbies[1];
const [first, ...other] = hobbies;
const number = 10;
let results = number > 5 ? "Number is greater than 5" : "Number is less than 5";
if (number > 5) {
  results = "Number is greater than 5";
} else {
  results = "Number is less than 5";
}
// Typescript
let score: number = 100;
let job: string = "Frontend Development";
let amIADev: boolean = false;
let response: any = 100;
response = "evondev";
response = false;
response = {};
const studentList: Array<string> = [
  "evondev",
  "dinh son",
  "truong kien cuong",
  "tuyen vu",
  "phuc quy",
];
type SetupType = {
  laptop: string;
  keyboard: string;
  mouse: string;
};
const setup: SetupType = {
  laptop: "Macbook",
  keyboard: "Akko",
  mouse: "MX Master 2s",
};
let count: number | string = 100;
count = "1000";
interface ServerResponse {
  height?: number;
}
interface ServerResponseFinal extends ServerResponse {
  width?: number;
}
const reponse: ServerResponseFinal = {
  height: 100,
  width: 200,
};
type Boxed = {
  height?: number;
};
// type Boxed = {};
type Square = {
  width?: number;
};
type Combined = Boxed & Square;
const myBox: Combined = {};
// const studentInfo: string[] = ["evondev", 100, "truong kien cuong", 300];
// # Tuple
type StudentDetailsCheck = [string, string, number, boolean];
const studentDetails: StudentDetailsCheck = ["evondev", "KHTN", 99, true];
const studentDetails2: StudentDetailsCheck = ["phuc quy", "TDT", 100, true];
// string string number boolean
// # Enum -> enumrable
enum PERMISSIONS {
  ADMIN = "ADMIN",
  MOD = "MOD", // 1
  EDITOR = "EDTIOR", // 2
  USER = "USER", // 3
}
PERMISSIONS.ADMIN; // ADMIN
enum TABLIST {
  POPULAR = "POPULAR",
  RECENT = "RECENT",
  LATEST = "LATEST",
}
type TabList = "popular" | "recent" | "latest";
const tab: TabList = "recent";
// # Void
function calculateAge(year: number): number {
  const currentYear: number = new Date().getFullYear();
  const results = year - currentYear;
  return results;
}
// # unknown
let usure: unknown;
usure = 100;
if (typeof usure === "number") {
  console.log(usure.toFixed(2));
}
// # never
function overload(): never {
  throw new Error("");
  // return 10;
}
interface CarResponse {
  title: string;
  model: string;
  color: string;
  price: number;
}
interface TakeSkip {
  take: number;
  skip: number;
}
interface Filter {
  title?: string;
  model?: string;
  color?: string;
  price?: number;
}
interface IFilterTakeSkip extends TakeSkip, Filter {}
const exampleResponse = {
  title: "lorem",
  model: "bmw",
  color: "red",
  price: 1000,
};
// # Utility types
// ## Partial<Type>
interface Todo {
  title: string;
  description: string;
}
// interface Todo {
//   title?: string;
//   description?: string;
// }

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  title: "throw out trash",
});
// ## Required<Type>
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

// const obj2: Required<Props> = { a: 5 };
// ## Pick
interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
// ## Omit<Type, Keys>
type TodoPreview2 = Omit<Todo2, "description">;

const todo3: TodoPreview2 = {
  title: "Clean room",
  completed: false,
  // createdAt: 1615544252770,
};
const newStudent: Record<string, number> = {
  school: 100,
};
