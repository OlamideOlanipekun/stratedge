
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, TrendingUp, CheckCircle } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 w-full">
      <div className="w-full px-6 md:px-12 lg:px-20 xl:px-32">
        <SectionTitle
          badge="Success Stories"
          title="The Performance Index."
          subtitle="Real results for high-growth SMEs. We pride ourselves on transformative metrics and sustainable business evolution."
        />

        <div className="space-y-48 md:space-y-64 mt-24">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={study.id} 
              className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center w-full ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-3/5 w-full relative group">
                <div className="absolute -inset-8 bg-brand-light rounded-[4rem] -z-10 group-hover:bg-brand-gold/5 transition-colors duration-500"></div>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[3.5rem] shadow-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-10 left-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-brand-navy text-white px-10 py-5 rounded-[2rem] font-black text-3xl md:text-5xl shadow-2xl flex items-center gap-4 border border-brand-gold/30"
                    >
                      <TrendingUp size={32} className="text-brand-gold" />
                      {study.metric}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/5 w-full">
                <div className="inline-block px-5 py-2 mb-8 text-xs font-black tracking-[0.3em] text-brand-gold uppercase bg-brand-gold/10 rounded-full">
                  {study.clientType}
                </div>
                <h3 className="serif text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy mb-10 leading-[0.9] tracking-tighter">
                  {study.title}
                </h3>
                
                <div className="space-y-10 mb-16">
                  <div className="p-8 md:p-12 bg-brand-light rounded-[2.5rem] border-l-8 border-brand-gold">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-[0.3em] block mb-4">Challenge</span>
                    <p className="text-2xl md:text-3xl text-brand-navy font-bold italic leading-relaxed">"{study.problem}"</p>
                  </div>
                  <div className="px-2">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-[0.3em] block mb-6">Strategic Intervention</span>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">{study.solution}</p>
                  </div>
                  <div className="flex items-center gap-4 text-brand-gold font-black text-2xl md:text-3xl px-2">
                    <CheckCircle size={32} />
                    <span>{study.result}</span>
                  </div>
                </div>

                <button className="flex items-center gap-4 text-brand-navy font-black text-xl uppercase tracking-widest border-b-4 border-brand-navy pb-3 hover:text-brand-gold hover:border-brand-gold transition-all group ml-2">
                  Case Retrospective <ArrowUpRight size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 md:mt-64 bg-brand-navy rounded-[4rem] md:rounded-[6rem] p-16 lg:p-32 relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] -z-0"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-center">
            {[
              { label: 'Avg. Profit Increase', value: '38%' },
              { label: 'Client Success Rate', value: '94%' },
              { label: 'SMEs Scale-Up', value: '200+' },
              { label: 'Capital Unlocked', value: '$45M' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="serif text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 italic tracking-tighter">{stat.value}</div>
                <div className="text-brand-gold font-black uppercase tracking-[0.4em] text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
