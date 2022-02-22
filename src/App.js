import { Inicio } from "./components/Inicio.jsx";
import { Description } from "./components/Description.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/:titleOb" element={<Description/>}/>
      </Routes>
    </BrowserRouter>
  );
}
