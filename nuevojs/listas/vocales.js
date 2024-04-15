//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//separa las vocales y nos cuenta cuantas hay
const prompt = require('prompt-sync')();

const frase = prompt('Ingrese una frase: ');// Solicitar al usuario que ingrese una frase


const fraseMinusculas = frase.toLowerCase();// Convertir la frase a minúsculas para hacer la comparación de vocales más sencilla
const vocalesEncontradas = new Set();

let contadorVocales = 0;// Inicializar un contador para las vocales


for (let caracter of fraseMinusculas) {// Iterar sobre cada caracter de la frase
    
    if ('aeiou'.includes(caracter)) {// Verificar si el caracter es una vocal
        
        contadorVocales++;// Incrementar el contador de vocales
        vocalesEncontradas.add(caracter)
    }
}
console.log('Vocales encontradas:');
for (let vocal of vocalesEncontradas) {
    console.log(vocal);
}
// imprime
console.log('Cantidad total de vocales encontradas:', vocalesEncontradas , contadorVocales);
