// types of loops used for iteration
// for loop 
// for each loop
// while loop
// do while loop 
// map

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// } 


// for (let i = 1; i <= 10; i++) {
//     console.log(`3 * ${i} = ${i * 3}`);
// } 

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumber = [];
let evenNumber = [];

for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element % 2 == 0) {
        evenNumber.push(element);
    }
    else {
        oddNumber.push(element);
    }
}

console.log(`The even numbers are: ${evenNumber}`);
console.log(`The odd numbers are: ${oddNumber}`);

let fruits = ["apple", "banana", "grapes"];
let addFruit = fruits.push("pineapple");

console.log(fruits);

// Assignment 
// shift 
// unshift
// splice 
// slice
// indexOf
// findIndex
// includes

