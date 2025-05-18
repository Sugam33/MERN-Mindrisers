// document.designMode = 'on' // used to edit the design of any page 


let box1 = document.querySelector(".box");
console.log(box1);

console.log(box1.innerHTML); // displays the HTML inside the box element

console.log(box1.innerText); // displays the TEXT inside the box element


let myContainer = document.querySelector(".container");
console.log(myContainer);

console.log(myContainer.innerHTML); // displays the HTML inside the container element

console.log(myContainer.innerText); // displays the TEXT inside the container element

console.log(myContainer.textContent); // displays the TEXT inside the container element, including the text inside the box element


// Some Attribute methods 
console.log(document.querySelector(".box").hasAttribute("style")); // returns true if the element has the style attribute (or any attibute that you want to check and false if no desired attribute exists)
console.log(document.querySelector(".box").getAttribute("style")); // returns the value of the style attribute (or any attribute that you want to get the value of)
console.log(document.querySelector(".box").setAttribute("style", "display: inline")); // sets the value of the style attribute (or any attribute that you want to set the value of)
// console.log(document.querySelector(".box").removeAttribute("style")); // Removes the style attribute (or any attribute that you want to remove)

console.log(document.querySelector(".box").attributes); // used to get all the attributes of the element