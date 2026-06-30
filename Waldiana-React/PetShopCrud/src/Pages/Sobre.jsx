import React from"react";
function Sobre() {
  return (
    <div className="container mt-5 mb-5">
      {/* Título principal */}
      <h1 className="text-center mb-5">Sobre a Casa dos Pets</h1>

      {/* Seção: Nossa História */}
      <div className="row mb-5 align-items-center">
        <div className="col-md-6">
          <h3 className="mb-3 text-primary">📖 Nossa História</h3>
          <p className="text-muted lh-lg">
            A <strong>Casa dos Pets</strong> nasceu em 2020, com um sonho simples: oferecer um lugar onde os animais fossem tratados com o carinho e respeito que merecem. Começamos como uma pequena loja de bairro, com poucos produtos e muita vontade de fazer a diferença.
          </p>
          <p className="text-muted lh-lg">
            Com o tempo, conquistamos a confiança de clientes e seus companheiros de quatro patas. Hoje, somos referência na região, unindo variedade de produtos, serviços de qualidade e uma equipe apaixonada por animais. Nosso crescimento só foi possível graças à confiança de quem nos escolhe todos os dias.
          </p>
        </div>
        <div className="col-md-6">
          <img 
            src="/img/banner.png" 
            alt="Nossa loja" 
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>

      {/* Seção: Missão, Visão e Valores */}
      <div className="row g-4">
        {/* Missão */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-3 p-4 bg-light">
            <h4 className="text-center text-dark mb-3">🎯 Nossa Missão</h4>
            <p className="text-center text-muted lh-lg">
              Proporcionar saúde, bem-estar e alegria aos animais de estimação, oferecendo produtos e serviços de alta qualidade, com atendimento personalizado e sempre com muito amor e dedicação.
            </p>
          </div>
        </div>

        {/* Visão */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-3 p-4 bg-light">
            <h4 className="text-center text-dark mb-3">🔭 Nossa Visão</h4>
            <p className="text-center text-muted lh-lg">
              Ser reconhecida como a melhor e mais confiável petshop da região, expandindo nossa estrutura e serviços, mantendo sempre a qualidade e o carinho que nos tornaram especiais.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0 rounded-3 p-4 bg-light">
            <h4 className="text-center text-dark mb-3">💚 Nossos Valores</h4>
            <ul className="text-muted lh-lg">
              <li>Amor e respeito por todos os animais</li>
              <li>Ética e transparência em todas as relações</li>
              <li>Qualidade garantida em produtos e serviços</li>
              <li>Atendimento próximo e personalizado</li>
              <li>Compromisso com a saúde e segurança dos pets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Frase final */}
      <div className="text-center mt-5 pt-4 border-top">
        <h5 className="text-muted">
          🐾 Na Casa dos Pets, seu amigo é tratado como parte da família!
        </h5>
      </div>
    </div>
  );
}

export default Sobre;
