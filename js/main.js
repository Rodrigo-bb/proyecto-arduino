/* =============================================
   ARDUINO PARA PRINCIPIANTES — main.js
   Gardenia Magali Rodríguez Vásquez
   ============================================= */

'use strict';

/* =============================================
   1. DATOS — Componentes
   ============================================= */
const COMPONENTES = [
  {
    nombre: 'LED',
    icono: '💡',
    categoria: 'Salida',
    descripcion: 'Diodo emisor de luz. Indica estados visuales en el circuito. Requiere resistencia limitadora de corriente.',
  },
  {
    nombre: 'Resistencia',
    icono: '〰️',
    categoria: 'Pasivo',
    descripcion: 'Limita el flujo de corriente eléctrica. Se mide en Ohmios (Ω). Esencial para proteger LEDs y otros componentes.',
  },
  {
    nombre: 'Protoboard',
    icono: '🟦',
    categoria: 'Herramienta',
    descripcion: 'Placa de experimentación que permite conectar componentes sin soldar. Ideal para prototipos rápidos.',
  },
  {
    nombre: 'Cables Jumper',
    icono: '🔌',
    categoria: 'Herramienta',
    descripcion: 'Conectan componentes en la protoboard o con la placa Arduino. Tipos: macho-macho, macho-hembra, hembra-hembra.',
  },
  {
    nombre: 'Potenciómetro',
    icono: '🎚️',
    categoria: 'Pasivo',
    descripcion: 'Resistencia variable controlada manualmente con una perilla. Útil para controlar brillo, volumen y velocidad.',
  },
  {
    nombre: 'Botón Pulsador',
    icono: '🔘',
    categoria: 'Pasivo',
    descripcion: 'Cierra el circuito al presionarse. Se utiliza para recibir señales de entrada digital en el Arduino.',
  },
  {
    nombre: 'Buzzer',
    icono: '🔊',
    categoria: 'Salida',
    descripcion: 'Genera sonidos y alertas auditivas. Puede ser activo (tono fijo) o pasivo (controlado por frecuencia).',
  },
  {
    nombre: 'Sensor de Temperatura',
    icono: '🌡️',
    categoria: 'Sensor',
    descripcion: 'Mide temperatura ambiente. El sensor LM35 o DHT11 son los más usados con Arduino para principiantes.',
  },
];

/* =============================================
   2. DATOS — Proyectos
   ============================================= */
