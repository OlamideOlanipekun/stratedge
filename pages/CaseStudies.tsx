
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, TrendingUp, CheckCircle } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Success Stories"
          title="The Performance Index."
          subtitle="Real results for high-growth SMEs. We pride ourselves on transformative metrics and sustainable business evolution."
        />

        <div className="space-y-32">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              key={study.id} 
              className={`flex flex-col lg:flex-row gap-16 items-center ${
                idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:w-3/5 relative group">
                <div className="absolute -inset-4 bg-brand-light rounded-[3rem] -z-10 group-hover:bg-brand-gold/5 transition-colors duration-500"></div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute top-8 left-8">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-brand-navy text-white px-8 py-3 rounded-2xl font-black text-2xl shadow-2xl flex items-center gap-3 border border-brand-gold/30"
                    >
                      <TrendingUp size={24} className="text-brand-gold" />
                      {study.metric}
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/5">
                <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.2em] text-brand-gold uppercase bg-brand-gold/10 rounded-full">
                  {study.clientType}
                </div>
                <h3 className="serif text-4xl lg:text-5xl font-black text-brand-navy mb-8 leading-tight">
                  {study.title}
                </h3>
                
                <div className="space-y-8 mb-12">
                  <div className="p-6 bg-brand-light rounded-2xl border-l-4 border-brand-gold">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Challenge</span>
                    <p className="text-brand-navy font-bold italic leading-relaxed">"{study.problem}"</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-4">Strategic Intervention</span>
                    <p className="text-slate-600 leading-relaxed font-medium">{study.solution}</p>
                  </div>
                  <div className="flex items-center gap-3 text-brand-gold font-black">
                    <CheckCircle size={20} />
                    <span>{study.result}</span>
                  </div>
                </div>

                <button className="flex items-center gap-3 text-brand-navy font-black text-sm uppercase tracking-widest border-b-2 border-brand-navy pb-2 hover:text-brand-gold hover:border-brand-gold transition-all group">
                  Case Retrospective <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 bg-brand-navy rounded-[4rem] p-12 lg:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -z-0"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
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
                <div className="serif text-5xl lg:text-7xl font-black text-white mb-4 italic tracking-tighter">{stat.value}</div>
                <div className="text-brand-gold font-black uppercase tracking-[0.2em] text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
