import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
import Button from "../UI/Buttons/Button";
import "../styles/ContactoWhats.css";

function ContactoWhats(props) {
  return (
    <div className="contacto">
      <div className="contacto__container">
        <div className="contacto__text">
          <div className="contacto__logo">
            <img
              className="contacto__image"
              src="https://www.predicafiel.org/images/logo-largo.png"
              alt="Fiel Logo"
            />
          </div>
          <h1 className="contacto__header">CONTÁCTANOS</h1>
          <p className="contacto__paragraph">
            <span className="contacto__paragraph--bold">Entrenando</span> a la
            próxima generación de{" "}
            <span className="contacto__paragraph--bold">Expositores</span> de la{" "}
            <span className="contacto__paragraph--bold">Biblia.</span>
          </p>
          <button className="contacto__whatsapp">
            <a className="whatsapp-link" href="https://www.whatsapp.com">
              <IconContext.Provider value={{ className: "whatsapp-icon" }}>
                <div>
                  <FaWhatsapp />
                </div>
              </IconContext.Provider>
              <div className="whatsapp-text">WhatsApp</div>
            </a>
          </button>
        </div>
        <div className="contacto__form-container">
          <p className="contacto__form-paragraph">
            Para brindarte atención personaliza compartenos tus datos y pronto
            nos pondremos en contacto contigo
          </p>
          <form className="contacto__form">
            <input
              className="contacto__input"
              type="text"
              placeholder="Nombre"
            />
            <input
              className="contacto__input"
              type="text"
              placeholder="Apellido"
            />
            <input
              className="contacto__input"
              type="tel"
              placeholder="Teléfono"
            />
            <input
              className="contacto__input"
              type="email"
              placeholder="E-mail"
            />
          </form>
          <textarea
            className="contacto__input-large"
            type="text"
            placeholder="Mensaje"
          ></textarea>
          <div className="contacto__button-container">
            <Button class>ENVIAR</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoWhats;
