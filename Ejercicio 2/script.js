let radio = prompt("Ingrese el valor del radio");

let area = Math.pow(radio, 2)  * Math.PI;

let perimetro = Math.PI * radio * 2;

area = Math.round(area);
perimetro = Math.round(perimetro);

console.log("El valor del area es " + area);
console.log("El valor del perimetro es " + perimetro);