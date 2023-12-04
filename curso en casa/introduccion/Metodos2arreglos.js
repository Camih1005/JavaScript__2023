/* 📌 .indexOf()
	Obtenemos el primer index de un elemento.
	Si no hay elemento nos retorna -1
    busca en que numero esta ubicado cierto nombre al seleccionarlo
*/

const nombres = ['Carlos', 'Rafael', 'Estefania', 'Rodrigo', 'Rafael', 'Gema', 'Diana', 'Sara'];

// console.log (nombres.indexOf('Rafael'));

/* 
	📌 .lastIndexOf() 
	Obtenemos el último index de un elemento repetido.
*/

// console.log(nombres.lastIndexOf('Rafael'))

/* 	
	📌 .forEach()
	Nos permite ejecutar una funcion por cada elemento
    caca es la funcion o el nombre que se le da, y ds(puede ser cualquier nombre) es el segundo parametro y solo sirve para saber las pocisiones
*/

// nombres.forEach((caca, ds) => {
//     console.log(`Hola ${caca} (${ds})`)
// })

/* 
	📌 .find()
	Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos.
*/

// const resultado = nombres.find((nombre) => {
//     if(nombre[0] === 'R'){

    
//     return nombre;
//     }
// })
// console.log(resultado)

/* 
	📌 .map()
	Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
	en base a los resultados de esa función.
*/

const nombresMayusculas = nombres.map ((nombres) =>{return nombres.toUpperCase();
});

console.log(nombresMayusculas)

/* 📌 .filter()
	Nos permite ejecutar una función por cada elemento 
	y luego crear un arreglo en base a los resultados de esa función. 
*/

const nombres4letras = nombres.filter((nombres) => {
	return
	 nombres;
})