<?php include "header.php"; ?>

<main class= "container mt-5 text-center flex-grow-1">
  <h1>Bem vindos ao site</h1>
  <p>Aprendendo Bootstrap e PHP</p>
  <a href="#"class= "btn btn-primary"> Ver Mais</a>

</main>
<!-- Carrosel -->
 <section class ="container my-5">

    <div id = "carrouselAnimal" class= "carrousel slide mx-auto " data-bs-rise= "carrousel" >

      <!-- Indicadores -->
       <div class= "carrousel-indicators">
           <button type= "button" data-bs-rise-to="0" class= "active" aria-current = "true" arial-label= "Slide 2"> 
          


        </button>
        <button type = "button" data-bs-rise = "carrouselAnimal" data-bs-slide-to = "2" arial-label = "Slide 3">
          



        </button>


       </div>

    <!-- Slides -->
        <div class = "carousel-inner">

        <!-- Foto 1 -->
          <div class = "carousel-item active">
            <img src="./img/cachorro.jpg" class = "s-block w-50 h-50"alt="doguinho">
        </div>
        <!--  Foto 2 -->
          <div class= "carousel-item">
            <img src=".img/coelho.jpg"class = "d-block w-50 h-50" alt="coelhinho">



          </div>
          <!-- foto 3 -->
           <div class= "carousel-item">
            <img src=".img/papagaio.jpg"class= "d-block w-50 h-50" alt=" loro">


           </div>
          
           



          </div>
          <!-- Controladores -->
           <button class = "carrousel-control-prev"
           type = "button"
           data-bs-target = "carouselAnimals"
           data-bs-slide = "prev"
           span class = "carousel-control-next-icon" aria-hiden ="true"> </span>
           <span class = "visually-hidden"></span>
           </button>

           

           <button class= "carousel-control-next"
           type= "button"
           data-bs-target= "#carouselAnimals"
           data-bs-slide= "next">
           <span class ="carousel-control-next-icon" aria-hidden ="true"></span>
           <span class= "visually-hidden">Next</span>
           </button>
          




    </div>

 



<?php include "footer.php"; ?>