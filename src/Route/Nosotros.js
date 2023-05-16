import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

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
