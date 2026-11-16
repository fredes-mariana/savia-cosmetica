import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>SAVIA</h2>
          <p>Cosmética consciente, simple y natural.</p>
        </div>

        <div className="footer-links">
          <h3>Explorá</h3>
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/contacto">Contacto</Link>
        </div>

        <div className="footer-social">
          <h3>Conectemos</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>WhatsApp</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SAVIA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
