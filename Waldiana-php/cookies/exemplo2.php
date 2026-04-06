<?php
session_start();

$_SESSION["Empresa"] = "Impacta Certificções e Treinamento";

echo "Empresa: " . $_SESSION["Empresa"]. "<br>";






?>
<h1>Veja na outra página: <a href="session2.php">Clique Aqui</a></h1>