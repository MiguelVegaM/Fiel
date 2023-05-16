import React from "react";
import "../styles/MainBanner.css";
import "../UI/Buttons/Button";
import Button from "../UI/Buttons/Button";

function MainBanner(props) {
  return (
    <section className="main-banner">
      <div className="main-banner__text">
        <h2 className="main-banner__subtitle">Entrenando a la próxima</h2>
        <h1 className="main-banner__title">
          Generación de <span>Expositores</span> de <span>la Biblia.</span>
        </h1>
        <div className="main-banner__line"></div>
        <p className="main-banner__paragraph">
          Fielmente comprometidos con la predicación de evangelio de Jesucristo,
          entrenando a expositores bíblicos en el mundo hispano parlante.
        </p>
        <Button className="hola">CONOCE MÁS</Button>
      </div>
    </section>
  );
}

export default MainBanner;
