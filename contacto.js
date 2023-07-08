document.querySelector('form[name="contacto"]').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.querySelector('input[name="nombre"]').value;
    var correo = document.querySelector('input[name="correo"]').value;
    var opinion = document.querySelector('textarea[name="opinion"]').value;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contacto',
        'nombre': nombre,
        'correo': correo,
        'opinion': opinion
      })
    })
    .then(function() {
      alert('Gracias por tu opinión!');
    })
      .catch(function(error) {
        alert('Hubo un error al enviar tu opinión. Por favor, inténtalo de nuevo más tarde.');
        console.error(error);
      });
    });
    
    function encode(data) {
      return Object.keys(data)
        .map(function(key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        })
        .join('&');
    }