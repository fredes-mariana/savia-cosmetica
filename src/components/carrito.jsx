
import { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

function Carrito({ cerrarCarrito }) {
  const {
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito
} = useContext(CarritoContext);
const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
 const [mostrarCompra, setMostrarCompra] = useState(false);
const [productoAEliminar, setProductoAEliminar] = useState(null);
 const [cambioCantidad, setCambioCantidad] = useState(null);
const total = carrito.reduce(
    (acumulador, producto) =>
      acumulador + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="carrito-overlay">
      <aside className="carrito-panel">

        <div className="carrito-header">
          <h2>Mi carrito</h2>

          <button onClick={cerrarCarrito}>
            ✕
          </button>
        </div>

        <div className="carrito-productos">
          {carrito.length === 0 ? (
            <p>Tu carrito está vacío 🌿</p>
          ) : (
            carrito.map(producto => (
              <div
                className="carrito-item"
                key={producto.id}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                />

<div className="carrito-item-info">
  <h3>{producto.nombre}</h3>

  <div className="carrito-cantidad">
    <button
      onClick={() =>
  setCambioCantidad({
    producto,
    accion: 'disminuir'
  })
}
      disabled={producto.cantidad === 1}
    >
      −
    </button>

    <span>{producto.cantidad}</span>

    <button
      onClick={() =>setCambioCantidad({
    producto,
    accion: 'aumentar'
  })
}
    >
      +
    </button>
  </div>

  <p>
    ${(producto.precio * producto.cantidad).toLocaleString('es-AR')}
  </p>

  <button
  className="carrito-eliminar"
  onClick={() => setProductoAEliminar(producto)}
>
  Eliminar
</button>
</div>

              </div>
            ))
          )}
        </div>

        
<div className="carrito-footer">
  <h3>Total: ${total.toLocaleString('es-AR')}</h3>

  {carrito.length > 0 && (
    <button
  className="carrito-vaciar"
  onClick={() => setMostrarConfirmacion(true)}
>
  Vaciar carrito
</button>
  )}

  <button
  className="carrito-finalizar"
  disabled={carrito.length === 0}
  onClick={() => setMostrarCompra(true)}
>
  Finalizar compra
</button>
</div>


      </aside>

{mostrarConfirmacion && (
  <div className="modal-overlay">
    <div
      className="modal-contenido"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-vaciar"
    >
      <h2 id="titulo-vaciar">¿Vaciar carrito?</h2>

      <p>
        Se eliminarán todos los productos de tu carrito.
        ¿Querés continuar?
      </p>

      <div className="modal-botones">
        <button
          className="modal-cancelar"
          onClick={() => setMostrarConfirmacion(false)}
        >
          Cancelar
        </button>

        <button
          className="modal-confirmar"
          onClick={() => {
            vaciarCarrito();
            setMostrarConfirmacion(false);
          }}
        >
          Sí, vaciar
        </button>
      </div>
    </div>
  </div>
)}
{mostrarCompra && (
  <div className="modal-overlay">
    <div
      className="modal-contenido"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-compra"
    >
      <h2 id="titulo-compra">Confirmar compra 🌿</h2>

      <p>
        Estás por finalizar tu compra en SAVIA.
      </p>

      <h3>
        Total: ${total.toLocaleString('es-AR')}
      </h3>

      <div className="modal-botones">
        <button
          className="modal-cancelar"
          onClick={() => setMostrarCompra(false)}
        >
          Cancelar
        </button>

        <button
          className="modal-confirmar"
          onClick={() => {
            vaciarCarrito();
            setMostrarCompra(false);
            cerrarCarrito();
            alert('¡Gracias por tu compra en SAVIA! 🌿');
          }}
        >
          Confirmar compra
        </button>
      </div>
    </div>
  </div>
)}

{productoAEliminar && (
  <div className="modal-overlay">
    <div
      className="modal-contenido"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-eliminar"
    >
      <h2 id="titulo-eliminar">
        ¿Eliminar producto?
      </h2>

      <p>
        ¿Querés eliminar {productoAEliminar.nombre}
        de tu carrito?
      </p>

      <div className="modal-botones">
        <button
          className="modal-cancelar"
          onClick={() => setProductoAEliminar(null)}
        >
          Cancelar
        </button>

        <button
          className="modal-confirmar"
          onClick={() => {
            eliminarProducto(productoAEliminar.id);
            setProductoAEliminar(null);
          }}
        >
          Sí, eliminar
        </button>
      </div>
    </div>
  </div>
)}

{/* MODAL PARA CAMBIAR CANTIDADES */}
{cambioCantidad && (
  <div className="modal-overlay">
    <div
      className="modal-contenido"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-cantidad"
    >
      <h2 id="titulo-cantidad">
        Confirmar cantidad 🌿
      </h2>

      <p>
        ¿Querés {cambioCantidad.accion === 'aumentar'
          ? 'agregar una unidad de'
          : 'quitar una unidad de'}{' '}
        {cambioCantidad.producto.nombre}?
      </p>

      <div className="modal-botones">
        <button
          className="modal-cancelar"
          onClick={() => setCambioCantidad(null)}
        >
          Cancelar
        </button>

        <button
          className="modal-confirmar"
          onClick={() => {
            if (cambioCantidad.accion === 'aumentar') {
              aumentarCantidad(cambioCantidad.producto.id);
            } else {
              disminuirCantidad(cambioCantidad.producto.id);
            }

            setCambioCantidad(null);
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}

export default Carrito;
