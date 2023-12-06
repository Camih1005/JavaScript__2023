/*
	📌 .toString() convierte un numero en texto
*/

const numero = 10
console.log(numero, typeof numero);

const texto = numero.toString()
console.log(texto, typeof texto)

/*
	📌 .toFixed()
	Permite obtener un numero con la cantidad de
	 decimales especificados
*/

const numeroPi = 3.1415

console.log(numeroPi.toFixed(2))

/*
	📌 parseInt()
	Intenta transformar un valor a un entero.
*/

// const numero1 = parseInt(prompt('Dijite un numero 1'))
// const numero2 = parseInt(prompt('Dijite un numero 2'))
// console.log(numero1 + numero2)

// //📌 .parseFloat()
// //Intenta transformar un valor a un numero con decimales.
// */
//  const numero01 = parseFloat(prompt('Escribe un numero'));
//  const numero02 = parseFloat(prompt('Escribe un numero'));
//  console.log(numero1 + numero2);

/*
	📌 Math.random()
	Genera un numero al azar entre 0 y 1
*/

const numeros = Math.random()
console.log(numeros)

/*
	📌 Math.floor()
	Redondea hacia abajo un numero.
*/

console.log(Math.floor('10.1'))

/*
	📌 Math.ceil()
	Redondea hacia arriba un numero.
*/
console.log(Math.ceil('10.1'))

/*
	📌 Math.round()
	Redondea hacia el entero mas cercano
*/
console.log(Math.round('8.1'))
console.log(Math.round('9.9'))
/*
	📌 Ejemplo de numero al azar de 0 a 100
*/

const numAzar = Math.random()
console.log(Math.floor(numAzar * 101)) 
