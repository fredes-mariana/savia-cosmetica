import { useState } from 'react';
import { productos } from '../data/productos.js';
import ProductCard from '../components/productCard.jsx';

function Productos() {
  const [categoria, setCategoria] = useState('Todos');

  const categorias = [
    'Todos',
    'Facial',
    'Corporal',
    'Cabello',
    'Labios'
  ];

  const productosFiltrados = categoria === 'Todos'
    ? productos
    : productos.filter(
        producto => producto.categoria === categoria
      );

  return (
    <main className="productos-page">

      <div className="productos-header">
        <span className="productos-subtitle">
          COSMÉTICA NATURAL
        </span>

        <h1>Nuestros productos</h1>

        <p>
          Descubrí nuestra colección de productos
          para el cuidado de tu piel y bienestar.
        </p>
      </div>

      <div className="productos-container">

        <div className="productos-filtros">
          {categorias.map(cat => (
            <button
              key={cat}
              className={`filtro-button ${
                categoria === cat ? 'activo' : ''
              }`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="productos-grid">
          {productosFiltrados.map(producto => (
            <ProductCard
              key={producto.id}
              producto={producto}
            />
          ))}
        </div>

      </div>
    </main>
  );
}

export default Productos;