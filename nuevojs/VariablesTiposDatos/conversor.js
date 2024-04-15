//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo conveierte de grados celcius a fahrenheit

const prompt = require('prompt-sync')();
function convertir() {
    const gradosC = parseFloat(prompt('Ingrese la temperatura en grados Centigrados: '));
    const gradosF = (9/5 * gradosC) + 32;
    return gradosF; //saca de la funcion para poder ejecutar la variable fuera de la funcion
}

const gradosF = convertir();
console.log('La temperatura en grados Fahrenheit es ' + gradosF + '°'); //imprimir