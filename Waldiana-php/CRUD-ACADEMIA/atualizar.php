<?php

include("conexao.php");

$id = $_POST['id'];
$nome= $_POST['nome'];
$email= $_POST['email'];
$telefone= $_POST['telefone'];
$plano= $_POST['plano'];
$unidade= $_POST['Unidade'];

echo $id;
echo $nome;
echo $email;
echo $telefone;
echo $plano;
echo $unidade;

$sql = "UPDATE alunos SET nome= '$nome', email='$email', telefone= '$telefone', plano='$plano', Unidade='$unidade' WHERE id =$id";

mysqli_query($conexao, $sql);

header("location: index.php");





?>








