// let user = {
//     name: "sanjaya",
//     age: 25,
//     email: "sanjaya@gmail.com",
//     password: "sanjaya123",
// }

// let name1 = user.name;
// console.log(name1);

// let stringUser = JSON.stringify(user);
// console.log(stringUser);

// let stringName = stringUser.name;
// console.log(stringName);

// let parsedUser = JSON.parse(stringUser);
// const name2 = parsedUser.name;
// console.log(name2);

// localStorage.setItem(stringUser);

localStorage.setItem("name", "Hero");
localStorage.setItem("token", 12345);
const getName = localStorage.getItem("name");
const getToken = localStorage.getItem("token");
console.log(getName);
console.log(getToken);


// fetch user function
fetch('https://jsonplaceholder.typicode.com/todos/6')
      .then(response => response.json())
      .then(json => console.log("This is response from real API", json));

