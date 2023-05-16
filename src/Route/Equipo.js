import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

function Equipo(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Equipo</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Equipo</h1>
      <MiniFooter />
    </div>
  );
}

export default Equipo;
