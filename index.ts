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
  id: string,
  productName: string,
  price: number,
  note: string
}

let product2: Product;
let product3: Product;