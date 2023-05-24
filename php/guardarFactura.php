<?php
    $nombreF = $_POST['Nombre'];
    $valor = $_POST['Valor'];
    $cantidad = $_POST['Cantidad'];

    $factura = array(
        "Nombre" => $nombreF,
        "Valor" => $valor,
        "Cantidad" => $cantidad
    );

    $jsonFactura = json_encode($factura);
    file_put_contents('factura.json', $jsonFactura);
?>
