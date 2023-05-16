import React from "react";
import "../styles/EntrenamientosOnline.css";
import Button from "../UI/Buttons/Button";

function EntrenamientosOnline(props) {
  return (
    <div className="entrenamiento">
      <div className="entrenamiento-online">
        <div className="entrenamiento-online__container">
          <div className="entrenamiento-online__box-text">
            <p className="entrnamiento-online__text--normal">
              Creemos que la salud de la Iglesia está ligada a la fiel
              exposición de la Biblia, estamos enfocados a formar, capacitar y
              entrenar a predicadores y maestros de la Palabra de Dios,
              preparándolos para el ministerio.
            </p>
            <p className="entrenamiento-online__text--bold">
              Somos un ministerio cuya intención principal es contribuir a la
              expansión del evangelio de Jesucristo.
            </p>
          </div>
          <div className="entrenamiento-online__box-logo">
            <img
              className="entrenamiento-online__image"
              src="https://www.predicafiel.org/images/logo-largo.png"
              alt="Fiel Logo"
            />
            <div className="entrenamiento__button-container">
              {/*  Cambiarlo a gris------------------- */}
              <Button className="entrenamiento__button-gray-text">
                EQUIPO
              </Button>
              <Button className="button-red-text">SOBRE NOSOTROS</Button>
            </div>
          </div>
        </div>
        <div className="entrenamiento__card">
          <img
            className="entrenamiento__card-image"
            src="https://images.unsplash.com/photo-1617870757002-5c84bb82a755?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Men on PC"
          />
          <div className="entrenamiento__card-text">
            <h1 className="entrenamiento__card-title">Entrenamientos</h1>
            <div className="entrenamiento__modalidad">
              Modalidad:{" "}
              <span className="entrenamiento__card-text-bold"> En Línea</span>
              <span className="online-dot">.</span>
            </div>
            <p className="entrenamiento__card-text-bold">
              Debido a las limitaciones de movilidad y el distanciamiento social
              que hemos estado experimentando en el mundo en los últimos meses,
              Prédica Fiel ha diseñado un entrenamiento online para predicadores
              con el objetivo de desarrollar las habilidades de los mismos
              semana tras semana.
            </p>
            <p className="entrenamiento__card-text-normal">
              Hemos escogido el género literario de Evangelios para este primer
              tiempo, especificamente el evangelio de Marcos. Los participantes
              estarán recibiendo instrucciones en el manejo adecuado de las
              Escrituras, así como en la exposición de estas. Trabajarán pasajes
              específicos del libro de Marcos, así como también harán una
              exposición de veinte minutos, para las cuáles recibirán
              retroalimentación.
            </p>
            <div className="entrenamiento__button-container-box">
              <Button className="button-red-text">CONOCER MÁS</Button>
              {/* //!Cambiarlo a gris------------------- */}
              <Button className="button-gray-text">APLICAR</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntrenamientosOnline;
