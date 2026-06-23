//importando o React para utilizar
import React from "react";
import Botao from "./componentes/Botao";

//Criando uma função principal do meu codigo
function App (){
    return(
        <>
        <h1>Olá, Mundo</h1>
        <p>Aprendendo React</p>

        <Botao />
        
        </>

    )
}
///exportando a função para utilizar em qualquer lugar do codigo
export default App;