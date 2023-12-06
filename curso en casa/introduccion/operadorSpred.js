/*
	📌 Operador Spread
	Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas = ['Manzana','Pera','Piña','Melon','Uvas']
const comidafavorita = ['Pizza','Sushi', ... frutas]

console.log(comidafavorita)


 const datosLogin = {
 	nombre: 'Arturo',
 	correo: 'correo@correo.com',
 	password: '123',
 };

 const usuario = {
    nombre: 'carlos',
    edad : 28,
    ...datosLogin
 }
 console.log(usuario)

 /*
	📌 Parametro Rest
	Permite que una funcion contenga un numero indefinido de argumentos.
	Los argumentos extra que encuentre los convertira en un arreglo.
*/

const regisUsuario= (nombre,correo,...datosadicionales) =>{
    console.log(nombre,correo,datosadicionales)
}

regisUsuario('carlos', 'camiloht0asd',288,'colombia')

/*
	📌 Destructuración de objetos
	Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/

 const amigos = ['kevin','carlos','cristian']
//  const primeramigo = amigos[0]
//  const srimeramigo = amigos[2]
//  console.log(primeramigo,srimeramigo)
const [primeramigo,segundoamigo,terceramigo] = amigos
console.log(terceramigo)

const persona = {
	nombre: 'Carlos',
	edad: 27,
	pais: 'México',
};

const {nombre,pais,edad} = persona
console.log(nombre,edad,pais)

const mostrarEdad = (nombre,edad) => {
    console.log(`${nombre} tiene ${edad} años`)
}
mostrarEdad(nombre,edad)