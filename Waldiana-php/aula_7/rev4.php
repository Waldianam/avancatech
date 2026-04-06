
<?php
$nota = 10;
$frequencia = 25;
if($nota>= 7 && $frequencia>= 3){
    echo "Aluno Aprovado";
}else{
    echo "Aluno Reprovado";
}
 ///////-----ex3=======
 $temingresso = true;
 $listavip =true;
 if($temingresso || $listavip){
    echo "entrada permitida";
 }else{
    echo "entrada negada";
 }

    ////====ex4=======

    $loguin = "Adm";
    $senha = "1234";
    if($loguin == "adm "&& $senha =="1234" ){
        echo "pode acessar";
    }else{
        echo "acesso negado";
    }

        ///=====ex.5=======

        $estudante = "tem desconto";
        $idoso  = 60;
        if($estudante || $idoso== "tem desconto"){
            echo "tem desconto";
        }else{
            echo "não tem desconto";

            
    }


?>



