// datatypes 
// there are two types of datatypes: Primitive and non-primitive

// datatypes in js: 
// String 
// Number 
// Boolean 
// Null 
// Undefined
// Object 
// Array

let title = "coconut"; // string
let number1 = "20";
let rollNumber = 20; 
let isRain = true;
let willNotRain;
let student = {
    name: "Sugam",
    age: 25
}
let students = ["Ram", "Shyam", "Sita", 25];

console.log(typeof number1);
console.log(typeof rollNumber);
console.log(typeof students);

console.log(students);

// let fruits = ["ram", shyam, "mango", "banana"]; // this is not array

let user = [
    {
        name: "Ram",
        age: 30,
        email: "ram@gmail.com",
        password: "ram123",
        items: ["Phone", "Laptop", "watch"]
    },

    {
        name: "Shyam",
        age: 40,
        email: "shyam@gmail.com",
        password: "shyam123"
    }, 
];

// for (let i = 0; i < user.length; i++) {
//     const element = user[i].name;
//     console.log(element);
// }

console.log(user[0].name);
console.log(user[1].age);
console.log(user[0].items[0]);
