<?php

//SOBRE ARRAYS
$nome1 = "Gustavo";
$nome2 = "Lima";
$nome3 = "Zezinho";

$nomes = ["Gustavo", "Lima", "Zezinho", "Bruno", "João","Ana"];
$fruta1 = "morango";
$fruta2 = "Banana";
$fruta3 = "Melancia";

$frutas = ["morango", "Banana","Melancia" ];
echo $frutas[1];

for ($i = 0; $i< count($frutas);$i++){
    echo"<br>". $frutas[$i];

}
echo"<br>br>br>";


 










//Criando uma Pessoa
$pessoa =[
    "nome"=> "Carlos", //String
    "idade"=> "25", // String ------Texto
    "cidade" => "São Paulo"
];
echo $pessoa["nome"];
//UTILIZANDO O FOREACH

$carros = [
    "Gol",
    "Palio",
    "Ferrari",
    "Camaro",
];

foreach($carros as $modelo)
{
    echo "<br>" . $modelo;
}

?>





