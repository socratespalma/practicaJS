// ------ Javascript basico -------

// console.log("hola mundo");

// alert('hola mundo'); lanza alerta en el navegador

// var prueba = 5;
// var prueba1 = 9;

// console.log("El resultado de la suma es: ", prueba + prueba1);
// console.log("El resultado de la resta es: ", prueba - prueba1);
// console.log("El resultado de la multiplicacion es: ", prueba * prueba1);
// console.log("El resultado de la division es: ", prueba / prueba1);
// console.log("El residuo es: ", prueba % prueba1);

// const prueba2 = "5" + "4";
// console.log(prueba2);

// const textoLargo =
//   "hola a todos los alumnos de aplicaciones graficas y multimedia del 4t1-is";
// console.log(textoLargo.length);
// console.log("El caracter en la posicion 5 es:" + " '" + textoLargo[5] + "'");
// console.log(textoLargo.toUpperCase());

// let correo = "     Dubstepero10@gmail.com";
// console.log(correo.trim().toLowerCase());
// console.log(textoLargo.indexOf("alumnos"));
// console.log(textoLargo.slice(5).replace("a", "\\"));
// let autor = "Lord Danilo";
// let textoCompleto = '"' + textoLargo + '"' + ` por ${autor};`;
// console.log(textoCompleto);
// console.log(`tengo ${20 + 1} años`);

// let usuario = "socratespalma";
// let item = "computadoras";
// let cantidad = "3";
// let precio = "700";
// console.log(`Bienvenido nuevamente, ${usuario.toUpperCase()}`);
// console.log(
//   `${usuario} ha comprado ${cantidad} ${item} a un precio de $${precio} cada una, para un total general de $${
//     cantidad * precio
//   }`
// );

// let opcion = confirm("Tienes mas de 18?");
// console.log(opcion); presenta alerta de aceptar o cancelar

// camelCase -> nombreCompletoPoeta
// var ya no se deberia utilizar, mejor usar let
// const para inicializar constantes, puede ser util con arreglos y objetos
// variables null y undefined

// metodo prompt permite pedirle al usuario datos ingresados por teclado

// etiqueta script va antes del cierre del body

// console.log(typeof textoCompleto);

// metodos del objeto math
// .round(), .floor(), .abs(), .pow(), .random() -> devuelve no. random entre 0 y 1

// .parseInt() y .parseFloat() se usan para interpretar cadenas como numeros. Utiles en los formularios.

// ------- Fundamentos --------
// **** Operadores ****
// >, >=, <, <=, == igual a, != no igual a, === igual valor y tipo, !== no igual valor o tipo
// && and, || or, ! not

// operadores abreviados
// +=, -=, *=, /=, %=, ++, --

// **** condicionales ****
// if (condition) {
//   do this
// }
// else if(condition){
//   do this
// }
// else {
//   do this
// }

// while (condition) {
//   do this
// } Mientras la condicion sea cumplida (verdadera), hacer lo que esta dentro del ciclo. Tratar de evitar los ciclos while infinitos XD

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }

// hacer ciclos for 1) 1,2,3,4,5 ; 2) 80, 70, 60, 50, 40 ;  3) H, e, l, l, o ;

// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }

// for (let i = 80; i > 30; i -= 10) {
//   console.log(i);
// }

// let word = "Hello";

// for (let i = 0; i < word.length; i++) {
//   console.log(word[i]);
// }

// ---- funciones ----

// function prueba() {
//   console.log("hello world");
// }

// prueba();

// function saludar(nombre) {
//   console.log("hola " + nombre);
// }

// saludar("Socrates");

// function viaje(avion, hotel, comida, varios) {
//   let gastoTotal = avion + hotel + comida + varios;
//   let gastoTotalDiario = gastoTotal / 14;
//   console.log("El costo total de las vacaciones es de: " + gastoTotal);
//   console.log("El costo diario es de: " + gastoTotalDiario);
// }

// viaje(1000, 700, 500, 800);

// function areaConstruccion(largo, ancho) {
//   let area = largo * ancho;
//   return area;
// }

// function precioMtCuadrado(area, precio) {
//   let resultado = precio / area;
//   return resultado;
// }

// let areaTotal = areaConstruccion(100, 90);
// let precioTotal = precioMtCuadrado(areaTotal, 180000);
// console.log(precioTotal);

// Function callback func2(func1)

// setInterval(), ocurre varias veces despues de cierto tiempo, y setTimeout(), ocurre una vez despues de cierto tiempo

//---- Arreglos ----
let arreglo = ["elemento1", "elemento2", "elemento3"];
console.log(arreglo[1]);
