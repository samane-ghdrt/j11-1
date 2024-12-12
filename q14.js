// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const obj0 = { number: 6043, age: 21, pt: 96 };
const valuesArray1 = Object.values(obj0);
console.log(valuesArray1);
const valuesArray2 = [];
for (const key in obj0) {
  valuesArray2.push(obj0[key]);
}
console.log(valuesArray2);