
document.getElementById("iniciar-sesion").addEventListener("click", function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores del usuario y la contraseña ingresados por el usuario
  var usuarioIngresado = document.getElementById("Usuario").value;
  var contraseñaIngresada = document.getElementById("Contraseña").value;
  // Realizar una solicitud para cargar los datos de usuario desde el archivo JSON
  fetch("../json/login.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Validar las credenciales comparándolas con los datos cargados
      var credencialesCorrectas = false;
      for (var i = 0; i < data.length; i++) {
        if (
          data[i].Usuario === usuarioIngresado &&
          data[i].Contraseña === contraseñaIngresada
        ) {
          credencialesCorrectas = true;
          break; // Salir del bucle si se encontraron credenciales correctas
        }
      }

      // Redirigir al usuario a otra página si las credenciales son correctas
      if (credencialesCorrectas) {
        window.location.href = "../index.html";
      } else {
        alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
      }
    })
    .catch(function (error) {
      console.error("Error al cargar los datos de usuario:", error);
    });
});


const alertacontraseña = document.getElementById('olvido');

function alerta() {
  alertacontraseña.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que se siga el enlace
    alert('Este apartado no esta disponible por el momento, vuelva pronto');
  });
}
alerta()