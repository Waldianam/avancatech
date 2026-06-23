import React from "react";
import Home from ".Pages/Home";

const App = () =>{
    const nome= "Waldiana";
    const sobre_nome = "Marques";
    let idade= 47;

    const Carro = {
        rodas: 4,
        marca: "Ford"
    };

    function quadrado(x){
        return x*x;
    }
    return(
        <>
        
        

        
            
                
        
            <Home/>
        <p>Meu nome é: {nome.toUpperCase()}</p>
        <p>Meu sobrenome é: {sobre_nome.toLoverCase()}</p>
        <p>Minha idade: {idade}</p>
        <p>A marca do meu carro é: {Carro.marca}</p>
        <p>Quantas rodas tem o carro: {Carro.rodas}</p>
        <p>O número 10 ao quadrado é {quadrado(10)}</p>
        <p>{quadrado(3)=== 4 ? "Fórmula Correta": "Fórmula Incorreta"}</p>
        <p>{Date() }</p>
        <p>{new Date().getFullYear()}</p>
        </>

        
        
    );
}
export default App;