import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { componentsData, Component } from "@/data/components";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import * as Icons from "lucide-react";

// Helper component to render dynamic icons
const IconRenderer = ({ iconName, className }: { iconName: string, className?: string }) => {
  const IconComponent = (Icons as any)[iconName];
  if (!IconComponent) return <Icons.Component className={className} />;
  return <IconComponent className={className} />;
};

const categoryColors = {
  'Salida': 'bg-red-500/10 text-red-400 border-red-500/20',
  'Pasivo': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'Herramienta': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Sensor': 'bg-primary/10 text-primary border-primary/20',
};

export function ComponentesSection() {
  const { ref, isInView } = useInView({ threshold: 0.05 });
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComponents = componentsData.filter(
    (comp) =>
      comp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="componentes" className="py-24 bg-card/30 border-y border-border">
      <div className="container px-4 md:px-6 mx-auto" ref={ref as any}>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-heading">
              Componentes Básicos
            </h2>
            <p className="text-muted-foreground text-lg">
              Conoce las piezas fundamentales que formarán parte de tus primeros circuitos. 
              Filtra y busca para encontrar su función.
            </p>
          </div>
          
          <div className="w-full md:w-72 relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-muted-foreground">
              <Search size={18} />
            </div>
            <Input
              type="text"
              placeholder="Buscar componentes..."
              className="pl-10 h-12 bg-background border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredComponents.length === 0 ? (
          <div className="text-center py-20 bg-background rounded-2xl border border-border">
            <Search size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-medium text-foreground">No se encontraron componentes</h3>
            <p className="text-muted-foreground mt-2">Intenta con otro término de búsqueda.</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredComponents.map((comp, index) => (
                <motion.div
                  key={comp.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground">
                      <IconRenderer iconName={comp.icon} size={24} />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${categoryColors[comp.category]}`}>
                      {comp.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-foreground">{comp.name}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">
                    {comp.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}