import { Routes, Route } from "react-router-dom";

import NivelAtractivo from "./pages/NivelAtractivo";
import QuienPiensa from "./pages/QuienPiensa";
import QuienObserva from "./pages/QuienObserva";
import Home from "./pages/Home";
import PercepcionSocial from "./pages/PercepcionSocial";
import DetectorInfidelidad from "./pages/DetectorInfidelidad";
import TestCI from "./pages/TestCI";
import InstaVistos from "./pages/InstaVistos";

import Calculadoras from "./pages/Calculadoras";
import Tests from "./pages/Tests";
import Relaciones from "./pages/Relaciones";
import Herramientas from "./pages/Herramientas";

import Porcentaje from "./pages/calculadoras/Porcentaje";
import Edad from "./pages/calculadoras/Edad";
import Descuento from "./pages/calculadoras/Descuento";
import IMC from "./pages/calculadoras/IMC";
import CTS from "./pages/calculadoras/CTS";

import Navbar from "./Components/Navbar";
import AdBlockDetector from "./Components/AdBlockDetector";

import Predictorv1 from "./Components/Predictorv1"
export default function App() {
  return (
    <>
      <AdBlockDetector />
      <Navbar />

      <Routes>
        {/* Inicio */}
        <Route path="/" element={<Home />} />

        {/* Herramientas antiguas */}
        <Route
          path="/detector-infidelidad"
          element={<DetectorInfidelidad />}
        />
        <Route
          path="/nivel-atractivo"
          element={<NivelAtractivo />}
        />
        <Route
          path="/quien-piensa"
          element={<QuienPiensa />}
        />
        <Route
          path="/quien-observa"
          element={<QuienObserva />}
        />
        <Route
          path="/percepcion-social"
          element={<PercepcionSocial />}
        />
        <Route
          path="/test-ci"
          element={<TestCI />}
        />
        <Route
          path="/insta-vistos"
          element={<InstaVistos />}
        />

        {/* Categorías */}
        <Route
          path="/calculadoras"
          element={<Calculadoras />}
        />
        <Route
          path="/tests"
          element={<Tests />}
        />
        <Route
          path="/relaciones"
          element={<Relaciones />}
        />
        <Route
          path="/herramientas"
          element={<Herramientas />}
        />

        {/* Calculadoras */}
        <Route
          path="/calculadoras/porcentaje"
          element={<Porcentaje />}
        />
        <Route
          path="/calculadoras/edad"
          element={<Edad />}
        />
        <Route
          path="/calculadoras/descuento"
          element={<Descuento />}
        />
        <Route
          path="/calculadoras/imc"
          element={<IMC />}
        />
        <Route
          path="/calculadoras/cts"
          element={<CTS />}
        />
                <Route
          path="/predictorv1"
          element={<Predictorv1 />}
        />
      </Routes>
    </>
  );
}