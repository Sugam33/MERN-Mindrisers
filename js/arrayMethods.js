/* Arrays
    Arrays are mutable - The original values can be changed
*/


// let arr1 = [1, 2, 4, 5, 7];
// arr1[0] = 500;
// console.log(arr1);
// console.log(arr1.length);
// console.log(typeof arr1);

// console.log(arr1[2]);

// Some Array Methods
// console.log(arr1.toString());
// console.log(arr1.join(" and "));


let arr2 = [11, 12, 13, 14, 15, 16];
// let popped = arr2.pop(); // Removes the last element from the array and also alters the original array.
// console.log(popped); // Output: 16
// console.log(arr2); // Output: [11, 12, 13, 14, 15]  

// arr2.push(100); // Adds the element to the end of the array and alters the original array
// console.log(arr2); // Output: [11, 12, 13, 14, 15, 100]

arr2.unshift(200); // Adds the element to the start of the array and alters the original array
console.log(arr2); // Output: [200, 11, 12, 13, 14, 15, 100]

arr2.shift(); // Removes the first element from the array and also alters the original array.

console.log(arr2);


// Splice and slice method 
// Splice - It is used to change the contents of an array by removing, replacing or adding elements in place. This mutates the original array.
       // - It modifies the original array and returns the deleted elements.
// Syntax - array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

let animals = ["dog", "cat", "horse", "rabbit", "lion", "tiger"];
console.log(animals);

// Remove 1 element starting from index 2
let removed1 = animals.splice(2, 1);
console.log(`Removed elements are: ${removed1}`);
console.log(animals);

// Remove 0 element and add new animal at index 2
let insert1 = animals.splice(2, 0, "Mouse");
console.log(animals);


// Slice - It returns a shallow copy of a portion of an array into a new array object. The original array is not modified.
      // -  Returns the new array containing the extracted elements.

let colors = ["red", "green", "blue", "orange", "black", "pink", "white"];

let slice1 = colors.slice(2, 6); // Slices element from index 2 to index 6(but excludes index 6, that means 2 dheki 5 ko element slice garcha)
console.log(colors);
console.log(`The sliced elements are: ${slice1}`);
console.log(colors); // doesnt modify the original array


const age = [18, 19, 20, 21, 22, 23];
console.log(age.includes(19));
console.log(age.includes(25));


let students = [
    {
        name: "Sugam",
        age: 20,
        grade: 60
    },
    {
        name: "Ram",
        age: 25,
        grade: 65
    }, 
    {
        name: "Hari",
        age: 30,
        grade: 70
    },
]

students.forEach((n) => {
    console.log(n.name);
});



// Assignment - Find the multiplication table of 3 and 4 using forEach and map method

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using forEach method
console.log("Multiplication table of 3 using forEach method");
arr.forEach((num) => {
    console.log(`The multiplication of 3 using forEach method is 3 * ${num} = ${num * 3}`);
});

console.log("Multiplication table of 4 using forEach method");
arr.forEach((num) => {
    console.log(`The multiplication of 4 using forEach method is 4 * ${num} = ${num * 4}`);
});

// Using map method
let multipleOf3 = arr.map((num) => {
    return num * 3;
});

console.log("The multiplication of 3 using map method is: ", multipleOf3);


let multipleOf4 = arr.map((num) => {
    return num * 4;
});

console.log("The multiplication of 4 using map method is: ", multipleOf4);