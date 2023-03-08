import { Home } from "./pages/Home.jsx";
import { Counter } from "./pages/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import { Contactanos } from "./pages/Contactanos.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
