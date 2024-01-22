 function generar(n){
     return Array(n)
     .fill('h'.repeat(n))
     .join('\n')
 }
 console.log(generar(3))