function Card({ imagem, preco, nome  }) {
  return (

    <div className="card shadow h-100">

      <img
        src={imagem}
        className="card-img-top"
        alt={preco}
      />

      <div className="card-body">

        <h5>R$: {preco}</h5>

        <p className="lead">{nome}</p>

      </div>

    </div>

  );
}

export default Card;
