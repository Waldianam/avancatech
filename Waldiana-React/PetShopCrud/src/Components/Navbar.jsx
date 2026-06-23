import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
           
                <Link className="navbar-brand" to="/" > Casa dos Pets </Link>
                <div>
                    <Link className="btn btn-outline-light me-2" to="/" > Home </Link>
                    <Link className="btn btn-success" to="/produtos" > Produtos </Link>
                    <Link className="btn btn-success" to="/agendamento" > Agendamento </Link>
                    <Link className="btn btn-success" to="/servicos" > Servicos </Link>
                    <Link className="btn btn-success" to="/sobre" > Sobre </Link>
                    
                </div>
        </div>
    </nav>
  );
}


export default Navbar;




