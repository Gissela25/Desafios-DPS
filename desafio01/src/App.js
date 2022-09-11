
import Navbar from "./Navbar";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Home from "./pages/Home";
function App() {
  let component
  switch(window.location.pathname) {
    case "/":
      component = <Home/>
      break
      case "/Ejercicio1":
        component = <Ejercicio1/>
        break
        case "/Ejercicio2":
          component = <Ejercicio2/>
          break
  }
  return (
    <div className="App">
      <Navbar/>
      {component}
    </div>
  );
}

export default App;
