import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

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
