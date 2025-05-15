// conditions in js 

let isRain = false;
let scorchingSun = false; 
let willNotRain = true;
let today = "friday";

if(isRain === true) {
    console.log("Take Umbrella");
}
else {
    console.log("Dont take Umbrella");
}

// if else ladder 

if(isRain === true) {
    console.log("Take Umbrella");
}
else if(scorchingSun === true){
    console.log("Take Umbrella");
}
else {
    console.log("Dont take Umbrella");
}

if(today == "sunday"){
    console.log("Today is Sunday");
}

else if(today == "monday") {
    console.log("Today is Monday");
}

else if(today == "tuesday") {
    console.log("Today is Tuesday");
}

else if(today == "wednesday") {
    console.log("Today is Wednesday");
}

else if(today == "thursday") {
    console.log("Today is Thursday");
}

else {
    console.log("Today is friday");
}

// Ternary Operator

// if(isRain) {
//     console.log("It is raining");
// }

// else {
//     console.log("Not raining");
// }  // Normal way


// Ternary Operator way

let decision = (!isRain) ? "It is raining" : "It is not raining";
console.log(decision);
