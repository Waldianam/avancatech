<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    
    <title>Formulario Ex.3</title>
</head>
<body>
    <h1>Formulário</h1>
    <form method="Post">
    <label >Idade</label>
    <input type ="number" name= "idade">
    <button type ="submit">Enviar</button>
</form>
<?php
if(isset($_POST["idade"])){
    $idade = $_POST["idade"];
    echo $idade;
    if($idade >=18){
        echo "Você é maior de idade";
    }else {
    echo "Você é menor de idade";
    }

}



?>



    
</body>
</html>