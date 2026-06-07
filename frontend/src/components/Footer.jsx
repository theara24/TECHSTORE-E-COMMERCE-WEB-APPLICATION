import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand & Social */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-500">
            <Laptop size={32} />
            <span>TechStore</span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Your premier destination for the latest technology and electronics. We provide quality products with exceptional service.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Categories</h3>
          <ul className="space-y-4">
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Laptops</Link></li>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Accessories</Link></li>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Audio</Link></li>
            <li><Link to="/products" className="hover:text-blue-500 transition-colors">Monitors</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-lg font-bold mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-blue-500" />
              <span>123 Tech Avenue, Silicon Valley</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-blue-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-blue-500" />
              <span>support@techstore.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
        <p>© 2026 TechStore. All rights reserved. Midterm Project by Chim Theara & Team.</p>
      </div>
    </footer>
  );
};

export default Footer;
