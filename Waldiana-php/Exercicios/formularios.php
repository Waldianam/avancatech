<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Formulario - exercicio 01</title>
</head>
<body>
    <form method="POST">
        <label >Digite seu nome</label>
        <input type="text"  name ="nome">
        <button type = "submit">ENVIAR</button>
    </form>

    <?php
    if (isset($_POST["nome"])){
        $nome= $_POST["nome"];
        echo "<h1>Meu nome é: $nome </h1>";
        echo "<hr";
    }
    ?>
    
</body>
</html>