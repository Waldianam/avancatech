import React from "react";
import { Link } from "react-router-dom";

function Navbar(){


return(
    <>
    <nav className= " bg-dark p-3 text-white">
        <div className= "Container d-flex justify-content-around align-items-center">

            <Link to= "/" className= "fs-4 fw-bold  text-white text-decoration-none">Barbearia</Link>

            <div className="d-flex gap-4">
                <Link to="/" className= "btn btn-light">Home</Link>

                <Link to= "/contato" className= "btn btn-light">Contato</Link>

                <Link to= "/cadastro" className= "btn btn-light">Cadastro</Link>
            </div>

        </div>

    </nav>
    </>
);
}
export default Navbar;