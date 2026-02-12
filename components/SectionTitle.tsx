
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionTitle: React.FC<Props> = ({ badge, title, subtitle, centered = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-10 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}`}
    >
      {badge && (
        <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 mb-4 md:mb-6 text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] text-brand-gold uppercase bg-brand-gold/10 border border-brand-gold/20 rounded-full">
          {badge}
        </span>
      )}
      <h2 className={`serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy mb-4 md:mb-8 leading-[1.2] md:leading-[1.1]`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
      {!centered && <div className="mt-6 md:mt-8 h-1.5 w-16 md:w-24 bg-brand-gold rounded-full" />}
    </motion.div>
  );
};
