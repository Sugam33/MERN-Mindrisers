// for loop 

let a = 5;

for (let i = 0; i < 10; i++) {
    console.log(a + i);
}

for (let i = 1; i <= 10; i++) {
    console.log(`The multiple of 2 * ${i} is: ${i * 2}`);
}

// for in loop - used to iterate over object properties or keys
let obj = {
    name: "Sugam",
    role: "Student",
    age: 25
}

for (const key in obj) {
     console.log(`The keys are: ${key}`);
     console.log(`The values are: ${obj[key]}`);

     console.log(`The key value pairs are = ${key} : ${obj[key]}`);
}

// for of loop - used for looping through iterable data structure like arrays, string etc

for (const char of "Sugam") {
    console.log(char);
}

let arr1 = [1, 2, 3, 4, 5];

for (const element of arr1) {
    console.log(element * 2);
}

// while loop 
// let i = 5;
// while(i < 7) {
//     console.log(i);
//     i++;
// }

// for each loop - used to iterate over arrays and array-like objects 
// It iterates over each of the values of the array elements and requires a callback function to be executed for each element.

let arr2 = [11, 12, 13, 14, 15];
let doubledarr2 = [];
arr2.forEach((element) => {
    doubledarr2.push(element * 2);
});

console.log(doubledarr2);


// seperate even and odd numbers using forEach method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumbers = [];
let evenNumbers = [];

numbers.forEach((num) => {
    if(num % 2 == 0) {
        evenNumbers.push(num);
    }
    else {
        oddNumbers.push(num);
    }
});

console.log("Even numbers using forEach are: ", evenNumbers);
console.log("Odd numbers using forEach are: ", oddNumbers);


// map method 
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let oddNumbers1 = [];
let evenNumbers1 = [];

numbers1.map((num) => {
    if(num % 2 == 0){
        evenNumbers1.push(num);
    }

    else {
        oddNumbers1.push(num);
    }
});

console.log("Even numbers using map are: ", evenNumbers1);
console.log("Odd numbers using map are: ", oddNumbers1);


// using map and forEach, make multiplication table of 3 and 4

// using map 
 

// find method 
let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findNum = num2.find((num) => {
    return num < 4;
});
console.log(findNum);

let filterNum = num2.filter((num) => {
    return num < 4;
});
console.log(filterNum * 2);



