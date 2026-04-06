<?php


$servidor = "localhost";
$usuario = "root";
$senha = "";
$banco = "Academia";

$conexao = mysqli_connect( $servidor, $usuario, $senha, $banco);

if( $conexao == false){
    echo "Erro de Conexão";
} else {
    echo "Conectado com Sucesso";
}