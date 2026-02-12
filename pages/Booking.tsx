
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Calendar, Clock, Video, CheckCircle, BrainCircuit, Sparkles, ChevronRight, Info } from 'lucide-react';
import { getDiagnosticAdvice } from '../services/aiService';

export const Booking: React.FC = () => {
  const [aiLoading, setAiLoading] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<any>(null);
  const [problemInput, setProblemInput] = useState('');
  const [bizType, setBizType] = useState('Professional Services');

  const handleAIDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemInput) return;
    setAiLoading(true);
    const result = await getDiagnosticAdvice(bizType, problemInput);
    setDiagnosticResult(result);
    setAiLoading(false);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-7">
            <SectionTitle
              badge="Diagnostic First"
              title="Intelligence-led growth."
              subtitle="Every consultation begins with data. Use our StratEdge AI to generate your initial business health summary before our call."
            />
            
            <motion.div 
              layout
              className="bg-brand-navy rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-white shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] -z-10"></div>
              
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                  <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-black italic tracking-tight">StratEdge AI Analyst</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-gold animate-pulse"></span>
                    <span className="text-[9px] md:text-[10px] uppercase font-black tracking-widest text-slate-400">System Online</span>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!diagnosticResult ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleAIDiagnostic} 
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="space-y-3">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Business Model</label>
                      <select 
                        value={bizType}
                        onChange={(e) => setBizType(e.target.value)}
                        className="w-full bg-slate-900 border-2 border-slate-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-brand-gold transition-all font-bold text-sm md:text-base"
                      >
                        <option>Professional Services</option>
                        <option>E-commerce / Retail</option>
                        <option>Manufacturing</option>
                        <option>SaaS / Tech</option>
                        <option>Hospitality</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Core Challenge Description</label>
                      <textarea 
                        required
                        placeholder="Describe your primary obstacle in 1-2 sentences..."
                        className="w-full bg-slate-900 border-2 border-slate-800 rounded-xl md:rounded-2xl px-5 md:px-6 py-4 md:py-5 text-white focus:outline-none focus:border-brand-gold transition-all h-28 md:h-32 font-medium placeholder:text-slate-600 text-sm md:text-base"
                        value={problemInput}
                        onChange={(e) => setProblemInput(e.target.value)}
                      ></textarea>
                    </div>

                    <button 
                      disabled={aiLoading}
                      className="group w-full bg-brand-gold text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      {aiLoading ? (
                        <>
                          <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Synthesizing Analysis...
                        </>
                      ) : (
                        <>
                          Generate Strategy Report
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-slate-500 font-medium">Powered by Gemini 3 Flash Intelligence</p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6 md:space-y-8"
                  >
                    <div className="p-6 md:p-8 bg-brand-gold/10 border border-brand-gold/20 rounded-[1.5rem] md:rounded-[2rem] relative">
                      <div className="absolute top-4 right-4 text-brand-gold"><Sparkles size={16} /></div>
                      <h4 className="text-brand-gold font-black text-[10px] uppercase tracking-widest mb-3 md:mb-4">Executive Summary</h4>
                      <p className="text-base md:text-lg text-slate-200 leading-relaxed font-medium italic">
                        "{diagnosticResult.summary}"
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-widest mb-4">Strategic Recommendations</h4>
                      {diagnosticResult.advice.map((item: string, i: number) => (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          key={i} 
                          className="flex gap-4 p-4 md:p-5 bg-slate-900/50 rounded-xl md:rounded-2xl border border-slate-800 hover:border-brand-gold/30 transition-colors group"
                        >
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-brand-gold/20 text-brand-gold flex items-center justify-center shrink-0 font-black text-[10px]">
                            {i + 1}
                          </div>
                          <span className="text-slate-300 font-bold group-hover:text-white transition-colors text-sm md:text-base">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                      <button 
                        onClick={() => window.scrollTo({ top: 100, behavior: 'smooth' })}
                        className="flex-1 bg-white text-brand-navy font-black py-4 rounded-xl md:rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 text-sm md:text-base"
                      >
                        Book Discovery Call <ChevronRight size={18} />
                      </button>
                      <button 
                        onClick={() => setDiagnosticResult(null)}
                        className="px-6 py-4 text-slate-500 font-black uppercase text-[10px] tracking-widest hover:text-white transition-colors"
                      >
                        Reset Analysis
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="lg:col-span-5 pt-0 lg:pt-8">
            <div className="sticky top-32 space-y-6 md:space-y-8">
              <div className="glass p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-xl">
                 <h3 className="text-xl md:text-2xl font-black mb-6 md:mb-8 text-brand-navy">What to expect.</h3>
                 <div className="space-y-6 md:space-y-8">
                    {[
                      { icon: <Clock className="text-brand-gold" />, title: '30-Min High Intensity', desc: 'No fluff. We move straight to the bottlenecks.' },
                      { icon: <CheckCircle className="text-brand-gold" />, title: 'KPI Mapping', desc: 'Define your North Star metrics for the next 12 months.' },
                      { icon: <Video className="text-brand-gold" />, title: 'Direct Access', desc: 'Speak directly with a Senior Partner, not an account rep.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 md:gap-5">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center shrink-0">
                          {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                        </div>
                        <div>
                          <h4 className="font-black text-brand-navy mb-1 text-sm md:text-base">{item.title}</h4>
                          <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-6 md:p-8 bg-brand-gold/5 rounded-[1.5rem] md:rounded-3xl border border-brand-gold/20 flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white shrink-0 hidden sm:flex">
                  <Info size={18} />
                </div>
                <p className="text-brand-navy text-[10px] md:text-xs font-bold leading-relaxed">
                  Note: Discovery sessions are highly selective. Please complete the AI diagnostic for priority booking.
                </p>
              </div>

              <div className="group cursor-pointer bg-brand-navy text-white rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 hidden sm:block"><Calendar size={120} /></div>
                <h4 className="text-2xl md:text-3xl font-black mb-2 md:mb-4 serif italic">Calendly Link</h4>
                <p className="text-slate-400 mb-6 md:mb-8 font-medium text-sm">Select your preferred slot from our firm's availability.</p>
                <div className="bg-brand-gold text-white py-4 rounded-full font-black text-base md:text-lg md:group-hover:bg-white md:group-hover:text-brand-navy transition-all shadow-xl">
                  Open Calendar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
