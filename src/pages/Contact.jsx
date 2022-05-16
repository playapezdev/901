import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <div className="Contact">
        <h1>CONTACTENOS</h1>
        <div className="flex-row-tow">
          <div className="content-sales">
            <strong>SOPORTE VENTAS</strong>
            <span>
              Gracias por contactarnos, si tienes dudas sobre el producto o el
              proceso de la compra con gusto te ayudaremos, sólo debes ponerte
              en contacto con nuestras líneas de atención aquí descritas.
            </span>
          </div>
          <div className="content-technical">
                <strong>SOPORTE TECNICO</strong>
                <span>
                    
                </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
