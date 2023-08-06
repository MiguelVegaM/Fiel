import { Helmet } from "react-helmet";
import {
  Alianzas,
  ContactoWhats,
  DisclaimerDonar,
  Footer,
  MiniFooter,
  MiniHeader,
  Navbar,
} from "./Inicio";

import React, { useState } from "react";

import Pagination from "react-bootstrap/Pagination";

import "../styles/Recursos/Recursos.css";
import { NavLink } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

export let recursosObj = [
  {
    id: "1",
    link: "https://vimeo.com/523000492",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Aplicaciones",
    fuente: "Alexis Pérez",
    length: "44:32",
  },

  {
    id: "2",
    link: "https://vimeo.com/521519103",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fuente: "Alexis Pérez",
    length: "54:20",
  },

  {
    id: "3",
    link: "https://vimeo.com/442830557",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 21",
    fuente: "Alexis Pérez",
    length: "26:38",
  },

  {
    id: "4",
    link: "https://vimeo.com/445249725",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Del Texto al Sermón",
    fuente: "Alexis Pérez",
    length: "1:13:11",
  },

  {
    id: "5",
    link: "https://vimeo.com/442826558",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fuente: "Alexis Pérez",
    length: "49:48",
  },

  {
    id: "6",
    link: "https://vimeo.com/442818395",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 14",
    fuente: "David Helm",
    length: "26:41",
  },

  {
    id: "7",
    link: "https://vimeo.com/445228715",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fuente: "Rubén Rodríguez",
    length: "41:08",
  },

  {
    id: "8",
    link: "https://vimeo.com/442800308",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "Alexis Pérez",
    length: "39:18",
  },

  {
    id: "9",
    link: "https://vimeo.com/442812601",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 3.14-22",
    fuente: "Rubén Rodríguez",
    length: "30:20",
  },

  {
    id: "10",
    link: "https://vimeo.com/442794221",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "Andy Quesada",
    length: "52:51",
  },

  {
    id: "11",
    link: "https://vimeo.com/442473784",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fuente: "Alexis Pérez",
    length: "56:29",
  },

  {
    id: "12",
    link: "https://vimeo.com/417747652",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "David Helm",
    length: "46:11",
  },

  {
    id: "13",
    link: "https://vimeo.com/417737115",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "David Helm",
    length: "49:04",
  },

  {
    id: "14",
    link: "https://vimeo.com/417726354",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fuente: "Alexis Pérez",
    length: "28:55",
  },

  {
    id: "15",
    link: "https://vimeo.com/419933778",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fuente: "Collen McFadden",
    length: "47:45",
  },

  {
    id: "16",
    link: "https://vimeo.com/419949258",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fuente: "Marjorie Meeks",
    length: "41:19",
  },

  {
    id: "17",
    link: "https://vimeo.com/417787819",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "Marjorie Meeks",
    length: "50:49",
  },

  {
    id: "18",
    link: "https://vimeo.com/417771886",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "Collen McFadden",
    length: "45:18",
  },

  {
    id: "19",
    link: "https://vimeo.com/417759651",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fuente: "Lourdes LLorens",
    length: "36:11",
  },

  {
    id: "20",
    link: "https://vimeo.com/461684057",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Panel de Preguntas y Respuestas",
    fuente: "Varios",
    length: "56:46",
  },

  {
    id: "21",
    link: "https://vimeo.com/461596077",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La aplicación y la adoración",
    fuente: "Robert Kinney",
    length: "52:45",
  },

  {
    id: "22",
    link: "https://vimeo.com/460173805",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 16",
    fuente: "Alexis Pérez",
    length: "33:18",
  },

  {
    id: "23",
    link: "https://vimeo.com/460227088",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Adoración Verdadera",
    fuente: "Juan Sánchez",
    length: "37:44",
  },

  {
    id: "24",
    link: "https://vimeo.com/460192662",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "El proceso de hacer aplicaciones en predicación expositiva",
    fuente: "Bryan Chapell",
    length: "44:49",
  },

  {
    id: "25",
    link: "https://vimeo.com/460218906",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 2",
    fuente: "Juan Sánchez",
    length: "32:14",
  },

  {
    id: "26",
    link: "https://vimeo.com/460235684",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Teología Bíblica de la Adoración",
    fuente: "Miguel Núñez",
    length: "1:26:03",
  },

  {
    id: "27",
    link: "https://vimeo.com/464423852",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 4",
    fuente: "David Helm",
    length: "1:19:47",
  },

  {
    id: "28",
    link: "https://vimeo.com/464426493",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable IV",
    fuente: "Ryan Townsend",
    length: "1:33:44",
  },

  {
    id: "29",
    link: "https://vimeo.com/464392395",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva VI",
    fuente: "David Helm",
    length: "1:48:13",
  },

  {
    id: "30",
    link: "https://vimeo.com/464344643",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva V",
    fuente: "Miguel Núñez",
    length: "1:06:50",
  },

  {
    id: "31",
    link: "https://vimeo.com/464040232",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable III",
    fuente: "Juan Sánchez",
    length: "1:42:41",
  },

  {
    id: "32",
    link: "https://vimeo.com/462825307",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 3",
    fuente: "Alexis Pérez",
    length: "1:07:44",
  },

  {
    id: "33",
    link: "https://vimeo.com/462831217",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva IV",
    fuente: "Miguel Núñez",
    length: "57:23",
  },

  {
    id: "34",
    link: "https://vimeo.com/464009342",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable II",
    fuente: "Juan Sánchez",
    length: "38:18",
  },

  {
    id: "35",
    link: "https://vimeo.com/462890853",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva III",
    fuente: "David Helm",
    length: "51:20",
  },

  {
    id: "36",
    link: "/public/audios/Exposición en 2 Timoteo 2.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Exposición en 2 Timoteo 2 ",
    fuente: "Delvis Acuña",
    length: "47:36",
  },

  {
    id: "37",
    link: "https://vimeo.com/462816691",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 1",
    fuente: "David Helm",
    length: "37:59",
  },

  {
    id: "38",
    link: "/public/audios/Predicación Expositiva II.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva II",
    fuente: "David Helm",
    length: "53:23",
  },

  {
    id: "39",
    link: "/public/audios/La Iglesia Saludable I.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La Iglesia Saludable I",
    fuente: "Juan Sánchez",
    length: "39:38",
  },

  {
    id: "40",
    link: "/public/audios/Predicación Expositiva I.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva I",
    fuente: "David Helm",
    length: "1:02:53",
  },

  {
    id: "41",
    link: "https://youtu.be/RWP8K3stZQs",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Una visión bíblica de la iglesia",
    fuente: "Miguel Núñez",
    length: "1:01:00",
  },

  {
    id: "42",
    link: "/public/audios/La supremacía de Dios a través de su Palabra-Día 3 Juan.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "Juan Sánchez",
    length: "57:06",
  },

  {
    id: "43",
    link: "/public/audios/La supremacía de Dios a través de su Palabra-Día 3 David.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "David Jackman ",
    length: "1:28:26",
  },

  {
    id: "44",
    link: "/public/audios/La supremacía de Dios a través de su Palabra-Día 3 Peter.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "Peter Sholl",
    length: "42:14",
  },

  {
    id: "45",
    link: "/public/audios/La supremacía de Dios a través de su Palabra-Día 2 Peter.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fuente: "Peter Sholl",
    length: "31:27",
  },

  {
    id: "46",
    link: "/public/audios/La supremacía de Dios a través de su Palabra-Día 2 David.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fuente: "David Jackman",
    length: "1:27:59",
  },

  {
    id: "47",
    link: "/public/audios/La supremacía de Dios a través de su palabra-Día 1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su palabra-Día 1",
    fuente: "Peter Sholl",
    length: "38:18",
  },
];

