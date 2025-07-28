import React from 'react';
import img from '../assets/product.jpg';

function Details() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
            <img 
              src={img} 
              alt="Product" 
              className="max-h-96 object-contain rounded-lg"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Product Name</h1>
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Electronics
              </span>
            </div>
            
            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-900">$499.99</span>
              {false && ( // Example of a discount price
                <span className="ml-2 text-sm text-gray-500 line-through">$599.99</span>
              )}
            </div>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">
                This is a detailed description of the product, highlighting its features and benefits. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. 
                Vivamus hendrerit arcu sed erat molestie vehicula.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg font-medium">-</button>
                <span className="px-3 py-1">1</span>
                <button className="px-3 py-1 text-lg font-medium">+</button>
              </div>
              <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
                Add to Cart
              </button>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <span className="mr-2">⭐️⭐️⭐️⭐️⭐️</span>
                <span>4.9 (128 reviews)</span>
              </div>
              <p className="text-sm text-gray-500">Free shipping on all orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;