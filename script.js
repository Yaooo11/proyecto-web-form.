document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");

  if (form) {
    form.addEventListener("submit", function (e) {
      //e.preventDefault(); // Evita el envío real

      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const asunto = document.getElementById("asunto").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !asunto || !mensaje) {
        alert("⚠️ Por favor completá todos los campos.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("⚠️ El correo electrónico no es válido.");
        return;
      }

      alert("✅ ¡Mensaje enviado correctamente!\n\nGracias " + nombre + ", te contactaremos pronto a " + email);
      form.reset();
    });
  }

  // ===== BOTÓN SUBIR ARRIBA =====
  const btnSubir = document.getElementById("btnSubir");

  if (btnSubir) {
    // Muestra el botón solo cuando el usuario scrollea hacia abajo
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        btnSubir.classList.add("mostrar");
      } else {
        btnSubir.classList.remove("mostrar");
      }
    });

    // Al hacer click, sube de inmediato hasta arriba de la página
    btnSubir.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
});
