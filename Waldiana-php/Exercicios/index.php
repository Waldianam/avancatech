<!DOCTYPE html>
<html>
<head>
    <title>Exercício PHP</title>

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css&quot; rel="stylesheet">
</head>
<body>

<div class="container mt-5">

    <h2 class="mb-4">Cadastro de Pessoa</h2>

    <!-- FORMULÁRIO -->
    <form method="POST">

        <div class="mb-3">
            <label class="form-label">Nome</label>
            <input type="text" name="nome" class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Idade</label>
            <input type="number" name="idade" class="form-control">
        </div>

        <button class="btn btn-primary">Enviar</button>

    </form>

    <hr>

    <h3>Resultado:</h3>

    <?php
        // ==========================
        // EXERCÍCIO DOS ALUNOS
        // ==========================
        // Mostrar o nome e idade digitados
        // Exemplo esperado:
        // Olá João, você tem 20 anos
        if(isset($_POST["nome" && "idade" ])){
            $nome = $_POST["nome"];
            $idade = $_POST["idade"];
            echo"<h1>Olá $nome, você tem 



        } 
    
        
        
    ?>

</div>

</body>
</html>