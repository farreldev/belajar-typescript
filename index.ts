let a;
let b: boolean;
b = true;
console.log('type b:', typeof b);
let c: number;
c = 1;
console.log('type c:', typeof c);
let d: string;
d = 'hello';
console.log('type d:', typeof d);
let e: bigint;
e = 100n;
console.log('type e:', typeof e);
let f: symbol;
f = Symbol('Sym');
console.log('type f:', typeof f);
let g: () => void;
g = function () {
  return null;
};
console.log('type g:', typeof g);
let h: null;
h = null;
console.log('type h:', typeof h);
let i: {};
i = {};
console.log('type i:', typeof i);
let j: [];
j = [];
console.log('type j:', typeof j);

class Product {}

let k = new Product();
console.log('type k:', typeof k);

let l: any;
console.log('type l:', typeof l);
l = 123;
l = 'hai';
l = [];
