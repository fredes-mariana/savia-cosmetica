import { Link } from 'react-router-dom';
import { productos } from '../data/productos.js';
import ProductCard from './productCard.jsx';

function Destacados() {
  const productosDestacados = productos.filter(
    producto => producto.destacado === true
  );

  return (
    <section className="destacados">
      <div className="destacados-container">

        <span className="destacados-subtitle">
          NUESTRA SELECCIÓN
        </span>

        <h2>Los favoritos de SAVIA</h2>

        <p className="destacados-description">
          Descubrí nuestros productos más especiales
          para acompañar tu rutina de cuidado.
        </p>

        <div className="destacados-grid">
          {productosDestacados.map(producto => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>

        <Link to="/productos" className="destacados-link">
          Ver todos los productos
        </Link>

      </div>
    </section>
  );
}

export default Destacados;
