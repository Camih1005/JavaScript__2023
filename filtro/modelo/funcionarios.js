function bono(){

    const cedula = document.getElementById('cedula').value;
    const ids = localStorage.getItem('usuario');
    const parse = JSON.parse(ids);
    fetch(`http://localhost:4001/registros/${parse}`,
    {
    method: 'GET',
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
  .then(response => response.json())
  .then(json => console.log(json))
  if(parse.compras >= 10){
    alert('tienes el bono')
  }
  else if(parse === ''){
    alert('no hay ningun usuario')
  }
  else{
    alert('pailas no tiene un bono')
  }
}