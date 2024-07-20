class TransaccionBase {
    constructor( producto, fecha ) {
      this.producto = producto;
      this.fecha = fecha;
    }
  }
  
  class Venta extends TransaccionBase {
    constructor(cantidad, precio) {
      super(producto, fecha);
      this.cantidad = cantidad;
      this.precio = precio;
    }
    
  }
  
 const ventas = [];
  
  // pedir las ventas para registrarlas
  function registrarVenta() {
    const producto = prompt('Por favor ingrese el nombre del producto:');
    const fecha = new Date();
    const cantidad = parseInt(prompt('Ingrese la cantidad:'));
    const precio = parseFloat(prompt('Ingrese el precio unitario:'));
  
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
        const nuevaVenta = new Venta(producto, fecha, cantidad, precio);
        ventas.push(nuevaVenta);
        resolve(nuevaVenta);
      }, 1000); 
    });
  }
  


  // eliminar la venta
  function cancelarVenta() {
    if (ventas.length === 0) {
      alert('No hay ventas para eliminar.');
      return; // Salir de la función si no hay ventas
    }
  
      if (indice >= 0 && indice < ventas.length) {
        ventas.splice(indice, 1);
       alert('Su venta ha sido cancelada exitosamente.');
      } else {
       alert(`El número de venta no está asociado a ninguna venta existente.` );
      }
    }
  
  
  function mostrarVentas() {
    if (ventas.length === 0) {
     alert(`No hay ventas registradas.`);
    } else {
     alert(`Ventas Registradas:`);
      for (let i = 0; i < ventas.length; i++) {
        const venta = ventas[i];
       alert( `Venta #: ${i + 1} Producto: ${venta.producto}, Cantidad: ${venta.cantidad}, Precio: ${venta.precio}`);
      }
    }
  
  }
