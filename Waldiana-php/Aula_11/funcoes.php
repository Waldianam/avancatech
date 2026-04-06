<?php
function post($chave){
    $chave = $_POST;
    if (isset($_POST[$chave])){
        return str_replace("' ", "", $_POST[$chave]);


    }
}
    function get ($chave){
        $chave = $_GET;
        if(isset($_GET[$chave])){
            return str_replace("'","",$_POST[$chave]);




        }

    }
    function trim_campos(array$campos){
        return array_map('trim',$campos);

    }










?>