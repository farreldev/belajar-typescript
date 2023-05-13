// Type inference in object
let product = {
  id: 'ID-1',
  productName: 'Macbook Pro',
  price: 15000000,
  note: ''
}

// inline interface
let product1: {
  id: string,
  productName: string,
  price: number,
  note: string
}

product1 = {
  id: 'ID-1',
  productName: 'Macbook Air',
  price: 2000,
  note: ''
}

// interface
interface Product {
  id: string;
  productName: string;
  price: number;
  note: string;
}

let product2: Product;
let product3: Product;

// Nested object
interface Item {
  id: string;
  productName: string;
  price: number;
  productDetail: itemDetail;
}

interface itemDetail {
  year: number;
  storage: number;
}

let product4: Item;

// Nested array of object
interface Address {
  street: string;
  city: string;
}

interface User {
  id: string;
  name: string;
  address: Array<Address>;
}

let user: User;
user = {
  id: 'U-1',
  name: 'John',
  address: [
    {
      street: 'Jalan Buntu',
      city: 'Jakarta'
    },
    {
      street: ' Jalan jalan',
      city: 'Bandung'
    }
  ]
}

// nested object of object

interface cartItem {
  id: string,
  name: string,
  qty: number
}

interface Cart {
  idCart: string,
  dateOrder: Date,
  items: {
    [key: string]: cartItem
  }
}

let buy: Cart = {
  idCart: 'C1',
  dateOrder: new Date('2023-04-21'),
  items: {
    p1: {
      id: 'p-1',
      name: 'Mechanical Keyboard',
      qty: 1
    },
    p2: {
      id: 'p-2',
      name: 'USB-Hub',
      qty: 1
    }
  }
}

// Destructuring
let fullName = {
  firstName: 'Ricky Alexander',
  lastName: 'Titaley'
}

// type inference
// let { firstName, lastName} = fullName;

// inline interface

let { firstName, lastName } : { firstName: string, lastName: string } = fullName;
