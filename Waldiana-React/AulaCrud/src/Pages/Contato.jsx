import { useState } from "react";

function Contato() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(e) {

    e.preventDefault();

    alert(`
      Nome: ${nome}
      Email: ${email}
      Mensagem: ${mensagem}
    `);

    setNome("");
    setEmail("");
    setMensagem("");
  }

  return (

    <div className="container">

      <div className="row justify-content-center align-items-center vh-100">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Contato
            </h2>

            <form onSubmit={enviarFormulario}>

              <div className="mb-3">

                <label className="form-label">
                  Nome
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Mensagem
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Digite sua mensagem"
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                >
                </textarea>

              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Enviar
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contato;




