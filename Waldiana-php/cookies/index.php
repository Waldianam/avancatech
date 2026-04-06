<?php
///Iniciando os cookies
setcookie("usuario", "Gustavo", time()+ 3600);
setcookie("senha", "batata123", time() + 3600);

//lendo os dados do cookie

echo $_COOKIE["usuário"];
echo"<br>";
echo $_COOKIE["senha"];

///excluindo os cookies
setcookie("usuario", "",time() - 3600);
setcookie("senha", "", time() - 3600);

?>