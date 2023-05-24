let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let accion = event.submitter.dataset.accion;
  if (accion == "plus") {
    let datos = Object.fromEntries(new FormData(event.target));
    console.log(datos);
    fetch("../php/archive.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    })
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.log(data);
    });
  }  
});