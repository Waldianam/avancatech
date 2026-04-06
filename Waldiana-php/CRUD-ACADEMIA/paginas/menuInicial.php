<?php include "header.php"; ?>

  <main class= "container mt-5 text-center flex-grow-1">
    <h1 class="h1">Bem vindos a Academia  SW</h1>
    <p class="fs-4">Aqui cada treino te aproxima da sua melhor versão. Transforme suor em conquista!!💪🏽</p>
    <a href="../criar.php"class= "btn btn-primary p-3"> Matricule-se já</a>
  </main>

  <div id="carouselExampleAutoplaying" class="carousel slide container my-5  " data-bs-ride="carousel">
    
    <div class="carousel-inner">

      <div class="carousel-item active">
        <img src="./img/esteira.jpg" class="d-block w-100 rounded" alt="esteira">
      </div>

      <div class="carousel-item">
        <img src="./img/musculacao.jpg" class="d-block w-100 rounded" alt="aparelho">
      </div>

      <div class="carousel-item">
        <img src="./img/piscina.jpg" class="d-block w-100 rounded" alt="piscina">
      </div>

      <div class="carousel-item">
        <img src="./img/predio.jpg" class="d-block w-100 rounded" alt="predio">
      </div>

    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.min.js" integrity="sha384-G/EV+4j2dNv+tEPo3++6LCgdCROaejBqfUeNjuKAiuXbjrxilcCdDz6ZAVfHWe1Y" crossorigin="anonymous"></script>
 



<?php include "footer.php"; ?>