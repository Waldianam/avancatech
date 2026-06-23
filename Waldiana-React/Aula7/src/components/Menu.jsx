import React from "react";
import Titulo from "./Titulo";
import Botao from "./Botao";


function Menu(){
    return(
        <>
            <nav className= "navbar navbar-expand-lg navbar-dark bg-dark">
                <div className= "container">
                    <Titulo 
                        texto="Portifolio WM"
                        estilo= "display-3 text-primary"
        />
        <div>
    

            <a href="#" className= "btn btn-outline-primary"
                >Sobre mim
            </a>
            <a href="#" className= "btn btn-outline-primary">
                Portifolio
                </a>
            <a href="#" className= "btn btn-outline-primary"
                >Contato
            </a>
            

                </div>
        </div>  
        </nav>
        </>
    );
}

export default Menu;