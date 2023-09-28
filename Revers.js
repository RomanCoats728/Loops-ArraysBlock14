// //Revere Array
// //with a for loop
// //create a Javascript
// // that makes the array in reverse

const arrayInput1 = [1, 2, 3];

const reversearrayInput1 = [];

for (let i = arrayInput1.length - 1; i >= 0; i--) {
  const valueAtIndex = arrayInput1[i];
  reversearrayInput1.push(valueAtIndex);
}
console.log(reversearrayInput1);

// //Input2
const arrayInput2 = [1, 3, 5, 7, 9, 11];

const reversearrayInput2 = [];

for (let i = arrayInput2.length - 1; i >= 0; i--) {
  const valueAtIndex = arrayInput2[i];
  reversearrayInput2.push(valueAtIndex);
}
console.log(reversearrayInput2);

// //Input3

const arrayInput3 = [20, 50, 30, 60, 200];

const reversearrayInput3 = [];

for (let i = arrayInput3.length - 1; i >= 0; i--) {
  const valueAtIndex = arrayInput3[i];
  reversearrayInput3.push(valueAtIndex);
}
console.log(reversearrayInput3);
