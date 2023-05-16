import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function Recursos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Recursos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Recursos</h1>
      <MiniFooter />
    </div>
  );
}

export default Recursos;
