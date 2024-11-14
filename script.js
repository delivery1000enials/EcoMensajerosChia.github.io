// Función de validación del formulario
function validateForm() {
    var nombreRemitente = document.getElementById('nombreRemitente').value;
    var telefonoRemitente = document.getElementById('telefonoRemitente').value;
    var direccionRecogida = document.getElementById('direccionRecogida').value;
    var nombreDestinatario = document.getElementById('nombreDestinatario').value;
    var telefonoDestinatario = document.getElementById('telefonoDestinatario').value;
    var direccionEntrega = document.getElementById('direccionEntrega').value;
    var descripcionPaquete = document.getElementById('descripcionPaquete').value;

    // Verificar que todos los campos estén completos
    if (nombreRemitente === "" || telefonoRemitente === "" || direccionRecogida === "" ||
        nombreDestinatario === "" || telefonoDestinatario === "" || direccionEntrega === "" || 
        descripcionPaquete === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // Si todo está correcto, se puede enviar el formulario
    alert("¡Pedido Enviado! Nos pondremos en contacto pronto.");
    return true;
}
