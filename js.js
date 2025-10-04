const color1 = document.getElementById("cuadro1");
const color2 = document.getElementById("cuadro2");
const color3 = document.getElementById("cuadro3");
const color4 = document.getElementById("cuadro4");
const color5 = document.getElementById("cuadro5");

const complementarios = document.getElementById("btn1");
const analogos = document.getElementById("btn2");
const triada = document.getElementById("btn3");
const tetrada = document.getElementById("btn4");
const tono = document.getElementById("btn5");
const calidos = document.getElementById("btn6");
const frios = document.getElementById("btn7");

function generarColor() {
    return {
        hue: Math.floor(Math.random() * 361),
        saturation: Math.floor(Math.random() * 51) + 50,
        light: Math.floor(Math.random() * 41) + 30
    };
}

function aplicarColores(colores) {
    [color1, color2, color3, color4, color5].forEach((elem, i) => {
        elem.style.backgroundColor = colores[i];
    });
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function randomHueFromRanges(ranges) {
    const [min, max] = ranges[Math.floor(Math.random() * ranges.length)];
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

complementarios.addEventListener("click", () => {
    const { hue, saturation, light } = generarColor();
    const comp = (hue + 180) % 360;

    aplicarColores([
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${hue}, ${clamp(saturation - 25, 0, 100)}%, ${clamp(light - 15, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation - 35, 0, 100)}%, ${clamp(light - 25, 0, 100)}%)`,
        `hsl(${comp}, ${clamp(saturation - 25, 0, 100)}%, ${clamp(light - 15, 0, 100)}%)`,
        `hsl(${comp}, ${saturation}%, ${light}%)`
    ]);
});

analogos.addEventListener("click", () => {
    const { hue, saturation, light } = generarColor();

    aplicarColores([
        `hsl(${(hue + 40) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 20) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${(hue - 20 + 360) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue - 40 + 360) % 360}, ${saturation}%, ${light}%)`
    ]);
});

triada.addEventListener("click", () => {
    const { hue, saturation, light } = generarColor();

    aplicarColores([
        `hsl(${(hue + 120) % 360}, ${clamp(saturation - 30, 0, 100)}%, ${clamp(light - 15, 0, 100)}%)`,
        `hsl(${(hue + 120) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 240) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 240) % 360}, ${clamp(saturation - 30, 0, 100)}%, ${clamp(light - 15, 0, 100)}%)`
    ]);
});

tetrada.addEventListener("click", () => {
    const { hue, saturation, light } = generarColor();

    aplicarColores([
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 90) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 180) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 270) % 360}, ${saturation}%, ${light}%)`,
        `hsl(${(hue + 360) % 360}, ${clamp(saturation - 40, 0, 100)}%, ${clamp(light - 20, 0, 100)}%)`
    ]);
});

tono.addEventListener("click", () => {
    const { hue, saturation } = generarColor();
    const lightBase = 80;

    aplicarColores([
        `hsl(${hue}, ${saturation}%, ${lightBase}%)`,
        `hsl(${hue}, ${clamp(saturation - 10, 0, 100)}%, ${clamp(lightBase - 13, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation - 20, 0, 100)}%, ${clamp(lightBase - 26, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 10, 0, 100)}%, ${clamp(lightBase - 39, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 20, 0, 100)}%, ${clamp(lightBase - 52, 0, 100)}%)`
    ]);
});

calidos.addEventListener("click", () => {
    const { saturation, light } = generarColor();
    const hue = randomHueFromRanges([[0, 60], [330, 360]]);

    aplicarColores([
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${hue}, ${clamp(saturation - 10, 0, 100)}%, ${clamp(light - 10, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation - 20, 0, 100)}%, ${clamp(light - 20, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 10, 0, 100)}%, ${clamp(light + 10, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 20, 0, 100)}%, ${clamp(light + 20, 0, 100)}%)`
    ]);
});

frios.addEventListener("click", () => {
    const { saturation, light } = generarColor();
    const hue = randomHueFromRanges([[90, 150], [180, 240], [240, 300]]);

    aplicarColores(
        `hsl(${hue}, ${saturation}%, ${light}%)`,
        `hsl(${hue}, ${clamp(saturation - 10, 0, 100)}%, ${clamp(light - 10, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation - 20, 0, 100)}%, ${clamp(light - 20, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 10, 0, 100)}%, ${clamp(light + 10, 0, 100)}%)`,
        `hsl(${hue}, ${clamp(saturation + 20, 0, 100)}%, ${clamp(light + 20, 0, 100)}%)`
    ]);
});
