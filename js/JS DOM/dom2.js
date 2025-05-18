// document.getElementsByClassName
let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor = "green";

//document.getElementById
document.getElementById("box4").style.backgroundColor = "red";


//document.querySelector - returns the FIRST ELEMENT ONLY that matches the .box class(or any other CSS selectors you use)
document.querySelector(".box").style.backgroundColor = "brown";

//document.querySelectorAll = returns ALL THE ELEMENTS that matches the css selectors you use(returns a HTML COLLECTION consisting of all the elements that matches the selector we give. Also we need to use "FOR" loop if we want to access all the elemnents in the nodelist)

document.querySelectorAll(".box").forEach((e) => {
    e.style.color = "yellow";
});


