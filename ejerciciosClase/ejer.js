
const IDS = [
    {"id": "1"},
    {"id": "1"},
    {"id": "2"},
    {'id':'1'}
];

function crear() {
    const resultado = {};

    for (let i = 0; i < IDS.length; i++) {
        const elemento = IDS[i];
        const id = elemento.id;
        if (!resultado[id]) {
            
            resultado[id] = [elemento];
        } else {
         
            resultado[id].push(elemento);
        }
    }

    console.log(resultado);
}

crear();

// // let caca = [IDS]
// // console.log(Object.entries(IDS))
// // console.log(caca)

// // function generar(n){
// //     return Array(n)
// //     .fill('C'.repeat(n))
// //     .join('\n')
// // }
// // console.log(generar(2))

// const array = [
//     [1, 2, 3],
//     [1, 3, 5],
//     [1, 5, 9]
// ];

// const fn = function(list) {
//     return String(list[0]);
// };


// const resultado = {};
// for (let i = 0; i < array.length; i++) {
//     resultado[String(i + 1)] = [fn(array[i])];
// }

// console.log(resultado);

// const arr = [
//     {"id": "1"},
//     {"id": "1"},
//     {"id": "2"},
//     {'id':'3'}
// ];


// function group_By (arr, fnct) {
//     let obj = {};
    
//     arr.forEach( element => {
//         if (fnct(element) in obj) {
            
//             obj[`${fnct(element)}`].push(element);
            
//         } else {
//             obj[`${fnct(element)}`] = [element];
            
//         }

        
//     })

//     console.log(obj)
// }
