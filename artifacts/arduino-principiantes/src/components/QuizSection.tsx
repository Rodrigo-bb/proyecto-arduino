import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/use-in-view";
import { quizData } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuizSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizData[currentQIndex];

  const handleSelectOption = (id: string) => {
    if (isAnswered) return;
    setSelectedOption(id);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption) return;
    
    setIsAnswered(true);
    const isCorrect = question.options.find(o => o.id === selectedOption)?.isCorrect;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQIndex < quizData.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  const getMotivationalMessage = () => {
    if (score <= 4) return "Sigue estudiando, ¡tú puedes! 💪";
    if (score <= 7) return "¡Buen progreso! Repasa los conceptos básicos. 📚";
    return "¡Excelente! Eres un experto en Arduino. ⚡";
  };

  return (
    <section id="quiz" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto" ref={ref as any}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 font-heading">
            ¿Cuánto has aprendido?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pon a prueba tus conocimientos con este rápido cuestionario.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          {!showResults ? (
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4 text-sm font-medium text-muted-foreground">
                  <span>Pregunta {currentQIndex + 1} de {quizData.length}</span>
                  <span>Puntuación: {score}</span>
                </div>
                <Progress value={((currentQIndex) / quizData.length) * 100} className="h-2" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-relaxed">
                {question.text}
              </h3>

              <div className="space-y-3 mb-8">
                {question.options.map((option) => {
                  const isSelected = selectedOption === option.id;
                  const showCorrectness = isAnswered;
                  const isCorrectAnswer = option.isCorrect;
                  
                  let stateClasses = "hover:bg-muted border-border";
                  if (isSelected && !showCorrectness) stateClasses = "border-primary bg-primary/10 ring-1 ring-primary";
                  else if (showCorrectness && isCorrectAnswer) stateClasses = "border-green-500 bg-green-500/10 text-green-500";
                  else if (showCorrectness && isSelected && !isCorrectAnswer) stateClasses = "border-red-500 bg-red-500/10 text-red-500";
                  else if (showCorrectness) stateClasses = "opacity-50 border-border";

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option.id)}
                      disabled={isAnswered}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between",
                        stateClasses
                      )}
                    >
                      <span className="flex-1 font-medium">{option.text}</span>
                      {showCorrectness && isCorrectAnswer && <CheckCircle2 className="text-green-500 ml-2" size={20} />}
                      {showCorrectness && isSelected && !isCorrectAnswer && <XCircle className="text-red-500 ml-2" size={20} />}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end">
                {!isAnswered ? (
                  <Button 
                    onClick={handleConfirmAnswer} 
                    disabled={!selectedOption}
                    size="lg"
                  >
                    Confirmar
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextQuestion} 
                    size="lg"
                  >
                    {currentQIndex < quizData.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                <Trophy size={40} />
              </div>
              
              <h3 className="text-3xl font-bold mb-2">¡Quiz Completado!</h3>
              <p className="text-muted-foreground text-lg mb-8">Tu puntuación final es:</p>
              
              <div className="text-6xl font-black text-foreground mb-6 font-heading">
                {score}<span className="text-3xl text-muted-foreground font-normal">/{quizData.length}</span>
              </div>
              
              <p className="text-xl text-primary font-medium mb-10 px-4 py-2 bg-primary/10 inline-block rounded-lg">
                {getMotivationalMessage()}
              </p>
              
              <div>
                <Button onClick={resetQuiz} size="lg" variant="outline" className="gap-2 rounded-full">
                  <RotateCcw size={18} />
                  Reiniciar quiz
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}