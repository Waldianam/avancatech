<?php

//classe nova Pessoa
class Pessoa{
    public $nome;

    //construtor (Parametros nos nossos objetos)
    public function __construct($nome){
        $this->nome =$nome;
    }
    
}
$p1 = new Pessoa ("Gustavo");
$p2 = new Pessoa ("Joazinho");
$p3 = new Pessoa (1203020 );

echo $p1 -> nome;
?>