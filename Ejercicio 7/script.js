let max;
let sum = 0;
let num;

//function actualizar() { location.reload(true); }

max = parseInt(prompt("Ingrese un numero maximo"));

if (isNaN(max)) {
    alert("Error: Ingresa un valor numérico.");
    setTimeout(() => {
    location.reload(true);
    }, 2000);

} else  {
    
alert(max);

do {
    
    num = parseInt(prompt("Ingrese un numero para sumar"));
    
    if (isNaN(num)) {
        alert("Error: Ingresa un valor numérico.");
        continue;
    }

    alert(num);

    sum += num;

    alert(sum);

} while (sum < max);

alert("llegue aca");

}