const PROYECTOS = [
  {
    titulo: 'Parpadeo de LED',
    dificultad: 'Básico',
    descripcion: 'Enciende y apaga un LED usando la función delay(). El clásico "Hola Mundo" de Arduino.',
    tiempo: '~10 min',
    codigo: `// Proyecto 1: Parpadeo de LED (Blink)
// Conecta un LED con resistencia de 220Ω al pin 13

void setup() {
  pinMode(13, OUTPUT);   // pin 13 como salida
}

void loop() {
  digitalWrite(13, HIGH);  // encender LED
  delay(1000);              // esperar 1 segundo
  digitalWrite(13, LOW);   // apagar LED
  delay(1000);              // esperar 1 segundo
}`,
  },
  {
    titulo: 'Semáforo',
    dificultad: 'Básico',
    descripcion: 'Simula un semáforo con 3 LEDs (rojo, amarillo, verde) y temporización programada.',
    tiempo: '~20 min',
    codigo: `// Proyecto 2: Semáforo con 3 LEDs
// Rojo: pin 11 | Amarillo: pin 12 | Verde: pin 13

void setup() {
  pinMode(11, OUTPUT);  // Rojo
  pinMode(12, OUTPUT);  // Amarillo
  pinMode(13, OUTPUT);  // Verde
}

void loop() {
  // VERDE — avanzar
  digitalWrite(13, HIGH);
  delay(5000);
  digitalWrite(13, LOW);

  // AMARILLO — precaución
  digitalWrite(12, HIGH);
  delay(2000);
  digitalWrite(12, LOW);

  // ROJO — detener
  digitalWrite(11, HIGH);
  delay(5000);
  digitalWrite(11, LOW);
}`,
  },
  {
    titulo: 'Control de Brillo',
    dificultad: 'Básico',
    descripcion: 'Usa PWM para controlar la intensidad de un LED con un potenciómetro (señal analógica).',
    tiempo: '~20 min',
    codigo: `// Proyecto 3: Control de Brillo con Potenciómetro
// Potenciómetro en A0 | LED en pin 9 (PWM ~)

void setup() {
  pinMode(9, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int valor = analogRead(A0);        // Lee 0–1023
  int brillo = map(valor, 0, 1023, 0, 255);  // Escala a 0–255
  analogWrite(9, brillo);            // Aplica PWM
  Serial.println(brillo);            // Monitor Serial
  delay(10);
}`,
  },
  {
    titulo: 'Sensor de Temperatura',
    dificultad: 'Intermedio',
    descripcion: 'Lee temperatura con sensor LM35 y muestra el valor en el monitor serial.',
    tiempo: '~30 min',
    codigo: `// Proyecto 4: Sensor de Temperatura LM35
// LM35: VCC a 5V | GND a GND | VOUT a A0

void setup() {
  Serial.begin(9600);
}

void loop() {
  int lectura = analogRead(A0);
  float voltaje  = lectura * (5.0 / 1023.0);
  float tempC    = voltaje * 100.0;
  float tempF    = (tempC * 9.0 / 5.0) + 32.0;

  Serial.print("Temperatura: ");
  Serial.print(tempC, 1);
  Serial.print(" °C  |  ");
  Serial.print(tempF, 1);
  Serial.println(" °F");
  delay(1000);
}`,
  },
  {
    titulo: 'Alarma Sonora',
    dificultad: 'Intermedio',
    descripcion: 'Activa un buzzer cuando un botón es presionado. Incluye indicación visual con LED.',
    tiempo: '~25 min',
    codigo: `// Proyecto 5: Alarma Sonora con Botón
// Botón en pin 2 | Buzzer en pin 8 | LED en pin 13

void setup() {
  pinMode(2, INPUT_PULLUP);
  pinMode(8, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  if (digitalRead(2) == LOW) {  // botón presionado
    tone(8, 1000);              // 1000 Hz
    digitalWrite(13, HIGH);
    delay(500);
    tone(8, 1500);
    delay(500);
  } else {
    noTone(8);
    digitalWrite(13, LOW);
  }
}`,
  },
  {
    titulo: 'Display LCD',
    dificultad: 'Intermedio',
    descripcion: 'Muestra texto en una pantalla LCD 16x2 usando la librería LiquidCrystal.',
    tiempo: '~40 min',
    codigo: `// Proyecto 6: Display LCD 16x2
// Incluir librería LiquidCrystal.h
#include <LiquidCrystal.h>

// Pines: RS=12, EN=11, D4=5, D5=4, D6=3, D7=2
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2);
  lcd.print("Arduino");
  lcd.setCursor(0, 1);
  lcd.print("Principiantes!");
}

void loop() {
  // Mensaje fijo en pantalla
}`,
  },
  {
    titulo: 'Control Bluetooth',
    dificultad: 'Avanzado',
    descripcion: 'Controla LEDs desde tu smartphone vía módulo Bluetooth HC-05.',
    tiempo: '~60 min',
    codigo: `// Proyecto 7: Control Bluetooth HC-05
// Módulo HC-05: TX->pin 0, RX->pin 1
// LED Rojo: pin 12 | LED Verde: pin 13

void setup() {
  Serial.begin(9600);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    char cmd = Serial.read();
    if (cmd == 'R') {               // Rojo
      digitalWrite(12, HIGH);
      digitalWrite(13, LOW);
    } else if (cmd == 'V') {        // Verde
      digitalWrite(12, LOW);
      digitalWrite(13, HIGH);
    } else if (cmd == 'O') {        // Off
      digitalWrite(12, LOW);
      digitalWrite(13, LOW);
    }
  }
}`,
  },
  {
    titulo: 'Estación Meteorológica',
    dificultad: 'Avanzado',
    descripcion: 'Mide temperatura y humedad con sensor DHT11 y muestra en LCD.',
    tiempo: '~90 min',
    codigo: `// Proyecto 8: Estación Meteorológica
// Requiere: Librería DHT + LiquidCrystal
#include "DHT.h"
#include <LiquidCrystal.h>

#define DHTPIN 7
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  dht.begin();
  lcd.begin(16, 2);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(t, 1);
  lcd.print(" C");
  lcd.setCursor(0, 1);
  lcd.print("Humedad: ");
  lcd.print(h, 1);
  lcd.print("%");
  delay(2000);
}`,
  },
];

