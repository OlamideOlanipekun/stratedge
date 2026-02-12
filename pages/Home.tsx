
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, Shield, Sparkles, TrendingUp, Layers, MousePointer2 } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES, ICONS } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const MagneticButton: React.FC<{ children: React.ReactNode; className?: string; to: string }> = ({ children, className, to }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="w-full sm:w-auto"
    >
      <Link to={to} className={className}>
        {children}
      </Link>
    </motion.div>
  );
};

export const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <div className="overflow-hidden bg-white" ref={containerRef}>
      <section className="relative min-h-screen flex items-center pt-32 pb-20 md:py-28 lg:py-32">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(11,31,58,0.04)_0%,_transparent_50%)]"></div>
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-1/4 -right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-gold/10 rounded-full blur-[120px]"
          />
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-20 -left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-brand-navy/5 rounded-full blur-[100px]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 relative z-10 text-center lg:text-left"
          >
            <motion.div 
              variants={fadeUp} 
              className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-brand-navy text-white text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase mb-6 md:mb-10 shadow-xl"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              The Blueprint for SME Resilience
            </motion.div>
            
            <motion.div variants={fadeUp} className="relative">
              <h1 className="serif text-4xl sm:text-5xl md:text-7xl lg:text-[7.2rem] font-black text-brand-navy leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 tracking-tight">
                Architecting <br className="hidden md:block" />
                <span className="relative inline-block lg:inline">
                  <span className="gradient-text italic">Exponential</span>
                  <motion.svg 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-brand-gold/30" viewBox="0 0 300 10" preserveAspectRatio="none"
                  >
                    <path d="M0 5C50 5 50 2 100 2C150 2 150 8 200 8C250 8 250 5 300 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </motion.svg>
                </span>
                <br className="hidden md:block" /> Success.
              </h1>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl lg:text-2xl text-slate-500 mb-10 md:mb-14 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium border-l-0 lg:border-l-4 border-brand-gold lg:pl-8 py-2">
              StratEdge transforms mid-market firms into market leaders through surgical operational precision and high-conviction growth strategies.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8">
              <MagneticButton
                to="/book"
                className="w-full sm:w-auto bg-brand-gold text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-gold/30 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Initiate Project <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </MagneticButton>
              
              <Link
                to="/case-studies"
                className="group flex items-center gap-3 md:gap-4 text-brand-navy font-black text-base md:text-lg uppercase tracking-wider hover:text-brand-gold transition-colors"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-slate-100 flex items-center justify-center group-hover:border-brand-gold transition-all group-hover:scale-110">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                The Index
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-16 md:mt-20 pt-10 border-t border-slate-100 overflow-hidden relative">
              <div className="flex items-center gap-8 md:gap-12 opacity-30 grayscale whitespace-nowrap animate-marquee">
                {['FINANCE.CO', 'GLOBALBIZ', 'SME-HUB', 'APEX.DIGITAL', 'NEXUS.CORP', 'STRAT.OS', 'FINANCE.CO', 'GLOBALBIZ', 'SME-HUB'].map((name, i) => (
                  <span key={i} className="text-xl md:text-2xl font-black italic tracking-tighter shrink-0 text-brand-navy">{name}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <motion.div style={{ rotate }} className="relative">
              <div className="absolute -inset-10 bg-brand-gold/5 rounded-[5rem] blur-[100px] -z-10"></div>
              
              <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
                  alt="Elite Strategy Session"
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60"></div>
              </div>

              <motion.div 
                style={{ y: y1 }}
                className="absolute -top-12 -right-12 glass p-6 rounded-3xl shadow-2xl z-20 border border-white flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-white">
                  <Layers size={24} />
                </div>
                <div>
                  <div className="text-brand-navy font-black text-lg leading-tight">Agile Ops</div>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Implementation Ready</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-brand-navy text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,_rgba(201,162,77,0.05)_0%,_transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[9px] md:text-[10px] font-black tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/20 rounded-full">
                Consulting Philosophy
              </div>
              <h2 className="serif text-4xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-12 leading-[1.2] md:leading-[1.1]">
                Radical clarity. <br />
                <span className="text-brand-gold italic">Precision</span> results.
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 md:mb-14 leading-relaxed font-medium">
                Traditional firms sell time. We sell transformation. Our methodology is built on imbedding elite operational intelligence directly into the DNA of your business units.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                {[
                  { icon: <Globe className="text-brand-gold" />, title: 'Sovereign Strategy', desc: 'Customized frameworks that ignore the generic.' },
                  { icon: <Shield className="text-brand-gold" />, title: 'Risk Insulation', desc: 'Advanced modeling to protect your downside.' }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-center mb-4 md:mb-6 group-hover:border-brand-gold transition-colors">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-white text-lg mb-2 md:mb-3">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-square bg-brand-gold/10 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <motion.div 
                  whileInView={{ y: [-10, 0] }}
                  transition={{ duration: 1 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="h-48 md:h-80 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000" />
                  </div>
                  <div className="h-32 md:h-48 bg-brand-gold rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-4 md:p-8 text-center shadow-2xl">
                    <div className="text-2xl md:text-4xl font-black mb-1 md:mb-2 text-brand-navy">4.8x</div>
                    <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-brand-navy/60">Portfolio ROI</div>
                  </div>
                </motion.div>
                <motion.div 
                  whileInView={{ y: [10, 0] }}
                  transition={{ duration: 1 }}
                  className="space-y-4 md:space-y-6 pt-8 md:pt-16"
                >
                   <div className="h-32 md:h-48 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 flex flex-col justify-end p-4 md:p-8 group hover:bg-slate-800 transition-colors">
                      <div className="text-brand-gold font-black text-[8px] md:text-[10px] uppercase tracking-widest mb-2">Est. 2015</div>
                      <div className="text-lg md:text-2xl font-black serif italic leading-tight">Defying the status quo.</div>
                   </div>
                   <div className="h-48 md:h-80 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 overflow-hidden relative group shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-1000" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            badge="Strategic Pillars"
            title="Surgical Solutions."
            subtitle="The definitive methodology for scaling SMEs in a volatile global economy."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={service.id}
                whileHover={{ y: -10 }}
                className="group relative p-8 md:p-14 rounded-[2.5rem] md:rounded-[3rem] bg-brand-light border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-brand-gold/5 blob-shape translate-x-12 -translate-y-12" />
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white shadow-xl rounded-2xl md:rounded-[2rem] flex items-center justify-center text-brand-gold mb-8 md:mb-12 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  {React.cloneElement(ICONS[service.icon as keyof typeof ICONS], { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-brand-navy mb-4 md:mb-6">{service.title}</h3>
                <p className="text-slate-500 mb-8 md:mb-12 leading-relaxed text-base md:text-lg font-medium">{service.description}</p>
                <Link to="/services" className="inline-flex items-center gap-4 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-gold group-hover:gap-6 transition-all">
                  Deep Intelligence <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-40 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            whileInView={{ opacity: [0, 1], y: [40, 0] }}
            viewport={{ once: true }}
            className="bg-brand-navy rounded-[3rem] md:rounded-[5rem] p-10 md:p-16 lg:p-32 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
            
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-tight">
              Initiate <br className="hidden md:block" />
              <span className="text-brand-gold italic">Prestige</span> Growth.
            </h2>
            <p className="text-slate-400 text-lg md:text-2xl mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              We accept a maximum of three core engagements per quarter to ensure partner-level focus.
            </p>
            <MagneticButton 
              to="/book" 
              className="inline-block bg-brand-gold text-white px-8 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-3xl font-black text-lg md:text-2xl hover:bg-brand-gold/90 transition-all relative z-10"
            >
              Consult with a Partner
            </MagneticButton>
          </motion.div>
        </div>
      </section>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
