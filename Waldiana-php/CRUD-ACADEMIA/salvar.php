<?php

include("conexao.php");

$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$plano= $_POST['plano'];
$unidade= $_POST['Unidade'];

echo $nome;
echo $email;
echo $telefone;
echo $plano;
echo $unidade;

$sql = "INSERT INTO alunos (nome, email, telefone, plano, Unidade) VALUES ('$nome', '$email', '$telefone', '$plano','$unidade')";

mysqli_query($conexao, $sql);

header("location: criar.php");


?>