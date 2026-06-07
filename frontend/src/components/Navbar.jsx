import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Laptop } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
        <Laptop size={28} />
        <span>TechStore</span>
      </Link>
      <div className="flex gap-6 items-center font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
        <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
          <ShoppingCart size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
