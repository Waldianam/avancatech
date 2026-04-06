<?php
session_start();

if(!isset($_SESSION["pacientes"])){
    $_SESSION["pacientes"] = [];
}
$pacientes = $_SESSION["pacientes"];
?>




<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema da Clínica</title>
    <link href = https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css&quot; rel="stylesheet">
</head>


<body class = "container mt -4">
    <h2>Sistema da Clínica</h2>
    <a href = "cadastrar.php" class= "btn btn-primary">Cadastrar Paciente</a>

    <table class = "table table-bordered mt-3"></table>
    <tr>
        <th>Nome</th>
        <th>Idade</th>
        <th>Telefone</th>
        <th>Ações</th>
    
    </tr>
    <?php foreach($pacientes as $id =>$paciente){ ?>
        <tr>
            <td><?php echo  $id; ?></td>
            <td><?php echo  $paciente["nome"]; ?></td>
            <td><?php echo  $paciente["idade"];?> </td>
            <td><?php echo  $paciente["telefone"]; ?></td>

            <td>
            <a href ="editar.php?id=<?php echo $id; ?>"
            class="btn btn-warning">Editar </a>

            <a href = "editar.php?id = <?php echo $id; ?>"
            classe = "btn btn-danger">Excluir </a>
            </td>

        </tr>

    }

    

    

    