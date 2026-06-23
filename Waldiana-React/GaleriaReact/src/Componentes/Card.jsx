import React from "react";

function Card({imagem,destino,pais}){
    return(
        <>
        <div className= "card shadow h-100 w-25">
            <img src={imagem}alt={destino} className="card-img-top"/>


            <div className="card-body">
                <h2>{destino}</h2>
                <p>{pais}</p>
            </div>


        </div>
        </>
    );
}
export default Card;