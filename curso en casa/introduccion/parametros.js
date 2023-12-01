/*
 - Parametros: los valores especificados en la definición
 - Argumentos: los valores que le pasamos a la función cuando la invocamos.
*/
const saludo =  (nombre = 'Amigo') =>{
    console.log(`Hola ${nombre}!`);
};
saludo('camilo');
saludo('cata');
saludo();   /*Cuando no se le pone ningun texto, sale amigo por que defecto*/


/*
	📌 Multiples parametros
*/

const operacion =(tipo,numero1,numero2) =>{
    // console.log(numero1 + numero2)
    if(tipo=='suma'){
    console.log(numero1+numero2);}
    else if (tipo == 'resta'){
        console.log(numero1-numero2);
    }



}
operacion('suma',5,100);
operacion('resta',20,10)
