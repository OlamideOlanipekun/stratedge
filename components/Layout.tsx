
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Twitter, MessageCircle, ArrowUpRight, ShieldCheck, Globe, Zap, Circle } from 'lucide-react';
import { motion, AnimatePresence, useSpring, useScroll } from 'framer-motion';
import { BackToTop } from './BackToTop';

const NavLink: React.FC<{ link: { name: string; path: string }; isActive: boolean; onClick?: () => void }> = ({ link, isActive, onClick }) => {
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.35);
    y.set((clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x, y }} className="relative group">
      <Link
        ref={ref}
        to={link.path}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-colors relative z-10 ${
          isActive ? 'text-brand-gold' : 'text-slate-500 hover:text-brand-navy'
        }`}
      >
        {link.name}
        {isActive && (
          <motion.div 
            layoutId="nav-pill"
            className="absolute inset-0 bg-brand-gold/10 rounded-full -z-10 border border-brand-gold/20"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Intelligence', path: '/' },
    { name: 'Solutions', path: '/services' },
    { name: 'The Index', path: '/case-studies' },
    { name: 'The Firm', path: '/about' },
    { name: 'Connect', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-[70] transition-all duration-700 ${
        scrolled ? 'py-3 bg-white/95 backdrop-blur-2xl shadow-2xl shadow-brand-navy/5 border-b border-slate-100' : 'py-6 bg-transparent'
      }`}>
        <motion.div 
          style={{ scaleX: scrollYProgress }} 
          className="absolute top-0 left-0 right-0 h-[3px] bg-brand-gold origin-left" 
        />

        <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12">
              <Link to="/" className="flex items-center gap-3 group">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="bg-brand-navy w-11 h-11 flex items-center justify-center rounded-xl shadow-2xl group-hover:bg-brand-gold transition-colors"
                >
                  <span className="text-white font-black text-xl italic tracking-tighter">SE</span>
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter text-brand-navy uppercase leading-none">StratEdge</span>
                  <span className="text-[7px] font-black tracking-[0.4em] text-slate-400 uppercase leading-none mt-1">Global Operations</span>
                </div>
              </Link>
              
              <div className="hidden xl:flex items-center gap-3 px-4 py-2 bg-brand-light border border-slate-100 rounded-full">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">Systems Operational</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1 bg-brand-light/50 p-1 rounded-full border border-slate-100/50 mr-6">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.path} 
                    link={link} 
                    isActive={isActive(link.path)} 
                  />
                ))}
              </div>
              
              <Link
                to="/book"
                className="group relative inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-brand-navy/20 hover:shadow-brand-gold/30 overflow-hidden transition-all active:scale-95"
              >
                <span className="relative z-10">Initiate Project</span>
                <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-brand-gold -z-0"
                />
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-4">
               <div className="flex items-center gap-2 px-3 py-1.5 bg-brand-gold/10 rounded-full border border-brand-gold/20">
                  <Circle size={6} className="fill-brand-gold text-brand-gold animate-pulse" />
                  <span className="text-[8px] font-black text-brand-gold uppercase tracking-widest">Live</span>
               </div>
               <button 
                onClick={() => setIsOpen(true)} 
                className="bg-brand-navy text-white p-3 rounded-xl shadow-xl active:scale-90 transition-transform"
               >
                 <Menu size={20} />
               </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-navy text-white flex flex-col"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,_rgba(201,162,77,0.15)_0%,_transparent_50%)]" />

            <div className="flex justify-between items-center p-8 relative z-10">
              <div className="flex items-center gap-3">
                <div className="bg-brand-gold w-10 h-10 flex items-center justify-center rounded-xl shadow-lg">
                  <span className="text-white font-black italic">SE</span>
                </div>
                <span className="font-black tracking-tighter uppercase text-xl">Command</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-8 sm:px-12 relative z-10">
              <div className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-6 text-4xl sm:text-6xl font-black italic serif transition-all ${
                        isActive(link.path) ? 'text-brand-gold translate-x-4' : 'text-slate-700 hover:text-white hover:translate-x-4'
                      }`}
                    >
                      <span className="text-xs not-italic font-black text-slate-800 group-hover:text-brand-gold">0{i+1}.</span>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 sm:p-12 border-t border-slate-900 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
                <div className="space-y-6">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Direct Comms</h4>
                   <div className="flex gap-4">
                      {[<Linkedin />, <Twitter />, <MessageCircle />].map((icon, i) => (
                        <div key={i} className="w-12 h-12 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center text-slate-500 hover:text-brand-gold hover:border-brand-gold transition-all cursor-pointer">
                          {icon}
                        </div>
                      ))}
                   </div>
                </div>
                
                <Link
                  to="/book"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-brand-gold text-white py-6 rounded-2xl font-black text-center text-sm uppercase tracking-widest shadow-2xl shadow-brand-gold/20 active:scale-95 transition-transform"
                >
                  Initiate Secure Booking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-32 pb-12 border-t border-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-[0.02]"></div>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-24 pb-20 border-b border-slate-800/50">
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-brand-gold w-12 h-12 flex items-center justify-center rounded-2xl shadow-2xl shadow-brand-gold/20 group-hover:scale-110 transition-transform">
                <span className="text-white font-black italic text-lg">SE</span>
              </div>
              <span className="text-3xl font-black tracking-tighter text-white italic serif">StratEdge.</span>
            </Link>
            
            <p className="text-slate-400 text-xl leading-relaxed max-w-md font-medium">
              Architecting the next epoch of SME dominance. We provide surgical precision in strategy and operational mastery.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <MessageCircle size={20} />, label: 'Partner Direct' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: '#C9A24D', color: '#fff' }}
                  href="#"
                  className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all shadow-xl group"
                  aria-label={social.label}
                >
                  <span className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 italic serif">Expertise</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/services" className="text-slate-500 hover:text-brand-gold transition-all flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-brand-gold"></div> Strategy Architecture</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-brand-gold transition-all flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-brand-gold"></div> Operations Precision</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-brand-gold transition-all flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-brand-gold"></div> Growth Engineering</Link></li>
              <li><Link to="/services" className="text-slate-500 hover:text-brand-gold transition-all flex items-center gap-2 group"><div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-brand-gold"></div> Digital Liquidity</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 italic serif">The Firm</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/about" className="text-slate-500 hover:text-brand-gold transition-all">Mission Dossier</Link></li>
              <li><Link to="/case-studies" className="text-slate-500 hover:text-brand-gold transition-all">The Index (Results)</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-brand-gold transition-all">Intelligence Intake</Link></li>
              <li><Link to="/book" className="text-slate-500 hover:text-brand-gold transition-all">Secure Booking</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-8 italic serif">Strategic Insights</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              Join 5,000+ SME leaders receiving monthly operational intelligence.
            </p>
            <form className="space-y-4">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Professional Email" 
                  className="w-full bg-slate-900/50 border-2 border-slate-800 rounded-2xl px-6 py-5 text-sm font-bold text-white focus:outline-none focus:border-brand-gold focus:bg-slate-900 transition-all placeholder:text-slate-700"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-3 top-2 bottom-2 bg-brand-gold text-white px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-gold/80 transition-all shadow-xl"
                >
                  Join
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16 border-b border-slate-800/50">
          {[
            { city: 'New York', region: 'Americas', active: true },
            { city: 'London', region: 'EMEA', active: true },
            { city: 'Singapore', region: 'APAC', active: true },
            { city: 'Dubai', region: 'MENA', active: true },
            { city: 'Tokyo', region: 'APAC', active: true },
            { city: 'Sydney', region: 'APAC', active: true }
          ].map((hub, i) => (
            <div key={i} className="flex flex-col gap-2 group">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${hub.active ? 'bg-brand-gold animate-pulse' : 'bg-slate-800'}`}></div>
                <span className="text-white font-black text-sm tracking-tight whitespace-nowrap">{hub.city}</span>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 group-hover:text-brand-gold transition-colors">{hub.region} Command</span>
            </div>
          ))}
        </div>

        <div className="pt-16 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <p className="text-[10px] font-black text-slate-600 tracking-[0.2em] uppercase">
              © 2025 StratEdge International Group. All Proprietary Rights Reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-slate-600 tracking-[0.2em] uppercase">
            <Link to="/directory" className="hover:text-brand-gold transition-colors">Privacy Ordinance</Link>
            <Link to="/directory" className="hover:text-brand-gold transition-colors">Tactical Terms</Link>
            <Link to="/directory" className="hover:text-brand-gold transition-colors">Ethical Framework</Link>
            <Link to="/directory" className="hover:text-brand-gold transition-colors">Firm Directory</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-gold/20 selection:text-brand-navy">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};
