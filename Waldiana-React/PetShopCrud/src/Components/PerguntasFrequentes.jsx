import React from "react";

function PerguntasFrequentes() {
  return (
    <div className="container py-5">

      <h1 className="text-center mb-4">Perguntas Frequentes </h1>

      {/* Carousel */}
      <div
        id="carouselReact"
        className="carousel slide mb-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselReact"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselReact"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#carouselReact"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/img/fotoanimais.png"
              className="d-block w-100"
              alt="cachorro"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>🩺 Saúde e cuidados</h3>
              
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/lulu.png"
              className="d-block w-100"
              alt="Componentes"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>🐾 Sobre raças e características</h3>
              
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="/img/coelho.jpg"
              className="d-block w-100"
              alt="Bootstrap"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>🐶 Sobre adoção</h3>
              <p></p>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselReact"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselReact"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Accordion */}
      <div className="accordion" id="accordionReact">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pergunta1"
            >
              Com que frequência devo levar meu animal ao veterinário?
            </button>
          </h2>

          <div
            id="pergunta1"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionReact"
          >
            <div className="accordion-body">
              Deve haver uma consulta preventiva por ano, pelo menos. Filhotes, animais idosos ou com doenças precisam de acompanhamento mais frequente.
    
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pergunta2"
            >
              O Lulu da Pomerânia é um cachorro que precisa de muitos cuidados?
            </button>
          </h2>

          <div
            id="pergunta2"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionReact"
          >
            <div className="accordion-body">
              Sim. Ele tem pelagem longa que requer escovação frequente, é muito ativo e carinhoso, mas também pode ser sensível. Precisa de passeios curtos diários e atenção especial com a saúde bucal e articulações.
              
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pergunta3"
            >
              Por que devo adotar em vez de comprar um animal?
            </button>
          </h2>

          <div
            id="pergunta3"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionReact"
          >
            <div className="accordion-body">
              Ao adotar, você salva uma vida, ajuda a diminuir o número de animais abandonados e encontra companheiros fiéis. A maioria dos animais para adoção já é vacinada, castrada e avaliada quanto à saúde e comportamento.
            
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default PerguntasFrequentes;