import React from "react";
import { Helmet } from "react-helmet";
import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";

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
