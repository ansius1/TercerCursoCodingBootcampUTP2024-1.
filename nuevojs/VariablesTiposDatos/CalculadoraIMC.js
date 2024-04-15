//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo concatena dos listras

const prompt = require('prompt-sync')();
function convertir() {
    const peso = parseFloat(prompt('indique su peso:'));
    const altura = parseFloat(prompt('indique su altura:'));
    const IMC = peso/(altura)**2;
    return  IMC;

}
const IMC = convertir()
console.log('su IMC es:'+ IMC);