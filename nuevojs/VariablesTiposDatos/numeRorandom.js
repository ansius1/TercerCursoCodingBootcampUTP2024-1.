//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo genera un numero random que el usuario debe adivinar

const prompt = require('prompt-sync')();
 
    const numero= parseFloat(prompt('dijiste su numero:'));
    const numeroRandom = Math.random()*100; //declara la variable numero random seguido del codigo para generar el numero seguido del limite

    if (numero === numeroRandom){
        console.log('encontraste el numero');
    
      
    }else if (numero > numeroRandom){

        console.log('el numero es menor')
    }else if (numero <numeroRandom){
        console.log('el numero es mayor')
    }
