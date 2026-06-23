import React, { useState } from "react";


function Botao(){

    const [pontuacao, setpontuacao] = useState(0);
    const aumentar = () =>{
        setpontuacao( pontuacao + 1);
    }

    return(
        <>
        <h1> Pontos:{pontuacao}</h1>
        <button onClick ={aumentar}>Click me</button>
        
        </>

    );
}
export default Botao;