import React from 'react';
import { Target, Users, Award, ShieldCheck, ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Sophisticated Header */}
      <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black rounded-full uppercase tracking-[0.2em] mb-8">
            Est. 2026
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-none">OUR <span className="text-blue-600">MISSION.</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            We are curators of engineering excellence, bridging the gap between high-performance technology and sophisticated lifestyle design.
          </p>
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="container mx-auto px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-50 card-hover">
            <div className="text-blue-600 mb-8"><Target size={48} /></div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">THE VISION</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              To empower the next generation of creators, engineers, and digital nomads with tools that don't just work, but inspire. We believe technology should be an extension of your ambition.
            </p>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-50 card-hover">
            <div className="text-blue-600 mb-8"><Award size={48} /></div>
            <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">THE STANDARD</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              Every product in our collection undergoes rigorous testing for thermal efficiency, tactile feedback, and structural integrity. If it doesn't meet the TechStore gold standard, it doesn't make the list.
            </p>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Story & Image Section */}
      <section className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-blue-600 rounded-[4rem] rotate-3 opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" 
              alt="Our Workspace" 
              className="relative z-10 rounded-[3.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-none">BEYOND THE <br /> <span className="text-blue-600">HARDWARE.</span></h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Based in the heart of Silicon Valley, our team consists of hardware enthusiasts, software architects, and industrial designers who share a singular obsession: perfection.
            </p>
            <div className="grid grid-cols-2 gap-8 py-6">
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">50K+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Users</div>
              </div>
              <div>
                <div className="text-4xl font-black text-slate-900 mb-1">99.9%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Uptime Support</div>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest text-blue-600 group">
              Work with us <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">CORE VALUES</h2>
            <p className="text-slate-400 font-medium">What drives every decision at TechStore.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={32} />, title: "RADICAL HONESTY", desc: "No marketing fluff. Just raw specs and honest performance metrics." },
              { icon: <Users size={32} />, title: "COMMUNITY BUILT", desc: "We listen to power users to refine our selection and services." },
              { icon: <Laptop size={32} />, title: "FUTURE PROOF", desc: "Investing in tech that lasts. Sustainability through longevity." }
            ].map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {v.icon}
                </div>
                <h4 className="text-lg font-black text-slate-900 mb-3 tracking-tight uppercase">{v.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
