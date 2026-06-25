import React from"react";
import Card from "../Components/Card";


function Produtos(){
    return(
    <>
        <div className="d-flex justify-content-around gap-3 mt-3">
            <Card imagem={"./img/racao.jpeg"} preco={50} nome={"Ração"} />
            <Card imagem={"./img/shampoo.jpg"} preco={40} nome={"Shampoo"} />
            <Card imagem={"./img/brinquedo.jpeg"} preco={30} nome={"Brinquedos"} />
            <Card imagem={"./img/cama.jpg"} preco={100} nome={"Cama"} />

        </div>
    </>
    );
}
export default Produtos;
