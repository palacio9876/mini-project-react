import { Home } from "./pages/Home.jsx";
import { Counter } from "./pages/Counter.jsx";
import { Routes, Route } from "react-router-dom";
import { ContactUs } from "./pages/ContactUs";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
