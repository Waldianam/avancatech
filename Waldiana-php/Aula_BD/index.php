<?php
$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "escola";

//conectando ao banco de dados
$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if ($conexao ==false){
    echo "Erro de conexão";

}else{
    echo "Conectado com Sucesso";
}


?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    
    <title>Aula BD</title>
</head>
<body>
    <h1>Primeiro Banco de Dados</h1>

    <form method ="post">
        <label > nome:</label>


        <input type="text"name= "nome">
        <br><br>
        <label>idade:</label>
        <input type="number" name = "idade">
        <br><br>
        <button type = "submit">enviar</button>
    
    </form>
    <?php
    if(isset($_POST["nome"])){
        $nome = $_POST["nome"];
        $idade = $_POST["idade"];
        echo "Meu nome é $nome e eu tenho $idade anos";
        $sql = "INSERT INTO alunos (nome,idade) VALUES ('$nome', '$idade')";
        mysqli_query($conexao, $sql);
        echo "\n Aluno Cadastrado com Sucesso";

    }
    ?>
    
</body>
</html>