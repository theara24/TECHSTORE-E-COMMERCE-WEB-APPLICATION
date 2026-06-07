import React from 'react';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About TechStore</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          TechStore was founded in 2026 with a simple mission: to make high-performance technology accessible to everyone. We specialize in premium computing hardware, professional accessories, and high-fidelity audio equipment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="bg-blue-100 p-4 rounded-full text-blue-600 inline-block mb-4">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm">Empowering creators and professionals with the best tools in the industry.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="bg-green-100 p-4 rounded-full text-green-600 inline-block mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Customer First</h3>
          <p className="text-gray-600 text-sm">Our dedicated support team is available 24/7 to help you with your tech needs.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="bg-purple-100 p-4 rounded-full text-purple-600 inline-block mb-4">
            <Award size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Quality Focus</h3>
          <p className="text-gray-600 text-sm">We only source products from trusted manufacturers with proven track records.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
          <div className="bg-orange-100 p-4 rounded-full text-orange-600 inline-block mb-4">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Secure Shopping</h3>
          <p className="text-gray-600 text-sm">Your data and transactions are protected by industry-standard encryption.</p>
        </div>
      </div>

      <div className="bg-blue-600 rounded-3xl p-12 text-white flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Stay updated with the latest tech releases, exclusive deals, and expert reviews. TechStore is more than just a shop; it's a hub for tech enthusiasts.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
            Subscribe Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
            alt="Team" 
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
