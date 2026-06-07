import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, CheckCircle, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
  
  if (!product) return (
    <div className="container mx-auto px-8 py-40 text-center">
      <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tighter uppercase">PRODUCT NOT FOUND</h2>
      <Link to="/products" className="bg-blue-600 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest inline-block shadow-xl">Browse Collection</Link>
    </div>
  );

  return (
    <div className="container mx-auto px-8 py-20">
      <button 
        onClick={() => navigate(-1)}
        className="group flex items-center gap-3 text-slate-500 hover:text-blue-600 mb-12 transition-all font-black text-[10px] uppercase tracking-widest"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Shop
      </button>

      <div className="flex flex-col lg:flex-row gap-20 items-start">
        {/* Gallery Style Image */}
        <div className="lg:w-1/2 w-full sticky top-32">
          <div className="bg-slate-50 rounded-[3rem] overflow-hidden aspect-square border border-slate-100 shadow-2xl shadow-slate-200/50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 opacity-50 hover:opacity-100 cursor-pointer transition-all overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply scale-150" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="lg:w-1/2 w-full py-6">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black rounded-full uppercase tracking-widest mb-6">
            {product.category}
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 leading-none">{product.name}</h1>
          <div className="text-4xl font-black text-blue-600 tracking-tighter mb-8">${product.price}</div>
          
          <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 border-l-4 border-slate-100 pl-6 py-2">
            {product.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400"><Truck size={20} /></div>
              <div className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Fast <br /> Shipping</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400"><ShieldCheck size={20} /></div>
              <div className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">2-Year <br /> Warranty</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-slate-50 rounded-xl text-slate-400"><RotateCcw size={20} /></div>
              <div className="text-[10px] font-black text-slate-900 uppercase tracking-tighter">Easy <br /> Returns</div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-6 rounded-3xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl ${
                added 
                  ? 'bg-green-500 text-white shadow-green-500/30' 
                  : 'bg-slate-950 text-white hover:bg-blue-600 shadow-slate-900/20 hover:shadow-blue-500/30'
              }`}
            >
              {added ? (
                <>
                  <CheckCircle size={20} /> Successfully Added
                </>
              ) : (
                <>
                  <ShoppingBag size={20} /> Add to Collection
                </>
              )}
            </button>
            <button className="w-full py-6 border-2 border-slate-100 text-slate-900 rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
              Save to Wishlist
            </button>
          </div>

          {/* Additional Info Accordion Style */}
          <div className="mt-16 border-t border-slate-100 pt-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Technical Specs</h3>
              <div className="w-6 h-0.5 bg-slate-200"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Model Year</span>
                <span className="text-slate-900 font-bold">2026 Series</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Build Quality</span>
                <span className="text-slate-900 font-bold">Grade A+ Aerospace</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Connectivity</span>
                <span className="text-slate-900 font-bold">Ultra-Wideband 5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
