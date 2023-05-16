import React from "react";
import Button from "../UI/Buttons/Button";
import "../styles/RecursosVid.css";
import { FaPlayCircle } from "react-icons/fa";

function RecursosVid(props) {
  return (
    <div className="recursos">
      <div className="recursos__header">
        <div className="recursos__header-logo">
          <h1 className="recursos__header-title">
            DISFRUTA DE TODOS LOS RECURSOS <span>QUE TENEMOS PARA TI.</span>
          </h1>
          <div>
            <img
              className="recursos__logo"
              src="https://www.predicafiel.org/images/logo-corto.png"
              alt="Fiel logo"
            />
          </div>
        </div>
        <div className="line--gray"></div>
        <p className="recursos__text">
          Disponemos de una gran variedad de recursos en video, audio y
          articulos preparados para tu formación como expositor biblico
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                className="recursos__vid-image"
                src="https://images.unsplash.com/photo-1627818653012-054f17eb0648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt="Vid 1"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                className="recursos__vid-image"
                src="https://images.unsplash.com/photo-1520703078787-a61e8cb387c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Vid 2"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
          <div className="col thumbnail">
            <div className="recursos__vid">
              <img
                className="recursos__vid-image"
                src="https://images.unsplash.com/photo-1560131517-b04bebfb8c8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="Vid 3"
              />
              <FaPlayCircle className="recursos__play-button"></FaPlayCircle>
            </div>
          </div>
        </div>
      </div>
      <div className="recursos__button-container">
        <Button className="recursos__button">VER TODOS LOS RECURSOS</Button>
      </div>
    </div>
  );
}

export default RecursosVid;
