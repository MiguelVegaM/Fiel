import React from "react";

import "../styles/Recursos/Filtros.css";
import { useParams } from "react-router-dom";
import { recursosObj } from "./Recursos";

export function AudioFiltro() {
  let { audioId } = useParams();
  console.log(audioId);

  let recursoSeleccionado = recursosObj.find(
    (recurso) => recurso.id === audioId
  );
  console.log(recursoSeleccionado);

  return (
    <div>
      <div className="barra-direccion">
        Inicio / Audios / {recursoSeleccionado.title}
      </div>
      <div className="audio-filtro__container">
        <div className="audio-frame">
          {" "}
          <img
            className="audio-filtro__imagen"
            src="../../images/recursos/FILTROS/RECURSOS AUDIOS/Barra-de-Audio-con-logo.jpg"
            alt=""
          />
        </div>
        <div className="audio-info">
          <div className="audio-info__title">
            <div className="audio-filtro__title">
              <h3>{recursoSeleccionado.title}</h3>
              <p>{recursoSeleccionado.fuente}</p>
            </div>
            <div className="audio-filtro__length">
              {recursoSeleccionado.length}
            </div>
          </div>
          <hr className="audio-filtro__hr" />
          <div className="audio-info__subtitle">
            <div className="audio-filtro__genero">
              <span className="bold">Género/Tema:</span> Literatura Bíblica
            </div>
            <div className="audio-filtro__fecha">
              <span className="bold">Fecha:</span>23-10-2012
            </div>
          </div>
        </div>
        <div className="audio-filtro__footer">
          <div className="">
            <img
              className="recursos__footer-logo"
              src="images/recursos/logo gris inferior.png"
              alt="Logo Predica Fiel"
            />
          </div>
          <div className=" recursos__footer-btn">
            <button>Regresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
