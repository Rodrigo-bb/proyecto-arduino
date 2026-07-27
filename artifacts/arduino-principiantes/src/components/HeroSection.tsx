import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background PCB Animation */}
      <div className="pcb-trace-container">
        <div className="pcb-line w-px h-[40vh] left-[10%] top-[10%] animate-[drawLineV_3s_ease-out_forwards]" />
        <div className="pcb-line h-px w-[30vw] left-[10%] top-[50%] animate-[drawLineH_4s_ease-out_forwards]" />
        <div className="pcb-dot left-[40%] top-[50%]" style={{ animationDelay: '1s' }} />
        
        <div className="pcb-line w-px h-[60vh] right-[20%] top-[20%] animate-[drawLineV_4s_ease-out_forwards]" />
        <div className="pcb-line h-px w-[20vw] right-[0%] top-[80%] animate-[drawLineH_3s_ease-out_forwards]" />
        <div className="pcb-dot right-[20%] top-[80%]" style={{ animationDelay: '0.5s' }} />

        <div className="pcb-line h-px w-[40vw] left-[30%] top-[20%] animate-[drawLineH_5s_ease-out_forwards]" />
        <div className="pcb-dot left-[30%] top-[20%]" style={{ animationDelay: '2s' }} />
        <div className="pcb-dot left-[70%] top-[20%]" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8"
        >
          <ZapIcon className="mr-2 h-4 w-4 fill-current" />
          <span>La guía definitiva en español</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl font-heading"
        >
          Aprende Arduino <span className="text-primary">desde cero</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Descubre el mundo de la electrónica y la programación. Construye circuitos virtuales en TinkerCAD sin riesgo, y da vida a tus ideas paso a paso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="h-14 px-8 text-base font-semibold group" asChild>
            <a href="#que-es-arduino">
              Empezar a aprender
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold" asChild>
            <a href="#proyectos">
              Ver proyectos
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {[
            { label: "8 Proyectos", icon: <Code className="h-5 w-5 text-accent" /> },
            { label: "10 Preguntas Quiz", icon: <BookOpen className="h-5 w-5 text-accent" /> },
            { label: "100% Gratuito", icon: <Layers className="h-5 w-5 text-accent" /> },
            { label: "Para principiantes", icon: <ZapIcon className="h-5 w-5 text-accent" /> },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-card border border-border/50 shadow-sm">
              <div className="mb-2 p-3 rounded-full bg-accent/10">
                {stat.icon}
              </div>
              <span className="font-medium text-sm md:text-base text-card-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}