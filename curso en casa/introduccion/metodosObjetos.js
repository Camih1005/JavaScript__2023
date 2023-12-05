const usuario = {
	nombre: 'Carlos',
	edad: 27,
	amigos: ['Alejandro', 'Cesar', 'Manuel'],
    saludo: () => {
    console.log('Hola');
    }
};

/*
	📌 Métodos propios
	Los objetos pueden tener métodos personalizados.
*/

usuario.saludo();

/*
	📌 Object.keys()
	Nos devuelve un arreglo con las llaves (keys) del objeto.
*/

const resultados = Object.keys(usuario)
alert(resultados)

/*
	📌 Object.values()
	Nos devuelve un arreglo con los valores (values) del objeto.
*/

const resultadoss = Object.values(usuario)
console.log(resultadoss)

/*
	📌 Object.entries()
	Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const res = Object.entries(usuario)
console.log(res)

console.log(`El objeto tiene ${res.length} propiedades`);