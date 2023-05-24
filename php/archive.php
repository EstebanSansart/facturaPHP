<?php
    $data = json_decode(file_get_contents("php://input"), true);

    $numFactura = $data['numFactura'];
    $fecha = $data['date'];
    $nombre = $data['nombre'];
    $cedula = $data['cedula'];

    var_dump($numFactura);
    var_dump($fecha);
    var_dump($nombre);
    var_dump($cedula); 
?>
