/* 

Tipos de datos

Los tipos de datos son una clasificación de los diferentes valores que podemos manejar en un lenguaje de programción.

En JS existen varios tipos de datos que se pueden agrupar en dos categorias : primitivos y complejos (objetos)

Cada tipo de datos tiene sus características y usos especificos en programación:

1. Primitivos

Datos básicos que no se consideran objetos y no tienen métodos.

Número o Number: Representan valores númericos, ya sea enteros o decimales.

Cadena de caracteres o Strings: Representan textos. El texto se coloca entre comillas dobles o simples. Hay que ser consistentes en su uso.

Booleanos o Booleans: Representan un valor lógico que puede ser verdadero (true) o falso (false).

Indefinido o Undefined: Es el valor que se asigna a una variable, que ha sido declarada pero no se ha inicializado.

*/

// Numbers

let miEdad = 26;
let miEstatura = 1.72;

console.log(miEdad);
console.log(miEstatura);

// Strings

let miNombre = "Axel";
let miApellido = "Hernández";

console.log(miNombre);
console.log(miApellido);

// Booleanos

let esEstudioso = true;
let esGuapeton = false;

console.log(esEstudioso);
console.log(esGuapeton);

// Undefined

let aprobaraProgramacion;

console.log(aprobaraProgramacion);

/* 

2. Complejos (objetos)

Arreglo o Array: Es un conjunto de datos que se almacenan en una lista ordenada. Los datos dentro de un arreglo se escriben entre corchetes: [] y se separan por comas , 

Objetos u Objects: Es un conjunto de multiples datos en pares: clave - valor. Los datos dentro de un objeto se escriben entre llaves: {} y se separan por comas , 

Funciones o Functions: Es un tipo de datos que puede ser invocado. Se declaran con la palabra reservada function y el codigo que ejecutan va entre llaves {}

*/

// Array

let misCaricaturas = ["Dragon Ball" , "Pokemon" , "Gatos Samurai"];
let misNumeros = [5, 10, 8, 13, 33];
let tutifruti = ["Puchungito", 12345, true, false];

console.log(misCaricaturas);
console.log(misCaricaturas[0]);
console.log(misNumeros);
console.log(misNumeros[3]);
console.log(tutifruti);
console.log(tutifruti[2]);

// Objetos

let perro = {
    nombre: "firulais", 
    edad: 2, 
    tamaño: "pequeño", 
    color: "negro", 
    ladra: true, 
    muerde: false,
}

console.log(perro);
console.log(perro.color)
console.log(perro.nombre)
console.log(perro.muerde)

// Funciones

let saludar = function() {
    // Aquí va el codigo que se invoca a la función
    console.log("Hola mamá estoy aprendiendo Javascript")
}

console.log(saludar);

saludar(); //Invocar a la función