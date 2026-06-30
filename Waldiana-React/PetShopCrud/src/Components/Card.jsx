// Components/Card.jsx
import React from "react";

function Card({ imagem, nome, preco, style }) {
  return (
    <div className="h-100 d-flex flex-column">
      {/* Imagem com tamanho fixo */}
      <img
        src={imagem}
        alt={nome}
        className="img-fluid rounded mb-3"
        style={style}
      />

      {/* Nome do produto */}
      <h5 className="mb-2">{nome}</h5>

      {/* Preço */}
      <p className="text-muted fs-5 mb-3">R$ {preco.toFixed(2).replace(".", ",")}</p>

      {/* Botão alinhado na parte inferior */}
      <button className="btn btn-outline-dark mt-auto w-100">Ver Detalhes</button>
    </div>
  );
}

export default Card;