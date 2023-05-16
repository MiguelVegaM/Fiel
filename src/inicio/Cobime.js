import React from "react";
import Button from "../UI/Buttons/Button";
import "../styles/Cobime.css";

function Cobime(props) {
  return (
    <div className="cobime">
      <h5 className="cobime__header">
        Conferencia Bíblica para Minustros Evangelicos
      </h5>
      <h1 className="cobime__main">
        PREPARADOS PARA <span className="cobime__main--bold">COBIME 2024</span>
      </h1>
      <h4 className="cobime__paragraph">
        preparate para este tiempo de aprendizaje
      </h4>
      <div className="cobime__button-container">
        <Button>ANOTARME</Button>
      </div>
    </div>
  );
}

export default Cobime;
