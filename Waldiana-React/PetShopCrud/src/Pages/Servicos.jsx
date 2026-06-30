import React from "react";

function Servicos() {
  return (
    <>
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/img/vet.png" class="d-block w-100" alt="veterinario" style={{height: "450px",  objectFit: "contain", width: "100%" }}/>
    </div>
    <div class="carousel-item">
      <img src="/img/hotelzinho.png" class="d-block w-100" alt="hotel" style={{height: "450px",  objectFit: "contain", width: "100%" }}/>
    </div>
    <div class="carousel-item">
      <img src="/img/banhoetosa.png" class="d-block w-100" alt="banho e tosa" style={{height: "450px",  objectFit: "contain", width: "100%" }}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
      

    
    </>
  );
}

export default Servicos;