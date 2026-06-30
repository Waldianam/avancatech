import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* Coluna 1 - Sobre */}
          <div className="col-md-4">
            <h5 className="mb-3">Casa dos Pets</h5>
            <p className="text-light">
              Sua loja completa para todos os tipos de animais. Qualidade, confiança e os melhores preços do mercado.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div className="col-md-4">
            <h5 className="mb-3">Contato</h5>
            <p className="mb-1">📍 Endereço: Rua dos Animais, 123 - São Paulo/SP</p>
            <p className="mb-1">📞 Telefone: (11) 98765-4321</p>
            <p className="mb-1">✉️ E-mail: contato@casadospets.com.br</p>
          </div>

          {/* Coluna 3 - Redes Sociais e Links */}
          <div className="col-md-4">
            <h5 className="mb-3">Siga-nos</h5>
            <div className="d-flex gap-3 fs-4 mb-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">📸</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">📘</a>
              <a href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" className="text-white">💬</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">📺</a>
            </div>
            <ul className="list-unstyled mt-3">
              <li><Link to="/sobre" className="text-light text-decoration-none">Sobre nós</Link></li>
              <li><Link to="/produtos" className="text-light text-decoration-none">Nossos produtos</Link></li>
              <li><Link to="/servicos" className="text-light text-decoration-none">Serviços</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Política de privacidade</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-4 text-secondary" />

        <div className="text-center">
          <p className="mb-0">© 2026 Casa dos Pets - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;