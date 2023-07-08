document.getElementById("formulario-sugerencias").addEventListener("submit", function(event) {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var opinion = document.getElementById("opinion").value;
    
    if (nombre === "" || email === "" || opinion === "") {
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

  document.getElementById("formulario-evaluacion").addEventListener("submit", function(event) {
    var satisfaccion = document.querySelector('input[name="satisfaccion"]:checked');
    
    if (!satisfaccion) {
      alert("Por favor, selecciona una opción de satisfacción.");
      event.preventDefault();
    }
  });