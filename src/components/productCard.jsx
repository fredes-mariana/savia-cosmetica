
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

function ProductCard({ producto }) {

  const { agregarAlCarrito } = useContext(CarritoContext);

  
const [agregado, setAgregado] = useState(false);
const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
const handleAgregar = () => {
  setMostrarConfirmacion(true);
};

const confirmarAgregar = () => {
  agregarAlCarrito(producto);
  setAgregado(true);
  setMostrarConfirmacion(false);
};

useEffect(() => {
  if (!agregado) return;

  const temporizador = setTimeout(() => {
    setAgregado(false);
  }, 2000);

  return () => clearTimeout(temporizador);
}, [agregado]);


  return (
    <>
    <article className="product-card">

      <div className="product-image">
        <img
          src={producto.imagen}
          alt={producto.nombre}
        />
      </div>

      <div className="product-info">

        <span className="product-category">
          {producto.categoria}
        </span>

        <h3>{producto.nombre}</h3>

        <p className="product-price">
          ${producto.precio.toLocaleString('es-AR')}
        </p>

        <button
          className="product-button"
          onClick={handleAgregar}
        >
          Agregar al carrito
        </button>
{agregado && (
  <p className="producto-agregado" role="status">
    ✓ ¡Agregado al carrito!
  </p>
)}
      </div>
    </article>
 {/* MODAL PARA AGREGAR AL CARRITO */}
    {mostrarConfirmacion && (
      <div className="modal-overlay">
        <div
          className="modal-contenido"
          role="dialog"
          aria-modal="true"
          aria-labelledby="titulo-agregar"
        >
          <h2 id="titulo-agregar">
            Agregar al carrito 🌿
          </h2>

          <p>
            ¿Querés agregar {producto.nombre}
            a tu carrito?
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
              onClick={confirmarAgregar}
            >
              Sí, agregar
            </button>
          </div>
        </div>
      </div>
    )}
  </>
  );
}

export default ProductCard;
