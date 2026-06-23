import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
           
                <Link className="navbar-brand" to="/" > Loja Fashion </Link>
                <div>
                    <Link className="btn btn-outline-warning me-2" to="/" > Home </Link>
                    <Link className="btn btn-warning" to="/produtos" > Produtos </Link>
                </div>
        </div>
    </nav>
  );
}


export default Navbar;






