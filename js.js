const color1 = document.getElementById("cuadro1");
const color2 = document.getElementById("cuadro2");
const color3 = document.getElementById("cuadro3");
const color4 = document.getElementById("cuadro4");
const color5 = document.getElementById("cuadro5");
const complementarios = document.getElementById("btn1");
const analogos = document.getElementById("btn2");
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

complementarios.addEventListener("click", function () {
    generarColor()
    let hue = Math.floor(Math.random() * (360 - 180 + 1)) + 180;
    let base0 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let clr2 = `hsl(${hue}, ${saturation - 25}%, ${light - 15}%)`;
    let clr3 = `hsl(${hue}, ${saturation - 50}%, ${light - 30}%)`;
    let clr4 = `hsl(${(hue + 180) % 360}, ${saturation - 25}%, ${light - 15}%)`;
    let clr5 = `hsl(${(hue + 180) % 360}, ${saturation}%, ${light}%)`;
    color1.style.backgroundColor = base0;
    color2.style.backgroundColor = clr2;
    color3.style.backgroundColor = clr3;
    color4.style.backgroundColor = clr4;
    color5.style.backgroundColor = clr5;
});


analogos.addEventListener("click", function () {
    generarColor()
    let clr2 = `hsl(${(hue + 40) % 360}, ${saturation}%, ${light}%)`;
    let clr3 = `hsl(${(hue + 20) % 360}, ${saturation}%, ${light}%)`;
    let base0 = `hsl(${hue}, ${saturation}%, ${light}%)`;
    let clr4 = `hsl(${(hue - 20) % 360}, ${saturation}%, ${light}%)`;
    let clr5 = `hsl(${(hue - 40) % 360}, ${saturation}%, ${light}%)`;
    color1.style.backgroundColor = clr2;
    color2.style.backgroundColor = clr3;
    color3.style.backgroundColor = base0;
    color4.style.backgroundColor = clr4;
    color5.style.backgroundColor = clr5;
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

