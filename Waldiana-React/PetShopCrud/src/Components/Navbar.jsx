import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-bege2 ">
        <div className="container">
                <div className="d-flex gap-3" >
                  <img src="./img/Logopetshop.png" alt="" className="img-fluid" width={50}  />
                  <Link className="navbar-brand text-marrom" to="/" >    Casa dos Pets Vila Matilde </Link>
                </div>
                <div className="d-flex gap-3">
                    <Link className="btn btn-warning bg-laranja me-2" to="/" > Home </Link>
                    <Link className="btn btn-warning bg-laranja" to="/produtos" > Produtos </Link>
                    <Link className="btn btn-warning bg-laranja" to="/agendamento" > Agendamento </Link>
                    <Link className="btn btn-warning bg-laranja" to="/servicos" > Servicos </Link>
                    <Link className="btn btn-warning bg-laranja" to="/sobre" > Sobre </Link>
                    
                </div>
        </div>
    </nav>
  );
}


export default Navbar;




