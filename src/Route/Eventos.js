import React from "react";

import { Helmet } from "react-helmet";

import {
  Alianzas,
  ContactoWhats,
  DisclaimerDonar,
  Footer,
  MiniHeader,
  Navbar,
  MiniFooter,
} from "./Inicio";

function Eventos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Eventos</title>
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

export default Eventos;
