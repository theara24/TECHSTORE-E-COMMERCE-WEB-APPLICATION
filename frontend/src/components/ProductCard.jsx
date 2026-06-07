import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Plus, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 card-hover flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Link to={`/products/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span className="glass px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
            {product.category}
          </span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-slate-900 p-3 rounded-2xl shadow-xl translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-blue-600 hover:text-white"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-slate-500 text-sm font-medium line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
          <span className="text-2xl font-black text-blue-600 tracking-tighter">${product.price}</span>
          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
            <ShoppingCart size={12} /> In Stock
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
