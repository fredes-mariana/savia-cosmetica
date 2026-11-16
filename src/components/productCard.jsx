
import { useContext, useState, useEffect } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

function ProductCard({ producto }) {

  const { agregarAlCarrito } = useContext(CarritoContext);

  
const [agregado, setAgregado] = useState(false);

const handleAgregar = () => {
  agregarAlCarrito(producto);
  setAgregado(true);
};

useEffect(() => {
  if (!agregado) return;

  const temporizador = setTimeout(() => {
    setAgregado(false);
  }, 2000);

  return () => clearTimeout(temporizador);
}, [agregado]);


  return (
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
  );
}

export default ProductCard;
