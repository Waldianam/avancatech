<?php

//Criando função - function
function Mensagem (){
echo "Bom dia !!";

}

//ativar a função
Mensagem();

//-------Criar uma função que devolve "Olá Mundo! " --------//
function Mensagem2(){

echo "Ola Mundo!!!";
}

//----- função com pametro -----
function exibirNome ($nome){
    echo $nome;
}
exibirNome ("Luiz");
/*
criar uma função mostrar Nome ()que tenha como  "parametro o $nome; e mostre a mensagem ao ser ativada:
"Ola, seja bem vindo $nome";
*/
function  MostrarNome($nome){
    echo "Olá, seja bem vindo $nome";
}
MostrarNome("Prof Lima");

//----------
function mult($x , $y){
    echo$x*$y;
}
mult(20,10);

// crie uma função de dividir $a / $b; 
function dividir ($a , $b){
    echo $a / $b;
} 
dividir(10,2);

//---------------
function verificarIdade ($idade){
    if ($idade>= 18){
        echo "Você é maior de idade";
    } else {
        echo "Você é menor de idade";
    }
}

verificar Idade (10);
verificar Idade (25);

//criar uma função verificar nota ()para verificar se ele passou ou não
function verificarNota ($nota){
    if ($nota>=7){
        echo "Você passou de ano";
    }else {
        echo "você foi reprovado";

    }
}



verificarNota (5);
verificarNota (10);

//-----------------------

$produtos = ["PS5", "Carro", "Iphone", "Notebook"];
function contarItens($itens){
    
        return count ($itens);
}


    $qtd = contarItens ($produtos);
    echo $qtd;

    /*
    criar uma lista de frutas; e salvar a quantidade de frutas em uma função;
    se a quantidade de frutas >10
    comprou muitas frutas
    se a quantidade for menor
    a pessoa comprou a quantidade ideal
    
    */

    $frutas = ["Banana" , "maçã", "laranja", "pera", "uva"];
    function contarFrutas($qtdFrutas){
        return count( $qtdFrutas);



    }
    $qtdFrutas = contarFrutas($frutas);
    if ($qtdFrutas > 10){
        echo "Você tem fruta demai";


    }else{ 
        echo "Você pegou a quantidade correta ";


    }
    //-----------










