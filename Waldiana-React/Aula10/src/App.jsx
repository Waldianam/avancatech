import React from "react";
import Botao from "./Componentes/Botao";
import Mensagem from "./Componentes/Mensagem";
import Produto from "./Componentes/Produto";

function App(){

        let nome= "Waldiana";
        let idade= 47;
        let curso= "Avança Tech";



        
    return(
        <>
        <h1>Ola Mundo</h1>
        <Botao texto="Iniciar"/>
        <Botao texto="Sair"/>
        <Botao texto= "Clique Aqui"/>

        <Mensagem/>

        <Produto nome= "celular"preco="3.000" />

        <Produto nome= "PC " preco= "5.000"/>

        <p>{nome}</p>
        <p>{idade}</p>
        <p>{curso}</p>

        
        

        </>


    );
}
export default App;