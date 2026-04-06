<?php

include("conexao.php");

$id = $_GET["id"];

$resultado = mysqli_query($conexao, "SELECT * FROM alunos WHERE id=$id");

$aluno = mysqli_fetch_assoc($resultado);


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    
</head>

<body class= " mt-5">
    <div class="container">


    <h1 class= "text-warning mb-5">Editar aluno</h1>
    <form action= "atualizar.php" method="POST">
        
        <input type="hidden" name= "id" value= "<?php echo $aluno['id']; ?>">
        <label>digite seu nome:</label>
        <input type="text" name = "nome" class="form-control" value="<?php echo $aluno['nome'];?>">
        <br><br>

        <label>Digite seu email</label>
        <input type="text" name= "email" class= "form-control" value="<?php echo $aluno['email'];?>">
        <br><br>

        <label>Digite o seu Telefone </label>
        <input type="number" name= "telefone" class= "form-control" value="<?php echo $aluno['telefone'];?>">
        <br><br>

        <label>Escolha a sua unidade</label>
        <select name="unidade" class= "form-control">
            <option <?php if($aluno['Unidade']=='Shopping Aricanduva')echo "selected";?>>Shopping Aricanduva</option>
            <option <?php if($aluno['Unidade']=='Carrão')echo "selected";?>>Carrão</option>
            <option <?php if($aluno['Unidade']=='Vila Matilde')echo "selected";?>>Vila Matilde</option>
            <option <?php if($aluno['Unidade']=='Tatuapé')echo "selected";?>>Tatuapé</option>
        </select>
        <br><br>

   

        <label >Escolha o seu plano</label>
        <select name="plano"class ="form-control">
            <option <?php if($aluno['plano']=='Mensal')echo "selected";?>>Mensal</option>
            <option <?php if($aluno['plano']=='Trimestral')echo "selected";?>>Trimestral</option>
            <option <?php if($aluno['plano']=='Semestral')echo "selected";?>>Semestral</option>
            <option <?php if($aluno['plano']=='Anual')echo "selected";?>>Anual</option>
        </select>
        <br><br>

        <button class="btn btn-primary">Atualizar</button>
        <a href="index.php" class= "btn btn-secondary">Voltar</a>

    </form>
    </div>
    <?php include("./paginas/footer.php")?>
    
</body>
</html>