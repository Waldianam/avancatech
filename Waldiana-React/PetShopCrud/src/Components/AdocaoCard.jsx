import React from 'react';

const AdocaoCard = () => {
  return (
    <div className="container my-4">
      <div 
        className="card border-0 shadow-sm mx-auto" 
        style={{ maxWidth: '420px', borderRadius: '20px', overflow: 'hidden' }}
      >
        {/* Seção superior */}
        <div 
          className="position-relative"
          style={{ 
            backgroundColor: '#b8e0c8', 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.82l2.83-2.83 1.41 1.42L1.41 22.24H0v-1.42zM0 3.05l2.83-2.83 1.41 1.41L1.41 4.46H0V3.05z' fill='%2394c7a8' fill-opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Corações decorativos */}
          <div className="position-absolute top-0 start-0 p-3">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#d8a7e8" opacity="0.8">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <div className="position-absolute top-0 end-0 p-3">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="#d8a7e8" opacity="0.8">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>

          <div className="text-center pt-4 pb-2">
            <p className="text-uppercase m-0" style={{ color: '#9b6bb8', fontWeight: 600, fontSize: '1.1rem' }}>
              Feira de adoção
            </p>
            <h2 className="fw-bold text-white" style={{ fontSize: '2.2rem', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
              Adote amor!
            </h2>
          </div>

          <div className="d-flex justify-content-center">
            <img 
              src="/img/adocao.png" 
              alt="Cachorro laranja e gato cinza" 
              className="img-fluid"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Data e horário */}
        <div className="p-3 text-center" style={{ backgroundColor: '#d898c8' }}>
          <div className="d-flex align-items-center justify-content-center gap-3">
            <h1 className="display-3 fw-bold text-white m-0">04</h1>
            <div className="text-start">
              <p className="text-white m-0 fs-4">JULHO</p>
              <p className="text-white m-0 fs-5">10h às 14h</p>
            </div>
          </div>

          <div 
            className="mt-2 p-2 rounded" 
            style={{ backgroundColor: '#ffffff90', display: 'inline-block' }}
          >
            <p className="m-0 small fw-medium">
              Adultos e Filhotes<br/>
              Vacinados • FIV e FELV Negativos
            </p>
          </div>
        </div>

        {/* Endereço */}
        <div className="p-3 d-flex align-items-center gap-2" style={{ backgroundColor: '#a8c8e8' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#2c3e50">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span className="fw-medium">Rua Lisboa 414 - Cerqueira César</span>
        </div>

        {/* Botões de ação */}
        <div className="p-3 d-flex gap-2 justify-content-center" style={{ backgroundColor: '#b8e0c8' }}>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn w-50 fw-medium"
            style={{ borderRadius: '12px', backgroundColor: '#6fa8dc', border: 'none', color: '#fff' }}
          >
            📍 Ver no Mapa
          </a>
          <a 
            href="https://wa.me/5511999998888" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn w-50 fw-medium"
            style={{ borderRadius: '12px', backgroundColor: '#78c679', border: 'none', color: '#fff' }}
          >
            💬 Contato
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdocaoCard;