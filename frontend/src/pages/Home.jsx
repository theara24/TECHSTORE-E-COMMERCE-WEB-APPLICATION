import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setFeaturedProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Modern Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-12 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
        <div className="container mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
              <Sparkles size={14} /> New Tech Arrival 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              NEXT GEN <br /> <span className="text-blue-500">EXPERIENCE.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0 font-medium">
              Elevate your digital lifestyle with meticulously curated hardware. Engineering excellence meets sophisticated design.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link 
                to="/products" 
                className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 shadow-2xl shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                Shop Collection <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute -inset-10 bg-blue-500/20 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&q=80" 
              alt="Premium Tech" 
              className="relative z-10 rounded-3xl shadow-2xl border border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl z-20 shadow-2xl animate-pulse">
              <div className="text-blue-600 font-black text-3xl">4.9/5</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-tighter">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="container mx-auto px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-50 flex flex-col items-center text-center group card-hover">
            <div className="bg-slate-50 p-5 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-black mb-3 text-slate-900">HYPER SPEED</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">Same-day dispatch on all orders placed before 2PM. Global express available.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-50 flex flex-col items-center text-center group card-hover">
            <div className="bg-slate-50 p-5 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-black mb-3 text-slate-900">PRO WARRANTY</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">2-year premium warranty on all electronics with instant replacement service.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-50 flex flex-col items-center text-center group card-hover">
            <div className="bg-slate-50 p-5 rounded-2xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <Globe size={32} />
            </div>
            <h3 className="text-xl font-black mb-3 text-slate-900">ECO COMMITTED</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">100% plastic-free packaging and carbon-neutral delivery worldwide.</p>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-slate-900 tracking-tighter mb-4 leading-none">CURATED <span className="text-blue-600">PICKS.</span></h2>
            <p className="text-slate-500 font-medium">Selected by our tech experts for unparalleled performance and aesthetic appeal.</p>
          </div>
          <Link to="/products" className="group flex items-center gap-3 font-black text-sm uppercase tracking-widest text-blue-600">
            View All Series <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner Section */}
      <section className="container mx-auto px-8">
        <div className="bg-blue-600 rounded-[3rem] p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-12 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl font-black mb-6 leading-tight tracking-tighter">UPGRADE YOUR <br /> WORKSPACE TODAY.</h2>
            <p className="text-blue-100 text-lg mb-10 font-medium opacity-90">Get a 15% discount on your first professional setup bundle. Limited time offer.</p>
            <Link to="/products" className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all inline-block shadow-xl">
              Claim Discount
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
