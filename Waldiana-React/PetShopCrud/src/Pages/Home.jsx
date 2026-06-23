import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/fotogato.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/fotoanimais.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="./img/banner.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <h1 className="display-4">
          Casa dos Pets Vila Matilde
        </h1>
        <p className="lead">
          Banho, Tosa, hotelzinho e tudo pro seu pet em um só lugar na Zona Leste.
        </p>
        <div className="mt-5 d-flex gap-5 justify-content-center">
          <Link
            to="/Agendamentos"
            className="btn btn-primary btn-lg"
          >
            Agendar Banho e tosa
          </Link>
          <Link
            to="/produtos"
            className="btn btn-primary btn-lg"
          >
            Ver Produtos
          </Link>
          </div>



      </div>
    </div>
  );
}

export default Home;