const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const pais = document.getElementById("pais").value;

  if (nombre === "") {
    alert("Por favor, ingrese su nombre completo");
    return;
  }

  if (nombre.length < 3) {
    alert("el nombre debe tener al menos 3 caracteres");
    return;
  }

  if (pais === "") {
    alert("Por favor, seleccione un pais.");
    return;
  }

  alert("Reserva enviada correctamente. ¡gracias por elegir cafe aroma¡");

  formulario.reset();

  console.log("Datos del formulario:", {
    nombre: nombre,
    pais: pais,
  });
});

const enlaces = document.querySelectorAll('.Menu-Horizontal a[href^="#"]');

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = this.getAttribute("href");

    if (destino && document.querySelector(destino)) {
      document.querySelector(destino).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
