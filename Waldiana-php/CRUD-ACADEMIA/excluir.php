<?php

include('conexao.php');

$id = $_GET["id"];

mysqli_query($conexao, "DELETE FROM alunos WHERE id = $id");

header("location: index.php");




?>