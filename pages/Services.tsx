
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
    <div className="bg-white min-h-screen pt-32 pb-20 md:pb-32 overflow-hidden w-full">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-brand-navy/5 rounded-full blur-[150px] opacity-60"></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24 md:mb-40"
        >
          <SectionTitle
            badge="Expertise & Intelligence"
            title="Strategic Architecture."
            subtitle="Providing high-octane intelligence usually reserved for global conglomerates, re-engineered for the agility of the mid-market."
          />
        </motion.div>

        <div className="space-y-32 md:space-y-64">
          {SERVICES.map((service, index) => (
            <motion.section
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 w-full ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              <div className="w-full lg:w-3/5 relative">
                <motion.div
                  variants={fadeUp}
                  className="relative group"
                >
                  <div className="absolute -inset-8 bg-brand-light rounded-[4rem] -z-10 group-hover:bg-brand-gold/5 transition-colors duration-700"></div>
                  <div className="relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
                    <img
                      src={index === 0 ? "/assets/strategy-consulting.jpg" : `https://images.unsplash.com/photo-${index === 1 ? '1504384308090-c894fdcc538d' : '1460925895917-afdab827c52f'}?auto=format&fit=crop&q=80&w=1600`}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-1000 md:group-hover:scale-105"
                    />
                  </div>

                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-10 -right-10 lg:right-[-40px] glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white z-20 hidden sm:block"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-gold rounded-3xl flex items-center justify-center text-white">
                        <Zap size={32} />
                      </div>
                      <div>
                        <div className="text-2xl font-black text-brand-navy">Proven</div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Standards</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-2/5 space-y-10 md:space-y-16">
                <motion.div variants={fadeUp} className="space-y-6 md:space-y-10">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-brand-navy text-white rounded-3xl flex items-center justify-center shadow-2xl mb-4">
                    {React.cloneElement(ICONS[service.icon as keyof typeof ICONS], { className: "w-10 h-10 md:w-14 md:h-14 text-brand-gold" })}
                  </div>
                  <h3 className="serif text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy tracking-tight leading-[0.9]">
                    {service.title}
                  </h3>
                  <p className="text-xl md:text-3xl text-slate-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                  <motion.div variants={fadeUp} className="space-y-6 md:space-y-10">
                    <h4 className="text-xs font-black uppercase text-brand-gold tracking-[0.3em]">Target Profiles</h4>
                    <ul className="space-y-5">
                      {service.whoItIsFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center mt-1 group-hover:bg-brand-gold transition-colors">
                            <CheckCircle2 size={16} className="text-brand-gold group-hover:text-white" />
                          </div>
                          <span className="text-slate-600 font-bold text-lg leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={fadeUp} className="space-y-6 md:space-y-10">
                    <h4 className="text-xs font-black uppercase text-brand-gold tracking-[0.3em]">Key Milestones</h4>
                    <ul className="space-y-5">
                      {service.outcomes.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <div className="w-6 h-6 rounded-full bg-brand-navy flex items-center justify-center mt-1">
                            <Layers size={14} className="text-white" />
                          </div>
                          <span className="text-slate-600 font-bold text-lg leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="pt-8">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-6 bg-brand-gold text-white px-12 py-6 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-brand-gold/90 transition-all shadow-2xl group"
                  >
                    Initiate Engagement
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Expanded Clinical Approach Banner */}
      <section className="mt-32 md:mt-64 py-32 md:py-56 bg-brand-navy relative w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <div className="inline-block px-5 py-2 mb-10 text-xs font-black tracking-[0.4em] text-brand-gold uppercase border border-brand-gold/30 rounded-full">
              The StratEdge Engine
            </div>
            <h2 className="serif text-5xl md:text-8xl lg:text-[10rem] font-black text-white mb-12 md:mb-20 italic tracking-tighter">
              Clinical Execution.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
              {[
                { step: '01', title: 'Audit & Diagnostic', desc: 'Surgical extraction of current performance bottlenecks and industrial waste.' },
                { step: '02', title: 'Tactical Design', desc: 'Blueprint generation for high-impact operational shifts and capital optimization.' },
                { step: '03', title: 'Imbedded Execution', desc: 'Hands-on implementation by senior partners to ensure target ROI is met.' }
              ].map((item, i) => (
                <div key={i} className="group text-left p-12 md:p-20 bg-slate-900 rounded-[4rem] border border-slate-800 hover:border-brand-gold transition-all">
                  <div className="text-5xl md:text-7xl font-black text-brand-gold mb-8 md:mb-12 opacity-30 group-hover:opacity-100 transition-opacity italic tracking-tighter">{item.step}</div>
                  <h4 className="text-white font-black text-2xl md:text-4xl mb-6 md:mb-10 tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 text-lg md:text-2xl font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
