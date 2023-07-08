document.getElementById("formulario_receta_cena").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var receta = document.getElementById("receta_usuario_cena").value;
    if (nombre === "" || email === "" || receta === "") {
      alert("Por favor, completa todos los campos.");
      event.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      event.preventDefault();
    }
  });
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }