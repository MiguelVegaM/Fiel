import React from "react";

import "../styles/Footer.css";

import {
  FaWhatsapp,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaChevronCircleUp } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__summary">
        <div className="footer__contactanos">
          <p className="footer__header-contactanos">Contáctanos</p>
          <ul className="footer__contactanos-list">
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <FaWhatsapp />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">00 0000 0000</div>
            </li>
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <FaWhatsapp />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">00 0000 0000</div>
            </li>
            <li className="footer__contactanos-list-item">
              <div className="footer__contactanos-icon">
                <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                  <div>
                    <GrMail />
                  </div>
                </IconContext.Provider>
              </div>
              <div className="footer__contactanos-text">info@predicafiel</div>
            </li>
            <li className="footer__contactanos-list-item">
              <ul className="footer__list-icons">
                <li>
                  <div className="footer__icon-circle">
                    <a
                      className="footer__icon-link"
                      href="https://www.youtube.com/channel/UCUPxK7QD67w6nq4CZEwIrnQ"
                    >
                      <FaYoutube />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      className="footer__icon-link"
                      href="https://twitter.com/PredicaFiel"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      className="footer__icon-link"
                      href="https://www.facebook.com/EntrenandoExpositores/"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="footer__icon-circle">
                    <a
                      className="footer__icon-link"
                      href="https://www.instagram.com/predicafiel/"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__accesos-directos">
          <p className="footer__header-accesos-directos">Accesos Directos</p>
          <div className="footer__accesos-directos-container">
            <div className="footer__accesos-directos1">
              <ul className="footer__accesos-directos-list">
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Inicio
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Nosotros
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Entrenamientos
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Eventos
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Recursos
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    COBIME
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__accesos-directos2">
              <ul className="footer__accesos-directos-list">
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Declaración Doctrinal
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Equipo
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Alianzas
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Talleres
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Plan Habana
                  </a>
                </li>
                <li className="footer__accesos-directos-list-item">
                  <a href="" className="footer__accesos-directos-link">
                    Residentes (SEND)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__button-up">
          <a href="#">
            <FaChevronCircleUp className="footer__button-up-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
