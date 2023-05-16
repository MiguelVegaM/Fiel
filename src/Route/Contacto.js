import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Contacto(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Contacto</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Contacto</h1>
      <MiniFooter />
    </div>
  );
}

export default Contacto;
