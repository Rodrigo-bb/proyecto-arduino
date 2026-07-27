import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useInView } from "@/hooks/use-in-view";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  asunto: z.string().min(1, "Selecciona un asunto"),
  mensaje: z.string().min(20, "El mensaje debe tener al menos 20 caracteres"),
  acepto: z.boolean().refine(val => val === true, "Debes aceptar recibir respuestas")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      acepto: false
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    // Fake API call
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos a la brevedad. Gracias por contactarnos.",
        variant: "default",
      });
      form.reset();
    }, 500);
  };

  return (
    <section id="contacto" className="py-24 bg-card/30 border-t border-border">
      <div className="container px-4 md:px-6 mx-auto" ref={ref as any}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-heading">
            ¿Tienes dudas? <span className="text-accent">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Si tienes problemas con un circuito o necesitas sugerencias para proyectos, estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">contacto@arduinoprincipiantes.com</p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Ubicación</h4>
                <p className="text-muted-foreground text-sm">Comunidad en línea, disponible globalmente.</p>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Respuesta</h4>
                <p className="text-muted-foreground text-sm">En menos de 24 horas laborables.</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-background rounded-3xl p-8 border border-border shadow-md"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="nombre"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Ana García" className="bg-card" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" type="email" className="bg-card" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="asunto"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-card">
                            <SelectValue placeholder="Selecciona un tema" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Consulta general">Consulta general</SelectItem>
                          <SelectItem value="Duda técnica">Duda técnica</SelectItem>
                          <SelectItem value="Sugerencia de proyecto">Sugerencia de proyecto</SelectItem>
                          <SelectItem value="Reporte de error">Reporte de error</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="¿En qué te podemos ayudar?" 
                          className="min-h-[120px] bg-card resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="acepto"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-xl bg-card/50">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-normal cursor-pointer text-muted-foreground">
                          Acepto recibir respuestas por correo electrónico respecto a mi consulta.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={form.formState.isSubmitting}>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}