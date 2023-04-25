// function declaration

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(2, 4));

// function expression

const addEx = (a: number, b: number): number => a + b;

console.log(addEx(2, 1));

// function with callback

type readUrl = (message: string) => void;

function request(url: string, cb: readUrl) {
  cb(url);
}

let fn = (str: string) => console.log(str);

request('https://www.youtube.com', fn);
