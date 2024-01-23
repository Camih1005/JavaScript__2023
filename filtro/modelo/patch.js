async function checkOut(aggNew, productosVendidos) {
    try {
      const response = await fetch(`http://localhost:3000/usuarios/${aggNew.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          compra: [...aggNew.historial, { productos: productosVendidos, fecha: new Date() }],
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