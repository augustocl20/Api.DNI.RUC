

async function consultarDNI() {
  const dni = document.getElementById('dniInput').value;

  // Validar que se haya ingresado un DNI válido
  if (!dni || dni.length !== 8 || isNaN(dni)) {
    alert('Por favor, ingrese un DNI válido de 8 dígitos.');
    return;
  }
  const token = '735d42a68c4952e395b772cb85f3e605b981179622e3e0a87164148d98435ce5';
  const apii = `https://apiperu.dev/api/dni/${dni}?api_token=${token}`;
  try {
    // Realiza la solicitud a la API
    fetch(apii)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Asegúrate de que las propiedades sean correctas
        mostrarDatos(data);
      })
      .catch(error => {
        console.error("Error al cargar los datos de la API: " + error);
      });
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al consultar el DNI. Por favor, intente nuevamente más tarde.');
  }
}


function mostrarDatos(data) {
  // Obtener elementos del DOM para mostrar los datos
  const apellidoMaternoElement = document.getElementById('apellidoMaterno');
  const apellidoPaternoElement = document.getElementById('apellidoPaterno');
  const dniElement = document.getElementById('dni');
  const nombresElement = document.getElementById('nombres');
  const resultadosDiv = document.getElementById('resultados');

  // Actualizar el contenido de los elementos con los datos del DNI
  apellidoMaternoElement.textContent = data.data.apellido_materno;
  apellidoPaternoElement.textContent = data.data.apellido_paterno;
  dniElement.textContent = data.data.numero;
  nombresElement.textContent = data.data.nombres;

  // Obtener la hora actual
  const now = new Date();
  const hora = now.getHours();
  const minutos = now.getMinutes();
  const segundos = now.getSeconds();

  // Formatear la hora actual como HH:MM:SS

  // Mostrar los resultados
  resultadosDiv.style.display = 'block';
}

// Función para actualizar el reloj en tiempo real
function actualizarReloj() {
  const ahora = new Date();
  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  // Obtener el elemento del DOM para mostrar el reloj
  const reloj = document.getElementById('reloj');
  reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función para mostrar la hora actual inmediatamente
actualizarReloj();