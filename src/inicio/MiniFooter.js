import React from "react";

import "../styles/MiniFooter.css";

function MiniFooter(props) {
  return (
    <div className="mini-footer">
      <div className="mini-footer__text">
        Predica Fiel 2023 |{" "}
        <span className="mini-footer__text--light">
          Todos los derechos reservados
        </span>
      </div>
    </div>
  );
}

export default MiniFooter;
