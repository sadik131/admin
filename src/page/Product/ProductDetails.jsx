const ProductDetails = () => {
  const product = {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
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
    notes:
      "Aliquam erat volutpat. Curabiene natis massa sedde lacu stiquen sodale word moun taiery.Aliquam erat volutpaturabiene natis massa sedde sodale word moun taiery.",
    publishDate: "2025-07-28",
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-lg rounded-md font-roboto">
      <h2 className="text-2xl text-textColor font-bold mb-6 text-start">Product Details</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Image */}
        <div className="flex-shrink-0 ">
          <img
            src={product.image}
            alt={product.productName}
            className="w-60 h-60 object-cover rounded-md shadow"
          />
          
          <div className="mt-6">
        <p className="font-semibold text-gray-700 mb-2">Documents:</p>
        <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
          <li>
            <a
              href={product.purchase_receipt}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Purchase Receipt
            </a>
          </li>
          <li>
            <a
              href={product.warranty_document}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Warranty Document
            </a>
          </li>
        </ul>
      </div>

        </div>

        {/* Basic Info */}
        <div className="flex-1">
          <h3 className="text-2xl text-textColor font-medium mb-5">{product.productName}</h3>
          <p className="text-secondary text-base mb-5">{product.notes}</p>

          <table className="w-full text-base">
            <tbody className="">
              <tr><td className="p-[10px] font-normal text-secondary">Product Name</td><td className="p-[10px] text-textColor font-medium">{product.productName}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">SKU</td><td className="p-[10px] text-textColor font-medium">{product.sku}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Category</td><td className="p-[10px] text-textColor font-medium">{product.category_type}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Brand</td><td className="p-[10px] text-textColor font-medium">{product.brand}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Model Number</td><td className="p-[10px] text-textColor font-medium">{product.model_number}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Serial Number</td><td className="p-[10px] text-textColor font-medium">{product.serial_number}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Quantity</td><td className="p-[10px] text-textColor font-medium">{product.quantity}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Reorder Level</td><td className="p-[10px] text-textColor font-medium">{product.reorder_level}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Status</td><td className="p-[10px] text-textColor font-medium capitalize">{product.status}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Usage Status</td><td className="p-[10px] text-textColor font-medium">{product.usage_status}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Assigned To</td><td className="p-[10px] text-textColor font-medium">{product.assigned_to}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Warehouse Location</td><td className="p-[10px] text-textColor font-medium">{product.warehouse_location}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Purchase Date</td><td className="p-[10px] text-textColor font-medium">{product.purchase_date}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Purchase Price</td><td className="p-[10px] text-textColor font-medium">${product.purchase_price}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Supplier Name</td><td className="p-[10px] text-textColor font-medium">{product.supplier_name}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Supplier Contact</td><td className="p-[10px] text-textColor font-medium">{product.supplier_contact}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Warranty Period</td><td className="p-[10px] text-textColor font-medium">{product.warranty_period}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Warranty Start</td><td className="p-[10px] text-textColor font-medium">{product.warranty_start_date}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Warranty End</td><td className="p-[10px] text-textColor font-medium">{product.warranty_end_date}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Warranty Terms</td><td className="p-[10px] text-textColor font-medium">{product.warranty_terms}</td></tr>
              <tr><td className="p-[10px] font-normal text-secondary">Published On</td><td className="p-[10px] text-textColor font-medium">{product.publishDate}</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Documents */}
      
    </div>
  );
};

export default ProductDetails;
