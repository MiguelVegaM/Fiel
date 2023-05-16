import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

function Eventos(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Eventos</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Eventos</h1>
      <MiniFooter />
    </div>
  );
}

export default Eventos;
