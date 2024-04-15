//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//calcula el factorial de un numero
const prompt = require('prompt-sync')();
const numero = parseFloat(prompt('ingrese el numero:'));

let factorial=1;
 for (let i = 1; i<= numero; i++){//crea el bucle de numeros enteros empezando por 1
    factorial *=i;

 }
 console.log(`El factorial de ${numero} es: ${factorial}`)

