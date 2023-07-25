let cont = 0, max = 0, min, prom = 0, num;

do {
    num = parseInt(prompt("Ingrese un numero"));

    cont++;

    prom = prom + num;

    min = num;

    if (num >= max) {
    max = num;
    }

    if (num <= min) {
    min = num;
    }
    
} while (num === 0);

console.log("La cantidad de numeros ingresados son " + cont + "\n" 
            + "El numero mas grande es " + max + "\n"
            + "El numero mas chico es " + min + "\n"
            + "El promedio es " + (prom/cont) + "\n"
            + "La suma total de todo los numeros es " + prom);