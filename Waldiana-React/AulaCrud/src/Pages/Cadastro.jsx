function Cadastro() {
  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <form className="card p-4 shadow">

            <h2 className="text-center mb-4">
              Cadastro
            </h2>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Nome"
            />

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email"
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Senha"
            />

            <button className="btn btn-primary">
              Cadastrar
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Cadastro;