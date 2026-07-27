# Arduino para Principiantes ⚡

Sitio web educativo completo sobre **Arduino para principiantes**, que cubre desde los conceptos básicos hasta la simulación de circuitos con TinkerCAD. Desarrollado con React + Vite (HTML, CSS, JavaScript).

---

## 📋 Descripción

Este proyecto es un recurso educativo interactivo diseñado para estudiantes que desean aprender electrónica y programación con Arduino desde cero. Incluye contenido sobre componentes, simulación con TinkerCAD, proyectos prácticos y una autoevaluación.

**Tema:** Arduino para principiantes — TinkerCAD y simulación de circuitos  
**Tecnologías:** HTML · CSS · JavaScript (React + Vite)  
**Idioma:** Español

---

## 🚀 Características

- **Página de inicio** con hero animado y estadísticas del sitio
- **Menú de navegación** responsivo con hamburger menu en móvil y scroll suave
- **¿Qué es Arduino?** — información organizada en tarjetas y timeline visual
- **Componentes básicos** con buscador/filtro en tiempo real (JavaScript)
- **TinkerCAD y simulación** — guía paso a paso para simular circuitos
- **Proyectos para principiantes** con filtro por dificultad y código Arduino real
- **Quiz de autoevaluación** — 10 preguntas, feedback instantáneo, puntuación final
- **Formulario de contacto** con validación completa
- **Diseño responsivo** — funciona en móvil, tablet y escritorio

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| React 18 | Componentes de UI e interactividad |
| Vite | Bundler y servidor de desarrollo |
| TypeScript | Tipado estático |
| Tailwind CSS | Estilos utilitarios |
| Framer Motion | Animaciones y transiciones |
| React Hook Form + Zod | Validación de formularios |
| Wouter | Enrutamiento |
| Lucide React | Iconografía |

---

## 📂 Estructura del proyecto

```
artifacts/arduino-principiantes/
├── src/
│   ├── components/        # Componentes reutilizables (Navbar, Footer, etc.)
│   ├── pages/             # Secciones principales del sitio
│   ├── data/              # Datos estáticos (componentes, proyectos, quiz)
│   ├── App.tsx            # Componente raíz con enrutamiento
│   └── index.css          # Estilos globales y variables CSS
├── public/                # Recursos estáticos
├── package.json           # Dependencias del proyecto
└── vite.config.ts         # Configuración de Vite
```

---

## 📦 Instalación y uso

### Requisitos previos
- Node.js 18+
- pnpm 8+

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/arduino-principiantes.git
cd arduino-principiantes

# 2. Instalar dependencias
pnpm install

# 3. Iniciar servidor de desarrollo
pnpm --filter @workspace/arduino-principiantes run dev
```

El sitio estará disponible en `http://localhost:<PORT>`.

---

## 📝 Secciones del sitio

### 🏠 Inicio (`#inicio`)
Hero con animación de circuito, llamadas a la acción y estadísticas del sitio.

### 📖 ¿Qué es Arduino? (`#que-es-arduino`)
Explicación del hardware, software y comunidad Arduino. Incluye diagrama visual de la placa y timeline de primeros pasos.

### 🔧 Componentes Básicos (`#componentes`)
8 componentes electrónicos esenciales con descripción, categoría y **buscador en tiempo real** implementado en JavaScript.

### 💻 TinkerCAD (`#tinkercad`)
Guía completa para usar TinkerCAD: características, pasos de inicio y maqueta visual de simulación.

### 🚀 Proyectos (`#proyectos`)
8 proyectos desde básico hasta avanzado con **filtro por dificultad**, código Arduino real y visualización en modal.

### 🧠 Quiz (`#quiz`)
Autoevaluación de 10 preguntas con:
- Progreso visible (barra de avance)
- Feedback instantáneo por pregunta
- Puntuación final con mensaje motivacional
- Opción de reiniciar

### 📬 Contacto (`#contacto`)
Formulario validado con React Hook Form + Zod. Campos: nombre, email, asunto, mensaje y consentimiento.

---

## 🧾 Historial de commits

| # | Descripción |
|---|---|
| 1 | `init: configuración inicial del proyecto React + Vite` |
| 2 | `feat: estructura de navegación y layout principal` |
| 3 | `feat: sección Hero y ¿Qué es Arduino? con animaciones` |
| 4 | `feat: sección de Componentes con buscador en tiempo real` |
| 5 | `feat: sección TinkerCAD con guía paso a paso` |
| 6 | `feat: sección de Proyectos con filtro por dificultad` |
| 7 | `feat: Quiz de autoevaluación con 10 preguntas y puntuación` |
| 8 | `feat: formulario de contacto, footer y estilos finales` |

---

## 🌐 Publicación en GitHub Pages

Para publicar en GitHub Pages:

```bash
# 1. Construir el proyecto
pnpm --filter @workspace/arduino-principiantes run build

# 2. La carpeta de salida es: artifacts/arduino-principiantes/dist/public/
# 3. Subir a GitHub y activar Pages desde la rama gh-pages
```

O usar la acción automática de GitHub Actions para despliegue continuo.

---

## 📚 Recursos adicionales

- [Arduino Official](https://www.arduino.cc)
- [TinkerCAD Circuits](https://www.tinkercad.com)
- [Arduino IDE Download](https://www.arduino.cc/en/software)
- [Documentación de Arduino en Español](https://www.arduino.cc/reference/es)

---

## 👤 Autor

Proyecto desarrollado como recurso educativo para la comunidad maker hispanohablante.

---

## 📄 Licencia

MIT License — libre para usar, modificar y distribuir con fines educativos.
