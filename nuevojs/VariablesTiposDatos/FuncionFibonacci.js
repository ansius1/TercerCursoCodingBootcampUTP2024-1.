//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

//el codigo concatena dos listras

const prompt = require('prompt-sync')();
function fibonacci(n) {
    if (n === 0) return 0; 
    if (n === 1) return 1; 

    let fib1 = 0; // Primer número de Fibonacci
    let fib2 = 1; // Segundo número de Fibonacci
    let fib; // Variable para almacenar el n-ésimo número de Fibonacci

    for (let i = 2; i <= n; i++) { //crea un bucle iniciando desde el numero 2 
        fib = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib;
    }

    return fib;
}

const n = parseInt(prompt("Ingrese el valor de n para calcular el n-ésimo número de Fibonacci: "));

console.log(`El ${n}-ésimo número de Fibonacci es: ${fibonacci(n)}`);



