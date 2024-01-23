async function checkOut(aggNew, compras) {
    try {
      const response = await fetch(`http://localhost:4001/usuarios/${aggNew.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compra: [...aggNew.compra, {comprarrrr : '60ml'}],
        }),
      });
  
      if (response.ok) {
        console.log('Datos actualizados correctamente en el servidor.');
        localStorage.setItem('usuario', JSON.stringify(aggNew));
  
      
      } else {
        console.error('Error en la respuesta del servidor:', response.status);
      }
    } catch (error) {
      console.error('Error en la solicitud PATCH:', error);
    }
  }

///////////////agregar productos//////

function productos(){

 

  fetch(`http://localhost:4001/perfumes`,
  {
  method: 'GET',
  headers: {
      'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(perfumes => {
  perfumes.forEach(item => {
    const pro = document.getElementById('productos')
    const par = JSON.stringify(perfumes)
  console.log(par)
  pro.innerHTML = `<div>
                  <p>perfume: ${item.name} marca :${item.marca} </p>
                
                  </div>`;

})
  });
  


}
productos()


////////////////////

function ingresarUsuario() {
    const username = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    
    
    fetch(`http://localhost:4001/registros?nombre=${username}&contraseña=${cedula}`)
    .then(respuesta => respuesta.json())
    .then(usuarios => {
    if (usuarios.length > 0) {
      const usuario = usuarios[0];
      alert(`${username} en sesion`);
      const usu = document.getElementById('ususu')
      usu.innerHTML = `nombre`
    
      localStorage.setItem('usuario', JSON.stringify(usuario));
      const agregar_jsonUs = localStorage.getItem('usuario');
      const aggNew = JSON.parse(agregar_jsonUs);
      aggNew.compras.push({comprarrrr: '60ml'});
    
    localStorage.setItem('usuario', JSON.stringify(aggNew));
        const compras = '1'
    checkOut(aggNew, compras);
  
    

    } else {
    
      alert('Credenciales incorrectas. Intenta de nuevo o regístrate.');
    }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
    }
    const botonIniciarSesion = document.getElementById('BotonVer')
    botonIniciarSesion.addEventListener('click',ingresarUsuario)


    /////////////////////////////////////////////////////////////////////
    
    
    function registrarUsuario(event) {
    const newUsername = document.getElementById('Nomregistrar').value;
    const cedula = document.getElementById('cedularegistro').value;
    
    
    fetch(`http://localhost:4001/usuarios?nombre=${newUsername}`)
    .then(respuesta => respuesta.json())
    .then(usuarios => {
    if (usuarios.length > 0) {
      alert('Este nombre de usuario ya está registrado');
    }
    else if(newUsername.length <= 3){
        alert('el nombre de usuario debe ser mayor a 4 palabras ')
    }
    else if(cedula.length < 7){
        alert('la cedula debe ser de 6 digitos')
    }
    else {
    
      fetch(`http://localhost:4001/registros`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id: cedula, nombre: newUsername, contraseña: cedula,fecha: new Date(),compras : 1}),
      })
        .then(respuesta => respuesta.json())
        .then(usuarioRegistrado => {
    
          return fetch(`http://localhost:4001/registros/${usuarioRegistrado.id}`);
        })
        .then(respuesta => respuesta.json())
        .then(usuario => {
          alert(`Nuevo usuario registrado ${newUsername}`);
    
        })
        .catch(error => console.error('Error al registrar usuario:', error));
    }
    })
    .catch(error => alert('Error al verificar existencia del usuario:', error));
    event.preventDefault()
    }
    const botonIngreso = document.getElementById('RegistrarBoton')
    botonIngreso.addEventListener('click',registrarUsuario)


    function cerrar(){
        
        localStorage.clear('usuario')
        alert('sesion usuario retirado')
        const ses = document.getElementById('UsuarioIn')
        ses.document.style.display = 'none'

    }
    ////////////////////////////////
    const cerrarS = document.getElementById('cerrar')
    cerrarS.addEventListener('click',cerrar)

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

function historial(){
  const ids = localStorage.getItem('usuario')
  const histori = document.getElementById('historialDiv')
const parse = JSON.parse(ids)
if(!localStorage.getItem('usuario')){
  alert('No hay ningun usuario en linea')
}else{
  histori.innerHTML = `nombre : ${parse.nombre} <br> 
  cedula: ${parse.id} <br>
  compras : ${parse.compras} `
}


}
const histo = document.getElementById('historial')
histo.addEventListener('click',historial)

//////////
const bonos = document.getElementById('bono')
bonos.addEventListener('click',bono)
const ids = localStorage.getItem('usuario')
const parse = JSON.parse(ids)

