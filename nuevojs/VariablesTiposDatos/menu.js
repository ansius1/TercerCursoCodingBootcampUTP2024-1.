//fecha y hora:15/04/2024 -11:02 am 
//autores. ing andres mauricio robayo vargas y ing gabriel alejandro betancour rios
//nombre del lenguaje utilizado:ECMASCRIPT 6.0
//Version del lenguaje utilizado: javascript 6.0
//universidad tecnologica de pereira
//programa de ingenieria en sistemas y computacion

// menu principal 

const prompt = require('prompt-sync')();

// Función para cargar y ejecutar el módulo correspondiente a la opción seleccionada
// Función para cargar y ejecutar el módulo correspondiente a la opción seleccionada
function cargarOpcion(opcion) {
    switch (opcion) {
        case '1':
            require('./conversor'); // Carga el módulo conversor.js
            break;

        case '2':
            require('./CalculadoraIMC'); // Carga el módulo calculadoraIMC.js
            break;

        case '3':
            require('./GeneradorNombre'); // Carga el módulo generadorNombres.js
            break;

        case '4':
            require('./FuncionFibonacci'); // Carga el módulo funcionFibonacci.js
            break;

        case '5':
            console.log('Has seleccionado la opción 5. Saliendo del menú.');
            return;

        default:
            console.log('\nNo has seleccionado ninguna opción válida del menú.');
    }
}


// Función para mostrar el menú y leer la entrada del usuario
function menu() {
    let opcion;
    while (true) {
        console.log('\nMenú');
        console.log('1. Conversor de °C a °F.');
        console.log('2. Índice de masa corporal.');
        console.log('3. Creador de nombre de usuario.');
        console.log('4. Función Fibonacci.');
        console.log('5. Salir del menú');

        opcion = prompt('Seleccione una opción del menú: ');
        cargarOpcion(opcion); // Llama a la función para cargar y ejecutar el módulo correspondiente
    }
}

// Ejecutar el menú
menu();
