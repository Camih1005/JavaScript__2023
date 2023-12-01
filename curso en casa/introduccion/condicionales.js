/*
	📌 Operadores de Comparación:
	==		Igual que
	===		Igual en valor y tipo de valor
	!=		Diferente
	!==		Diferente en valor y diferente en tipo
	>		Mayor que
	<		Menor que
	>=		Mayor o igual que
	<=		Menor o igual que
	?		Operador ternario

	📌 Operadores Lógicos 
	&& 	And
	||	OR
	! 	NOT
*/

/*if(true){
    /*si es true se ejecuta codigo aca

}*/


/*ejemplo 1*/
/*const usuario = {
    edad : 17,
    pais :'mexico',
    ticket: true,

};

if(usuario.edad > 17){
console.log('El usuario es mayor de edad, tiene acceso autorizado, siga:')
}
else{
    console.log('el usuario no puede ingresar')
}

/*ëjemplo 2*/

/*const usuario = {
    edad : 18,
    pais :'mexico',
    ticket: false,

};
if (usuario.edad >= 18 && usuario.ticket == true){
    console.log('El usuario tiene acceso permitido')
}else{
    console.log('El usuario no tiene ingreso')
}*/


/*EJEMPLO 3 ANIDADOS*/

const usuario = {
    edad : 16,
    pais :'mexico',
    ticket: true,
};

if(usuario.edad >=18){
    if (usuario.ticket) {
        console.log('El usuario tiene acceso permitido(es mayor y tiene ticket)')
    }else{
        console.log('El usuarios es mayor de edad pero no tiene ticket')
    };

}
else{
    console.log('el usuario es menor de edad')
}