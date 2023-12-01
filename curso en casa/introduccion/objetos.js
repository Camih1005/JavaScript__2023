const personaArreglo = ['carlos',27,'camiloht0918@gmailcom',true,true];

const persona = {nombre: 'Camilo',edad: 27,
 correo: 'camiloht0918@gmail.com',
suscripciones: {web: true,
                correo: true
},
coloresFavoritos: ['negro','rojo'],
saludo: function(){
    alert('hola!');
},
};
console.log(persona.nombre);
console.log(persona['edad']);

const variable = 'coloresFavoritos';
//console.log(persona[variable])

//console.log(persona.suscripciones.correo)
persona.pais = "mexico"; //esto hace que cuando a una variable se le ponga un valor y una propiedad que quieras ejemplo persona.direccion = "cr12 23-35" esto se agrega al final
persona.amor = 'catalina'
persona.oro= '20kl'
persona.oro = '28kl'
console.log(persona)
persona.saludo();