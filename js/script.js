// Función para consultar el DNI a través de una API
async function consultarDNI() {
  const dni = document.getElementById('dniInput').value;

  // Validar que se haya ingresado un DNI válido
  if (!dni || dni.length !== 8 || isNaN(dni)) {
    alert('Por favor, ingrese un DNI válido de 8 dígitos.');
    return;
  }
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InVzZXJkYXJrMDEwMkBnbWFpbC5jb20ifQ.27-w0udsBopTx7R4TwcxZYVn66y9UmsQH63umQD3KSQ';
  const apiUrl = `https://dniruc.apisperu.com/api/v1/dni/${dni}?token=${token}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.error) {
      alert('No se pudo obtener la información del DNI. Por favor, intente nuevamente.');
      return;
    }

    mostrarDatos(data);
  } catch (error) {
    console.error('Error:', error);
    alert('Ocurrió un error al consultar el DNI. Por favor, intente nuevamente más tarde.');
  }
}

// Función para mostrar los datos del DNI en el DOM
function mostrarDatos(data) {
  // Obtener elementos del DOM para mostrar los datos
  const apellidoMaternoElement = document.getElementById('apellidoMaterno');
  const apellidoPaternoElement = document.getElementById('apellidoPaterno');
  const dniElement = document.getElementById('dni');
  const nombresElement = document.getElementById('nombres');
  const resultadosDiv = document.getElementById('resultados');

  // Actualizar el contenido de los elementos con los datos del DNI
  apellidoMaternoElement.textContent = data.apellidoMaterno;
  apellidoPaternoElement.textContent = data.apellidoPaterno;
  dniElement.textContent = data.dni;
  nombresElement.textContent = data.nombres;

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

