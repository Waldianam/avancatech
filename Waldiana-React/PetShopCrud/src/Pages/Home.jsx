import { Link } from "react-router-dom";


function Home() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="/">Animais</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Serviços
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/banho">Cachorro</a></li>
                <li><a className="dropdown-item" href="/tosa">Gato</a></li>
                <li><a className="dropdown-item" href="/hotelzinho">Pássaro</a></li>
                <li><a className="dropdown-item" href="/veterinario">Peixe</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/adocao">Adoção</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contato">Contato</a>
            </li>

          </ul>
        </div>

      </div>
    </nav>


  
    <div className="container mt-5">
      <h1 className="mb-5 text-center">Encontre tudo para o seu Pet</h1>

      {/* Linha com ajuste de altura e espaçamento */}
      <div className="row g-4 mt-4">

        {/* Card 1 - Cão */}
        <div className="col-md-3 d-flex flex-column align-items-center text-center">
          <img
            src="/img/fotopug.png"
            alt="Cão"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
          <h5 className="mt-3">Cão</h5>
          <p className="flex-grow-1">Tudo para seu amigo canino</p>
          <Link to="/produtos" className="btn btn-outline-dark mt-2">Ver Produtos</Link>
        </div>

        {/* Card 2 - Gato */}
        <div className="col-md-3 d-flex flex-column align-items-center text-center">
          <img
            src="/img/fotogato.png"
            alt="Gato"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "250px", objectFit: "cover" }}
          />
          <h5 className="mt-3">Gato</h5>
          <p className="flex-grow-1">Itens e cuidados completos</p>
          <Link to="/produtos" className="btn btn-outline-dark mt-2">Ver Produtos</Link>
        </div>

        {/* Card 3 - Rações */}
        <div className="col-md-3 d-flex flex-column align-items-center text-center">
          <img
            src="/img/racao.jpeg"
            alt="Rações"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "170px", objectFit: "contain" }}
          />
          <h5 className="mt-3">Rações</h5>
          <p className="flex-grow-1">Alimentos de qualidade</p>
           <Link to="/produtos" className="btn btn-outline-dark mt-2">Ver Produtos</Link>
        </div>

        {/* Card 4 - Higiene */}
        <div className="col-md-3 d-flex flex-column align-items-center text-center">
          <img
            src="/img/shampoo.jpg"
            alt="Higiene"
            className="img-fluid rounded w-100"
            style={{ maxHeight: "170px", objectFit: "contain" }}
          />
          <h5 className="mt-3">Higiene</h5>
          <p className="flex-grow-1">Cuidados para seu pet</p>
           <Link to="/produtos" className="btn btn-outline-dark mt-2">Ver Produtos</Link>
        </div>

      </div>
    </div>
  


    </>
  );
}

export default Home;