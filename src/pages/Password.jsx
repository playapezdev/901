import React, { Fragment } from "react";
import "@styles/Password.scss";
import { FaLock } from "react-icons/fa";
export default function Contraseña() {
  return (
    <Fragment>
      <div className="form-contra">
        <div className="panel-1">
          <FaLock style={{ color: "black", fontSize: "70px" }}></FaLock>
          <label>Restablecer contraseña</label>
        </div>
        <div className="form-text">
          <label>
            Ingresa el correo registrado. Se enviara un email, al correo
            asociado en PlayaPez
          </label>
        </div>
        <div className="form-input">
          <input
            className="caja-text"
            placeholder="Correo electronico"
            type="email"
          ></input>
        </div>
        <div className="form-btn">
          <button className="btn-contraseña">Regresar</button>
          <button className="btn-contraseña">Enviar</button>
        </div>
      </div>
    </Fragment>
  );
}
