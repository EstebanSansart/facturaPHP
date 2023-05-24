<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
        <script src="js/main.js" defer></script>
        <link rel="stylesheet" href="./css/style.css">
        <title>Factura Hunters</title>
    </head>
    <body>
        <header class="text-center">
            <h1>Sistema de facturación Hunters</h1>
        </header>
        <div class="container" id="frmData">
            <form id="myForm">
                <?php
                    include_once('templates/header.php');
                ?>
            </form>
            <?php
                include_once('templates/details.php');
            ?>
        </div>
    </body>
</html>