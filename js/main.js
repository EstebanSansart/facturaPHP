let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let numFactura = document.getElementById("numFactura").value;
  let fecha = document.getElementById("fecha").value;
  let nombre = document.getElementById("nombre").value;
  let cedula = document.getElementById("cedula").value;

  console.log("Número Factura: " + numFactura);
  console.log("Fecha: " + fecha);
  console.log("Nombre: " + nombre);
  console.log("Cédula: " + cedula);

  fetch("../php/archive.php", {
    method: "POST",
    headers: {
      "Content-Type": "/json"
    },
    body: JSON.stringify(datos)
  })
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    console.log(data);
  });
});
