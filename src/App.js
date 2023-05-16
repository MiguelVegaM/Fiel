import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Route/Inicio";
import Nosotros from "./Route/Nosotros";
import Entrenamientos from "./Route/Entrenamientos";
import Eventos from "./Route/Eventos";
import Recursos from "./Route/Recursos";
import Contacto from "./Route/Contacto";
import DeclaracionDoctrinal from "./Route/DeclaracionDoctrinal";
import Equipo from "./Route/Equipo";
import Alianzas from "./Route/Alianzas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="nosotros" element={<Nosotros />} />
      <Route path="entrenamientos" element={<Entrenamientos />} />
      <Route path="eventos" element={<Eventos />} />
      <Route path="recursos" element={<Recursos />} />
      <Route path="contacto" element={<Contacto />} />
      <Route path="declaracion-doctrinal" element={<DeclaracionDoctrinal />} />
      <Route path="equipo" element={<Equipo />} />
      <Route path="alianzas" element={<Alianzas />} />
    </Routes>
  );
}

export default App;
