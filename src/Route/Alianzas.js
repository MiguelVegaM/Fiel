import React from "react";

import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MiniFooter from "../inicio/MiniFooter";
import { Helmet } from "react-helmet";

function Alianzas(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Alianzas</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <h1>Alianzas</h1>
      <MiniFooter />
    </div>
  );
}

export default Alianzas;
