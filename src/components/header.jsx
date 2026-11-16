
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MenuContext } from '../context/MenuContext';
import Carrito from './carrito.jsx';

function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useContext(MenuContext);
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">

          <div className="logo">
            <h2>SAVIA</h2>
            <span>COSMÉTICA NATURAL</span>
          </div>

          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <Link to="/productos" onClick={closeMenu}>Productos</Link>
            <Link to="/nosotros" onClick={closeMenu}>Nosotros</Link>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
          </nav>

          <div className="header-actions">

            <div className="header-cart">
             <button
                type="button"
                className="carrito-icono"
                onClick={() => {
                  console.log("Hice clic en el carrito");
                  setCarritoAbierto(true);
                }}
                aria-label="Abrir carrito"
              >
               🛍️
              </button>
            </div>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
            </button>

          </div>
        </div>
      </header>

      
{carritoAbierto && (
  <Carrito
    cerrarCarrito={() => setCarritoAbierto(false)}
  />
)}

    </>
  );
}

export default Header;
