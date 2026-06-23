
import React from "react";

function Tema(props){
    return(
        <>
            <div 
                className={ props.escuro ? "bg-dark text-light" : "bg-light text-dark" } 
                style={{minHeight: "100vh"}} 
            >
                <button 
                    className={ props.escuro ? "btn btn-light w-100" : "btn btn-dark w-100" } 
                    onClick={props.trocarTema} 
                >
                    Trocar Tema
                
                </button>

                <h1 className=" mb-4 text-center">
                    { 
                        props.escuro ? " Tema Escuro " : " Tema Claro " 
                    }
                </h1>

            </div>
        </>
    );
}

export default Tema;