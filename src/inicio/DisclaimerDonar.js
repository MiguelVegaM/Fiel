import React from "react";

import "../styles/DisclaimerDonar.css";

function DisclaimerDonar(props) {
  return (
    <div className="disclaimer-donar">
      <div className="disclaimer-donar__gray-line"></div>
      <div className="disclaimer-donar__container">
        <div className="disclaimer">
          <p className="disclaimer-donar__text">
            Prédica Fiel es una organización sin fines de lucro, adecuadamente
            registrada en el estado de Texas. Desarrollamos nuestro ministerio a
            través de las contribuciones de cristianos y organi- zaciones que
            dan con generosidad para que los siervos de Dios puedan ser
            entrenados en el fiel manejo de las Escrituras. Si estima a bien
            contribuir a nuestro ministerio, en el siguiente enlace encontrará
            una manera sencilla para hacerlo. También puede contactarnos si así
            lo desea. El Señor le bendiga.
          </p>
        </div>
        <div className="donar">
          <img
            className="donar__image"
            src="https://www.revistareder.com/ojs/public/site/images/admin/PayPal_reder_button1.png"
            alt="Donar Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default DisclaimerDonar;
