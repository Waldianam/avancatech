import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./Components/Navbar";


import Home from "./Pages/Home";
import Produtos from "./Pages/Produtos";
import Servicos from "./Pages/Servicos";
import Sobre from "./Pages/Sobre";

function App() {
  return (

    

    <BrowserRouter>


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


      </Routes>


    </BrowserRouter>


  );
}


export default App;





