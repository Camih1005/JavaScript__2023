/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
*/

var obtenerNumeroLetras = (nombre) =>{
    var numero = nombre.length;//*.length cuenta cuantos letras hay en un texto
    console.log(`${nombre} tiene ${numero} letras`)

};
obtenerNumeroLetras('Camilo')
