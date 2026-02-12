
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Mail, Phone, MapPin, Send, MessageCircle, Globe, ShieldCheck, ArrowRight, ArrowUpRight, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void; type?: "button" | "submit" }> = ({ children, className, onClick, type = "button" }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.2);
    y.set((clientY - centerY) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-40 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,77,0.04)_0%,_transparent_50%)]"></div>
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-brand-light rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24"
        >
          <SectionTitle
            badge="Direct Channels"
            title="Sovereign Engagement."
            subtitle="Initiate a dialogue with our strategic command. We prioritize inquiries that demonstrate clear operational objectives and scaling intent."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 space-y-16"
          >
            <div className="space-y-12">
              <motion.div variants={fadeUp} className="group relative">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-gold shadow-xl group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Globe size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[10px] font-black uppercase text-brand-gold tracking-[0.25em] mb-3">Global Command</h4>
                    <p className="text-xl font-black text-brand-navy mb-1">StratEdge HQ New York</p>
                    <p className="text-slate-500 font-medium leading-relaxed mb-4 italic">123 Strategy Ave, Manhattan, NY 10001</p>
                    <div className="flex gap-6">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} className="text-brand-gold" /> 09:00 — 18:00 EST
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="group">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-light border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-500">
                    <Mail size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[10px] font-black uppercase text-brand-gold tracking-[0.25em] mb-3">Intelligence Intake</h4>
                    <p className="text-xl font-black text-brand-navy mb-1">intelligence@stratedge.com</p>
                    <p className="text-slate-500 font-medium text-sm">Response Target: 48 Hours</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="group">
                <div className="flex gap-8 items-start">
                  <div className="w-16 h-16 bg-brand-light border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 group-hover:border-brand-gold group-hover:text-brand-gold transition-all duration-500">
                    <Phone size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[10px] font-black uppercase text-brand-gold tracking-[0.25em] mb-3">Partner Hotline</h4>
                    <p className="text-xl font-black text-brand-navy mb-1">+1 (555) STRAT-EDGE</p>
                    <p className="text-slate-500 font-medium text-sm">Priority Routing for Existing Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="p-12 bg-brand-navy rounded-[3.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <MessageCircle size={120} className="text-brand-gold" />
              </div>
              <h4 className="text-white text-2xl font-black mb-6 serif italic">Partner Direct.</h4>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed">
                Connect directly via encrypted WhatsApp for preliminary alignment discussions with a senior partner.
              </p>
              <a
                href="https://wa.me/15550001234"
                className="inline-flex items-center gap-4 bg-brand-gold text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all shadow-2xl"
              >
                Launch Session <ArrowRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[4rem] p-10 lg:p-20 shadow-[0_50px_100px_-20px_rgba(11,31,58,0.1)] border border-slate-100 relative">
              <div className="absolute top-10 right-10 flex items-center gap-3 text-slate-300">
                <ShieldCheck size={20} className="text-brand-gold" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Intake v2.5</span>
              </div>
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-gold/30">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="serif text-5xl font-black text-brand-navy mb-6 italic">Transmission Confirmed.</h3>
                    <p className="text-xl text-slate-500 mb-12 max-w-md mx-auto leading-relaxed font-medium">
                      Your strategic inquiry has been prioritized. A partner-level executive will review your brief within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-brand-navy text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <div className="mb-14">
                      <h3 className="serif text-4xl lg:text-5xl font-black text-brand-navy mb-6 italic">Secure Briefing.</h3>
                      <p className="text-lg text-slate-500 font-medium">Please provide high-level context regarding your operational challenges.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Full Legal Name</label>
                          <input 
                            required 
                            type="text" 
                            className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-black text-xl text-brand-navy focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-200"
                            placeholder="e.g. Alexander Vance"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Professional Email</label>
                          <input 
                            required 
                            type="email" 
                            className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-black text-xl text-brand-navy focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-200"
                            placeholder="ceo@company.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Executive Brief (Challenges & Objectives)</label>
                        <textarea 
                          required 
                          rows={4} 
                          className="w-full bg-brand-light border-2 border-transparent rounded-[2rem] p-8 font-medium text-lg text-brand-navy focus:outline-none focus:border-brand-gold transition-colors placeholder:text-slate-300 resize-none"
                          placeholder="Detail your current bottleneck or growth target..."
                        ></textarea>
                      </div>

                      <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4 text-slate-400 max-w-xs text-left">
                          <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0">
                            <ShieldCheck size={20} className="text-brand-gold" />
                          </div>
                          <p className="text-[10px] font-bold leading-tight uppercase tracking-widest">
                            End-to-end encryption active. Your strategic data is protected.
                          </p>
                        </div>
                        
                        <MagneticButton 
                          type="submit"
                          className="w-full md:w-auto bg-brand-gold text-white px-14 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-brand-navy transition-all shadow-2xl shadow-brand-gold/20 group flex items-center justify-center gap-4"
                        >
                          Send Intelligence <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </MagneticButton>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
