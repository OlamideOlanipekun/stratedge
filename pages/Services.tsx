
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Target, Settings, TrendingUp, Zap, Sparkles, Layers } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES, ICONS } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export const Services: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-navy/5 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20 md:mb-32"
        >
          <SectionTitle
            badge="Expertise & Intelligence"
            title="Strategic Architecture."
            subtitle="We provide the high-octane intelligence usually reserved for global conglomerates, re-engineered for the agility of the mid-market."
          />
        </motion.div>

        <div className="space-y-24 md:space-y-48">
          {SERVICES.map((service, index) => (
            <motion.section
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2 relative">
                <motion.div 
                  variants={fadeUp}
                  className="relative group"
                >
                  <div className="absolute -inset-4 md:-inset-6 bg-brand-light rounded-[2.5rem] md:rounded-[3rem] -z-10 group-hover:bg-brand-gold/5 transition-colors duration-700"></div>
                  <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-white">
                    <img
                      src={`https://images.unsplash.com/photo-${index === 0 ? '1454165833767-129670c0276b' : index === 1 ? '1504384308090-c894fdcc538d' : '1460925895917-afdab827c52f'}?auto=format&fit=crop&q=80&w=1200`}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105"
                    />
                  </div>
                  
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 lg:right-[-20px] glass p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border border-white z-20 hidden sm:block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-xl md:rounded-2xl flex items-center justify-center text-white">
                        <Zap size={20} />
                      </div>
                      <div>
                        <div className="text-lg md:text-xl font-black text-brand-navy">Proven</div>
                        <div className="text-[8px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest">ROI Delivery</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8 md:space-y-10">
                <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-navy text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl mb-2 md:mb-4">
                    {React.cloneElement(ICONS[service.icon as keyof typeof ICONS], { className: "w-8 h-8 text-brand-gold" })}
                  </div>
                  <h3 className="serif text-4xl lg:text-6xl font-black text-brand-navy tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-xl">
                    {service.description}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                  <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
                    <h4 className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em]">Target Profiles</h4>
                    <ul className="space-y-3 md:space-y-4">
                      {service.whoItIsFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center mt-0.5 group-hover:bg-brand-gold transition-colors">
                            <CheckCircle2 size={12} className="text-brand-gold group-hover:text-white" />
                          </div>
                          <span className="text-slate-600 font-bold text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-4 md:space-y-6">
                    <h4 className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em]">Key Milestones</h4>
                    <ul className="space-y-3 md:space-y-4">
                      {service.outcomes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="w-5 h-5 rounded-full bg-brand-navy flex items-center justify-center mt-0.5">
                            <Layers size={10} className="text-white" />
                          </div>
                          <span className="text-slate-600 font-bold text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="pt-4 md:pt-8">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-4 bg-brand-gold text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:bg-brand-gold/90 transition-all shadow-xl group"
                  >
                    Initiate Engagement
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <section className="mt-24 md:mt-48 py-20 md:py-32 bg-brand-navy relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[9px] md:text-[10px] font-black tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/20 rounded-full">
              The StratEdge Engine
            </div>
            <h2 className="serif text-4xl md:text-7xl font-black text-white mb-6 md:mb-10 italic">
              Our Clinical Approach.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-12 md:mb-16 leading-relaxed font-medium">
              We don't sell billable hours. We sell transformation through a three-stage industrial process.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { step: '01', title: 'Audit & Diagnostic', desc: 'Surgical extraction of current performance bottlenecks.' },
                { step: '02', title: 'Tactical Design', desc: 'Blueprint generation for high-impact operational shifts.' },
                { step: '03', title: 'Imbedded Execution', desc: 'Hands-on implementation to ensure target ROI is met.' }
              ].map((item, i) => (
                <div key={i} className="group text-left p-8 md:p-10 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] border border-slate-800 hover:border-brand-gold transition-all">
                  <div className="text-3xl md:text-4xl font-black text-brand-gold mb-4 md:mb-6 opacity-30 group-hover:opacity-100 transition-opacity italic tracking-tighter">{item.step}</div>
                  <h4 className="text-white font-black text-lg md:text-xl mb-3 md:mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 mt-24 md:mt-48">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className="bg-brand-gold rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden sm:block"><Sparkles size={200} /></div>
          <h2 className="serif text-3xl md:text-7xl font-black mb-6 md:mb-8 leading-tight italic">
            Ready to <br className="hidden md:block" /> scale differently?
          </h2>
          <p className="text-brand-light/90 text-lg md:text-xl mb-8 md:mb-12 max-w-xl mx-auto font-medium">
            Contact a senior partner to discuss which strategic module aligns with your current quarter objectives.
          </p>
          <Link 
            to="/contact" 
            className="inline-block w-full sm:w-auto bg-brand-navy text-white px-10 md:px-16 py-4 md:py-6 rounded-2xl font-black text-base md:text-lg hover:bg-white hover:text-brand-navy transition-all transform hover:-translate-y-1"
          >
            Speak with an Expert
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
