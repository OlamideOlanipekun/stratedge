
import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { Globe, ShieldCheck, Landmark, Users, Scale, FileText, ChevronRight, MapPin, Mail, Phone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export const Directory: React.FC = () => {
  return (
    <div className="bg-brand-navy text-slate-300 min-h-screen pt-40 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,77,0.05)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-brand-gold uppercase border border-brand-gold/20 rounded-full">
            Firm Directory & Sitemap
          </div>
          <h1 className="serif text-5xl md:text-8xl font-black text-white mb-8 leading-tight italic">
            Global Command.
          </h1>
          <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
            The comprehensive index of StratEdge International Group operations, strategic modules, and regulatory compliance frameworks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-8 space-y-20">
            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-12">
                <Globe className="text-brand-gold" size={32} />
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic serif">Regional Headquarters</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[
                  { city: 'New York City', role: 'Global Command Center', address: '123 Strategy Ave, Manhattan, NY', focus: 'M&A & Private Equity' },
                  { city: 'London', role: 'EMEA Operations Hub', address: '45 Canary Wharf, London, UK', focus: 'Supply Chain & Logistics' },
                  { city: 'Singapore', role: 'APAC Strategic Lab', address: '88 Marina Blvd, Singapore', focus: 'Digital Transformation' },
                  { city: 'Dubai', role: 'MENA Wealth Advisory', address: 'Buj Daman, DIFC, Dubai, UAE', focus: 'Growth Engineering' }
                ].map((hub, i) => (
                  <div key={i} className="p-8 bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-brand-gold transition-all group">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-colors">
                        <MapPin size={20} />
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-600 group-hover:text-brand-gold">Active Node</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{hub.city}</h3>
                    <p className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-4">{hub.role}</p>
                    <div className="space-y-4 pt-4 border-t border-slate-800">
                      <p className="text-sm text-slate-500 font-medium">{hub.address}</p>
                      <p className="text-sm text-slate-400 font-bold italic">Focus: {hub.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-12">
                <Landmark className="text-brand-gold" size={32} />
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic serif">Structural Index</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                {[
                  { 
                    title: 'Intelligence', 
                    links: [
                      { n: 'Strategic Architecture', p: '/services' },
                      { n: 'Operations Precision', p: '/services' },
                      { n: 'Growth Engineering', p: '/services' },
                      { n: 'Digital Liquidity', p: '/services' }
                    ]
                  },
                  { 
                    title: 'The Evidence', 
                    links: [
                      { n: 'The Performance Index', p: '/case-studies' },
                      { n: 'Client Retrospectives', p: '/case-studies' },
                      { n: 'Metric Validation', p: '/case-studies' },
                      { n: 'Sector Analysis', p: '/case-studies' }
                    ]
                  },
                  { 
                    title: 'Engagement', 
                    links: [
                      { n: 'Secure Intake', p: '/contact' },
                      { n: 'AI Diagnostic', p: '/book' },
                      { n: 'Discovery Booking', p: '/book' },
                      { n: 'Partner Direct', p: '/contact' }
                    ]
                  },
                  { 
                    title: 'Firm Details', 
                    links: [
                      { n: 'Mission Dossier', p: '/about' },
                      { n: 'Partner Profiles', p: '/about' },
                      { n: 'Brand Guidelines', p: '/' },
                      { n: 'Newsroom', p: '/' }
                    ]
                  }
                ].map((cat, i) => (
                  <div key={i} className="space-y-6">
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6">{cat.title}</h4>
                    <ul className="space-y-4">
                      {cat.links.map((link, li) => (
                        <li key={li}>
                          <Link to={link.p} className="text-sm text-slate-500 hover:text-brand-gold font-bold transition-colors flex items-center gap-2 group">
                            <ChevronRight size={12} className="text-slate-800 group-hover:text-brand-gold" />
                            {link.n}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 bg-brand-gold rounded-[3rem] text-brand-navy shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-20"><Zap size={140} className="text-white" /></div>
              <h3 className="text-2xl font-black mb-6 italic serif">Strategic Talent.</h3>
              <p className="text-brand-navy/80 text-sm font-medium mb-10 leading-relaxed">
                We are always seeking high-conviction consultants with Fortune 500 backgrounds.
              </p>
              <button className="w-full bg-brand-navy text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all">
                Submit Dossier
              </button>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-10 bg-slate-900 rounded-[3rem] border border-slate-800"
            >
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="text-brand-gold" size={24} />
                <h4 className="text-white font-black text-sm uppercase tracking-widest">Transparency Framework</h4>
              </div>
              <ul className="space-y-6">
                {[
                  { icon: <Scale size={16} />, title: 'Ethical Standards v2.0', desc: 'Our strictly enforced advisory conduct.' },
                  { icon: <Users size={16} />, title: 'Privacy Ordinance', desc: 'Enterprise-grade data sovereignty.' },
                  { icon: <FileText size={16} />, title: 'Conflict Protocol', desc: 'Proactive management of advisory interests.' }
                ].map((legal, i) => (
                  <li key={i} className="group cursor-pointer">
                    <div className="flex gap-4">
                      <div className="text-slate-600 group-hover:text-brand-gold transition-colors">{legal.icon}</div>
                      <div>
                        <div className="text-white font-black text-xs mb-1 group-hover:text-brand-gold transition-colors">{legal.title}</div>
                        <p className="text-[10px] text-slate-500 font-bold">{legal.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
