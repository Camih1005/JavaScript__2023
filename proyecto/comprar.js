const listPro = {};

const productos = [
  { id: 'tecladosP', tipo: 'teclados', elemento: null },
  { id: 'mouseP', tipo: 'mouse', elemento: null },
  { id: 'audioP', tipo: 'audio', elemento: null },
  { id: 'padsP', tipo: 'pads', elemento: null }
];

const URL_BASE = 'http://localhost:3000';
const PRODUCTOS_ENDPOINT = '/productos'; // Endpoint general para productos

console.log(productos);

function cargarProductos() {
  productos.forEach(producto => {
    producto.elemento = document.getElementById(producto.id);

    fetch(`${URL_BASE}${PRODUCTOS_ENDPOINT}/${producto.tipo}`)
      .then(respuesta => respuesta.json())
      .then(respuesta => {
        respuesta.forEach(item => {
          const agg = document.createElement('div');
          agg.innerHTML = `
            <h1>${item.nombre}</h1>
            <img src="${item.img}" alt="${item.nombre}">
            <p>Precio: ${item.precio}</p>
            <div class ='ventaBoton'>
              <button id='botonAgregar' class='agregarAlcarro' data-precio='${item.precio}'>Agregar</button><p>0</p>
            </div>
          `;
          producto.elemento.appendChild(agg);

          const botonAgregar = agg.querySelector('.agregarAlcarro');
          botonAgregar.addEventListener('click', function () {
            const botonCanasta = document.getElementById('CarroCompras');
            botonCanasta.style.backgroundColor = 'rgb(58, 248, 0)';
            const precio = item.precio;
            const nombre = item.nombre;
            agregarAlCarrito(precio);

            if (listPro[nombre]) {
              listPro[nombre] += 1;
            } else {
              listPro[nombre] = 1;
            }

            console.log(listPro);
          });
        });
      })
      .catch(error => console.error(`Error al cargar productos de tipo ${producto.tipo}:`, error));
  });
}

cargarProductos();

const carritoTotal = document.getElementById('totalProductos');
const nombrePro = document.getElementById('ProductoFinal');
let totalCarrito = 0;
let totalnombres = 0;
////

function agregarAlCarrito(precio) {
  totalCarrito += precio;
}
////
function desplegarTotalFac() {
  const desplegar = document.querySelector('#fullScreen');
  desplegar.innerHTML = `<div class='' id="contCarrito">
      <section class="animate__animated animate__fadeInDown" id="contDentroCarrito">
        <h1>Venta final</h1>
        <p>Productos</p>
        ${Object.entries(listPro).map(([nombreProducto, cantidad]) => `<p>${nombreProducto}: ${cantidad}</p>`).join('')}
        <p>Total a pagar</p>
        <p id="totalProductos">${totalCarrito}</p>
        <button id="btnPagar">Pagar</button>
        <button id="btnSeguirMirando">Seguir mirando</button>
      </section>
    </div>`
  console.log(totalCarrito);

  const desplegarcarrito = document.getElementById('contCarrito');
  const btnSeguir = document.getElementById('btnSeguirMirando');
  const btnPagar = document.getElementById('btnPagar');
  const finalCompra = document.getElementById('FinalizacionCompra')

  btnSeguir.addEventListener('click', () => {
    desplegarcarrito.style.display = desplegarcarrito.style.display === 'none' ? 'flex' : 'none';
})

  btnPagar.addEventListener('click',()=>{
    if(totalCarrito <= 0){
      alert('no tienes productos en el carrito')
    }
    else{
    finalCompra.classList.toggle('nuevaClase');
    desplegarcarrito.style.display = desplegarcarrito.style.display === 'none' ? 'flex' : 'none';
    finalCompra.innerHTML = `<div id="ExitoCompra">
    <section class="animate__animated animate__fadeInDown" id="contDentroExit">
      <h1>Compra exitosa</h1>
      <p>Espero disfrutes al maximo nuestros productos</p>
      <button id="botonExit">Salir</button>
    </section>
  </div>`
  }})
  
  const exitBot = document.getElementById('botonExit')
  exitBot.addEventListener('click',()=>{
    finalCompra.classList.toggle('nuevaClase');
  })


;
}









///

