import React, { Fragment } from "react";
import "@styles/Knows.scss";

export default function Knows() {
  return (
    <Fragment>
      <div className="contact">
        <h1 className="title">CONOCENOS</h1>
        <div className="content-general">
          <strong>INFORMACION GENERAL</strong>
          <span>
            PLAYAPEZ es una empresa dedicada a la producción y comercialización
            de la especie Tilapia Roja, donde ofrecemos herramientas
            tecnológicas de hardware y software desarrolladas e implementadas en
            nuestra estación piscícola con el fin de mejorar la productividad y
            competitividad del sector. De esta forma te invitamos que conozca
            más de nosotros en nuestro portal web y redes sociales, también a
            que nos visites para tener el gusto de atenderle ofreciendo un tour
            por nuestras instalaciones ubicados en el municipio de
            Ayapel-Córdoba en la vereda Playa Blanca, conociendo personalmente
            nuestros procesos y proyectos.
          </span>
        </div>
        <div className="content-flex-two">
        <div className="content-mision">
            <strong>MISION</strong>
            <br />
            <span>
              Producir y comercializar Tilapia o mojarra roja (Oreochromis sp.)
              de calidad con responsabilidad social y sostenibilidad ambiental,
              apostándole a la generación de empleo, la inclusión y la seguridad
              alimentaria y nutricional de la región.
            </span>
            <br />
          </div>
          <div className="content-vision">
            <strong>VISION</strong>
            <br />
            <span>
                roducir y comercializar tilapia o mojarra roja (oreochromis sp.) de calidad con 
                responsabilidad social y sostenibilidad ambiental, apostándole a la generación de 
                empleo, la inclusión y la seguridad alimentaria y nutricional de la región.
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
