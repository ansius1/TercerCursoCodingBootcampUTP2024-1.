//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo genera un id tomando su nombre apellido y su fecha de nacimiento

const prompt = require('prompt-sync')();
function fecha  (){

    const  nombre= prompt('indique su nombre:');
    const apellido= prompt('indique su apellido:');
    const fechaespecifica = parseFloat(prompt('indique su año de nacimiento:'));
     
    const identificacion = nombre+apellido+fechaespecifica;
    return identificacion;
}
const identificacion = fecha()
console.log('su ID es:'+identificacion);