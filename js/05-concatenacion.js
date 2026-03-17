/* 

Concatenación de cadenas de texto.

Es el proceso de unir 2 o más cadenas de texto en una sola. Esto se hace utilizando el operador "+"

*/

console.log("Tengo antojo de " + "una torta de tamal!");

let nombre = "Axel"
let apellido = " Hernández"
let edad = 26;

console.log("Hola me llamo " + nombre + apellido + " y tengo " + edad + " años.");

/* 

Plantillas literales (Template Strings)

Las plantillas literales son un espacio que se abre para la combinación de variables, expresiones y cadenas de texto. Ayuda a concatenar de forma más dinámica y simple. Se usan los backticks (acento invertido o acento agudo) ` 

*/

console.log(`Hola me llamo ${nombre}${apellido} y tengo ${edad} años!`);


/* 

Si se utiliza el operador de + con valores númericos se suman. Pero sí se usan con cadenas de texto se concatenan

*/

let a = "5"; // string
let b = "10"; // string

console.log(a + b) // "510"
