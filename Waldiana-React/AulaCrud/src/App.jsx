import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Cadastro from "./Pages/Cadastro";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";

function App(){
    return(
        <>
        <BrowserRouter>
           <Navbar/>

           <Routes>
                <Route path= "/"element={<Home/>}/>
                <Route path="/cadastro" element= {<Cadastro/>} />
                <Route path= "/contato" element={<Contato/>}/>
           </Routes>


        </BrowserRouter>
        
        

        
        </>
    );
    
}
export default App;