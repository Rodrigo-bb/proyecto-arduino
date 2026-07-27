export type QuizOption = {
  id: string;
  text: string;
  isCorrect: boolean;
};

export type QuizQuestion = {
  id: number;
  text: string;
  options: QuizOption[];
};

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    text: "¿Cuál es la función principal de setup() en Arduino?",
    options: [
      { id: "a", text: "Ejecutarse en bucle infinito", isCorrect: false },
      { id: "b", text: "Inicializar variables y configuraciones", isCorrect: true },
      { id: "c", text: "Leer sensores", isCorrect: false },
      { id: "d", text: "Enviar datos por serial", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "¿Qué hace la función delay(1000)?",
    options: [
      { id: "a", text: "Espera 1 segundo", isCorrect: true },
      { id: "b", text: "Espera 1 milisegundo", isCorrect: false },
      { id: "c", text: "Repite el loop 1000 veces", isCorrect: false },
      { id: "d", text: "Lee un pin 1000 veces", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "¿Qué es una protoboard?",
    options: [
      { id: "a", text: "Un tipo de Arduino", isCorrect: false },
      { id: "b", text: "Un software de simulación", isCorrect: false },
      { id: "c", text: "Una placa para conectar componentes sin soldar", isCorrect: true },
      { id: "d", text: "Un tipo de resistencia", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "¿Para qué sirve una resistencia en un circuito con LED?",
    options: [
      { id: "a", text: "Para hacer el LED más brillante", isCorrect: false },
      { id: "b", text: "Para proteger el LED del exceso de corriente", isCorrect: true },
      { id: "c", text: "Para invertir la polaridad", isCorrect: false },
      { id: "d", text: "Para almacenar energía", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "¿Cuál es la URL de TinkerCAD?",
    options: [
      { id: "a", text: "tinkercad.com", isCorrect: true },
      { id: "b", text: "arduino.cc", isCorrect: false },
      { id: "c", text: "autodesk.com/circuits", isCorrect: false },
      { id: "d", text: "simulator.io", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "¿Qué significa PWM?",
    options: [
      { id: "a", text: "Pulse Width Modulation", isCorrect: true },
      { id: "b", text: "Power Wire Management", isCorrect: false },
      { id: "c", text: "Parallel Write Mode", isCorrect: false },
      { id: "d", text: "Program While Monitoring", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "¿Cuántos pines digitales tiene el Arduino UNO?",
    options: [
      { id: "a", text: "6", isCorrect: false },
      { id: "b", text: "10", isCorrect: false },
      { id: "c", text: "14", isCorrect: true },
      { id: "d", text: "20", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "¿Qué función se usa para encender un pin digital?",
    options: [
      { id: "a", text: "pinOn(13, HIGH)", isCorrect: false },
      { id: "b", text: "digitalWrite(13, HIGH)", isCorrect: true },
      { id: "c", text: "setPin(13, 1)", isCorrect: false },
      { id: "d", text: "enablePin(13)", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "¿Qué es un sketch en Arduino?",
    options: [
      { id: "a", text: "Un diagrama de circuito", isCorrect: false },
      { id: "b", text: "Un tipo de componente", isCorrect: false },
      { id: "c", text: "El programa que se escribe y sube a la placa", isCorrect: true },
      { id: "d", text: "Una herramienta de simulación", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "¿Qué hace loop() en Arduino?",
    options: [
      { id: "a", text: "Se ejecuta una sola vez al inicio", isCorrect: false },
      { id: "b", text: "Solo se ejecuta cuando hay un error", isCorrect: false },
      { id: "c", text: "Se ejecuta continuamente en bucle", isCorrect: true },
      { id: "d", text: "Reinicia el microcontrolador", isCorrect: false }
    ]
  }
];
