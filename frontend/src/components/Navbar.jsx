import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Laptop, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Laptop size={24} />
          </div>
          <span className="text-slate-900 uppercase">Tech<span className="text-blue-600">Store</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-semibold text-sm tracking-wide">
          <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors uppercase">Home</Link>
          <Link to="/products" className="text-slate-600 hover:text-blue-600 transition-colors uppercase">Shop</Link>
          <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors uppercase">Our Story</Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors uppercase">Contact</Link>
          
          <Link to="/cart" className="relative p-2 bg-slate-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 font-bold shadow-xl animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/cart" className="flex items-center gap-2 text-blue-600" onClick={() => setIsMenuOpen(false)}>
            <ShoppingCart size={20} /> Cart ({cartCount})
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
