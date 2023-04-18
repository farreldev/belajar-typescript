function sum(a: number = 0, b: number = 0): number {
  return a + b;
}

let arg1 = 4;
let arg2 = 5;
let result = sum(arg1, arg2);
console.log(result);

// Type Union
let multiType: string | number; // string | number (satu variabel dengan multi type data)

multiType = 123;
multiType = 'hello';

// Type alias
type customType = string | number;
let myType: customType;

myType = 'hello';
