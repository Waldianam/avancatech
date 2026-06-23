import React,{useState} from "react";
 
function App(){

    const [numero, setNumero] = useState(0);
    const [nome, setNome] = useState("");

    const aumentar = () => {
        setNumero(numero + 1);
    }
     
     const diminuir = () => {
        setNumero (numero -1);
     }

    return(
        <>
        <h1>Moedas: {numero}</h1>
        <button onClick= {aumentar} className="btn btn-primary">
            +


        </button>

        <button onClick= {diminuir} className = "btn btn-danger">
            -
        </button>

        <form>
            <label>Digite seu nome</label>
            <input type="text" 
            placeholder= "nome"
            onChange= {(e) => setNome(e.target.value)}
            />

            <h3>Ola { nome} </h3>
        </form>



        
        </>
    );

    

        
    }
    

        
    
    

export default App;