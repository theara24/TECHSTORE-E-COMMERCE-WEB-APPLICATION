import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingCart, CheckCircle } from 'lucide-react';

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

  if (loading) return <div className="text-center py-20 text-2xl">Loading product details...</div>;
  if (!product) return <div className="text-center py-20 text-2xl text-red-500">Product not found.</div>;

  return (
    <div className="container mx-auto px-8 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Products
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover min-h-[400px]"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col">
          <div className="mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          <div className="text-3xl font-bold text-blue-600 mb-6">${product.price}</div>
          
          <div className="border-t border-b border-gray-100 py-6 mb-8">
            <h3 className="text-lg font-semibold mb-3">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="mt-auto">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                added 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
              }`}
            >
              {added ? (
                <>
                  <CheckCircle size={24} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={24} /> Add to Cart
                </>
              )}
            </button>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free shipping on all orders over $500.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
