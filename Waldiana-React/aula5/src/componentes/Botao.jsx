import React from "react";

function Botao(){
    const clicar = () =>{
        alert("Você Clicou no Botão.");


    }


    return(
        <>
        <button onClick= {clicar}>
            Click Aqui
            </button>
        </>


    );
}
export default Botao;