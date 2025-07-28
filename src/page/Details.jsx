import React from 'react';

function Details() {
  const product = {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    productName: 'Wireless Headphones',
    category: 'Electronics',
    price: '99.99',
    discountPrice: '79.99',
    quantity: '25',
    unit: 'pcs',
    description: 'Noise cancelling over-ear headphones with 30-hour battery life.',
    status: 'Available',
    publishDate: '2025-07-28',
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
            <img 
              src={product.image} 
              alt={product.productName} 
              className="max-h-96 object-contain rounded-lg"
            />
          </div>
          
          {/* Product Details */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.productName}</h1>
                <div className="flex items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {product.category}
                  </span>
                  <span className={`ml-2 text-xs font-semibold px-2.5 py-0.5 rounded ${
                    product.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
              </div>
              <span className="text-sm text-gray-500">Published: {product.publishDate}</span>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">${product.discountPrice}</span>
                <span className="ml-2 text-lg text-gray-500 line-through">${product.price}</span>
                {product.discountPrice && (
                  <span className="ml-2 px-2 py-1 text-xs font-bold bg-red-100 text-red-800 rounded">
                    {Math.round((1 - product.discountPrice/product.price) * 100)}% OFF
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">In stock: {product.quantity} {product.unit}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600">
                {product.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Features:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Noise cancellation</li>
                    <li>30-hour battery</li>
                    <li>Bluetooth 5.0</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-500">Includes:</p>
                  <ul className="list-disc list-inside text-gray-600">
                    <li>Headphones</li>
                    <li>Carrying case</li>
                    <li>USB-C cable</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg font-medium hover:bg-gray-100">-</button>
                <span className="px-3 py-1">1</span>
                <button className="px-3 py-1 text-lg font-medium hover:bg-gray-100">+</button>
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
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="text-gray-500">Free shipping</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">30-day returns</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">1-year warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;