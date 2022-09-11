
import Navbar from "./Navbar";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Ejercicio1" element={<Ejercicio1/>} />
        <Route path="/Ejercicio2" element={<Ejercicio2/>} />
        </Routes>
    </>
  );
  }

export default App;
