import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Componentes/Navbar";
import Footer from "./Componentes/Footer";
import Cadastro from "./Pages/Cadastro";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Viagens from "./Pages/Viagens";

function App(){
    return(
        <>
        <BrowserRouter>
        <div className= "d-flex-column min-vh-100">

              <Navbar/>

              <div className= "flex-grow-1">
              <Routes>
                <Route path ="/" element = {<Home/>}/>
                <Route path = "/Cadastro"element= {<Cadastro/>}/>
                <Route path = "/Contato"element={<Contato/>}/>
                 <Route path = "/Viagens"element={<Viagens/>}/>        



              </Routes>
              </div>

              <Footer/>
              </div>
        
        </BrowserRouter>  
        
        
        
        </>
    );
}
export default App;