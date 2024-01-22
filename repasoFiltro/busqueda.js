document.addEventListener('DOMContentLoaded', function () {
    const formularioBusqueda = document.getElementById('formularioBusqueda');
    const resultadoContainer = document.getElementById('p');

    formularioBusqueda.addEventListener('submit', function (event) {
        event.preventDefault();

        const checkboxAutos = document.getElementById('busquedaInputAutos');
        const checkboxCamionetas = document.getElementById('busquedaInputCamionetas');

        if (!checkboxAutos || !checkboxCamionetas) {
            console.error('No se encontraron los checkboxes');
            return;
        }

        const mostrarAutos = checkboxAutos.checked;
        const mostrarCamionetas = checkboxCamionetas.checked;

        const tiposVehiculo = [];

        if (mostrarAutos) {
            tiposVehiculo.push('Autos');
        }

        if (mostrarCamionetas) {
            tiposVehiculo.push('Camionetas');
        }

        if (tiposVehiculo.length === 0) {
            console.log('Selecciona al menos un tipo de vehículo');
            return;
        }

        const value = tiposVehiculo.join(',');

        fetch(`http://localhost:3000/${value}`)
            .then(response => response.json())
            .then(data => {
                // Limpia el contenido anterior
                resultadoContainer.innerHTML = '';

                // Itera sobre las propiedades numeradas (0, 1, 2, ...)
                for (const tipoVehiculo in data) {
                    if (data.hasOwnProperty(tipoVehiculo) && tiposVehiculo.includes(tipoVehiculo)) {
                        const vehiculos = data[tipoVehiculo];

                        // Verifica si vehiculos es un array antes de usar forEach
                        if (Array.isArray(vehiculos)) {
                            vehiculos.forEach(vehiculo => {
                                const elemento = document.createElement('p');
                                elemento.textContent = `${tipoVehiculo} - ${vehiculo.marca} ${vehiculo.modelo} (${vehiculo.año}) - ${vehiculo.kilometraje} km`;
                                resultadoContainer.appendChild(elemento);
                            });
                        } else {
                            console.error(`Los datos para ${tipoVehiculo} no son un array.`, vehiculos);
                        }
                    }
                }
            })
            .catch(error => {
                console.error('Error al buscar:', error);
            });
    });
});
console.log(`Solicitud a: http://localhost:3000/${value}`);