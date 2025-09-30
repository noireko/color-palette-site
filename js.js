const cuadr1 = document.getElementById("cuadro1");
const cuadr2 = document.getElementById("cuadro2");
const cuadr3 = document.getElementById("cuadro3");
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    let color1 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    let color2 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    let color3 = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    cuadr1.style.backgroundColor = color1;
    cuadr2.style.backgroundColor = color2;
    cuadr3.style.backgroundColor = color3;
})
