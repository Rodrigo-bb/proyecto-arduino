import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { useSmoothScroll } from '@/hooks/use-smooth-scroll';

// Sections
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { QueEsArduinoSection } from '@/components/QueEsArduinoSection';
import { ComponentesSection } from '@/components/ComponentesSection';
import { TinkerCADSection } from '@/components/TinkerCADSection';
import { ProyectosSection } from '@/components/ProyectosSection';
import { QuizSection } from '@/components/QuizSection';
import { ContactoSection } from '@/components/ContactoSection';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function SinglePageApp() {
  useSmoothScroll();

  return (
    <div className="min-h-screen w-full bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <QueEsArduinoSection />
        <ComponentesSection />
        <TinkerCADSection />
        <ProyectosSection />
        <QuizSection />
        <ContactoSection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={SinglePageApp} />
      <Route component={SinglePageApp} /> {/* Fallback so sub-routes don't break our single page layout */}
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
