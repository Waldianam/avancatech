
<?php

$semana = 2;

switch($semana){
    case 1:
        echo "domingo";
        break;
    case 2:
        break;
        echo "segunda";
        break;
    case 3:
        echo "Terça";
        break;
    case 4:
        echo "quarta";
        break;
    case 5:
        echo "quinta";
        break;
    case 6:
        echo "sexta";
        break;
    case 7:
        echo "sábado";
        
        default:
        echo "invalida";
    }
    echo "<br><br>";

        ////ex.2=======
        $cadastro = 2;
        switch($cadastro){
        case 1: 
            echo "cadastrar usuário";
            break;
        case 2:
            echo "editar usuário";
            break;
        case 2:
            echo "excluir usuário";
            break;
        case 3:
            echo "listar usuário";
            break;
        case 4:
            echo "excluir usuário";
            break;
            default:
            echo "inválido";
        }
        echo "<br><br>";

            /////====ex3======
            $notas = "a";
            switch($notas){
            case "a":
                echo "excelente";
                break;
            case "b": 
                echo "bom";
                break;
            case "c":
                echo "regular";
                break;
            case "d":
                echo "ruim";
                break;
            case "f":
                echo "reprovado";
                break;
            }
            echo "<br><br>";

                ////ex4=====
                $dia = "M";
                switch($dia){
            case "M":
                echo "manhã";
                break;
            case "T":
                echo "tarde";
                break;
            case "N":
                echo "noite";
                break;
    



}

?>