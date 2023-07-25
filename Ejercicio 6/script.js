let num = prompt("Ingrese un numero...");

num = parseInt(num);

if (num === 0) {
    console.log("El numero no es par ni impar");
} else if (num % 2 == 0) {
    console.log("EL numero es par");
} else if (num % 2 == 1) {
    console.log("El numero es impar");
} else {
    console.log("Por defecto");
}