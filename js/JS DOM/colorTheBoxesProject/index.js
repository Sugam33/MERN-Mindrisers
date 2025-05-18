
let colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "gray", "brown", "tomato", "azure", "aqua", "beige", "chocolate", "coral", "navy", "plum"];


let myBoxes = document.querySelectorAll(".boxes");
myBoxes.forEach((box) => {
    setInterval(() => {
    let randomBg = colors[Math.floor(Math.random() * colors.length)]; 
    let randomCol = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomBg);
    console.log(randomCol);
    box.style.backgroundColor = randomBg;
    box.style.color = randomCol;
    }, 500)
    
});