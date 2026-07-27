import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Cpu, Terminal, Users, CheckCircle2 } from "lucide-react";

export function QueEsArduinoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const timelineSteps = [
    { title: "Instala el IDE", desc: "Descarga el entorno de desarrollo oficial." },
    { title: "Conecta tu placa", desc: "Usa un cable USB para conectar el Arduino a tu PC." },
    { title: "Escribe tu sketch", desc: "Programa en C/C++ usando funciones simples." },
    { title: "Sube el código", desc: "Transfiere las instrucciones al microcontrolador." },
    { title: "¡Mira el resultado!", desc: "El hardware ejecutará tu código automáticamente." },
  ];

  return (
    <section id="que-es-arduino" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto" ref={ref as any}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-heading">
            ¿Qué es Arduino?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Es la plataforma que revolucionó la creación de proyectos electrónicos, 
            haciendo el hardware accesible para estudiantes, artistas y aficionados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Cpu size={100} />
            </div>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Hardware</h3>
            <p className="text-muted-foreground">
              Arduino es una plataforma de prototipado electrónico de código abierto. 
              Incluye un microcontrolador y conectores de entrada/salida para interactuar con el mundo físico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Terminal size={100} />
            </div>
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-6">
              <Terminal size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Software</h3>
            <p className="text-muted-foreground">
              El IDE de Arduino permite programar en C/C++ con una sintaxis simplificada. 
              Todo programa se basa en dos funciones fundamentales: <code className="text-accent bg-accent/10 px-1 rounded">setup()</code> y <code className="text-accent bg-accent/10 px-1 rounded">loop()</code>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={100} />
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Comunidad</h3>
            <p className="text-muted-foreground">
              Más de 30 millones de usuarios en todo el mundo respaldan esta tecnología. 
              Encontrarás miles de proyectos educativos, librerías e inspiración a un clic de distancia.
            </p>
          </motion.div>
        </div>

        <div className="bg-secondary/50 rounded-3xl p-8 md:p-12 border border-border">
          <h3 className="text-2xl font-bold mb-8 text-center font-heading">El flujo de trabajo Arduino</h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-8 relative">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 md:text-${index % 2 === 0 ? 'left' : 'right'} pl-12 md:pl-0`}>
                    <h4 className="text-lg font-bold text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
                  </div>
                  
                  <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold z-10 border-4 border-background shadow-md md:-mx-4">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}