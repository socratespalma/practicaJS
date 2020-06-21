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
// let arreglo = ["elemento1", "elemento2", "elemento3"];
// console.log(arreglo[1]);
// console.log(arreglo.length);

// para incializar arreglos vacios
// var amigos = [];
// amigos = [49, true, null, "socrates"];
// los arreglos pueden tener diferentes tipos de datos
// console.log(amigos);
// amigos.push("Sam"); agrega elemento al final
// amigos.push("Sammy");
// amigos.push("Sammy2");
// amigos.pop(); elimina el ultimo elemento
// amigos.unshift("Sam");

// agrega elemento al inicio del arreglo
// amigos.shift("Sam"); elimina el primer elemento de un arreglo
// amigos.splice(1, 1);
// elimina un elemento desde cierto indice hasta una cierta cantidad

// console.log(amigos);
// console.log(amigos.indexOf("Sam"));
// imprimir indice de algun elemento dentro del arreglo
// amigos.slice() para copiar partes de un arreglo o un arreglo entero
// Iteracion de arreglos
// ya sea a traves de un ciclo for o un foreach

// ---- Objetos ----
// Arreglos y objetos anidados
// let personas = [
//   {
//     nombre: "Harry",
//     edad: 24,
//     padres: [
//       { nombre: "asdfg", edad: 49 },
//       { nombre: "qwerty", edad: 52 },
//     ],
//   },
//   { nombre: "Fernando", edad: 23 },
// ];
// console.log(personas[0].padres[1].edad);
// usar notacion de corchetes cuando la propiedad inicie con un numero, cuando tenga varias palabras o cuando el nombre de la propiedad es un valor de una variable

// ---- Manipulacion del DOM ----
// DOM es la interfaz entre JS y HTML + CSS
// var h1 = document.querySelector("h1");
// h1.style.color = "pink";

// var body = document.querySelector("body");
// var esNaranja = false;

// setInterval(function () {
//   if (esNaranja) {
//     body.style.background = "white";
//   } else {
//     body.style.background = "orange";
//   }
//   esNaranja = !esNaranja;
// }, 1000);

// document.getElementsByName("name atribute");
// document.getElementById("id atribute");
// document.getElementsByClassName("class atribute");
// document.getElementsByTagName("tag atribute");
// document.querySelector("css selector"); devuelve el primer elemento con el nombre del selector que coincida
// document.querySelectorAll("css selector"); devuelve una lista de elementos que coincidan con el nombre del selector

let p = document.getElementById("parrafo1");
p.classList.add("blue");
// agrega clase css blue al elemento con id parrafo1
p.textContent = "Hola soy un estudiante de ingenieria de sistemas";
// modifica el contenido del texto
p.innerHTML;
// devuelve el contenido html inicial

let titulo = document.getElementById("titulo1");
// titulo.classList.add("blue"); añadir clase css a un elemento
// titulo.classList.remove("blue");
// eliminar clase css a un elemento
// titulo.classList.toggle("blue");
// Cambiar (añadir o eliminar) clase css
// p.style.color = "blue";
// p.style.marginTop = "30px";
// p.style.background = "pink";

// propiedad style solo se usa con el objetivo de hacer pruebas unitarias

let enlace = document.querySelector("a");
enlace.getAttribute("href");
// obtiene atributo
enlace.setAttribute("href", "https://www.reddit.com/");
// cambia atributos en un elemento
let imagen = document.querySelector("img");

imagen.setAttribute("src", "../IMG/MarketingDigital.jpg");
// cambia imagen por otra

let tarea = document.createElement("li");
// creando elemento li
tarea.textContent = "Tarea 3";
// asignandole texto
let list = document.getElementById("lista");
// tomar elemento ul
list.appendChild(tarea);
// añadirle el elemento li
// si se desea agregar una tarea al inicio
let tarea2 = document.createElement("li");
// crear otro elemento li
tarea2.textContent = "Tarea 4";
// asignarle nombre
let primerElemento = list.children[0];
// darle la posicion inicial del elemento lista
list.insertBefore(tarea2, primerElemento);
// insertar en lista

// si se desea eliminar una tarea de la lista
let elementoElim = list.children[2];
// asignar tarea a eliminar (tarea 2)
elementoElim.remove();
// eliminarla

let btn = document.querySelector(".btn");

// Eventos

btn.addEventListener("click", function () {
  titulo.textContent = "Se ha hecho click";
});

// o declarar la funcion de la siguiente manera

btn.addEventListener("click", clickNuevo);

function clickNuevo() {
  enlace.textContent = "Se ha hecho click nuevamente";
}

let inp = document.querySelectorAll("input");

for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("keypress", function (event) {
    if (event.which === 13) {
      enlace.textContent = this.value;
    }
  });
}

enlace.addEventListener("click", function (event) {
  event.preventDefault();
  alert("No funciona el link?");
});
// la propiedad which es para saber que tecla fue presionada

// inp.addEventListener("keypress", presionar);

// function presionar() {
//   enlace.textContent = inp.value;
// }

// si se desea se puede poner el evento separado como keydown y keyup

// btn.onclick = function () {
//   console.log("has dado un click");
// };
// btn.onmouseover = function () {
//   console.log("El puntero esta encima");
// };

// Reto del DOM avanzado

// let eventosMDN = document.querySelectorAll("code");
// let c=0;
// for (let i = 0; i < eventosMDN.length; i++) {
//     c++;
// }
// console.log(c);

// respuesta: 699 eventos
