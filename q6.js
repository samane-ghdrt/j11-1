// ? 6. We have an object called 'user'.
// Write the destructuring assignment that converts:
// todo1 : 'name' property into the variable 'firstName'.
// todo2 : 'years' property into the variable 'age'.
// todo3 : 'admin' property into the variable 'isAdmin'.(if no such property exists create 'isAdmin' variable and assign false value to that)

let user = { name: 'John', years: 30 };



// ! Answer
let name1=user.name;
let age1 =user.years;
user.admin=false;
let isAdmin=user.admin;
console.log(name1); // John
console.log(age1); // 30
console.log(isAdmin); // false
