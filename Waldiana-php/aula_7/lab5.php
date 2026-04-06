<?php
$estadocivil = array(
    'solteiro',
    'namorando',
    'noivo',
    'casado',
    'separado',
    'divorciado',
    'viúvo',

    
)
?>
<select name="estado civil">
    <?php
    foreach ($estadocivil as $estado){
        echo"<option value = '$estado'>$estado</option> ";
    }
    ?>
    </select>


    
    



//////Ex.2////////
<?php
$produtos= array(
    'Tênis Adidas'=> 525.00,
    'Óculos Ray-Ban'=> 410.50,
    'Camiseta Polo'=> 135.30,
    'Calça Jeans'=> 120.50,
    'Blusa Vans'=> 100.00,




);
echo "<pre>";
print_r($produtos); 
foreach($produtos as $produto=> $preço){
     $produtos[$produto]= $preço * 1.1;
}
echo "<pre>";
print_r( $produtos);
?>



    





    








?>