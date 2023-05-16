import React from "react";
import "../styles/Alianzas.css";

export function Alianzas(props) {
  return (
    <div className="alianzas">
      <div className="alianzas__text">ALIANZAS</div>
      <ul className="alianzas__icons-list">
        <div className="list-items1">
          <li className="alianzas__list-item">
            <a className="alianzas__link" href="https://simeontrust.org/es">
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/simeontrust.png"
                alt="Simeon Trust Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a className="alianzas__link" href="https://es.9marks.org/">
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/9Marks-Espan%CC%83ol-Logo-Oficial_Standards_Guide[1123].png"
                alt="9 Marks Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a className="alianzas__link" href="https://www.sbts.edu/">
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/southerm.jpg"
                alt="Southern Baptist Theological Seminary Logo"
              />
            </a>
          </li>
        </div>
        <div className="list-items2">
          <li className="alianzas__list-item">
            <a className="alianzas__link" href="https://www.crosslinks.org/">
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/crosslinks.jpg"
                alt="Crosslinks Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.coalicionporelevangelio.org/"
            >
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/coalicion.jpg"
                alt="Coalición por el Evangelio Logo"
              />
            </a>
          </li>
          <li className="alianzas__list-item">
            <a className="alianzas__link" href="https://www.proctrust.org.uk/">
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/pt.jpg"
                alt="Proclamation Trust Logo"
              />
            </a>
          </li>
        </div>
        <div className="list-items3">
          <li className="alianzas__list-item">
            <a
              className="alianzas__link"
              href="https://www.crossconnections.org.uk/"
            >
              <img
                className="alianzas__image"
                src="https://www.predicafiel.org/images/crossconnections.jpg"
                alt="Crossconections Logo"
              />
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Alianzas;
