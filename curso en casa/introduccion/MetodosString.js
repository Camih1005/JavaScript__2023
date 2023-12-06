/*
	📌 .length - Devuelve el número de caracteres de una cadena de texto.
*/

const texto = 'Hola yo soy camilo'
console.log(texto.length)

/*
	📌 .indexOf() .lastIndexOf() - Devuelve el index del primer/último caracter especificado.
*/

const nombre = 'Camilo mañana tiene clase, que haremos ahora'

console.log(nombre.indexOf('e'))
console.log(nombre.lastIndexOf('e'))


/*
	📌 .slice() - Devuelve un fragmento de una cadena de texto.
	1er parametro - index desde donde queremos cortar
	2do parametro (opcional) - index hasta donde queremos cortar
*/

const index = nombre.indexOf('t')
const lastIndex = nombre.lastIndexOf('s')
console.log(nombre.slice(index, lastIndex +1));

/*
	📌 .replace() - Devuelve una cadena de texto en donde remplaza un valor por otro.
	1er parametro - el texto que queremos remplazar
	2do parametro - el texto que queremos poner
*/
console.log(nombre.replace('Camilo', 'Cata'))

/*
	📌 .split() - Convierte una cadena de texto en un arreglo.
	Tenemos que especificar donde cortar cada elemento.

	1er parametro - el caracter que funcionara como separador.
*/
const clase = 'Camilo mañana tiene clase, que haremos ahora'
let sep = clase.split(' ')
console.log(sep)

/*
	📌 .toUpperCase() .toLowerCase()
	Devuelve una cadena de texto de puras minisculas/mayusculas.
*/

console.log(texto.toUpperCase())
console.log(texto.toLowerCase())