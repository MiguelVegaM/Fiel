import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Entrenamientos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Entrenamientos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Entrenamientos</h1>
      <MiniFooter />
    </div>
  );
}

export default Entrenamientos;
