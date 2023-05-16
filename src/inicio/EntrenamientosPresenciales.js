import React from "react";

import Button from "../UI/Buttons/Button";
import "../styles/EntrenamientosPresenciales.css";

function EntrenamientosPresenciales(props) {
  return (
    <div className="entrenamiento-presencial">
      <div className="entrenamiento-presencial__text">
        <h1>ENTRENAMIENTOS PRESENCIALES</h1>
        <p className="entrenamieto-presencial__paragraph">Plan Habana, Cuba.</p>
        <p className="entrenamieto-presencial__paragraph">
          Plan Habana nace de la pasión de transformar La Habana con el
          Evangelio de Jesucristo
        </p>
        <p className="entrenamieto-presencial__text--small-text">
          <span className="entrenamieto-presencial__text--light-text">
            {" "}
            pero como dicen Las Escrituras: "¿Cómo, pues, invocarán a aquel en
            quien no han creído? ¿Y cómo creerán en aquel de quien no han oído?
            ¿Y cómo oirán sin haber quien les predique? (Ro- manos 10:14).
          </span>{" "}
          A través de Plan Habana, capacitamos a pastores, maestros y líderes en
          cómo predicar el evangelio fielmente.
        </p>
        <div className="entrenamiento__button-container-banner">
          {/* //!Cambiarlo a blanco------------------- */}

          <Button>CONOCER MÁS</Button>
        </div>
      </div>
    </div>
  );
}

export default EntrenamientosPresenciales;
