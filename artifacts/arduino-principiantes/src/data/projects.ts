export type Difficulty = 'Básico' | 'Intermedio' | 'Avanzado';

export type Project = {
  id: string;
  title: string;
  difficulty: Difficulty;
  description: string;
  time: string;
  code?: string;
};

export const projectsData: Project[] = [
  {
    id: 'blink',
    title: 'Parpadeo de LED',
    difficulty: 'Básico',
    description: 'Enciende y apaga un LED de la placa usando la función delay(), el "Hola Mundo" de Arduino.',
    time: '~5 min',
    code: `void setup() {
  // Inicializamos el pin digital LED_BUILTIN como salida
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // Enciende el LED (HIGH es el nivel de voltaje)
  delay(1000);                      // Espera un segundo
  digitalWrite(LED_BUILTIN, LOW);   // Apaga el LED bajando el voltaje
  delay(1000);                      // Espera un segundo
}`
  },
  {
    id: 'semaforo',
    title: 'Semáforo',
    difficulty: 'Básico',
    description: 'Simula el funcionamiento de un semáforo utilizando 3 LEDs (rojo, amarillo, verde) y temporización.',
    time: '~15 min',
    code: `int pinRojo = 13;
int pinAmarillo = 12;
int pinVerde = 11;

void setup() {
  pinMode(pinRojo, OUTPUT);
  pinMode(pinAmarillo, OUTPUT);
  pinMode(pinVerde, OUTPUT);
}

void loop() {
  // Luz Verde
  digitalWrite(pinVerde, HIGH);
  delay(5000);
  digitalWrite(pinVerde, LOW);
  
  // Luz Amarilla
  digitalWrite(pinAmarillo, HIGH);
  delay(2000);
  digitalWrite(pinAmarillo, LOW);
  
  // Luz Roja
  digitalWrite(pinRojo, HIGH);
  delay(5000);
  digitalWrite(pinRojo, LOW);
}`
  },
  {
    id: 'pwm-led',
    title: 'Control de Brillo',
    difficulty: 'Básico',
    description: 'Usa la modulación por ancho de pulsos (PWM) para controlar la intensidad de un LED con un potenciómetro.',
    time: '~15 min'
  },
  {
    id: 'temp-sensor',
    title: 'Sensor de Temperatura',
    difficulty: 'Intermedio',
    description: 'Lee la temperatura ambiente con un sensor analógico y la muestra en el monitor serial.',
    time: '~20 min',
    code: `int sensorPin = A0;    // Pin analógico conectado al sensor

void setup() {
  Serial.begin(9600);  // Inicia comunicación serial a 9600 bps
}

void loop() {
  int lectura = analogRead(sensorPin);
  
  // Convierte la lectura a voltaje
  float voltaje = lectura * (5.0 / 1023.0);
  
  // Convierte el voltaje a temperatura Celsius (para TMP36)
  float temperatura = (voltaje - 0.5) * 100;
  
  Serial.print("Temperatura: ");
  Serial.print(temperatura);
  Serial.println(" C");
  
  delay(1000);
}`
  },
  {
    id: 'alarma',
    title: 'Alarma Sonora',
    difficulty: 'Intermedio',
    description: 'Activa un buzzer cuando un sensor PIR detecta movimiento en la habitación.',
    time: '~30 min'
  },
  {
    id: 'lcd',
    title: 'Display LCD',
    difficulty: 'Intermedio',
    description: 'Muestra mensajes de texto personalizados en una pantalla LCD 16x2.',
    time: '~45 min'
  },
  {
    id: 'bluetooth',
    title: 'Control por Bluetooth',
    difficulty: 'Avanzado',
    description: 'Conecta un módulo HC-05 para controlar LEDs y motores desde tu smartphone Android.',
    time: '~60 min'
  },
  {
    id: 'weather',
    title: 'Estación Meteorológica',
    difficulty: 'Avanzado',
    description: 'Mide temperatura, humedad y presión atmosférica usando múltiples sensores I2C.',
    time: '~90 min'
  }
];
