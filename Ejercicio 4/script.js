let letra = prompt('Ingrese una letra');

console.log(letra);

letra = letra.toUpperCase();

console.log(letra);

function actualizar() {location.reload(true);}

if (letra == 'S' || letra == 'N') {
    console.log("Letra correcta");

} else {
    console.log("Letra incorrecta");
    setInterval("actualizar()", 3000);
}

