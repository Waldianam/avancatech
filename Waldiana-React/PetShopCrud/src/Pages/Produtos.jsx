import React from"react";
import Card from "../Components/Card";


function Produtos(){
    return(
    <>
        <div className="d-flex justify-content-around gap-3 mt-3">
            <Card imagem={"./img/fotogato.png"} preco={100} nome={"gatinho"} />
            <Card imagem={"./img/banner.png"} preco={105000} nome={"loja"} />
            <Card imagem={"./img/servicos.png"} preco={89} nome={"servicos"} />
            <Card imagem={"./img/fotoanimais.png"} preco={80009} nome={"animais"} />

        </div>
    </>
    );
}
export default Produtos;
