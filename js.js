const cuadr1 = document.getElementById("cuadro1");
const cuadr2 = document.getElementById("cuadro2");
const cuadr3 = document.getElementById("cuadro3");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let hue;
let saturation;
let light;

function generarColor() {
    hue = Math.floor(Math.random() * 361);
    saturation = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    light = Math.floor(Math.random() * (70 - 30 + 1)) + 30;
}

btn1.addEventListener("click", function () {
    generarColor()
    let color1 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let color2 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${light}%)`;
    let color3 = `hsl(${(hue - 30 + 360) % 360}, ${saturation}%, ${light}%)`;
    cuadr1.style.backgroundColor = color1;
    cuadr2.style.backgroundColor = color2;
    cuadr3.style.backgroundColor = color3;
    console.log(color1)
    console.log(color2)
    console.log(color3)
});


btn2.addEventListener("click", function () {
    generarColor()
    let color1 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let color2 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${light}%)`;
    let color3 = `hsl(${(hue - 30 + 360) % 360}, ${saturation}%, ${light}%)`;
    cuadr1.style.backgroundColor = color1;
    cuadr2.style.backgroundColor = color2;
    cuadr3.style.backgroundColor = color3;
    console.log(color1)
    console.log(color2)
    console.log(color3)
});

btn3.addEventListener("click", function () {
    generarColor()
    let color1 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let color2 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${light}%)`;
    let color3 = `hsl(${(hue - 30 + 360) % 360}, ${saturation}%, ${light}%)`;
    cuadr1.style.backgroundColor = color1;
    cuadr2.style.backgroundColor = color2;
    cuadr3.style.backgroundColor = color3;
    console.log(color1)
    console.log(color2)
    console.log(color3)
});

btn4.addEventListener("click", function () {
    generarColor()
    let color1 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let color2 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${light}%)`;
    let color3 = `hsl(${(hue - 30 + 360) % 360}, ${saturation}%, ${light}%)`;
    cuadr1.style.backgroundColor = color1;
    cuadr2.style.backgroundColor = color2;
    cuadr3.style.backgroundColor = color3;
    console.log(color1)
    console.log(color2)
    console.log(color3)
});

