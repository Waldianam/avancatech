
import React, {useState} from "react";

function Formulario(){
    const[nome, setNome]= useState("");
    const[idade, setIdade] = useState("");
    const[curso, setCurso]= useState("");

    const mostrarMensagem = () =>{
        alert(
            "Ola, Seja bem vindo a Programação Avançada em React" + nome
        );



    }

    return(
        <>
        <form>
            <label>Digite o seu Nome</label>
            
            
            <input
                type= "text"
                onChange={(e) => setNome(e.target.value)}
        
            />
            <label>Digite a sua idade</label>
            <input
                type= "number"
                onChange={(e)=> setIdade(e.target.value)} 
             />
             <label>Digite o seu Curso</label>
             <input 
                type= "text"
                onChange={(e)=> setCurso(e.target.value)}
                />  

            <button onClick={mostrarMensagem}>
                Mostrar
            </button>
            </form>
            </>
    );

}
export default Formulario;