import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;
    if (category !== 'All') result = result.filter(p => p.category === category);
    if (searchTerm) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [searchTerm, category, products]);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  if (loading) return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="container mx-auto px-8 py-20">
      {/* Header & Filter Bar */}
      <div className="flex flex-col gap-12 mb-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">THE <span className="text-blue-600">COLLECTION.</span></h1>
          <p className="text-slate-500 font-medium">Browse through our meticulously selected range of high-performance tech hardware.</p>
        </div>

        <div className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-14 pr-6 py-4 bg-slate-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Chips */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto px-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${
                  category === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex gap-2 px-4 border-l border-slate-100">
            <button className="p-3 bg-slate-100 rounded-xl text-slate-900"><LayoutGrid size={20} /></button>
            <button className="p-3 text-slate-400 hover:bg-slate-50 rounded-xl"><List size={20} /></button>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-40 bg-slate-50 rounded-[3rem]">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Search size={32} className="text-slate-300" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">NO MATCHES FOUND</h2>
          <p className="text-slate-500 font-medium">Try adjusting your filters or search terms.</p>
          <button onClick={() => {setSearchTerm(''); setCategory('All');}} className="mt-8 text-blue-600 font-black text-[10px] uppercase tracking-widest hover:underline">Clear all filters</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
