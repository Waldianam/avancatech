import React from "react";

function Produto({nome,preco,estoque}){
    return(
        <>
        <h3>Dados do Produto</h3>
        <p>Nome: {nome}</p>
        <p>preco:{preco}</p>
        <p>estoque= {estoque}</p>


        </>
    );

}export default Produto;