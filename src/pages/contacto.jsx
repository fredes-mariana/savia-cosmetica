
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <main className="contacto-page">
      <section className="contacto-container">

        <div className="contacto-intro">
          <span className="contacto-subtitulo">
            ESTAMOS PARA VOS
          </span>

          <h1>Hablemos 🌿</h1>

          <p>
            ¿Tenés alguna consulta sobre nuestros productos?
            Escribinos y estaremos encantados de ayudarte.
          </p>
        </div>

        <Formik
          initialValues={{
  nombre: '',
  apellido: '',
  email: '',
  asunto: '',
  mensaje: ''
}}

          validate={(values) => {
            const errors = {};

            if (!values.nombre.trim()) {
              errors.nombre = 'El nombre es obligatorio';
            }
            if (!values.apellido.trim()) {
  errors.apellido = 'El apellido es obligatorio';
}

if (!values.asunto.trim()) {
  errors.asunto = 'El asunto es obligatorio';
}

            if (!values.email.trim()) {
              errors.email = 'El correo es obligatorio';
            } else if (
              !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
            ) {
              errors.email = 'Ingresá un correo válido';
            }

            if (!values.mensaje.trim()) {
              errors.mensaje = 'El mensaje es obligatorio';
            } else if (values.mensaje.trim().length < 10) {
              errors.mensaje =
                'El mensaje debe tener al menos 10 caracteres';
            }

            return errors;
          }}

          onSubmit={(values, { resetForm }) => {
            console.log('Consulta recibida:', values);
            setEnviado(true);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form
              className="contacto-form"
              onChange={() => setEnviado(false)}
            >


              <div className="form-grupo">
                <label htmlFor="nombre">Nombre</label>

                <Field
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                />

                <ErrorMessage
                  name="nombre"
                  component="span"
                  className="form-error"
                />
              </div>

<div className="form-grupo">
  <label htmlFor="apellido">Apellido</label>

  <Field
    type="text"
    id="apellido"
    name="apellido"
    placeholder="Tu apellido"
  />

  <ErrorMessage
    name="apellido"
    component="span"
    className="form-error"
  />
</div>

              <div className="form-grupo">
                <label htmlFor="email">Correo electrónico</label>

                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tunombre@email.com"
                />

                <ErrorMessage
                  name="email"
                  component="span"
                  className="form-error"
                />
              </div>

<div className="form-grupo">
  <label htmlFor="asunto">Asunto</label>

  <Field
    type="text"
    id="asunto"
    name="asunto"
    placeholder="¿Sobre qué querés consultarnos?"
  />

  <ErrorMessage
    name="asunto"
    component="span"
    className="form-error"
  />
</div>

              <div className="form-grupo">
                <label htmlFor="mensaje">Mensaje</label>

                <Field
                  as="textarea"
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  placeholder="Contanos en qué podemos ayudarte..."
                />

                <ErrorMessage
                  name="mensaje"
                  component="span"
                  className="form-error"
                />
              </div>

              <button
                type="submit"
                className="contacto-enviar"
                disabled={isSubmitting}
              >
                Enviar mensaje
              </button>

              {enviado && (
                <p className="contacto-exito" role="status">
                  ✓ ¡Formulario completado correctamente!
                  Gracias por escribirnos 🌿
                </p>
              )}

            </Form>
          )}
        </Formik>

      </section>
    </main>
  );
}

export default Contacto;
