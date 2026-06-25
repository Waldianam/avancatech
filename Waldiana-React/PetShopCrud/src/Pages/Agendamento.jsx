import { useEffect, useState } from "react";
import axios from "axios";


function Agendamento() {


  const [clientes, setClientes] = useState([]);


  const [id, setId] = useState(null);


  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");


  useEffect(() => {
    carregarAgendamento();
  }, []);


  function carregarAgendamento() {


    axios
      .get("http://localhost:3001/clientes")
      .then((resposta) => {
        setClientes(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });


  }


  function limparCampos() {


    setId(null);


    setNome("");
    setEndereco("");
    setTelefone("");
    setEmail("");


  }


  function cadastrar() {


    axios
      .post(
        "http://localhost:3001/clientes",
        {
          nome,
          endereco,
          telefone,
          email
        }
      )
      .then(() => {


        carregarAgendamento();


        limparCampos();


      });


  }


  function editar(clientes) {


    setId(clientes.id);


    setNome(clientes.nome);


    setEndereco(clientes.endereco);


    setTelefone(clientes.telefone);


    setEmail(clientes.email);


  }


  function atualizar() {


    axios
      .put(
        `http://localhost:3001/clientes/${id}`,
        {
          nome,
          endereco,
          telefone,
          email
        }
      )
      .then(() => {


        carregarClientes();


        limparCampos();


      });


  }


  function excluir(id) {


    if (!window.confirm("Deseja excluir?")) {
      return;
    }


    axios
      .delete(
        `http://localhost:3001/clientes/${id}`
      )
      .then(() => {


        carregarAgendamento();


      });


  }


  return (


    <div className="container mt-4">


      <div className="card shadow p-4">


        <h2 className="mb-4">
          Agendamento
        </h2>


        <div className="row">


          <div className="col-md-6">


            <label>
              Nome
            </label>


            <input
              type="text"
              className="form-control mb-3"
              value={nome}
              onChange={(e) =>
                setNome(e.target.value)
              }
            />


          </div>


          <div className="col-md-6">


            <label>
              Endereco
            </label>


            <input
              type="text"
              className="form-control mb-3"
              value={endereco}
              onChange={(e) =>
                setEndereco(e.target.value)
              }
            />


          </div>


        </div>


        <div className="row">


          <div className="col-md-6">


            <label>
              Telefone
            </label>


            <input
              type="number"
              className="form-control mb-3"
              value={telefone}
              onChange={(e) =>
                setTelefone(e.target.value)
              }
            />


          </div>


          <div className="col-md-6">


            <label>
              Email
            </label>


            <input
              type="text"
              className="form-control mb-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />


          </div>


        </div>


        {id ? (


          <button
            className="btn btn-warning"
            onClick={atualizar}
          >
            Atualizar Cliente
          </button>


        ) : (


          <button
            className="btn btn-primary"
            onClick={cadastrar}
          >
            Cadastrar Cliente
          </button>


        )}


      </div>


      <div className="card shadow mt-4 p-4">


        <h3>
          Clientes Cadastrados
        </h3>


        <table className="table table-striped mt-3">


          <thead className="table-dark">


            <tr>


              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>Ações</th>


            </tr>


          </thead>


          <tbody>


            {clientes.map((cliente) => (


              <tr key={cliente.id}>


                <td>{cliente.id}</td>


                <td>{cliente.nome}</td>


                <td>{cliente.endereco}</td>


                <td>
                  R$ {cliente.telefone}
                </td>


                <td>
                  {cliente.email}
                </td>


                <td>


                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() =>
                      editar(cliente)
                    }
                  >
                    Editar
                  </button>


                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      excluir(cliente.id)
                    }
                  >
                    Excluir
                  </button>


                </td>


              </tr>


            ))}


          </tbody>


        </table>


      </div>


    </div>


  );
}


export default Agendamento;

