exportar

const URL_BASE = 'http://localhost:3000';
const USUARIOS_ENDPOINT = '/usuarios';
const CARRITO_ENDPOINT = '/carrito';

document.addEventListener("DOMContentLoaded", function () {
  // Resto de tu código aquí

  // Verificar si el usuario ya tiene una sesión activa
  const usuarioGuardado = JSON.parse(sessionStorage.getItem('usuario'));
  if (usuarioGuardado) {
    alert(`¡Bienvenido de nuevo, ${usuarioGuardado.nombre}!`);
    // Recuperar información del carrito si existe
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || { total: 0 };
    totalCarrito = carritoGuardado.total;
    carritoTotal.textContent = totalCarrito;
  }
});

// Función para iniciar sesión

function iniciarSesion() {
  const username = document.getElementById('inputIngresar').value;
  const password = document.getElementById('Inputcontraseña').value;

  // Verificar si el usuario existe
  fetch(`${URL_BASE}${USUARIOS_ENDPOINT}?nombre=${username}&contraseña=${password}`)
    .then(respuesta => respuesta.json())
    .then(usuarios => {
      if (usuarios.length > 0) {
        // Usuario válido, iniciar sesión
        const usuario = usuarios[0];
        alert(`¡Bienvenido, ${username}!`);
        // Simulación de inicio de sesión persistente
        sessionStorage.setItem('usuario', JSON.stringify(usuario));
        // Recuperar información del carrito si existe
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || { total: 0 };
        totalCarrito = carritoGuardado.total;
        carritoTotal.textContent = totalCarrito;
      } else {
        // Usuario no encontrado
        alert('Credenciales incorrectas. Intenta de nuevo o regístrate.');
      }
    })
    .catch(error => console.error('Error al iniciar sesión:', error));
}
    



  function registrarUsuario() {
  const newUsername = document.getElementById('inputRegistrar').value;
  const newPassword = document.getElementById('InputcontraseñaR').value;

  // Verificar si el usuario ya existe
  fetch(`${URL_BASE}${USUARIOS_ENDPOINT}?nombre=${newUsername}`)
    .then(respuesta => respuesta.json())
    .then(usuarios => {
      if (usuarios.length > 0) {
        alert('Este nombre de usuario ya está registrado. Por favor, elige otro.');
      } else {
        // Si el usuario no existe, proceder con el registro
        fetch(`${URL_BASE}${USUARIOS_ENDPOINT}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre: newUsername, contraseña: newPassword }),
        })
          .then(respuesta => respuesta.json())
          .then(usuarioRegistrado => {
            // Recuperar el usuario recién registrado
            return fetch(`${URL_BASE}${USUARIOS_ENDPOINT}/${usuarioRegistrado.id}`);
          })
          .then(respuesta => respuesta.json())
          .then(usuario => {
            // Utilizar el nombre de usuario registrado
            alert(`Usuario ${newUsername} registrado con éxito. ¡Ahora puedes iniciar sesión!`);
          })
          .catch(error => console.error('Error al registrar usuario:', error));
      }
    })
    .catch(error => console.error('Error al verificar existencia del usuario:', error));
}

    const ValidarRegistro = document.getElementById('RegistrarUS')
    ValidarRegistro.addEventListener('click',registrarUsuario)


    const CartelR = document.getElementById('contenedorRegistro')

    const loginUsername = document.getElementById('inputIngresar').value;
    const loginPassword = document.getElementById('Inputcontraseña').value;
    

    function RegistrarCartel() {
    CartelR.style.display = (CartelR.style.display === 'none') ? 'flex' : 'none';
    CerrarInicio.style.display = (CerrarInicio.style.display === 'none') ? 'flex' : 'none';
    if(loginUsername=='' && loginPassword == ''){
     CerrarInicio.style.display = (CerrarInicio.style.display === 'none') ? 'flex' : 'none'
    }
    }
   const registrarBoton = document.getElementById('registrarse');
   registrarBoton.addEventListener('click',RegistrarCartel);
    

   
   function CerrarR() {
    CartelR.style.display = (CartelR.style.display === 'none') ? 'flex' : 'none';
}
    

    const cerrarRegistro = document.getElementById('cerrarInicioR')
    cerrarRegistro.addEventListener('click', CerrarR);

    const botonEntendido = document.getElementById('Entendido')
    botonEntendido.addEventListener('click',()=>{
        const InicioExitoso = document.getElementById('InicioCorrecto')
        InicioExitoso.style.display = (InicioExitoso.style.display === 'none') ? 'flex' : 'none'; 
    })
  
    function cambiarcolor(){
        inicioSecion.style.filter = 'invert(0)'
        inicioSecion.style.width = '80px'
        inicioSecion.style.height = '40px'
        inicioSecion.textContent= 'iniciar secion'
        inicioSecion.style.transition = '0.5s ease-out'
        inicioSecion.style.backgroundColor = 'black'
        inicioSecion.style.color = 'white'
        
       

        
    }
    function cambiarcolor2(){
        inicioSecion.style.filter = 'invert(0)'
         inicioSecion.style.width = ''
        inicioSecion.style.height = ''
        inicioSecion.innerHTML= '&#128100'
        inicioSecion.style.transition = '0.5s ease-out'
     
        

    }
   
    const inicioSecion = document.getElementById('botonInicio')

    inicioSecion.addEventListener('mouseover',cambiarcolor)
    inicioSecion.addEventListener('mouseout',cambiarcolor2)

///
    const desplegarInicio = document.getElementById('CartelInicioSecion');

    function AbrirInicio() {
    desplegarInicio.style.display = (desplegarInicio.style.display === 'none') ? 'flex' : 'none';
}

    const inicio = document.getElementById('botonInicio');
    inicio.addEventListener('click', AbrirInicio);


    //cerrar incio

    const CerrarInicio = document.getElementById('CartelInicioSecion');

    function Cerrar() {
        CerrarInicio.style.display = (CerrarInicio.style.display === 'none') ? 'flex' : 'none';
}

    const cerrar = document.getElementById('cerrarInicio');
    cerrar.addEventListener('click', Cerrar);

