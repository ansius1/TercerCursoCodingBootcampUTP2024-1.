//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo incersiona las listas o las invierte
const prompt = require('prompt-sync')();

let lista= [2,3,5,7,8]
let listaInvertida=[]//variable donde se almacenara la lista invertida
for ( let i = lista.length -1; i>= 0; i--){ //declarando la funcion for para hacer la incersion

    listaInvertida.push(lista[i]);
}

console.log(listaInvertida);