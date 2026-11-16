import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-subtitle">
          BELLEZA NATURAL Y CONSCIENTE
        </span>

        <h1>La naturaleza en tu piel.</h1>

        <p>
          Descubrí una nueva forma de cuidar tu piel
          con productos inspirados en la naturaleza.
        </p>

        <Link to="/productos" className="hero-button">
          Explorar productos
        </Link>
      </div>

      <div className="hero-image">
        <img
          src="/images/presentacion.png"
          alt="Productos de cosmética natural SAVIA"
        />
      </div>
    </section>
  );
}

export default Hero;
