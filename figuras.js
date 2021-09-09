// Código del cuadrado
console.group("Cuadrados")
const ladoCuadrado = 7;
console.log("los lados del cuadrado miden: " + ladoCuadrado + " cm")

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + " cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado; 
console.log("el área del cuadrado es: " + areaCuadrado + " cm2")
console.groupEnd

// Código del triángulo
console.group("Triángulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "los lados del triángulo miden: " +
    + ladoTriangulo1
    + " cm, "
    + ladoTriangulo2
    + " cm, "
    + baseTriangulo
    + " cm"
)

console.log("la altura del triángulo es: " + alturaTriangulo + " cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
console.log("el perimetro del triángulo es: " + perimetroTriangulo  + " cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2; 
console.log("el área del triángulo es: " + areaTriangulo + " cm2")

console.groupEnd

// Código del círculo
console.group("Cirulo")

const radioCirculo = 4; 
console.log("el radio del círculo es: " + radioCirculo + "cm")

const pi = Math.PI; 
console.log("el valor de PI es: " + pi)

const diametroCirculo = radioCirculo * 2;
console.log("el diámetro del círculo es: " + diametroCirculo + " cm")

const perimetroCirculo = diametroCirculo * pi; 
console.log("el perimetro del círculo es: " + perimetroCirculo  + " cm")

const areaCirculo = (radioCirculo * radioCirculo) * pi ; 
console.log("el área del círculo es: " + areaCirculo + " cm2")

console.groupEnd