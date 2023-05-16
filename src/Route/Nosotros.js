import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Nosotros(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Nosotros</title>
      </Helmet>
      <MiniHeader />
      <Navbar />

      <h1>Nosotros</h1>
      <MiniFooter />
    </div>
  );
}

export default Nosotros;
