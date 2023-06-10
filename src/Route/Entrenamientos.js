import React from "react";

import { Helmet } from "react-helmet";

import {
  Alianzas,
  ContactoWhats,
  DisclaimerDonar,
  Footer,
  MiniHeader,
} from "./Inicio";
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

      <Alianzas />
      <ContactoWhats />
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </div>
  );
}

export default Entrenamientos;
