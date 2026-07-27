import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { projectsData, Difficulty } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { CodeBlock } from "@/components/ui/code-block";
import { Clock, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const difficultyColors = {
  'Básico': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Intermedio': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Avanzado': 'bg-red-500/10 text-red-400 border-red-500/20',
};

export function ProyectosSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [filter, setFilter] = useState<Difficulty | 'Todos'>('Todos');

  const filteredProjects = projectsData.filter(
    (p) => filter === 'Todos' || p.difficulty === filter
  );

  return (
    <section id="proyectos" className="py-24 bg-card/30 border-y border-border">
      <div className="container px-4 md:px-6 mx-auto" ref={ref as any}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-heading">
            Proyectos para Principiantes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Aplica lo que has aprendido. Empieza con proyectos básicos y sube de nivel poco a poco.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Todos', 'Básico', 'Intermedio', 'Avanzado'].map((level) => (
              <Button
                key={level}
                variant={filter === level ? "default" : "outline"}
                onClick={() => setFilter(level as Difficulty | 'Todos')}
                className="rounded-full"
                size="sm"
              >
                {level}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-foreground font-heading pr-4">{project.title}</h3>
                    <span className={cn(
                      "text-xs px-2.5 py-1 rounded-full border font-medium whitespace-nowrap",
                      difficultyColors[project.difficulty]
                    )}>
                      {project.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground flex-grow mb-6 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock size={16} className="mr-1.5" />
                      {project.time}
                    </div>
                    
                    {project.code ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="secondary" className="gap-2">
                            <Code2 size={16} />
                            Ver código
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-card border-border">
                          <DialogHeader>
                            <DialogTitle className="text-xl">{project.title}</DialogTitle>
                            <DialogDescription>
                              Copia este código y pégalo en el IDE de Arduino o en TinkerCAD.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 overflow-hidden rounded-md border border-border">
                            <CodeBlock code={project.code} />
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <Button size="sm" variant="ghost" disabled className="gap-2">
                        Código muy pronto
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}