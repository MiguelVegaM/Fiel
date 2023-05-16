import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

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
