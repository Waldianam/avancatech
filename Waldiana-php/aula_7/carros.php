<?php

$marcas = ["Nike", "Adidas", "Puma"];

?>


<!DOCTYPE html>
<html lang="pt-Br">
<head>
    <meta charset="UTF-8">
   
    <title>Marca</title>

</head>
<body>
    <form method = "post">
        <label> escolha o seu preferido</label>
        <br><br>
        <select name = "Marca">
            <?php
            foreach($marcas as $nome){
                echo"<option> $nome </option>";
            }
                

            ?>
            </select>
            <br><br>
            <button type = "submit">Enviar</button>
        </form>
        <?php
        if(isset($_POST["Marca"]))
        {
            //vou ter uma ação
            $nome_marca = $_POST["marcas"];

            echo "<h2> Você escolheu:" . $nome_marca . "</h2>";
        }


?>

</body>
</html>

