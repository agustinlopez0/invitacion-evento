// Obtén una referencia al elemento de audio y al botón de toggle
const backgroundAudio = document.getElementById('background-audio');
const toggleButton = document.getElementById('toggle-audio');
const audioIcon = document.getElementById('audio-icon');

// Función para pausar o reanudar el audio al hacer clic en el botón
toggleButton.addEventListener('click', function() {
  if (backgroundAudio.paused) {
    backgroundAudio.play(); // Reanuda la reproducción si está pausado
    audioIcon.className = 'fa-solid fa-pause';
  } else {
    backgroundAudio.pause(); // Pausa la reproducción si está reproduciéndose
    audioIcon.className = 'fa-solid fa-play';
  }
});
ScrollReveal({ reset: true })
ScrollReveal().reveal('.card', {
  reset: true,
  delay: 200, 
  distance: '50px',
  easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  interval: 200,
  origin: 'right',
  rotate: {
      x: 10,
      z: 5
  },
  });

const targetDate = new Date('2024-10-12T21:00:00').getTime();

function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeLeft = targetDate - currentDate;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);


const precioTarjetaElement = document.getElementById("precio-tarjeta");
let precioActual = 10000;
const aumentos = ['2023-12-31', '2024-03-31', '2024-06-30', '2024-09-30']

const calcularCantidadDeAumentos = (aumentos) => {
  const fechaActual = new Date();

  if (aumentos.length === 0) {
    return 0
  } else {
    fechaAux = new Date(aumentos[0])
    if (fechaAux <= fechaActual ) {
      return 1 + calcularCantidadDeAumentos(aumentos.slice(1))
    } else return calcularCantidadDeAumentos(aumentos.slice(1))
  } 
}

const calcularProximoAumento = (aumentos) => {
  if (aumentos.length === 0) {
    return 'error'
  } else {
    fechaAux = new Date(aumentos[0])
    if (fechaAux <= fechaActual ) {
      return calcularProximoAumento(aumentos.slice(1))
    } else return aumentos[0]
  } 
}

const calcularPrecio = () => {
  const fechaActual = new Date();
  const mesActual = fechaActual.getMonth() + 1 // Sumamos 1 ya que los meses se indexan desde 0
  const diaActual = fechaActual.getDate()
  const anioActual = fechaActual.getFullYear() 
  
  const cantidadDeAumentos = calcularCantidadDeAumentos(aumentos)
  for(i = 0; i < cantidadDeAumentos; i++) {
    precioActual *= 1.25
  }

  proximoAumento = calcularProximoAumento(aumentos)

  precioTarjetaElement.innerHTML = `El costo de la tarjeta es de: $${precioActual} <br>
  Alias: mis15-Jazmin <br>
  <small>Próximo aumento: ${proximoAumento}</small>`;
}

// Fecha que deseas verificar (por ejemplo, 31 de diciembre)
const fechaDeseada = new Date('2023-10-27');

// Fecha actual
const fechaActual = new Date();

// Compara las fechas verificando si la fecha deseada es anterior a la fecha actual
if (fechaDeseada < fechaActual) {
  console.log('La fecha deseada ha pasado.');
} else {
  console.log('La fecha deseada aún no ha pasado.');
}

// Llama a la función para calcular y mostrar el precio al cargar la página
calcularPrecio();



// períodos:
//   27/10/23 - 30/12/23: $10000
//   31/12/23 - 30/03/23: $10000*1.25
//   31/03/23 - 29/06/23: $10000*1.25*1.25
//   30/06/23 - 29/09/23: $10000*1.25*1.25*1.25
//   29/09/23 -         : $10000*1.25*1.25*1.25*1.25




const botonCopiar = document.getElementById("boton-copiar");
const inputTexto = 'mis15-Jazmin'

botonCopiar.addEventListener("click", function() {
  // Utiliza el API Clipboard para copiar el texto al portapapeles
  navigator.clipboard.writeText(inputTexto).then(function() {
    alert("Texto copiado al portapapeles: " + inputTexto);
  }).catch(function(err) {
      alert("Error al copiar el texto: " + err)
      console.error("Error al copiar el texto: " + err);
    });
});