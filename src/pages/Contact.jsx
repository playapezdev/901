import React, { Fragment } from "react";
import "@styles/Contact.scss";

export default function Contact() {
  return (
    <Fragment>
      <div className="Contact">
        <h1>CONTACTENOS</h1>
        <br />
        <div className="flex-row-tow">
          <div className="content-sales">
            <strong>SOPORTE VENTAS</strong>
            <br />
            <span>
              Gracias por contactarnos, si tienes dudas sobre el producto o el
              proceso de la compra con gusto te ayudaremos, sólo debes ponerte
              en contacto con nuestras líneas de atención aquí descritas.
            </span>
          </div>
          <div className="content-technical">
            <strong>SOPORTE TECNICO</strong>
            <br />
            <span>
              Estamos para acompañarte en las inquietudes que tengas sobre el
              producto de tu interés o las dificultades que se te presenten
              durante la instalación o funcionamiento del equipo, no dudes en
              contactarte con nosotros y te daremos la solución apropiada.
            </span>
          </div>
        </div>
        <br />
        <strong>PQRS</strong>
        <form>
          <div className="Content-flex">
            <div className="flex-form">
              <div>
                <label>TIPO</label>
                <select className="select-type">Seleccionar</select>
              </div>
              <div>
                <label>NOMBRE</label>
                <input type="text" className="text-input" />
              </div>
              <div>
                <label>TELEFONO</label>
                <input type="text" className="text-input" />
              </div>
            </div>
            <div className="flex-form">
              <div>
                <label>CODIGO</label>
                <input type="text" className="text-input" />
              </div>
              <div>
                <label>APELLIDO</label>
                <input type="text" className="text-input" />
              </div>
              <div>
              <label>EMAIL</label>
              <input type="email" className="text-input" />
              </div>
            </div>
            <div className="flex-form">
              <label>ASUNTO</label>
              <textarea className="text-textarea"></textarea>
            </div>
            <div className="flex-form">
              <button type="button" className="btn-send">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
