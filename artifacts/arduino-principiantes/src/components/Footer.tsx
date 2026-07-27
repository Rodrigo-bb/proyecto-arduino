import React from "react";
import { Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <a href="#inicio" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-primary/20 text-primary p-2 rounded-lg">
                <Zap size={20} className="fill-current" />
              </div>
              <span className="font-bold text-xl tracking-tight font-heading">
                Arduino Principiantes
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Aprende, construye, comparte. La guía definitiva en español para entrar al mundo maker sin frustraciones.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Contenido</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#que-es-arduino" className="hover:text-primary transition-colors">¿Qué es Arduino?</a></li>
              <li><a href="#componentes" className="hover:text-primary transition-colors">Componentes Básicos</a></li>
              <li><a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://www.arduino.cc" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Sitio oficial Arduino</a></li>
              <li><a href="https://www.tinkercad.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Autodesk TinkerCAD</a></li>
              <li><a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Descargar IDE</a></li>
              <li><a href="https://forum.arduino.cc" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Foro de la comunidad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>Términos de servicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>Política de cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Arduino para Principiantes. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-red-500">❤️</span> para la comunidad maker.</p>
        </div>
      </div>
    </footer>
  );
}