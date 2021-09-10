// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
} 

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd



// Código del triángulo
console.group("Triángulos")

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd

// Código del círculo
console.group("Cirulo")

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd


// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)  
}
// Triángulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const value1 = Number (input1.value);
    const input2 = document.getElementById("inputTriangulo2");
    const value2 = Number (input2.value);
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number (input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro)
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangulo3");
    const value3 = Number (input3.value);
    const input4 = document.getElementById("inputTriangulo4");
    const value4 = Number (input4.value);
    const area = areaTriangulo(value3,value4);
    alert(area)  
}
// Circulo
function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro)
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area)  
}