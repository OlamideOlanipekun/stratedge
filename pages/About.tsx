
import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Award, Zap, ShieldCheck, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <SectionTitle
                badge="Who We Are"
                title="Committed to SME Growth."
                subtitle="StratEdge was founded on a simple belief: Mid-sized businesses are the engine of the economy, but they often lack the high-level strategic support available to corporations."
              />
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our mission is to level the playing field. We bring tier-one consulting methodologies and implement them with the agility and focus that SMEs require.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-brand-gold">10+</span>
                  <span className="text-brand-navy font-black uppercase text-[10px] tracking-widest">Years Experience</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-black text-brand-gold">95%</span>
                  <span className="text-brand-navy font-black uppercase text-[10px] tracking-widest">Client Retention</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-brand-gold rounded-[3rem] transform -rotate-3 scale-95 opacity-10"></div>
              <img
                src="https://picsum.photos/seed/consultant/800/1000"
                alt="Our Founder"
                className="relative z-10 w-full rounded-[3rem] shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Values"
            title="What drives us."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <ShieldCheck />, title: 'Integrity', desc: 'We only take on projects where we are certain we can deliver significant ROI.' },
              { icon: <Zap />, title: 'Agility', desc: 'We move fast, adapt to your culture, and focus on immediate wins.' },
              { icon: <Award />, title: 'Excellence', desc: 'Tier-one consulting standards, applied to every SME project.' },
              { icon: <Heart />, title: 'Partnership', desc: 'We act as an extension of your leadership team, not just outside advisors.' }
            ].map((v, i) => (
              <div key={i} className="text-center group p-8 rounded-[2rem] hover:bg-brand-light transition-all">
                <div className="w-16 h-16 bg-white border border-slate-100 text-brand-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                  {React.cloneElement(v.icon as React.ReactElement, { size: 28 })}
                </div>
                <h3 className="text-xl font-black text-brand-navy mb-4 serif italic">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy text-white rounded-[4rem] mx-4 lg:mx-8 mb-24 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="serif text-3xl lg:text-5xl font-black mb-8 italic">Why Trust Us?</h2>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium">
            Every consultant at StratEdge has at least 10 years of experience in either Fortune 500 strategy or successful SME leadership. We don't hire junior analysts; we only deploy seasoned experts.
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-30 grayscale hover:opacity-100 transition-all duration-500">
            <div className="text-2xl font-black tracking-tighter italic text-brand-gold">BUSINESS DAILY</div>
            <div className="text-2xl font-black tracking-tighter italic text-brand-gold">SME INSIDER</div>
            <div className="text-2xl font-black tracking-tighter italic text-brand-gold">STRATEGY PRO</div>
            <div className="text-2xl font-black tracking-tighter italic text-brand-gold">GROWTH MAG</div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[100px]"></div>
      </section>
    </div>
  );
};
