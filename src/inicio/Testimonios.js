import React from "react";
import "../styles/Testimonios.css";

function Testimonios(props) {
  return (
    <div className="carousel-full">
      <h1 className="testimonios__header">TESTIMONIOS</h1>
      <div className="carousel">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="https://www.predicafiel.org/images/miguel-1.jpg"
                    alt="avatar1"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph">
                      Aprecio enormemente la labor de Prédica Fiel de entrenar
                      pastores y líderes en la predicación expositiva de la
                      Palabra de Dios. Si queremos ver la transformación de
                      nuestras iglesias, esta tendrá que comenzar por el
                      púlpito. La idea de este tipo de predicación es que el
                      mensaje controle al mensajero de manera que el expositor
                      entregue lo que Dios haya inspirado por medio de Su
                      Espíritu. Y esta es precisamente la visión de Prédica Fiel
                      para nuestro continente Latinoamericano.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        {" "}
                        Miguel Núñez
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, Iglesia Bautista Internacional, República
                        Dominicana
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="https://www.predicafiel.org/images/usielfinal.jpg"
                    alt="avatar2"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph">
                      Prédica Fiel ha significado mucho, no solo por el
                      entrenamiento personal, sino por el descanso que otorga al
                      predicador sabiendo que está dando de manera sana un
                      correcto uso de la Escritura para con la congregación que
                      atiende. En el ámbito ministerial no hay mayor bendición
                      para el pastor.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        Usiel Abreu
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, Iglesia Pinos Nuevos, La Habana, Cuba
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonios">
                <div className="gray-line"></div>
                <div className="testimonios__testimonio">
                  <img
                    className="testimonios__avatar"
                    src="https://www.predicafiel.org/images/doctor-juan-sanchez1.jpg"
                    alt="avatar3"
                  />
                  <div className="testimonios__text-container">
                    <div className="testimonios__paragraph">
                      Ha sido un gozo y un privilegio dirigir varios talleres de
                      exposición bíblica en Cuba a través del ministerio de
                      Predica Fiel. Cada vez me anima el entusiasmo de los
                      pastores y obreros de la iglesia. La mayor necesidad de la
                      iglesia en Cuba es capacitarse para manejar correctamente
                      la palabra de Dios. Con tanta hambre de aprender, Predica
                      Fiel equipa a la próxima generación de pastores, maestros
                      y misioneros en la iglesia en Cuba.
                    </div>
                    <div className="testimonios__footer">
                      <div className="testimonios__footer-name">
                        Juan Sánchez
                      </div>
                      <div className="testimonios__footer-from">
                        Pastor, High Pointe Baptist Church
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonios;
