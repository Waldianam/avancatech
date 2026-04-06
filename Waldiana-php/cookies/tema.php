<?php

if(!isset ($_COOKIE["cordefundo"])){
    setcookie("cordefundo", "#e1e1e1",time()+ 86400); //valido por 1 dia
    $cookie = "Configuração  alterada com sucesso! <br> Pressione F5";
}
$fundo = $_COOKIE["cordefundo"];



?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Treinamento PHP1</title>
</head>
<body style = "background-color:<?php echo $fundo ?>"></body>
<div>
    <p>Usando cookies para armazenar informações de configuração</p>
    <p>Evite armazenar informações sigilosas em cookies</p>
    <p>
        <?php echo $COOKIE ?>
    </p>

</div>
    
</body>
</html>