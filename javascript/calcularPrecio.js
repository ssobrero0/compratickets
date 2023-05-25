
function calcularPrecio() {
  var cantidad = document.getElementById("cantidad").value;
  var categoria = document.getElementById("categoria").value;
  var precio = 200;
  var descuento = 0;

  if (categoria == "estudiante") {
    descuento = 0.8;
  } else if (categoria == "trainee") {
    descuento = 0.5;
  } else if (categoria == "junior") {
    descuento = 0.15;
  }

  var precioTotal = cantidad * precio * (1 - descuento);
  document.getElementById("total").value = "" + precioTotal.toFixed(2);
}





