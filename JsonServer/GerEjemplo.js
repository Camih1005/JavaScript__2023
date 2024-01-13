// //TRAER

// fetch('http://localhost:3000/trainers',{
//     method: 'GET',
//     headers:{
//         'Content.type': 'aplication/json; charset=UFT-8'
//     },
// })
//   .then((response)=> response.json())
//   .then((json)=> console.log(json))

//   //AGREGAR JSON

//   fetch('http://localhost:3000/trainers?nombres=carlos',{
//     method: 'POST',
//     body:JSON.stringify({
//         'id' :'3',
//         'nombres':'Yulieth',
//         'apellido': 'Rueda',
//         "especialidad":'Fullstack Pyton'
//     }),
//     headers:{
//         'Content.type': 'aplication/json; charset=UFT-8'
//     },
// })
//   .then((response)=> response.json())
//   .then((json)=> console.log(json))
//   .catch(error => console.log('error'+error))

//   //AGREGARLE CAMBIOS AL JSON

//   fetch('http://localhost:3000/trainers/3',{
//     method: 'PUT',
//     body:JSON.stringify({
//         'id' :'3',
//         'nombres':'Yulieth',
//         'apellido': 'Rueda',
//         "especialidad":'Fullstack Pyton',
//         'sexo':'f',
//         'edad':20
//     }),
//     headers:{
//         'Content.type': 'aplication/json; charset=UFT-8'
//     },
// })
//   .then((response)=> response.json())
//   .then((json)=> console.log(json))
//   .catch(error => console.log('error'+error))


//   //MODIFICAR

//   fetch('http://localhost:3000/trainers/3',{
//     method: 'PATCH',
//     body:JSON.stringify({
        
//         "edad":' 15'
//     }),
//     headers:{
//         'Content.type': 'aplication/json; charset=UFT-8'
//     },
// })
//   .then((response)=> response.json())
//   .then((json)=> console.log(json))
//   .catch(error => console.log('error'+error))

//ELIMINAR

fetch('http://localhost:3000/trainers/1',{
    method:'DELETE',
})
.then((response )=>response.json())
.then((json)=>console.log(json))
.catch(error => console.log('error' + error))