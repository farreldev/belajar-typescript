/******* Basic Function *******/
/**
 * 3 Tipe Function is: Declaration, Expression, Arrow
 */

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

type Contact = {
  firstName: string;
  lastName: string;
  gender?: string;
  language: string;
};

function submitContact(
  firstName: string,
  lastName: string,
  language = 'english',
  gender?: string
): Contact {
  return {
    firstName,
    lastName,
    language,
    ...(gender && { gender }),
  };
}

let res = submitContact('John', 'Mayer', 'english', 'Male');

console.log(res);

/************ Rest Parameter ************/
function fruitsCollection(item: string, ...restItems: string[]) {
  return `first item is '${item}' and the other '${restItems.join(' ')}'`;
}
let fruits = fruitsCollection('Apple', 'Banana', 'Manggo');
console.log(fruits);

/************ Conditional With Union ************/

// Solution 1: Union

function CT(param: string | number): string | number {
  return param;
}

// Solution 2: Generic
// Type Variabel -> deteksi type data caller
function CT_generic<T>(param: T): T {
  return param
}

// Aplikasi atau cara panggil generic
let tes = CT_generic<string>('Hello Typescript');
let tes2 = CT_generic<number>(123);
console.log(tes, tes2)