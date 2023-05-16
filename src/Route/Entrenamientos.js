import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

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
