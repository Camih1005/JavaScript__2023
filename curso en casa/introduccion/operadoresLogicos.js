/* 📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/
const nombre = 'camilo';
const edad= '18';
const tieneentrada = false;
const tienepermiso = true;


//EJEMPLO CON &&

//const permitirAcceso = edad >= 18 && tieneentrada ? 'acceso':'no acceso';


//console.log(permitirAcceso)
//console.log(permitirAcceso)

//* ejemplo #2 CON   OR//

const permitirAcceso = (edad >= 18 && tieneentrada) || (tienepermiso && tieneentrada);
console.log('acceso permitido: ' + permitirAcceso);

//EJEMPLO #3 NOT

const variable = true;
console.log(variable)