// let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(<Pagination.Item key={number}>{number}</Pagination.Item>);
}

export function RecursosMain() {
  const [recursoFiltrado, setRecursoFiltrado] = useState({
    audio: false,
    video: false,
    articulo: false,
  });

  const [datosFiltrados, setDatosFiltrados] = useState(recursosObj);

  const handleOnCheckbox = (e) => {
    setRecursoFiltrado({
      ...recursoFiltrado,
      [e.target.value]: e.target.checked,
    });

    if (e.target.checked) {
      const resultadoFiltrado = recursosObj.filter(
        (item) => item.type === e.target.value
      );
      setDatosFiltrados([...resultadoFiltrado]);
      // document.miniImgVideo.src =
      //   "/images/recursos/FILTROS/RECURSOS VIDEOS/SELECCIÓN FILTRO VIDEO.png";
    } else {
      // const resultadoFiltrado = datosFiltrados.filter(
      //   (item) => item.type !== e.target.value
      // );
      setDatosFiltrados(recursosObj);
      // document.miniImgVideo.src = "/images/recursos/IMAGEN VIDEO.png";
    }
  };

  // console.log(datosFiltrados);
  // console.log(recursoFiltrado);

  return (
    <>
      <div className="recursos__miniaturas">
        <div className="barra-direccion">Inicio / Todos los recursos</div>
        <p className="recursos__paragraph">
          Disponemos de una gran variedad de recursos en video, audio y
          articulos preparados para tu formación como expositor biblico
        </p>
        <div className="recursos__miniaturas-container">
          <div className="row recursos__miniaturas-row">
            <div
              id="miniImgVideo"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              <img
                className="recursos__miniatura-img"
                id="miniImgVideo"
                src={
                  recursoFiltrado.video
                    ? "images/recursos/FILTROS/RECURSOS_VIDEOS/IMAGEN_VIDEO_FILTRADO.png"
                    : "images/recursos/IMAGEN_VIDEO.png"
                }
                alt="Miniatura sección videos"
              />
              <div className="recursos__miniatura-text">Videos</div>
            </div>
            <div
              id="miniImgAudio"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              <img
                className="recursos__miniatura-img
            "
                id="miniImgAudio"
                src={
                  recursoFiltrado.audio
                    ? "images/recursos/FILTROS/RECURSOS_AUDIOS/IMAGEN_AUDIO_FILTRADO.png"
                    : "images/recursos/IMAGEN_AUDIO.png"
                }
                alt="Miniatura sección audios"
              />
              <div className="recursos__miniatura-text">Audio</div>
            </div>
            <div
              id="miniImgArticulo"
              className="col-12 col-md-4 recursos__miniatura-container"
            >
              <img
                className="recursos__miniatura-img
            "
                id="miniImgArticulo"
                src="images/recursos/IMAGEN_ARTICULO.png"
                // {
                //   recursoFiltrado.articulo
                //     ? "images/recursos/FILTROS/RECURSOS_ARTICULOS/IMAGEN_ARTICULO_FILTRADO.png"
                //     : "images/recursos/IMAGEN_ARTICULO.png"
                // }
                alt="Miniatura sección artículos"
              />
              <div className="recursos__miniatura-text">Artículo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="recursos__main">
        <div className="recursos__main-container">
          <div className="row recursos__main-row">
            <div className="col-lg-3">
              <form action="">
                <div className="recursos__filtros">
                  <div className="recursos__checkboxes">
                    <h1>Filtros</h1>
                    <div className="recursos__checkboxes-container">
                      <div className="round">
                        <input
                          onChange={handleOnCheckbox}
                          className="checkbox"
                          type="checkbox"
                          name="video"
                          id="video"
                          value="video"
                        />
                        <label htmlFor="video"></label>
                        <p>Video</p>
                      </div>
                      <div className="round">
                        <input
                          onChange={handleOnCheckbox}
                          className="checkbox"
                          type="checkbox"
                          name="audio"
                          id="audio"
                          value="audio"
                        />
                        <label htmlFor="audio"></label>
                        <p>Audio</p>
                      </div>
                      <div className="round">
                        <input
                          onChange={handleOnCheckbox}
                          className="checkbox"
                          type="checkbox"
                          name="articulo"
                          id="articulo"
                          value="articulo"
                        />
                        <label htmlFor="articulo"></label>
                        <p>Artículo</p>
                      </div>
                    </div>
                  </div>
                  <div className="recursos__selectors">
                    <div className="recursos__selectors-pair">
                      <label htmlFor="Libros">Libros de la Biblia</label>
                      <select name="Libros" id="Libros">
                        <option value="todos">Todos</option>
                        <option value="salmos">Salmos</option>
                        <option value="salmos">Marcos</option>
                        <option value="salmos">Lucas</option>
                        <option value="salmos">2 Timoteo</option>
                        <option value="salmos">Apocalipsis</option>
                      </select>
                      <label htmlFor="Generos">Generos literarios</label>
                      <select name="Generos" id="Generos">
                        <option value="todos">Todos</option>
                        <option value="narrativa">Narrativa</option>
                        <option value="sabiduria">Sabiduría</option>
                        <option value="profecia">Profecía</option>
                        <option value="evangelios">Evangelios</option>
                        <option value="epistolas">Epístolas</option>
                        <option value="apocaliptica">Apocalíptica</option>
                      </select>
                    </div>
                    <div className="recursos__selectors-pair">
                      <label htmlFor="Eventos">Eventos</label>
                      <select name="Eventos" id="Eventos">
                        <option value="todos">Todos</option>
                        <option value="cobime12">COBIME 2012</option>
                        <option value="cobime15">COBIME 2015</option>
                        <option value="cobime18">COBIME 2018</option>
                      </select>
                      <label htmlFor="Talletes">Talleres</label>
                      <select name="Talletes" id="Talletes">
                        <option value="todos">Todos</option>
                        <option value="taller-marcos">
                          Marcos, La Habana, 2019
                        </option>
                        <option value="taller-2-timoteo">
                          2 Timoteo, La Habana, 2019
                        </option>
                        <option value="taller-apocalipsis">
                          Apocalipsis, La Habana, 2019
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-9">
              {datosFiltrados.map((recursosObj, i) => (
                <NavLink
                  to={recursosObj.type === "video" ? "/video" : "/audio"}
                  className="recursos__card-link"
                  aria-current="page"
                >
                  <div key={recursosObj.id} className="recursos__card">
                    <div className="recrusos__card-imgntitle">
                      <img
                        className="recursos__card-img"
                        src={recursosObj.icon}
                        alt="Video Icon"
                      />
                      <div className="recursos__card-title">
                        <h3>{recursosObj.title}</h3>
                        <p>{recursosObj.fuente}</p>
                      </div>
                    </div>
                    <div className="recrusos__card-length">
                      {recursosObj.length} Min
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="recursos__footer">
            <div className="row recursos__footer-row">
              <div className="col-4">
                <img
                  className="recursos__footer-logo"
                  src="images/recursos/logo gris inferior.png"
                  alt="Logo Predica Fiel"
                />
              </div>
              <div className="col-4 recursos__footer-btn">
                <button>Inicio</button>
              </div>
              <div className="col-4 recursos__footer-navigation">
                <Pagination size="sm" className="recursos__footer-pagination">
                  <Pagination.Prev />
                  {items}
                  <Pagination.Next />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ^ ------------------------------------------
function Recursos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Recursos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <RecursosMain />
      <Alianzas />
      <ContactoWhats />
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </div>
  );
}

export default Recursos;
