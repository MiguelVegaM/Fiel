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
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

export const recursosObj = [
  {
    id: "1",
    tags: [""],
    url: "https://player.vimeo.com/video/523000492?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Aplicaciones",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "",
    length: "44:32",
  },

  {
    id: "2",
    tags: [""],
    url: "https://player.vimeo.com/video/521519103?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "",
    length: "54:20",
  },

  {
    id: "3",
    tags: [""],
    url: "https://player.vimeo.com/video/442830557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 21",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "26:38",
  },

  {
    id: "4",
    tags: [""],
    url: "https://player.vimeo.com/video/445249725?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Del Texto al Sermón",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "1:13:11",
  },

  {
    id: "5",
    tags: [""],
    url: "https://player.vimeo.com/video/442826558?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "49:48",
  },

  {
    id: "6",
    tags: [""],
    url: "https://player.vimeo.com/video/442818395?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 14",
    fuente: "David Helm",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "26:41",
  },

  {
    id: "7",
    tags: [""],
    url: "https://player.vimeo.com/video/445228715?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fuente: "Rubén Rodríguez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "41:08",
  },

  {
    id: "8",
    tags: [""],
    url: "https://player.vimeo.com/video/442800308?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "39:18",
  },

  {
    id: "9",
    tags: [""],
    url: "https://player.vimeo.com/video/442812601?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en Apocalipsis 3.14-22",
    fuente: "Rubén Rodríguez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "30:20",
  },

  {
    id: "10",
    tags: [""],
    url: "https://player.vimeo.com/video/442794221?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "Andy Quesada",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "52:51",
  },

  {
    id: "11",
    tags: [""],
    url: "https://player.vimeo.com/video/442473784?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Introducción a la Literatura Apocalíptica",
    fuente: "Alexis Pérez",
    libro: "apocalipsis",
    genero: "Apocaliptica",
    taller: "taller-apocalipsis",
    length: "56:29",
  },

  {
    id: "12",
    tags: [""],
    url: "https://player.vimeo.com/video/417747652?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "taller-2-timoteo",
    length: "46:11",
  },

  {
    id: "13",
    tags: [""],
    url: "https://player.vimeo.com/video/417737115?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "taller-2-timoteo",
    length: "49:04",
  },

  {
    id: "14",
    tags: [""],
    url: "https://player.vimeo.com/video/417726354?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fuente: "Alexis Pérez",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "taller-2-timoteo",
    length: "28:55",
  },

  {
    id: "15",
    tags: [""],
    url: "https://player.vimeo.com/video/419933778?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicando a Cristo",
    fuente: "Collen McFadden",
    libro: "marcos",
    genero: "Evangelios",
    taller: "",
    length: "47:45",
  },

  {
    id: "16",
    tags: [""],
    url: "https://player.vimeo.com/video/419949258?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Línea Melódica",
    fuente: "Marjorie Meeks",
    libro: "marcos",
    genero: "Evangelios",
    taller: "",
    length: "41:19",
  },

  {
    id: "17",
    tags: [""],
    url: "https://player.vimeo.com/video/417787819?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Estructura",
    fuente: "Marjorie Meeks",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "50:49",
  },

  {
    id: "18",
    tags: [""],
    url: "https://player.vimeo.com/video/417771886?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Contexto",
    fuente: "Collen McFadden",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "45:18",
  },

  {
    id: "19",
    tags: [""],
    url: "https://player.vimeo.com/video/417759651?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Manteniéndonos en la Línea",
    fuente: "Lourdes LLorens",
    libro: "marcos",
    genero: "Evangelios",
    taller: "taller-marcos",
    length: "36:11",
  },

  {
    id: "20",
    tags: [""],
    url: "https://player.vimeo.com/video/461684057?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Panel de Preguntas y Respuestas",
    fuente: "Varios",
    libro: "",
    genero: "",
    taller: "",
    length: "56:46",
  },

  {
    id: "21",
    tags: [""],
    url: "https://player.vimeo.com/video/461596077?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La aplicación y la adoración",
    fuente: "Robert Kinney",
    libro: "",
    genero: "",
    taller: "",
    length: "52:45",
  },

  {
    id: "22",
    tags: [""],
    url: "https://player.vimeo.com/video/460173805?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 16",
    fuente: "Alexis Pérez",
    libro: "salmos",
    genero: "Sabiduria",
    taller: "",
    length: "33:18",
  },

  {
    id: "23",
    tags: [""],
    url: "https://player.vimeo.com/video/460227088?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Adoración Verdadera",
    fuente: "Juan Sánchez",
    libro: "lucas",
    genero: "Evangelios",
    taller: "",
    length: "37:44",
  },

  {
    id: "24",
    tags: [""],
    url: "https://player.vimeo.com/video/460192662?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "El proceso de hacer aplicaciones en predicación expositiva",
    fuente: "Bryan Chapell",
    libro: "",
    genero: "",
    taller: "",
    length: "44:49",
  },

  {
    id: "25",
    tags: [""],
    url: "https://player.vimeo.com/video/460218906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en el Salmo 2",
    fuente: "Juan Sánchez",
    libro: "salmos",
    genero: "Sabiduria",
    taller: "",
    length: "32:14",
  },

  {
    id: "26",
    tags: [""],
    url: "https://player.vimeo.com/video/460235684?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Teología Bíblica de la Adoración",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:26:03",
  },

  {
    id: "27",
    tags: [""],
    url: "https://player.vimeo.com/video/464423852?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 4",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "",
    length: "1:19:47",
  },

  {
    id: "28",
    tags: [""],
    url: "https://player.vimeo.com/video/464426493?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable IV",
    fuente: "Ryan Townsend",
    libro: "",
    genero: "",
    taller: "",
    length: "1:33:44",
  },

  {
    id: "29",
    tags: [""],
    url: "https://player.vimeo.com/video/464392395?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva VI",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "1:48:13",
  },

  {
    id: "30",
    tags: [""],
    url: "https://player.vimeo.com/video/464344643?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva V",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:06:50",
  },

  {
    id: "31",
    tags: [""],
    url: "https://player.vimeo.com/video/464040232?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable III",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:42:41",
  },

  {
    id: "32",
    tags: [""],
    url: "https://player.vimeo.com/video/462825307?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 3",
    fuente: "Alexis Pérez",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "",
    length: "1:07:44",
  },

  {
    id: "33",
    tags: [""],
    url: "https://player.vimeo.com/video/462831217?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva IV",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "57:23",
  },

  {
    id: "34",
    tags: [""],
    url: "https://player.vimeo.com/video/464009342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "La Iglesia Saludable II",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "38:18",
  },

  {
    id: "35",
    tags: [""],
    url: "https://player.vimeo.com/video/462890853?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Predicación Expositiva III",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "51:20",
  },

  {
    id: "36",
    tags: [""],
    url: "https://player.vimeo.com/video/462816691?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Exposición en 2 Timoteo 1",
    fuente: "David Helm",
    libro: "2timoteo",
    genero: "Epistolas",
    taller: "",
    length: "37:59",
  },

  {
    id: "37",
    tags: [""],
    url: "https://player.vimeo.com/video/857614414?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    icon: "images/recursos/ICON_VIDEO.png",
    type: "video",
    title: "Una visión bíblica de la iglesia",
    fuente: "Miguel Núñez",
    libro: "",
    genero: "",
    taller: "",
    length: "1:01:00",
  },

  {
    id: "38",
    tags: [""],
    url: "https://www.predicafiel.org/audios/Exposicio%CC%81n_en_2_Timoteo_2_Delvis_Acun%CC%83a-COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Exposición en 2 Timoteo 2 ",
    fuente: "Delvis Acuña",
    libro: "",
    genero: "",
    taller: "",
    length: "47:36",
  },

  {
    id: "39",
    tags: [""],
    url: "https://www.predicafiel.org/audios/La_Iglesia_Saludable_Juan_Sa%CC%81nchez_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La Iglesia Saludable I",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "39:38",
  },

  {
    id: "40",
    tags: [""],
    url: "https://www.predicafiel.org/audios/2.Predicacio%CC%81n_Expositiva_1_David%20Helm_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva I",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "1:02:53",
  },

  {
    id: "41",
    tags: [""],
    url: "https://www.predicafiel.org/audios/4.Predicacio%CC%81n_Expositiva_2_David_Helm_COBIME_2015.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "Predicación Expositiva II",
    fuente: "David Helm",
    libro: "",
    genero: "",
    taller: "",
    length: "53:23",
  },

  {
    id: "42",
    tags: [""],
    url: "https://www.predicafiel.org/audios/La-supremaci%CC%81a-de-Dios-a-trave%CC%81s-de-su-Palabra-Juan-Sa%CC%81nchez-COBIME-2012-D3_1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "Juan Sánchez",
    libro: "",
    genero: "",
    taller: "",
    length: "57:06",
  },

  {
    id: "43",
    tags: [""],
    url: "https://www.predicafiel.org/audios/La-supremaci%CC%81a-de-Dios-a-trave%CC%81s-de-su-Palabra-David-Jackman-COBIME-2012-D3_1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "David Jackman ",
    libro: "",
    genero: "",
    taller: "",
    length: "1:28:26",
  },

  {
    id: "44",
    tags: [""],
    url: "https://www.predicafiel.org/audios/La-supremaci%CC%81a-de-Dios-a-trave%CC%81s-de-su-Palabra-Peter-Sholl-COBIME2012-D3.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 3",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
    length: "42:14",
  },

  {
    id: "45",
    tags: [""],
    url: "https://www.predicafiel.org/audios/audio3.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
    length: "31:27",
  },

  {
    id: "46",
    tags: [""],
    url: "https://www.predicafiel.org/audios/audioa2dj.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su Palabra-Día 2",
    fuente: "David Jackman",
    libro: "",
    genero: "",
    taller: "",
    length: "1:27:59",
  },

  {
    id: "47",
    tags: [""],
    url: "https://www.predicafiel.org/audios/audio1.mp3",
    icon: "images/recursos/ICON_AUDIO.png",
    type: "audio",
    title: "La supremacía de Dios a través de su palabra-Día 1",
    fuente: "Peter Sholl",
    libro: "",
    genero: "",
    taller: "",
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

    console.log(e.target.value);

    if (e.target.checked) {
      const resultadoFiltrado = recursosObj.filter(
        (item) => item.type === e.target.value
      );
      setDatosFiltrados([...resultadoFiltrado]);
    } else {
      setDatosFiltrados(recursosObj);
    }

    // if () {
    //   const resultadoFiltrado = recursosObj.filter(
    //     (item) => item.libro === e.target.value
    //   );
    //   setDatosFiltrados([...resultadoFiltrado]);
    // } else {
    //   setDatosFiltrados(recursosObj);
    // }
  };

  console.log(datosFiltrados);
  console.log(recursoFiltrado);

  return (
    <>
      <div className="recursos__miniaturas" id="recursos__miniaturas">
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
                      <label htmlFor="libros">Libros de la Biblia</label>
                      <select
                        name="libros"
                        id="libros"
                        onChange={handleOnCheckbox}
                      >
                        <option value="todos">Todos</option>
                        <option value="salmos">Salmos</option>
                        <option value="marcos">Marcos</option>
                        <option value="lucas">Lucas</option>
                        <option value="2timoteo">2 Timoteo</option>
                        <option value="apocalipsis">Apocalipsis</option>
                      </select>
                      <label htmlFor="generos">Género literários</label>

                      <select
                        name="generos"
                        id="generos"
                        onChange={handleOnCheckbox}
                      >
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
                      {/* <label htmlFor="Eventos">Eventos</label>
                      <select name="Eventos" id="Eventos">
                        <option value="todos">Todos</option>
                        <option value="cobime12">COBIME 2012</option>
                        <option value="cobime15">COBIME 2015</option>
                        <option value="cobime18">COBIME 2018</option>
                      </select> */}
                      <label htmlFor="talleres">Talleres</label>
                      <select
                        name="talleres"
                        id="talleres"
                        onChange={handleOnCheckbox}
                      >
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
                <motion.div whileHover={{ scale: 1.05 }} className="">
                  <Link
                    to={
                      recursosObj.type === "video"
                        ? `video/${recursosObj.id}`
                        : `audio/${recursosObj.id}`
                    }
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="recursos__footer">
            <div className="row recursos__footer-row">
              <div className="col-4">
                <img
                  className="recursos__footer-logo"
                  src="/images/recursos/logo-gris-inferior.png"
                  alt="Logo Predica Fiel"
                />
              </div>
              <div className="col-4 recursos__footer-btn">
                <HashLink to="/recursos#recursos__miniaturas">
                  <button>Inicio</button>
                </HashLink>
              </div>
              <div className="col-4 recursos__footer-navigation">
                {/* <Pagination size="sm" className="recursos__footer-pagination">
                  <Pagination.Prev />
                  {items}
                  <Pagination.Next />
                </Pagination> */}
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
    <motion.div
      initial={{ opacity: 0.75 }}
      animate={{ opacity: 1 }}
      transition={{ deley: 0.25, duration: 1 }}
      // exit={{ opacity: 0 }}
    >
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
    </motion.div>
  );
}

export default Recursos;
