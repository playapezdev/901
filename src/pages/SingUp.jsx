import React, { Fragment } from "react";
import "../styles/SingUp.scss";

export default function CrearCuenta() {
  return (
    <Fragment>
      <div className="form-General">
        <div className="form-principio">
          <label>Crear Cuenta</label>
        </div>
        <form className="form-bloques">
          <div>
            <label>Usuario</label>
            <div className="grupo-input">
              <input
                className="for-input"
                placeholder="usuario"
                type="text"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
