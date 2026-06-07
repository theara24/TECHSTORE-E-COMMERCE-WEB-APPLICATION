import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Dynamic Header */}
      <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-8 relative z-10">
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-8 leading-none">LET'S <span className="text-blue-600">CONNECT.</span></h1>
          <p className="text-xl text-slate-400 max-w-xl font-medium leading-relaxed">
            Technical inquiries, partnership proposals, or just a quick "hello"—our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 -mt-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 card-hover">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Mail size={24} /></div>
              <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase">ELECTRONIC MAIL</h3>
              <p className="text-slate-500 font-medium">support@techstore.io</p>
              <p className="text-slate-500 font-medium">media@techstore.io</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 card-hover">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6"><Phone size={24} /></div>
              <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase">VOICE LINE</h3>
              <p className="text-slate-500 font-medium">+1 (888) TECH-PRO</p>
              <p className="text-slate-500 font-medium">Mon - Fri, 09:00 - 18:00</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 card-hover">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6"><MapPin size={24} /></div>
              <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase">GLOBAL HQ</h3>
              <p className="text-slate-500 font-medium">Infinite Loop 1, Cupertino</p>
              <p className="text-slate-500 font-medium">California, USA</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-12 md:p-16 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-slate-50 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-[5rem]"></div>
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100">
                    <Send size={40} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">MESSAGE DISPATCHED</h2>
                  <p className="text-slate-500 font-medium max-w-sm">Our specialists will review your inquiry and respond within 12 business hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-10 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Designation</label>
                      <input 
                        type="text" required placeholder="EG. JOHN DOE"
                        className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 transition-all border border-transparent hover:border-slate-100"
                        value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Digital Address</label>
                      <input 
                        type="email" required placeholder="YOUR@EMAIL.COM"
                        className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 transition-all border border-transparent hover:border-slate-100"
                        value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Inquiry Subject</label>
                    <input 
                      type="text" required placeholder="EG. TECHNICAL SUPPORT"
                      className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 transition-all border border-transparent hover:border-slate-100"
                      value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Your Brief</label>
                    <textarea 
                      required rows="5" placeholder="ELABORATE YOUR REQUEST HERE..."
                      className="w-full px-8 py-5 bg-slate-50 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold text-slate-900 transition-all border border-transparent hover:border-slate-100 resize-none"
                      value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-slate-950 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-2xl shadow-slate-900/10 hover:shadow-blue-500/30 flex items-center justify-center gap-3"
                  >
                    Transmit Message <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
