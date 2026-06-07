import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { ArrowRight, Zap, Shield, Truck } from 'lucide-react';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setFeaturedProducts(response.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-600 h-[500px] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Upgrade Your Tech Game with TechStore
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Discover the latest in computing, accessories, and audio. Quality products delivered to your doorstep.
            </p>
            <Link 
              to="/products" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Shop Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your tech delivered within 24-48 hours. Nationwide shipping available.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p className="text-gray-600">Shop with confidence using our encrypted and secure payment gateways.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600">Not satisfied? Return your product within 30 days for a full refund.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <p className="text-gray-600 mt-2">Our handpicked selection of top-tier electronics.</p>
          </div>
          <Link to="/products" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
