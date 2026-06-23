import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className= "bg-dark p-3 mb-5">
            <div className="Container d-flex justify-content-around align-items-center">
                <h1 className="text-primary">Galeria de fotos</h1>

                <div className= "d-flex gap-5" >
                    <Link to="/" className="btn btn-outline-primary">Home</Link>
                    <Link to=" /Viagens" className="btn btn-outline-primary">Viagens</Link>
                    <Link to="/Contato" className= "btn btn-outline-primary">Contato</Link>
                    <Link to="/Cadastro" className= "btn btn-outline-primary">Cadastro</Link>
                </div>

            </div>
        </nav>
        
        </>
    );
}
export default Navbar;