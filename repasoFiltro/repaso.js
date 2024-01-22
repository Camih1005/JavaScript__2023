const numeros = [1,2,3,4,5,6]

//MAP me devuelve otro array con la funcion que le quisieramos poner
    const MAP = numeros.map(n => n*2)
    console.log(MAP)

//filtrer filtra como t quieras

const filtrar = numeros.filter(n => n % 2 == 0)
console.log('numeros pares ' + filtrar)

// find me devuelve lo que busquemos
const find = numeros.find(n => n === 3 )
console.log(find)
//// findIndex devuelve la posicion de el find
const findI = numeros.findIndex(n => n == 5)
console.log(findI)

/// fill si esta vacio agrega lo que quieras ponerle 
const vacio = ['','',''].fill('caca')
console.log(vacio)
//every si todo esta en 3 sale false si no  sale true
const nombre = ['camilo','camilo','camilo']
const everyy = nombre.every(n => n === 'camilo')
const everyyy = numeros.every(n => n === 1)

console.log(everyy) //true
console.log(everyyy)//false

//somee
const nombres = ['camilo','cata','camilo']
const somee = nombre.some(n=> n === 'cata')
console.log(somee)


//slice reduce un array, donde empieza y donde termina

const slicess = numeros.slice(0,3)
console.log('slice: '+ slicess )

//splice

const splicess = numeros.splice(3)
console.log('splices: '+ splicess)
console.log('splices si transforma el array, slice no ' +numeros)

//reduce recibe dos parametros el acumulador y los numeros, y los va reduciendo dependiendo

const sumar = [1, 2, 3, 4, 5, 10];3,6,9,12,25,100
const reducee = sumar.reduce((a, n) => a * n, 3);
console.log('reduce: ' + reducee);

//sort

const desorden = [3,5,2,1,6,7,5,6,7,9,8]
const ordenarM = desorden.sort()
const ordenarI = desorden.toSorted()
console.log('numeros toSorted devuelve un array inmutable: '+ ordenarI)
console.log('este sort devuelve un nuevo array'+ ordenarM)


//object.entries convertir un objeto en arrays de arrays

const coche = {
    marca : 'tesla',
    año : 2023,
    modelo : 'model X'
}
const caca = Object.entries(coche)
console.log(delete coche.marca)
console.log(coche)
coche['marca']='TESLA' //agrega al final 
console.log(coche)
const obtener = coche['marca']
console.log(obtener)

////
