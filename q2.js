// ? 2. Rewrite the code below to use array destructuring instead of assigning each value to a variable.

// let item = ['Egg', 0.25, 12];
// let name = item[0];
// let price = item[1];
// let quantity = item[2];
// console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);

// ! Answer :
 let item={
    name:'Egg',
    price:'0.25',
    quantity:'12',
 }
 console.log(`Item: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
 