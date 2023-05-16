import React from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import MiniHeader from "../inicio/MiniHeader";
import Navbar from "../inicio/Navbar";
import MainBanner from "../inicio/MainBanner";
import EntrenamientosOnline from "../inicio/EntrenamientosOnline";
import EntrenamientosPresenciales from "../inicio/EntrenamientosPresenciales";
import RecursosVid from "../inicio/RecursosVid";
import Testimonios from "../inicio/Testimonios";
import Cobime from "../inicio/Cobime";
import Alianzas from "../inicio/Alianzas";
import ContactoWhats from "../inicio/ContactoWhats";
import Footer from "../inicio/Footer";
import DisclaimerDonar from "../inicio/DisclaimerDonar";
import MiniFooter from "../inicio/MiniFooter";

function Inicio(props) {
  return (
    <div>
      <Helmet>
        <title>Fiel | Inicio</title>
      </Helmet>
      <MiniHeader />
      <Navbar />
      <MainBanner />
      <EntrenamientosOnline />
      <EntrenamientosPresenciales />
      <RecursosVid />
      <Testimonios />
      <Cobime />
      <Alianzas />
      <ContactoWhats />
      <Footer />
      <DisclaimerDonar />
      <MiniFooter />
    </div>
  );
}

export default Inicio;
