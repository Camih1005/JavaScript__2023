const colores =['rojo','verde','azul'];
console.log(colores)
/* 
	📌 .length 
	(propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colores.length);

/*
	📌 .toString() 
	Nos permite transformar un arreglo a una cadena de texto.
	Por ejemplo para poder mostrarlo en el navegador.
*/

// document.body.innerHTML = colores.toString()

/*
	📌 .join()
	Nos permite transformar un arreglo a una cadena de texto y separar cada elemento. 
*/

console.log(colores.join('._.'));


/*
	📌 .sort()
	Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
*/

const letras = ['c','d','a','h'];
console.log(letras.sort());

const numero= [1,3,8,5,4,9,8];
console.log(numero.sort());

/*
	📌 .reverse()
	Nos permite ordenar un arreglo de forma descendente. 
*/

console.log(letras.reverse())
console.log(numero.reverse())


/*
	📌 .concat()
	Nos permite juntar dos arreglos en uno solo. 
*/

const arreglo1 = [1,2,3];
const arreglo2 = ['A','B','C'];
const arreglo3 = arreglo1.concat(arreglo2)
console.log(arreglo3)

/* 
	📌 .push()
	Nos permite agregar un elemento al final de un arreglo.
*/

colores.push('rojo')
console.log(colores)

/*
	📌 .pop()
	Nos permite eliminar el ultimo elemento de un arrreglo. 
*/

colores.pop('rojo')
console.log(colores)

/* 
	📌 .shift()
	Elimina el primer elemento de un arreglo y recorre los elementos.
*/

const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
const diaeliminado = dias.shift()
console.log(dias)

/*
	📌 .unshift()
	Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

dias.unshift(' Camilo')
console.log(dias)

/* 
	📌 .splice()
	Nos permite insertar elementos a un arreglo donde le especifiquemos.
	- 1er parametro - Posición donde queremos comenzar a insertar los elementos.
	- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada.
	- Resto de parametros - Los elementos a insertar.
*/

const amigos = ['Kevin','Carlos','Nicolas']
amigos.splice(1,2,'Cristian', 'Karol')
console.log(amigos)


/* 📌 .slice()
	Nos permite copiar una parte de un arreglo a otro.
	- 1er parametro - Posición desde donde queremos copiar.
	- 2do parametro - Hasta antes de que elemento copiar.
*/

const frutas =['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melon'];

const frutasfavoritas = frutas.slice(1,5)
console.log(frutasfavoritas)