let resultado;

function actualizar() { location.reload(true); }

let letra = prompt('Elija la operacion a realizar con la inicial \n S : Suma \n R : Resta \n M : Multiplicaion \n D : Division');

letra = letra.toUpperCase();

if (letra != 'S' && letra != 'R' && letra != 'M' && letra != 'D') {

    console.log("Letra incorrecta");

    setInterval("actualizar()", 3000);

    let salir = 'N';

} else {
    let valor1 = prompt( "Valor 1");
    let valor2 = prompt("Valor 2");
    
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    if (letra == 'S') {
        resultado = valor1 + valor2;
        console.log("El resultado de la suma es " + resultado);

    } else if (letra == 'R') {
        resultado = valor1 - valor2;
        console.log("El resultado de la resta es " + resultado);

    } else if (letra == 'D') {
        if (valor2 == 0) {
            console.log("No se puede dividir un numero entre cero");
        } else {
            resultado = valor1 / valor2;
            console.log("El resultado de la division es " + resultado);
        }

    } else if (letra == 'M') {
        resultado = valor1 * valor2;
        console.log("El resultado de la multiplicacion es " + resultado);

    }

    let salir = prompt('Desea realizar otra operacion ? \n S : Si \n N : No');

    salir = salir.toUpperCase();

    if (salir == 'S' || salir == 'SI') {
    setInterval("actualizar()", 1000);
    }
}
