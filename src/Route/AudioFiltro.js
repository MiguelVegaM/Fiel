import React from "react";
import "../styles/Recursos/Filtros.css";
import { useNavigate, useParams } from "react-router-dom";
import { recursosObj } from "./Recursos";
import { MiniHeader, Navbar } from "./Inicio";

import Player from "@madzadev/audio-player";

const colors = `html {
  --tagsBackground: #860F30;
  --tagsText: #ffffff;
  --tagsBackgroundHoverActive: #2cc0a0;
  --tagsTextHoverActive: #ffffff;
  --searchBackground: #0E0E0E;
  --searchText: #ffffff;
  --searchPlaceHolder: #575a77;
  --playerBackground: #0E0E0E;
  --titleColor: #ffffff;
  --timeColor: #ffffff;
  --progressSlider: #860F30;
  --progressUsed: #860F30;
  --progressLeft: #ffffff;
  --volumeSlider: #860F30;
  --volumeUsed: #860F30;
  --volumeLeft:  #151616;
  --playlistBackground: #0E0E0E;
  --playlistText: #575a76;
  --playlistBackgroundHoverActive:  #0E0E0E;
  --playlistTextHoverActive: #ffffff;
}`;

export function AudioFiltro() {
  let { audioId } = useParams();

  let recursoSeleccionado = recursosObj.find(
    (recurso) => recurso.id === audioId
  );

  const tracks = recursosObj.filter((recurso) => recurso.type === "audio");

  console.log(tracks);

  const track = tracks.filter((trackId) => trackId.id === audioId);

  console.log(track);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="barra-direccion">
        Inicio / Audios / {recursoSeleccionado.title}
      </div>
      <div className="audio-filtro__container">
        <div className="audio-frame">
          {" "}
          <img
            className="audio-filtro__imagen"
            src="/images/recursos/FILTROS/RECURSOS_AUDIOS/Barra-de-Audio-con-logo.jpg"
            alt=""
          />
          <Player
            trackList={track}
            customColorScheme={colors}
            includeTags={false}
            includeSearch={false}
            showPlaylist={true}
            autoPlayNextTrack={true}
          />
        </div>
        <div className="audio-info">
          <div className="audio-info__title">
            <div className="audio-filtro__title">
              <h3>{recursoSeleccionado.title}</h3>
              <p>{recursoSeleccionado.fuente}</p>
            </div>
            <div className="audio-filtro__length">
              {recursoSeleccionado.length}
            </div>
          </div>
          <hr className="audio-filtro__hr" />
          <div className="audio-info__subtitle">
            <div className="audio-filtro__genero">
              <span className="bold">Género/Tema:</span> Literatura Bíblica
            </div>
            <div className="audio-filtro__fecha">
              <span className="bold">Fecha:</span>23-10-2012
            </div>
          </div>
        </div>
        <div className="audio-filtro__footer">
          <div className="">
            <img
              className="recursos__footer-logo"
              src="/images/recursos/logo-gris-inferior.png"
              alt="Logo Predica Fiel"
            />
          </div>
          <div className=" recursos__footer-btn">
            <button onClick={goBack}>Regresar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaginaAudio() {
  return (
    <>
      <MiniHeader />
      <Navbar />
      <AudioFiltro />
    </>
  );
}

export default PaginaAudio;
