// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];
const moreStudentsNew =[];
for (const element of moreStudents) {
    if (Array.isArray(element)) {
        for (let i = 0; i < element.length; i++) {
                moreStudentsNew.push(element[i]);
        }
    }else{
        moreStudentsNew.push(element);
    }
}
console.log(moreStudents);


//! Answer :
