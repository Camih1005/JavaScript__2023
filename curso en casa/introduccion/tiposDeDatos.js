/* 📌 Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

	null - Valor nulo
	undefined - Valor sin definir
*/

//*CADENA DE TEXTO*//
const nombre = "Carlos";
const parrafo = 'Este es un "parrafo"';//*para poner comillas dentro de texto tiene qyue ser las comillas diferentes "''"
const parrafo2 = 'Este es un\'parrafo\'';

//*CADENA DE NUMEROS*//

const numero = 4;
const numero2 = -4.123;

//*CADENA DE BOLEANOS*//

const usuarioconectado ='true'
const Mayorque  = 3>2

console.log(Mayorque)

//*ARRAYS-ARREGLOS*//

const arreglo = [1, 10, 5, 3];
const arreglo2 = ["hola", 10, true, {propiedad: 'valor'},[1, 2, 3]];
console.log(arreglo);
console.log(arreglo2);

//*OBJETO*//

const persona = {nombre : 'camilo', 
edad: 22,
carro: {marca: 'mazda', color: 'rojo'}}

console.log(persona.carro.color);

//*FUNCION*//

function hola(){
    console.log('hola')
}

hola();
// 📌 Null
// Normalmente lo usamos cuando queremos especificar que un valor sea nulo.
const miVariable = null;

// 📌 Undefined
// Undefined se usa para indicarnos que un valor no esta definido.
const miVariable2 = undefined;