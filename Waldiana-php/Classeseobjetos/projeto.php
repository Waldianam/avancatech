<?php

class IMC{
    public $nome;
    public $altura;
    public $peso;

    ///calculando o imc
    public function calcularIMC(){
        return $this->peso / ($this ->altura * $this->altura);
    }

    public function classificacaoIMC(){ 

        $imc = $this->calcularIMC();

        if ($imc <= 18.5){
          return "Muito magra";
        }else if ($imc <=25){
            return "Normalzão";
        }else if ($imc <= 30){
            return "Pré obesidade";
        }else if ($imc <= 40 ){
            return "Obesa";
        }else  {
            return "Obesidade extrema";
        }


        }
        }
        
        
        



    



?>


<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="UTF-8">
    
    <title>Calculador IMC</title>
</head>
<body>
    <h1>Calcular IMC</h1>
    <form method="post">
        <label >Nome:</label>
        <input type="text" name = "nome" ><br><br>

        <label > Peso (KG)</label>
        <input type="number" name ="peso"><br><br>

        <label> Altura (m)</label>
        <input type="number" name = "altura" ><br><br>

        <button type= "submit">Calcular</button>


    </form>
    <?php
      if( isset($_POST[ "nome"])){
        $pessoa = new IMC ();
        $pessoa ->nome = $_POST ["nome"];
        $pessoa ->peso = $_POST ["peso"];
        $pessoa ->altura = $_POST["altura"];

        $resultadoIMC = $pessoa->calcularIMC();
        echo "<h2>Resultado </h2> <br>";
        echo "Nome:" . $pessoa ->nome . "<br>";
        echo "IMC:" .  $resultadoIMC . "<br>";
        echo "Classificação:".$pessoa ->classificaçãoIMC();

      }


      ?>
    
</body>
</html>