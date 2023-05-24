<h1>Factura: </h1>
<form action="guardarFactura.php" method="post">

    <label for="nombreF"> Nombre: </label>
    <input type="text" name="nombreF" required><br><br>

    <label for="valor"> Valor: </label>
    <input type="number" name="valor" id="valor" required><br><br>

    <label for="cantidad"> Cantidad: </label>
    <input type="number" name="cantidad" id="cantidad" required><br><br>

    <button type="submit" value="plus"> + </button>
    <button type="submit" value="crearFactura"> Factura </button>
    
</form>

