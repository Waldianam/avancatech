import React from "react";

function Produto(props){
    
    return(
        <>
        <h1>  Produto    </h1>
        {props.nome}
        <p>Preço R$</p>
        {props.preco}

        </>
    );
}
export default Produto;