/* =============================================
   3. DATOS — Quiz
   ============================================= */
const QUIZ = [
  {
    pregunta: '¿Cuál es la función principal de setup() en Arduino?',
    opciones: [
      'Ejecutarse en bucle infinito',
      'Inicializar variables y configuraciones',
      'Leer sensores continuamente',
      'Enviar datos por puerto Serial',
    ],
    correcta: 1,
  },
  {
    pregunta: '¿Qué hace la función delay(1000) en Arduino?',
    opciones: [
      'Espera 1 milisegundo',
      'Repite el loop 1000 veces',
      'Espera 1 segundo',
      'Lee un pin 1000 veces',
    ],
    correcta: 2,
  },
  {
    pregunta: '¿Qué es una protoboard?',
    opciones: [
      'Un tipo de placa Arduino',
      'Un software de simulación',
      'Una placa para conectar componentes sin soldar',
      'Un tipo de resistencia variable',
    ],
    correcta: 2,
  },
  {
    pregunta: '¿Para qué sirve una resistencia en un circuito con LED?',
    opciones: [
      'Para hacer el LED más brillante',
      'Para proteger el LED del exceso de corriente',
      'Para invertir la polaridad del LED',
      'Para almacenar energía eléctrica',
    ],
    correcta: 1,
  },
  {
    pregunta: '¿Cuál es la URL oficial de TinkerCAD para simular circuitos?',
    opciones: [
      'simulator.io',
      'arduino.cc/simulate',
      'circuits.autodesk.com',
      'tinkercad.com',
    ],
    correcta: 3,
  },
  {
    pregunta: '¿Qué significa la abreviatura PWM?',
    opciones: [
      'Power Wire Management',
      'Pulse Width Modulation',
      'Parallel Write Mode',
      'Program While Monitoring',
    ],
    correcta: 1,
  },
  {
    pregunta: '¿Cuántos pines digitales tiene el Arduino UNO?',
    opciones: ['6', '10', '14', '20'],
    correcta: 2,
  },
  {
    pregunta: '¿Qué función se usa para encender un pin digital en Arduino?',
    opciones: [
      'pinOn(13, HIGH)',
      'setPin(13, 1)',
      'enablePin(13)',
      'digitalWrite(13, HIGH)',
    ],
    correcta: 3,
  },
  {
    pregunta: '¿Qué es un "sketch" en Arduino?',
    opciones: [
      'Un diagrama de circuito impreso',
      'Un tipo de componente electrónico',
      'El programa que se escribe y sube a la placa',
      'Una herramienta de simulación 3D',
    ],
    correcta: 2,
  },
  {
    pregunta: '¿Qué hace la función loop() en Arduino?',
    opciones: [
      'Se ejecuta una sola vez al inicio',
      'Solo se ejecuta cuando hay un error',
      'Reinicia el microcontrolador',
      'Se ejecuta continuamente en bucle',
    ],
    correcta: 3,
  },
];

/* =============================================
   4. NAVBAR — Hamburger + scroll activo
   ============================================= */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
