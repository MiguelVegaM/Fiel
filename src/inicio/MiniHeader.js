import React from "react";
import "../styles/MiniHeader.css";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

function MiniHeader() {
  return (
    <div className="header">
      <ul className="header__list">
        <li className="header__item">+00000000000</li>
        <li className="header__item">info@predicafiel.com</li>
        <li className="header__item">
          <ul className="header__list-icons">
            <li>
              <div className="header__icon-circle">
                <a
                  className="header__icon-link"
                  href="https://www.youtube.com/channel/UCUPxK7QD67w6nq4CZEwIrnQ"
                >
                  <FaYoutube />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  className="header__icon-link"
                  href="https://twitter.com/PredicaFiel"
                >
                  <FaTwitter />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  className="header__icon-link"
                  href="https://www.facebook.com/EntrenandoExpositores/"
                >
                  <FaFacebook />
                </a>
              </div>
            </li>
            <li>
              <div className="header__icon-circle">
                <a
                  className="header__icon-link"
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
  );
}

export default MiniHeader;
