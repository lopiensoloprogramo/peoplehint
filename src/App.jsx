import { Routes, Route } from "react-router-dom";
import NivelAtractivo from "./pages/NivelAtractivo"
import QuienPiensa from "./pages/QuienPiensa";
import QuienObserva from "./pages/QuienObserva";
import Home from "./pages/Home"
import PercepcinSocial from "./pages/PercepcionSocial"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nivel-atractivo" element={<NivelAtractivo/>} />
      <Route path="quien-piensa" element={<QuienPiensa/>} />      
      <Route path="quien-observa" element={<QuienObserva/>} />  
      <Route path="percepcion-social" element={<PercepcinSocial/>} />  
    </Routes>
  );
}