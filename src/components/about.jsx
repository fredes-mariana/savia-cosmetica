import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-content">

        <span className="about-subtitle">
          CONOCÉ SAVIA
        </span>

        <h2>Nuestra esencia</h2>

        <p>
          Creemos que el cuidado personal comienza con
          pequeños rituales. Creamos productos inspirados
          en la naturaleza, pensados para acompañarte
          todos los días.
        </p>

        <Link to="/nosotros" className="about-button">
          Conocé nuestra historia
        </Link>

      </div>
    </section>
  );
}

export default About;
