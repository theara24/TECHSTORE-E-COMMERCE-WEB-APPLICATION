import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-8 py-20 text-center">
        <div className="flex justify-center mb-6 text-gray-300">
          <ShoppingBag size={80} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added anything to your cart yet. Explore our latest tech products and find something you love.
        </p>
        <Link 
          to="/products" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-block"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <span className="font-semibold text-gray-700">{cartItems.length} Items</span>
              <button 
                onClick={clearCart}
                className="text-red-500 text-sm hover:underline font-medium"
              >
                Clear All
              </button>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                  {/* Item Image */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-grow text-center sm:text-left">
                    <Link to={`/products/${item.id}`} className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-colors">
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    <p className="text-blue-600 font-bold mt-2 sm:hidden">${item.price}</p>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-blue-600 transition-colors"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-10 text-center font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-blue-600 transition-colors"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  
                  {/* Price */}
                  <div className="hidden sm:block text-right w-24">
                    <p className="text-lg font-bold text-gray-800">${item.price * item.quantity}</p>
                    {item.quantity > 1 && (
                      <p className="text-xs text-gray-500">${item.price} each</p>
                    )}
                  </div>
                  
                  {/* Remove Button */}
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/products" className="text-blue-600 font-semibold flex items-center gap-2 hover:underline">
              <Plus size={20} /> Add more products
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-2xl font-extrabold text-blue-600">${cartTotal}</span>
            </div>
            
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2">
              Checkout <ArrowRight size={20} />
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-6 uppercase tracking-widest font-bold">
              Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
