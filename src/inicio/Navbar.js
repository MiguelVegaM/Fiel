import React from "react";
import "../styles/Navbar.css";
import Button from "../UI/Buttons/Button";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div>
        <img
          className="navbar__logo"
          src="https://www.predicafiel.org/images/logo-largo.png"
          alt="Fiel Logo"
        />
      </div>
      <div className="navbar__dropdown">
        <button
          className="navbar-toggler navbar__btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item navbar__list-item">
              <NavLink to="/" className="navbar__link" aria-current="page">
                INICIO
              </NavLink>
            </li>
            {/* //! No jala el dropdown --------------------- ya jalo quitando un import en App.js */}
            {/* //! El dropdown siempre aparece con la class active */}
            <li className="nav-item dropdown navbar__list-item">
              <NavLink
                className="dropdown-toggle  navbar__link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                NOSOTROS
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/declaracion-doctrinal"
                  >
                    DECLARACIÓN DOCTRINAL
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/equipo">
                    EQUIPO
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/alianzas">
                    ALIANZAS
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/entrenamientos">
                ENTRENAMIENTOS
              </NavLink>
            </li>
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/eventos">
                EVENTOS
              </NavLink>
            </li>
            <li className="nav-item navbar__list-item">
              <NavLink className="navbar__link" to="/recursos">
                RECURSOS
              </NavLink>
            </li>
            <NavLink className="dropdown-item" to="/contacto">
              <Button>Contacto</Button>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
