import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, CreditCard, ShieldCheck } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-8 py-40 text-center">
        <div className="bg-slate-50 w-32 h-32 rounded-[3rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-slate-100">
          <ShoppingBag size={48} className="text-slate-300" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">YOUR CART IS EMPTY</h2>
        <p className="text-slate-500 font-medium mb-10 max-w-md mx-auto">
          It's time to elevate your tech setup. Browse our collection and find your next essential.
        </p>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all inline-block shadow-2xl shadow-blue-500/20"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-20">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">YOUR <span className="text-blue-600">BAG.</span></h1>
          <p className="text-slate-500 font-medium">Review your selected items and proceed to a secure checkout.</p>
        </div>
        <button 
          onClick={clearCart}
          className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-red-500 transition-colors"
        >
          Clear All Items
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* List */}
        <div className="lg:w-2/3 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-8 shadow-sm hover:shadow-xl hover:shadow-slate-100 transition-all duration-500">
              <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden flex-shrink-0 border border-slate-100 p-2">
                <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <Link to={`/products/${item.id}`} className="text-xl font-black text-slate-900 hover:text-blue-600 transition-colors tracking-tight">
                      {item.name}
                    </Link>
                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mt-1">{item.category}</p>
                  </div>
                  <div className="text-xl font-black text-slate-900 tracking-tighter">${item.price * item.quantity}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-slate-50 rounded-xl p-1.5 border border-slate-100">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:text-blue-600 transition-colors disabled:opacity-30"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-10 text-center font-black text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:text-blue-600 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-slate-300 hover:text-red-500 transition-colors hover:bg-red-50 rounded-xl"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <Link to="/products" className="group flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-blue-600 mt-10">
            <Plus size={16} /> Continue Selection <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Summary Card */}
        <div className="lg:w-1/3">
          <div className="glass p-10 rounded-[3rem] sticky top-32 shadow-2xl shadow-slate-200/50">
            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight uppercase">SUMMARY</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-400">Subtotal</span>
                <span className="text-slate-900 font-black tracking-tight">${cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-400">Logistics</span>
                <span className="text-green-500 font-black uppercase tracking-widest text-[10px]">Complementary</span>
              </div>
              <div className="flex justify-between text-sm font-medium pt-4 border-t border-slate-100">
                <span className="text-slate-900 font-black">TOTAL</span>
                <span className="text-2xl font-black text-blue-600 tracking-tighter">${cartTotal}</span>
              </div>
            </div>
            
            <button className="w-full bg-slate-950 text-white py-6 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-900/10 hover:shadow-blue-500/30 flex items-center justify-center gap-3">
              Proceed to Payment <CreditCard size={20} />
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-4 py-4 border-t border-slate-100">
              <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <ShieldCheck size={14} className="text-blue-500" /> Secure Encryption
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
