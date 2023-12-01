/* 📌 Global Scope o Variables Globales
	- Son las variables declaradas fuera de una funcion.
	- Podemos acceder a ellas desde cualquier parte del código.
	- Podemos usar const, let y var.
*/

var nombre ='camilo';
console.log(nombre)

const saludo = () => {
    console.log('hola ' + nombre);

    nombre = 'arturo'
    console.log('el nuevo nombre es '+ nombre)

};
saludo()
