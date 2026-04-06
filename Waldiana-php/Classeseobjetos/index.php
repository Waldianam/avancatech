<?php
///criando um modelo para cada objeto novo
class Carro{
    public $modelo;
    public $cor;

    public function Acelerar(){
        echo "O carro está acelerando";
    }


}

///criando um novo objeto
$carro1 = new Carro();

$carro1 ->cor = "Preto";
$carro ->modelo = "HB20";

echo "Meu carro é" . $carro1->cor . "e o modelo"
. $carro1->modelo;
echo "<br>";
$carro1-> Acelerar();
echo "<br>";
$carro2 -> Acelerar();








?>