// const alert1 = alert("Happy new year!!");
// console.log("THis is alert", alert1);

// const confirm1 = confirm("Are you sure?");
// console.log("This is confirm", confirm1);

// const prompt1 = prompt("Enter your favourite number");
// console.log("You entered: ", prompt1);

// confirm("Are you sure?");
// prompt("Enter your age");
// localStorage.setItem("Name", "SugamRatna");


// variable declaration
// var a = 6; // global scope
// let b = 5; // block scope
// const c = 5; // block scope

// global scope
// var a = 5;
// var a = 10;
// console.log("value of a is: ", a);

// {
//     var a = 15;
//     console.log("Value of block a is: ", a);
// }

// console.log("Value of global a is: ", a);

// block scope
// let b = 10;
// let b = 20;
// console.log("Value of b is: ", b); // shows error

// block scope
// const c = 20;
// const c = 40;
// console.log("Value of c is: ", c); // shows error

// global scope
var a = 5;
console.log("value of a is: ", a);

var a = 5;
var a = 10;
console.log("value of a is: ", a);

{
    var a = 15;
    console.log("Value of block a is: ", a);
}

console.log("Value of global a is: ", a);

// block scope
let b = 10;
let c = 20;
// console.log("Value of b is: ", b); 

{
    let b = 40;
    console.log("the value of block b is: ", b);
}

console.log("Value of global b is: ", b);

// block scope
const d = 20;
const e = 40;
// console.log("Value of c is: ", c); 

{
    const c = 80;
    console.log("the value of block c is: ", c);
}

console.log("Value of global c is: ", c);


