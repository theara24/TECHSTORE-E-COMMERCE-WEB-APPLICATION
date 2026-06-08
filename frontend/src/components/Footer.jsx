import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Github, Twitter, Instagram, Mail, Phone, MapPin, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter">
              <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                <Laptop size={24} />
              </div>
              <span className="text-white uppercase">Tech<span className="text-blue-600">Store</span></span>
            </Link>
            <p className="text-sm font-medium leading-relaxed opacity-80">
              Curating the future of professional hardware. Engineered for those who build the world.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github, Globe].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-bold">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors flex items-center justify-between group">
                    {item} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Series</h4>
            <ul className="space-y-4 text-sm font-bold">
              {['Workstation Pro', 'Mechanical Core', 'Acoustic Elite', 'Vision Master'].map((item) => (
                <li key={item}>
                  <Link to="/products" className="hover:text-blue-500 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8">Connect</h4>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex gap-4">
                <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                <span>Infinite Loop 1, Cupertino<br />California, USA</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <span>support@techstore.io</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest">
          <p className="opacity-50">© 2026 TechStore Global. All Rights Reserved.</p>
          <div className="flex gap-8 opacity-50">
            <a href="#" className="hover:text-white transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
