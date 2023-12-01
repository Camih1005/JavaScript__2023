/* 📌 Block Scope / Alcance de tipo bloque
	- Pertenecen las variables declaradas con const o let dentro de un bloque { }
	- Solo podemos acceder a ellas dentro del bloque
*/
 const edad = 19;
 if(edad>=18){
    const accesopermitido = true;
    console.log(accesopermitido)

    if(true){
        console.log(accesopermitido)
    }

    const mifuncion= () =>{
        console.log(accesopermitido)
    }
    mifuncion();
 }
 const accesopermitido = 'si'

 console.log(accesopermitido);
//  console.log(accesopermitido)

if(true){
    var nombre = 'camilo';
    
}
console.log(nombre)
/*solo la variable const y let sirven para un alcance de tipo bloque de resto siempre va a llamarla*/