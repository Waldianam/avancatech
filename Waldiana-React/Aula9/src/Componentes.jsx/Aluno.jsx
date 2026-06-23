import React from "react";

function Aluno({ nome, idade, curso}){
    return(
        <>
        <h3>Dados do aluno</h3>
        <p>Nome: {nome} </p>
        <p>Idade:{idade} </p>
        
        <p>Curso:{curso}</p>

        </>


        
        
    );
}

export default Aluno;