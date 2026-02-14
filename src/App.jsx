import { Routes, Route } from "react-router-dom";
import NivelAtractivo from "./pages/NivelAtractivo"
import QuienPiensa from "./pages/QuienPiensa";
import Home from "./pages/Home"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="nivel-atractivo" element={<NivelAtractivo/>} />
      <Route path="quien-piensa" element={<QuienPiensa/>} />      
    </Routes>
  );
}