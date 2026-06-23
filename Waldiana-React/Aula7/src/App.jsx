import React from "react";
import Botao from "./components/Botao";
import Titulo from "./components/Titulo";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


function App(){
    return(
        <>
            <div className= "d-flex flex-column min-vh-100">
        <Menu/>
        <div className= "container mt-5 flex-grow-1">
        <h1>Criando componentes com Props e Bootstrap</h1>
        <p>Utilizando agora o UseState do React</p>
        </div>
           
        </div> 

        <Footer/>
        </>
    );
}
export default App;
