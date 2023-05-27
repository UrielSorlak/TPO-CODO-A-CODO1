function validateForm(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto

    var form = document.getElementById('myForm');
    formulario.addEventListener("submit", function(event) {
        // Lógica de validación del formulario
        // event.preventDefault(); // Si la validación no es exitosa, evita que se envíe el formulario
      });
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var opinion = document.getElementById('opinion').value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return false;
    }

    if (email === '') {
        alert('Por favor, ingrese su email.');
        return false;
    } else if (!validateEmail(email)) {
        alert('Por favor, ingrese un email válido.');
        return false;
    }

    if (opinion === '') {
        alert('Por favor, ingrese su opinión.');
        return false;
    }

    // Si el formulario es válido, puedes realizar alguna acción adicional, como enviar el email utilizando un servicio externo.
    sendEmail(nombre, email, opinion);
}

function validateEmail(email) {
    // Expresión regular para validar el formato de un email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendEmail(nombre, email, opinion) {
    // Aquí puedes implementar la lógica para enviar el email utilizando un servicio externo,
    // como una solicitud HTTP a una API de envío de emails.
    // Por ejemplo, utilizando fetch o axios.

    // Ejemplo ficticio usando fetch:
    var payload = {
        nombre: nombre,
        email: email,
        opinion: opinion
    };

    fetch('https://api.example.com/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(function(response) {
        if (response.ok) {
            alert('¡Email enviado con éxito!');
            // Aquí puedes realizar alguna acción adicional después de enviar el email
            // como mostrar un mensaje de éxito, redirigir a otra página, etc.
        } else {
            alert('Hubo un error al enviar el email. Por favor, inténtelo nuevamente.');
        }
    })
    .catch(function(error) {
        alert('Hubo un error al enviar el email. Por favor, inténtelo nuevamente.');
        console.log(error);
    });
}
