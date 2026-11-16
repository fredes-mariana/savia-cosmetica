
function Nosotros() {
  return (
    <main className="nosotros-page">

      <section className="nosotros-intro">
        <span className="nosotros-subtitulo">
          NUESTRA ESENCIA
        </span>

        <h1>La belleza de lo natural</h1>

        <p>
          En SAVIA creemos que el cuidado personal
          es mucho más que una rutina: es un momento
          para conectar con nosotros mismos.
        </p>
      </section>

      <section className="nosotros-historia">
        <div className="nosotros-texto">
          <h2>Conocé SAVIA</h2>

          <p>
            SAVIA nace de la idea de volver a lo simple,
            de elegir productos que acompañen nuestra
            piel y respeten su naturaleza.
          </p>

          <p>
            Nos inspira el bienestar, la tranquilidad
            y la importancia de dedicar tiempo a
            nuestro cuidado diario.
          </p>

          <p>
            Buscamos ofrecer una experiencia de
            cosmética consciente, donde cada pequeño
            gesto se convierta en un momento especial.
          </p>
        </div>

        <div className="nosotros-imagen">
          <img
            src="/images/nosotros.png"
            alt="Productos de cosmética natural SAVIA"
          />
        </div>
      </section>

      <section className="nosotros-valores">
        <h2>Lo que nos inspira</h2>

        <div className="valores-container">

          <article className="valor-card">
            <span>🌿</span>
            <h3>Naturaleza</h3>
            <p>
              Encontramos inspiración en lo simple
              y en la belleza de nuestro entorno.
            </p>
          </article>

          <article className="valor-card">
            <span>🤍</span>
            <h3>Bienestar</h3>
            <p>
              Creemos en el cuidado personal como
              un espacio de calma y conexión.
            </p>
          </article>

          <article className="valor-card">
            <span>✨</span>
            <h3>Consciencia</h3>
            <p>
              Promovemos hábitos de consumo más
              conscientes y responsables.
            </p>
          </article>

        </div>
      </section>

    </main>
  );
}

export default Nosotros;
