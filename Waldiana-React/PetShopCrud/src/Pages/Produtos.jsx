import React from "react";
import Card from "../Components/Card";

function Produtos() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-5">Nossos Produtos</h2>

      <div className="row g-4">
        {/* Card 1 - Ração */}
        <div className="col-md-3 col-sm-6 d-flex">
          <div className="card w-100 h-100 shadow-sm border-0 rounded-3 p-3 text-center">
            <Card
              imagem="./img/racao.jpeg"
              nome="Ração"
              preco={50}
              style={{
                height: "220px",
                objectFit: "contain",
                width: "100%"
              }}
            />
          </div>
        </div>

        {/* Card 2 - Shampoo */}
        <div className="col-md-3 col-sm-6 d-flex">
          <div className="card w-100 h-100 shadow-sm border-0 rounded-3 p-3 text-center">
            <Card
              imagem="./img/shampoo.jpg"
              nome="Shampoo"
              preco={40}
              style={{
                height: "220px",
                objectFit: "contain",
                width: "100%"
              }}
            />
          </div>
        </div>

        {/* Card 3 - Brinquedos */}
        <div className="col-md-3 col-sm-6 d-flex">
          <div className="card w-100 h-100 shadow-sm border-0 rounded-3 p-3 text-center">
            <Card
              imagem="./img/brinquedo.jpeg"
              nome="Brinquedos"
              preco={30}
              style={{
                height: "220px",
                objectFit: "contain",
                width: "100%"
              }}
            />
          </div>
        </div>

        {/* Card 4 - Cama */}
        <div className="col-md-3 col-sm-6 d-flex">
          <div className="card w-100 h-100 shadow-sm border-0 rounded-3 p-3 text-center">
            <Card
              imagem="./img/cama.jpg"
              nome="Cama"
              preco={100}
              style={{
                height: "220px",
                objectFit: "contain",
                width: "100%"
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Produtos;