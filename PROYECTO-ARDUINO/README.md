# Arduino para Principiantes ⚡

**Autor:** Gardenia Magali Rodríguez Vásquez  
**Tema:** Arduino para Principiantes — TinkerCAD y Simulación de Circuitos  
**Tecnologías:** HTML5 · CSS3 · JavaScript (Vanilla)  
**Asignatura:** Desarrollo Web

---

## Descripción del proyecto

Sitio web educativo e interactivo diseñado para estudiantes que desean aprender electrónica y programación con Arduino desde cero. El sitio cubre conceptos básicos, componentes electrónicos, simulación con TinkerCAD y proyectos prácticos, incluyendo una autoevaluación y formulario de contacto.

---

## Estructura del proyecto

```
PROYECTO-ARDUINO/
├── css/
│   └── style.css          ← Estilos globales, variables, responsivo
├── js/
│   └── main.js            ← Buscador, filtros, quiz, formulario
├── pages/
│   └── simulacion.html    ← Página de TinkerCAD y simulación
├── index.html             ← Página principal (todas las secciones)
└── README.md              ← Este archivo
```

---

## Requisitos cumplidos

| Requisito                          | Estado |
|------------------------------------|--------|
| Página de inicio                   | ✅     |
| Información en varias secciones    | ✅     |
| Menú de navegación responsivo      | ✅     |
| Diseño responsivo (mobile-first)   | ✅     |
| Buscador/filtro en JavaScript      | ✅     |
| Quiz / Autoevaluación              | ✅     |
| Formulario de contacto             | ✅     |
| README documentado                 | ✅     |
| Historial de 8 commits             | ✅     |
| Publicación en GitHub Pages        | ✅     |

---

## Secciones del sitio

### 🏠 Inicio (`#inicio`)
Hero con animación de circuito PCB en SVG, llamadas a la acción y barra de estadísticas del sitio.

### 📖 ¿Qué es Arduino? (`#que-es`)
- Tarjetas informativas: Hardware, Software (IDE), Comunidad
- Diagrama visual de la placa Arduino UNO con pines
- Timeline interactivo: los 5 primeros pasos para aprender Arduino

### 🔧 Componentes Básicos (`#componentes`)
- 8 componentes electrónicos esenciales con iconos y categorías
- **Buscador en tiempo real** (JavaScript) — filtra por nombre y descripción
- **Filtro por categoría**: Todos / Salida / Pasivo / Herramienta / Sensor

### 🚀 Proyectos (`#proyectos`)
- 8 proyectos ordenados por dificultad (Básico / Intermedio / Avanzado)
- **Filtro por dificultad** con botones interactivos
- Modal con código Arduino real para cada proyecto

### 🧠 Quiz (`#quiz`)
- 10 preguntas de opción múltiple sobre Arduino
- Progreso visible con barra de avance
- Feedback instantáneo por respuesta (correcto / incorrecto)
- Puntuación final con mensaje motivacional según resultado
- Botón para reiniciar el quiz

### 📬 Contacto (`#contacto`)
- Formulario con validación en JavaScript (nombre, email, asunto, mensaje)
- Mensaje de éxito al enviar (simulado, sin backend)
- Información de contacto lateral

### 🔬 TinkerCAD (`pages/simulacion.html`)
- Simulación interactiva de LED parpadeante con CSS/JavaScript
- Circuito visual con Arduino, LED y resistencia animados
- Código del sketch correspondiente
- Guía paso a paso para usar TinkerCAD
- Botón directo a tinkercad.com

---

## Tecnologías utilizadas

| Tecnología      | Uso                               |
|-----------------|-----------------------------------|
| HTML5 semántico | Estructura del contenido          |
| CSS3            | Diseño, variables, animaciones    |
| CSS Grid/Flex   | Layout responsivo                 |
| JavaScript ES6+ | Buscador, filtros, quiz, validación|
| Google Fonts    | Space Grotesk + Inter             |
| IntersectionObserver API | Animaciones al hacer scroll |
| SVG             | Animación de circuito en el hero  |
| CSS Animations  | Pulso del LED, circuito, etc.     |

---

## Historial de commits (8 commits)

| # | Mensaje                                          | Descripción                           |
|---|--------------------------------------------------|---------------------------------------|
| 1 | `chore: crear estructura inicial del proyecto`   | Carpetas y archivos vacíos creados    |
| 2 | `docs: agregar README del proyecto`              | README con información del proyecto   |
| 3 | `feat: crear estructura HTML`                    | index.html y simulacion.html base     |
| 4 | `style: aplicar diseño general`                  | style.css con variables y layout      |
| 5 | `feat: agregar contenido de la investigación`    | Secciones: Arduino, Componentes, TinkerCAD |
| 6 | `feat: implementar funcionalidades con JavaScript`| Buscador, filtros, quiz, formulario  |
| 7 | `fix: corregir errores y mejorar la interfaz`    | Responsividad, bugs, accesibilidad    |
| 8 | `release: publicar versión final`                | Proyecto completo y listo para GitHub Pages |

---

## Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/proyecto-arduino.git

# 2. Entrar a la carpeta
cd proyecto-arduino

# 3. Abrir en el navegador
# Simplemente abre index.html en tu navegador
# O usa la extensión Live Server en VS Code
```

No se requiere instalación de dependencias — es HTML/CSS/JS puro.

---

## Publicación en GitHub Pages

```bash
# 1. Crear repositorio en GitHub
# 2. Subir todos los archivos
git add .
git commit -m "release: publicar versión final"
git push origin main

# 3. En GitHub → Settings → Pages → Branch: main → /root → Save
# 4. El sitio estará en: https://TU-USUARIO.github.io/proyecto-arduino/
```

---

## Recursos y referencias

- [Arduino Oficial](https://www.arduino.cc) — Documentación y descargas
- [TinkerCAD Circuits](https://www.tinkercad.com) — Simulación gratis
- [Arduino Referencia Español](https://www.arduino.cc/reference/es) — Funciones del IDE
- [Arduino IDE](https://www.arduino.cc/en/software) — Descargar gratis

---

## Licencia

MIT — Libre para uso educativo.

---

*Proyecto desarrollado para la asignatura de Desarrollo Web · 2024*
