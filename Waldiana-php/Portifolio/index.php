<?php

$mensagem = "" ;
if($_SERVER["REQUEST_METHOD"]== "POST"){
    $nome = $_POST["nome"];
    $email =$_POST["email"];
    $msg = $_POST["Mensagem"];

    $mensagem = "Mensagem enviada com sucesso";
}
?>
<!DOCTYPE html>
<html lang="PT-BR">
<head>
    
    <title>Portifólio - Waldiana Marques</title>
    <link href =https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css>


</head>

<body>
    <style>

body{
background:#0f172a;
color:white;
scroll-behavior:smooth;
}

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:center;
text-align:center;
}

.hero h1{
font-size:4rem;
font-weight:bold;
}

.section{
padding:80px 0;
}

.card{
background:#1e293b;
color:white;
border:none;
}

.skill{
background:#1e293b;
padding:20px;
border-radius:10px;
text-align:center;
}

footer{
background:#020617;
padding:20px;
text-align:center;
}

</style>

</head>

<body>

<!-- NAVBAR -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

<div class="container">

<a class="navbar-brand" href="#">Waldiana Marques</a>

<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">

<span class="navbar-toggler-icon"></span>

</button>

<div class="collapse navbar-collapse" id="menu">

<ul class="navbar-nav ms-auto">

<li class="nav-item">
<a class="nav-link" href="#home">Home</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#sobre">Sobre</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#experiencia">Experiência</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#formacao">Formação</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#projetos">Projetos</a>
</li>

<li class="nav-item">
<a class="nav-link" href="#contato">Contato</a>
</li>

</ul>

</div>

</div>

</nav>


<!-- HOME -->

<section id="home" class="hero">

<div>

<h1>Olá, eu sou</h1>

<h1 class="text-info">Waldiana Marques</h1>

<p class="lead">

</p>

<p>São Paulo / SP</p>

<a href="#contato" class="btn btn-info btn-lg mt-3">
Entrar em contato
</a>

</div>

</section>


<!-- SOBRE -->

<section id="sobre" class="section">

<div class="container">

<h2 class="text-center mb-5">Sobre Mim</h2>

<div class="row">

<div class="col-md-6">

<p>

Sou uma pessoa determinada, que adora desafios e muito discipinada. Estou em busca de uma oportunidade
na área de programação, na qual descobri que gosto muito! 
</p>

<p>



</p>

</div>

<div class="col-md-6">

<div class="row">

<div class="col-6 mb-3">
<div class="skill">HTML</div>
</div>

<div class="col-6 mb-3">
<div class="skill">CSS</div>
</div>

<div class="col-6 mb-3">
<div class="skill">Java</div>
</div>

<div class="col-6 mb-3">
<div class="skill">PHP</div>
</div>

</div>

</div>

</div>

</div>

</section>


<!-- EXPERIÊNCIA -->

<section id="experiencia" class="section bg-dark">

<div class="container">

<h2 class="text-center mb-5">Experiência</h2>

<div class="row">

<div class="col-md-4">

<div class="card p-4">



<p class="text-info"></p>

<p>

</p>

</div>

</div>

<div class="col-md-4">

<div class="card p-4">



<p class="text-info">Recepcionista</p>

<p>
Trabalho com cadastro de colaboradores,fornecedores e visitantes de 3 empresas.
</p>

</div>

</div>

<div class="col-md-4">

<div class="card p-4">



<p class="text-info">Auxiliar de escritório</p>

<p>
Serviços diversos: Vendas, arquivos, Gerenciamento de tarefas entre outras coisas. 
</p>

</div>

</div>

</div>

</div>

</section>


<!-- FORMAÇÃO -->

<section id="formacao" class="section">

<div class="container">

<h2 class="text-center mb-5">Formação</h2>

<ul class="list-group">

<li class="list-group-item">
Ensino Médio
</li>

<li class="list-group-item">
Curso Java — Avança Tech
</li>

<li class="list-group-item">
Curso PHP - Avança Tech
</li>

<li class="list-group-item">
Curso Informatica - Senac
</li>

</ul>

</div>

</section>



</p>

</div>

</div>

</div>

<div class="col-md-4">

<div class="card">

<div class="card-body">

<h5 class="card-title"></h5>

<p class="card-text">

</p>

</div>

</div>

</div>

<div class="col-md-4">

<div class="card">

<div class="card-body">

<h5 class="card-title">Mor</h5>

<p class="card-text">

</p>

</div>

</div>

</div>

</div>

</div>

</section>


<!-- CONTATO -->

<section id="contato" class="section">

<div class="container">

<h2 class="text-center mb-5">Contato</h2>

<?php if($mensagem != ""){ ?>

<div class="alert alert-success">
<?php echo $mensagem; ?>
</div>

<?php } ?>

<form method="POST">

<div class="row">

<div class="col-md-6 mb-3">

<input type="text" name="nome" class="form-control" placeholder="Seu nome" required>

</div>

<div class="col-md-6 mb-3">

<input type="email" name="email" class="form-control" placeholder="Seu email" required>

</div>

</div>

<div class="mb-3">

<textarea name="mensagem" class="form-control" rows="5" placeholder="Mensagem"></textarea>

</div>

<button class="btn btn-info btn-lg">
Enviar mensagem
</button>

</form>

</div>

</section>


<!-- FOOTER -->

<footer>

<p>© 2026 - Waldiana Marques</p>

</footer>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script&gt;





  



    
</body>
</html>