const navLinks  = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navMenu.classList.toggle('open');
});

// Cerrar menú al hacer clic en un link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  });
});

// Scroll activo — resaltar link según sección visible
const secciones = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  secciones.forEach(sec => {
    const top    = sec.offsetTop - 90;
    const bottom = top + sec.offsetHeight;
    const link   = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
});

/* =============================================
   5. RENDERIZAR COMPONENTES
   ============================================= */
const badgeClass = {
  Salida:      'badge-salida',
  Pasivo:      'badge-pasivo',
  Herramienta: 'badge-herramienta',
  Sensor:      'badge-sensor',
};

function renderComponentes(lista) {
  const grid    = document.getElementById('components-grid');
  const noRes   = document.getElementById('no-results');
  grid.innerHTML = '';

  if (lista.length === 0) {
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  lista.forEach(c => {
    const card = document.createElement('div');
    card.className = 'comp-card';
    card.dataset.categoria = c.categoria;
    card.innerHTML = `
      <div class="comp-header">
        <span class="comp-icon">${c.icono}</span>
        <span class="comp-badge ${badgeClass[c.categoria] || ''}">${c.categoria}</span>
      </div>
      <h4>${c.nombre}</h4>
      <p>${c.descripcion}</p>`;
    grid.appendChild(card);
  });
}

// Render inicial
renderComponentes(COMPONENTES);

let categoriaActiva = 'Todos';
let textoBusqueda   = '';

function aplicarFiltros() {
  let lista = COMPONENTES;
  if (categoriaActiva !== 'Todos') {
    lista = lista.filter(c => c.categoria === categoriaActiva);
  }
  if (textoBusqueda.trim() !== '') {
    const q = textoBusqueda.toLowerCase();
    lista = lista.filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      c.descripcion.toLowerCase().includes(q)
    );
    document.getElementById('search-term').textContent = textoBusqueda;
  }
  renderComponentes(lista);
}

function filtrarComponentes(valor) {
  textoBusqueda = valor;
  aplicarFiltros();
}

function filtrarCategoria(cat, btn) {
  categoriaActiva = cat;
  document.querySelectorAll('#filtro-categoria .filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  aplicarFiltros();
}

/* =============================================
   6. RENDERIZAR PROYECTOS
   ============================================= */
const diffClass = {
  'Básico':     'diff-basico',
  'Intermedio': 'diff-intermedio',
  'Avanzado':   'diff-avanzado',
};

function renderProyectos(lista) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  lista.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'proj-card';
    card.dataset.dificultad = p.dificultad;
    card.innerHTML = `
      <div class="proj-header">
        <h3>${p.titulo}</h3>
        <span class="diff-badge ${diffClass[p.dificultad] || ''}">${p.dificultad}</span>
      </div>
      <p class="proj-desc">${p.descripcion}</p>
      <div class="proj-footer">
        <span class="proj-time">⏱ ${p.tiempo}</span>
        <button class="btn-code" onclick="abrirModal(${i})">Ver código</button>
      </div>`;
    grid.appendChild(card);
  });
}

renderProyectos(PROYECTOS);

function filtrarProyectos(dif, btn) {
  document.querySelectorAll('#proyectos .filter-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const lista = dif === 'Todos'
    ? PROYECTOS
    : PROYECTOS.filter(p => p.dificultad === dif);
  renderProyectos(lista);
}

/* =============================================
   7. MODAL — Código del proyecto
   ============================================= */
function abrirModal(idx) {
  const p = PROYECTOS[idx];
  document.getElementById('modal-titulo').textContent = p.titulo;
  document.getElementById('modal-codigo').textContent = p.codigo;
  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
function cerrarModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') cerrarModal();
});

/* =============================================
   8. QUIZ
   ============================================= */
let quizIdx       = 0;
let quizPuntuacion = 0;
let respondida    = false;

