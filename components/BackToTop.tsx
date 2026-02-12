
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[60] group"
          aria-label="Back to top"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-brand-gold/20 animate-ping group-hover:animate-none group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            
            <div className="relative flex items-center justify-center w-14 h-14 bg-brand-navy text-white rounded-full shadow-2xl border border-white/10 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-500">
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-500" />
            </div>
            
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-brand-navy text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-gold/20 shadow-xl">
              Top of Page
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
