import React from "react";
import Card from "../Componentes/Card";
import foto1 from"../Img/foto1.png";

function Home(){
    return(
        <>
        <h1>Home</h1>
        <Card
           imagem={foto1}
           pais="Brasil"
           destino="Rio de Janeiro"
           />
        </>
    );
}export default Home;