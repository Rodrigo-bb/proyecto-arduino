import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Wrench, Zap, Globe, ExternalLink } from "lucide-react";

export function TinkerCADSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="tinkercad" className="py-24 bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10" ref={ref as any}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 font-heading">
              TinkerCAD: <span className="text-primary">Simula sin riesgos</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              TinkerCAD es una herramienta gratuita de Autodesk para simular circuitos Arduino directamente en tu navegador web. No necesitas comprar piezas físicas para empezar a aprender.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Wrench className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Diseño visual</h3>
                  <p className="text-muted-foreground">Arrastra y suelta componentes en un entorno virtual fácil de usar.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Zap className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Simulación en tiempo real</h3>
                  <p className="text-muted-foreground">Ejecuta tu código, enciende LEDs y prueba sensores sin hardware físico.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                  <Globe className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Acceso desde cualquier lugar</h3>
                  <p className="text-muted-foreground">Solo necesitas una conexión a internet y un navegador web para continuar tus proyectos.</p>
                </div>
              </div>
            </div>

            <Button size="lg" asChild className="group">
              <a href="https://www.tinkercad.com" target="_blank" rel="noopener noreferrer">
                Ir a TinkerCAD
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-8 shadow-2xl relative"
          >
            <h3 className="text-xl font-bold mb-6 border-b border-border pb-4">Cómo empezar con TinkerCAD</h3>
            
            <ol className="space-y-6 relative before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-border pb-4">
              {[
                "Crea una cuenta gratuita en tinkercad.com",
                'Selecciona "Circuits" y luego "Crear nuevo circuito"',
                "Arrastra un Arduino UNO y otros componentes al área de trabajo",
                'Escribe tu código en el editor integrado y presiona "Iniciar simulación"'
              ].map((step, idx) => (
                <li key={idx} className="relative pl-12">
                  <span className="absolute left-0 w-8 h-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm z-10">
                    {idx + 1}
                  </span>
                  <p className="text-card-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
            
            {/* Fake UI Simulation Element */}
            <div className="mt-8 bg-black/40 rounded-xl p-4 border border-border/50 relative overflow-hidden group">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-mono">Simulación activa</div>
              </div>
              
              <div className="relative h-32 flex items-center justify-center border-t border-border/30 pt-4">
                {/* Arduino Fake Board */}
                <div className="w-24 h-16 bg-[#00878F] rounded border-2 border-[#006064] relative">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-zinc-800"></div>
                  <div className="absolute bottom-1 right-1 flex gap-1">
                    <div className="w-1 h-3 bg-zinc-300"></div>
                    <div className="w-1 h-3 bg-zinc-300"></div>
                    <div className="w-1 h-3 bg-zinc-300"></div>
                  </div>
                  {/* Fake connections */}
                  <div className="absolute top-2 right-6 w-20 h-px bg-red-400 rotate-[15deg] origin-left z-0"></div>
                  <div className="absolute top-8 right-6 w-24 h-px bg-black rotate-[-10deg] origin-left z-0"></div>
                </div>
                
                {/* Fake LED & Resistor */}
                <div className="ml-12 relative z-10 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)] mb-2 animate-pulse"></div>
                  <div className="w-8 h-3 bg-[#DEB887] rounded-sm flex justify-around items-center px-1">
                    <div className="w-1 h-full bg-red-600"></div>
                    <div className="w-1 h-full bg-red-600"></div>
                    <div className="w-1 h-full bg-amber-800"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}