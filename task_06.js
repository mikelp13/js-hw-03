debugger;

function calculateTotalPrice(array, prop) {
  'use strict';
  // Write code under this line
  const sameProductName = [];
  let totalPrice  = 0;

  for (const product of array) {
    console.log(product);

    if (product.name === prop) {
      sameProductName.push(product);
      continue;
    }
    
    // let a = 0;
  }
  console.log(sameProductName);

  for (const item of sameProductName) {
    console.log(item);
   const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;
  }

  return totalPrice;
}


// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// console.log(calculateTotalPrice(products, 'Радар'));
// 9080

//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
