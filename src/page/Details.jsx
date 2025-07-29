// import React from 'react';

// function Details() {
//   const product = {
   
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-8 bg-gray-50 min-h-screen">
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="md:flex">
//           {/* Product Image */}
//           <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
//             <img 
//               src={product.image} 
//               alt={product.productName} 
//               className="max-h-96 object-contain rounded-lg"
//             />
//           </div>
          
//           {/* Product Details */}
//           <div className="md:w-1/2 p-6 md:p-8">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.productName}</h1>
//                 <div className="flex items-center mb-4">
//                   <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
//                     {product.category}
//                   </span>
//                   <span className={`ml-2 text-xs font-semibold px-2.5 py-0.5 rounded ${
//                     product.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                   }`}>
//                     {product.status}
//                   </span>
//                 </div>
//               </div>
//               <span className="text-sm text-gray-500">Published: {product.publishDate}</span>
//             </div>
            
//             <div className="mb-6">
//               <div className="flex items-center">
//                 <span className="text-2xl font-bold text-gray-900">${product.discountPrice}</span>
//                 <span className="ml-2 text-lg text-gray-500 line-through">${product.price}</span>
//                 {product.discountPrice && (
//                   <span className="ml-2 px-2 py-1 text-xs font-bold bg-red-100 text-red-800 rounded">
//                     {Math.round((1 - product.discountPrice/product.price) * 100)}% OFF
//                   </span>
//                 )}
//               </div>
//               <p className="text-sm text-gray-500 mt-1">In stock: {product.quantity} {product.unit}</p>
//             </div>
            
//             <div className="mb-8">
//               <h3 className="text-xl font-bold text-gray-900">Description</h3>
//               <p className="mt-2 text-gray-600">
//                 {/* {product.description}
//                  */}
//                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio, incidunt animi in laboriosam consectetur necessitatibus quasi veniam odit autem. Et molestiae quo qui iusto.
//               </p>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Details;




import React from "react";

const ProductDetails = () => {


  const product = {
  image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
  productName: "Wireless Headphones",
  sku: "WH-1001",
  category_type: "Electronics",
  brand: "SoundMax",
  model_number: "SM-HX500",
  serial_number: "SN-WH123456",
  quantity: 25,
  reorder_level: 10,
  warehouse_location: "A1-Section-3",
  purchase_date: "2024-12-15",
  purchase_price: 70.0,
  supplier_name: "TechSupply Ltd.",
  supplier_contact: "01711223344",
  purchase_receipt: "/receipts/wh-1001.pdf",
  warranty_period: "12 months",
  warranty_start_date: "2024-12-15",
  warranty_end_date: "2025-12-14",
  warranty_terms: "Covers manufacturing defects only.",
  warranty_document: "/warranty/wh-1001.pdf",
  assigned_to: "Marketing Department",
  status: "active",
  usage_status: "in_use",
  notes: "Issued for campaign team use.",
  publishDate: "2025-07-28",
};
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Product Details</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.productName}
            className="w-60 h-60 object-cover rounded-md shadow"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-2">
          <p><strong>Product Name:</strong> {product.productName}</p>
          <p><strong>SKU:</strong> {product.sku}</p>
          <p><strong>Category:</strong> {product.category_type}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Model Number:</strong> {product.model_number}</p>
          <p><strong>Serial Number:</strong> {product.serial_number}</p>
          <p><strong>Quantity:</strong> {product.quantity}</p>
          <p><strong>Reorder Level:</strong> {product.reorder_level}</p>
          <p><strong>Status:</strong> {product.status}</p>
          <p><strong>Usage Status:</strong> {product.usage_status}</p>
          <p><strong>Assigned To:</strong> {product.assigned_to}</p>
          <p><strong>Notes:</strong> {product.notes}</p>
        </div>
      </div>

      <hr className="my-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <p><strong>Warehouse Location:</strong> {product.warehouse_location}</p>
        <p><strong>Purchase Date:</strong> {product.purchase_date}</p>
        <p><strong>Purchase Price:</strong> ${product.purchase_price}</p>
        <p><strong>Supplier Name:</strong> {product.supplier_name}</p>
        <p><strong>Supplier Contact:</strong> {product.supplier_contact}</p>
        <p><strong>Warranty Period:</strong> {product.warranty_period}</p>
        <p><strong>Warranty Start:</strong> {product.warranty_start_date}</p>
        <p><strong>Warranty End:</strong> {product.warranty_end_date}</p>
        <p><strong>Warranty Terms:</strong> {product.warranty_terms}</p>
        <p><strong>Published On:</strong> {product.publishDate}</p>
      </div>

      {/* Documents */}
      <div className="mt-6">
        <p className="font-semibold">Documents:</p>
        <ul className="list-disc list-inside">
          <li>
            <a
              href={product.purchase_receipt}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Purchase Receipt
            </a>
          </li>
          <li>
            <a
              href={product.warranty_document}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Warranty Document
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
