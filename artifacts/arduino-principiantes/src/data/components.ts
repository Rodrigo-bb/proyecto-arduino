export type Component = {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'Salida' | 'Pasivo' | 'Herramienta' | 'Sensor';
};

export const componentsData: Component[] = [
  {
    id: 'led',
    name: 'LED',
    description: 'Diodo emisor de luz. Indica estados visuales en el circuito.',
    icon: 'Lightbulb',
    category: 'Salida'
  },
  {
    id: 'resistor',
    name: 'Resistencia',
    description: 'Limita el flujo de corriente eléctrica para proteger otros componentes.',
    icon: 'Activity',
    category: 'Pasivo'
  },
  {
    id: 'breadboard',
    name: 'Protoboard',
    description: 'Permite conectar componentes sin necesidad de soldar.',
    icon: 'LayoutGrid',
    category: 'Herramienta'
  },
  {
    id: 'jumper',
    name: 'Cables Jumper',
    description: 'Conectan componentes eléctricos en la protoboard.',
    icon: 'Unplug',
    category: 'Herramienta'
  },
  {
    id: 'potentiometer',
    name: 'Potenciómetro',
    description: 'Resistencia variable controlada manualmente mediante una perilla.',
    icon: 'Dialpad',
    category: 'Pasivo'
  },
  {
    id: 'button',
    name: 'Botón Pulsador',
    description: 'Cierra el circuito eléctrico momentáneamente al presionarse.',
    icon: 'CircleDot',
    category: 'Sensor'
  },
  {
    id: 'buzzer',
    name: 'Buzzer',
    description: 'Genera sonidos y alertas auditivas simples.',
    icon: 'Volume2',
    category: 'Salida'
  },
  {
    id: 'temp-sensor',
    name: 'Sensor de Temperatura',
    description: 'Mide la temperatura ambiente (ej. TMP36 o LM35).',
    icon: 'Thermometer',
    category: 'Sensor'
  }
];
