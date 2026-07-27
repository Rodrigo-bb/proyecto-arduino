import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Listen to hash change for back/forward navigation
    window.addEventListener('hashchange', handleHashChange);
    
    // Also handle initial load if there's a hash
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
}
