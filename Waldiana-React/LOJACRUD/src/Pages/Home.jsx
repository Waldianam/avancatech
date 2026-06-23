import { Link } from "react-router-dom";
import loja2 from "../img/loja2.jpg"


function Home() {
  return (
    <div className="container mt-5">


      <div className="text-center">


        <h1 className="display-4">
          Loja DW Modas
        </h1>


        <p className="lead">
          Sistema CRUD React + Node + MySQL
        </p>


        <img 
          src={loja2}
          alt="Loja"
          className="img-fluid rounded shadow"
          width={800}
        />


        <div className="mt-4">


          <Link
            to="/produtos"
            className="btn btn-warning btn-lg"
          >
            Ver Produtos
          </Link>


        </div>


      </div>


    </div>


  );
}


export default Home;