function renderPregunta() {
  const q       = QUIZ[quizIdx];
  const total   = QUIZ.length;
  const progPct = ((quizIdx + 1) / total) * 100;

  document.getElementById('quiz-counter').textContent =
    `Pregunta ${quizIdx + 1} de ${total}`;
  document.getElementById('quiz-progress-fill').style.width = progPct + '%';
  document.getElementById('quiz-question').textContent = q.pregunta;

  const container = document.getElementById('quiz-options');
  container.innerHTML = '';
  const letras = ['A', 'B', 'C', 'D'];

  q.opciones.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="opt-letter">${letras[i]}</span>${op}`;
    btn.onclick = () => seleccionarRespuesta(i);
    container.appendChild(btn);
  });

  respondida = false;
  document.getElementById('btn-siguiente').disabled = true;
}

function seleccionarRespuesta(idx) {
  if (respondida) return;
  respondida = true;

  const opciones = document.querySelectorAll('.quiz-option');
  const correcta = QUIZ[quizIdx].correcta;

  opciones.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correcta)     btn.classList.add('correct');
    if (i === idx && i !== correcta) btn.classList.add('wrong');
    if (i === idx)          btn.classList.add('selected');
  });

  if (idx === correcta) quizPuntuacion++;
  document.getElementById('btn-siguiente').disabled = false;
}

function siguientePregunta() {
  quizIdx++;
  if (quizIdx < QUIZ.length) {
    renderPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById('quiz-box').classList.add('hidden');
  const result = document.getElementById('quiz-result');
  result.classList.remove('hidden');

  const pct = quizPuntuacion / QUIZ.length;
  let icon, titulo, msg;

  if (pct >= 0.8) {
    icon  = '🏆'; titulo = '¡Excelente trabajo!';
    msg   = 'Dominaste los conceptos de Arduino. ¡Eres un maker en potencia!';
  } else if (pct >= 0.5) {
    icon  = '📚'; titulo = '¡Buen progreso!';
    msg   = 'Vas por buen camino. Repasa los conceptos y vuelve a intentarlo.';
  } else {
    icon  = '💪'; titulo = '¡Sigue estudiando!';
    msg   = 'No te rindas. Revisa el contenido del sitio y vuelve a intentarlo.';
  }

  document.getElementById('result-icon').textContent    = icon;
  document.getElementById('result-titulo').textContent  = titulo;
  document.getElementById('result-score').textContent   = `${quizPuntuacion} / ${QUIZ.length}`;
  document.getElementById('result-msg').textContent     = msg;
}

function reiniciarQuiz() {
  quizIdx        = 0;
  quizPuntuacion = 0;
  respondida     = false;
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-box').classList.remove('hidden');
  renderPregunta();
}

// Iniciar quiz
renderPregunta();

/* =============================================
   9. FORMULARIO DE CONTACTO
   ============================================= */
function enviarFormulario(e) {
  e.preventDefault();
  let valido = true;

  const nombre  = document.getElementById('nombre');
  const email   = document.getElementById('email');
  const mensaje = document.getElementById('mensaje');

  // Limpiar errores
  ['err-nombre', 'err-email', 'err-mensaje'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  if (nombre.value.trim().length < 3) {
    document.getElementById('err-nombre').textContent = 'El nombre debe tener al menos 3 caracteres.';
    valido = false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('err-email').textContent = 'Ingresa un correo electrónico válido.';
    valido = false;
  }
  if (mensaje.value.trim().length < 20) {
    document.getElementById('err-mensaje').textContent = 'El mensaje debe tener al menos 20 caracteres.';
    valido = false;
  }

  if (!valido) return;

  // Simular envío
  const success = document.getElementById('form-success');
  success.classList.remove('hidden');
  document.getElementById('contact-form').reset();
  setTimeout(() => success.classList.add('hidden'), 5000);
}

/* =============================================
   10. ANIMACIONES — Intersection Observer
   ============================================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .comp-card, .proj-card, .timeline-item, .contact-card')
  .forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
