import React from "react";

import { Helmet } from "react-helmet";

import { MiniHeader } from "./Inicio";
import { Navbar } from "./Inicio";
import { MiniFooter } from "./Inicio";

function DeclaracionDoctrinal(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Declaración Doctrinal</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Declaración Doctrinal</h1>
      <MiniFooter />
    </div>
  );
}

export default DeclaracionDoctrinal;
