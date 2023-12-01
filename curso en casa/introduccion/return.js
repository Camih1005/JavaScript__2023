const operacion =(tipo,numero1,numero2) =>{
    let resultado;


    if(tipo=='suma'){
        resultado = numero1+numero2
    }
    else if (tipo == 'resta'){
        resultado = numero1-numero2
    }
    return resultado;
};
const mivariable = operacion('suma', 110,100);
console.log(mivariable)

