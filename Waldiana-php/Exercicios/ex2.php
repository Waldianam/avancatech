<!DOCTYPE html>
<html lang="PT-BR">
<head>
    
    <title>Somar 2 números</title>
</head>



<body>
    <h1>Formulario</h1>
    <form method="Post">
        <label>Digite o Primeiro numero</label><br>
        <input type = "number" name = "numero1">
         
        <label >digite o segundo numero</label>
        <input type = "number" name = "numero2">
        <br><br>
        <button type = "submit">Enviar</button>


        
    
    </form>
    

    <?php
    if(isset($_POST["numero1"]) && isset ($_POST["numero2"])){

    
        $num1 = $_POST["numero1"];
        $num2 = $_POST["numero2"];
        $res = $num1 + $num2;
        echo " a soma do $num1 + $num2 é igual a : " . $res;
    }
    

    ?> 
</body>
</html>