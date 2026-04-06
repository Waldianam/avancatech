<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title> Cadastrar Aluno </title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class=" container mt-5 ">
    <h2 class="text-primary mb-5"> Cadastrar Alunos </h2>
    <form action="salvar.php" method="post">
        <label> Digite o seu nome: </label>
        <input type="text" name="nome" class="form-control">
        <br><br>

        <label> Digite o seu Email: </label>
        <input type="text" name="email" class="form-control">
        <br><br>

        <label> Digite o seu telefone:</label>
        <input type="number" name="telefone" class="form-control">
        <br><br>

        <label >Escolha o seu plano</label>
        <select name="plano" class ="form-control">
            <option>Mensal</option>
            <option >Trimestral</option>
            <option >Semestral</option>
            <option >Anual</option>
            
        </select>
        <br><br>
            
            <label>Escolha sua unidade</label>
            <select name="Unidade" class= "form-control">
                <option>Shopping Aricanduva</option>
                <option>Carrão</option>
                <option>Vila Matilde</option>
                <option>Tatuapé</option>
        </select>
        <br><br>
        
        <button class=" btn  btn-primary" > Salvar </button>
        <a href="./paginas/menuInicial.php" class="btn btn-danger"> Voltar </a>

    </form>

    
</body>
</html>