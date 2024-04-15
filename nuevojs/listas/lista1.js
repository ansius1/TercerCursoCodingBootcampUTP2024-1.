//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//coge el maximo numero y el minimo numero de una lista
const prompt = require('prompt-sync')();

function lista1(lista) {
    if (lista.length === 0) { //si en la lista hay 0 numero soltara null
        return null;
    } 

    let minimo = lista[0]; // Inicializa el mínimo con el primer elemento de la lista
    let maximo = lista[0]; // Inicializa el máximo con el primer elemento de la lista

    for (let i = 1; i < lista.length; i++) { //crea un bucle q recorre el primer elemento hasta el ultimo
        if (lista[i] > maximo) {
            maximo = lista[i]; // Actualiza el máximo si encontramos un número mayor
        }
        if (lista[i] < minimo) {
            minimo = lista[i]; // Actualiza el mínimo si encontramos un número menor
        }
    }

    return { maximo, minimo }; // Devuelve un objeto con el máximo y el mínimo
}

// Ejemplo de uso
const numero = [5, 13, 20, 50];
const resultado = lista1(numero);
console.log('El número mayor es:', resultado.maximo);
console.log('El número menor es:', resultado.minimo);