function EspecificacionesDiadema(){
    const article = document.querySelector('.container3')
    const div = document.createElement('div')
    div.innerHTML = '<span style="color:red;">este es el contenido insertado</span>'
    article.insertAdjacentElement('beforeend',div)
}