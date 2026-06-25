import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";


import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Agendamento from "./Pages/Agendamento";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="bg-bege1">
      
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/produtos"
          element={<Produtos />}
        />
        <Route
        path= "/agendamento"
        element={<Agendamento/>}
        />
        <Route
        path="/servicos"
        element= {<Servicos/>}
        />
        <Route
        path="/sobre"
        element= {<Sobre/>}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
    </div>

  );
}

export default App;





