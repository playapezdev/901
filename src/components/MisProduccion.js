import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/modal.css";

function MisProduccion() {
  const [toggle, setToggle] = useState(false);
  const [render, setRender] = useState(false);
  const [none, setNone] = useState("block");

  const manejarModal = () => {
    setToggle(!toggle);
    if (none === "none") {
      setNone("none");
    } else {
      setNone("block");
    }
  };

  const handleRenderForm = () => {
    setRender(!render);
    setNone("none");
  };

  const handleGuardar = () => {
    setToggle(!toggle);
    setNone("none");
  };

  const FormModal = () => {
    return (
      <div className="grid-form">
        <div className="form-modal">
          <label>Tipo de Produccion</label>

          <select className="select-modal">
            <option defaul value="value1">Seleccionar</option>
            <option value="value1">Peces</option>
            <option value="value1">Proximamente...</option>
            <option value="value1">Proximamente...</option>
          </select>
        </div>

        <div className="form-modal">
          <label>Nombre</label>
          <br />
          <input type="text" className="text-input-modal" />
        </div>
        <button type="button" className="btn-guardar" onClick={handleGuardar}>
          Guardar
        </button>
      </div>
    );
  };

  const DialogoSerial = () => {
    return (
      <div className="grid-form">
        <div className="form-modal">
          <span>
            Ingrese el Codigo de Subscripcion Enviado a su Correo Electronico
            Vinculado en su Perfil
          </span>
        </div>
        <br />
        <div className="form-modal">
          <label>INGRESE EL CODIGO</label>
          <br />
          <input type="text" className="text-input-modal" />
        </div>
      </div>
    );
  };

  const Modal = () => {
    return (
      <div className="content-model">
        {render ? <FormModal /> : <DialogoSerial />}
        <button
          type="button"
          className="btn-validar"
          style={{ display: none }}
          id="botton"
          onClick={handleRenderForm}
        >
          Validar
        </button>
      </div>
    );
  };
  return (
    <div>

      <div>
        <div className="grid-col-two">
          <div className="grid-content">
            <strong>MIS PRODUCIONES</strong>
          </div>
          <div className="grid-content">
            <Link to="/" className="text-link">
               Inicio
            </Link>
          </div>
        </div>

        <div className="dialog-buttom">
          <button className="btn-agregar" onClick={manejarModal}>
            {" "}
            +{" "}
          </button>
        </div>
        {toggle && <Modal />}
      </div>
    </div>
  );
}

export default MisProduccion;
