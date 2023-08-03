import React from "react";

import "../styles/Recursos/Filtros.css";

export function AudioFiltro() {
  return (
    <div>
      <div className="barra-direccion">
        Inicio / Audios / La supremacía de Dios a través de su Palabra
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
              <h3>La supremacía de Dios a través de su Palabra</h3>
              <p>David Jackman</p>
            </div>
            <div className="audio-filtro__length">1:27:00 Min</div>
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
