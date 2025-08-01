import React, { useEffect, useState } from "react";
import Input from "../../components/Form/InputField";
import DatePicke from "../../components/Form/DateField";
import ClassSelect from "../../components/Form/SelectField";
import { brand, category, productStatus } from "../../option";
import { useParams } from "react-router-dom";
import SkuInput from "../../components/ui/SkuInput";

const ProductForm = () => {
  const [Product, setProduct] = useState({
    image: '',
    productName: '',
    sku: '',
    category_type: '',
    brand: '',
    model_number: '',
    serial_number: '',
    quantity: '',
    reorder_level: '',
    warehouse_location: '',
    purchase_date: '',
    purchase_price: '',
    supplier_name: '',
    supplier_contact: '',
    purchase_receipt: '',
    warranty_period: '',
    warranty_start_date: '',
    warranty_end_date: '',
    warranty_terms: '',
    warranty_document: '',
    assigned_to: '',
    status: '',
    usage_status: '',
    notes: '',
    publishDate: '',
  });




  return (
    <div className="px-6 pt-6 font-roboto bg-bgColor">
      <h1 className="text-xl font-semibold mb-4">Add new Product</h1>

      {/* Basic Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">Product Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <Input
            value={Product.productName}
            bgColor={"bg-[#f0f1f3]"}
            lable="Product Name *"
            type="text"
          />
          <SkuInput />
          <ClassSelect value={Product.category_type} type={"Category Type  *"} placeholder="Please select Category" option={category} />
          <ClassSelect type={"Brand Type  *"} value={Product.brand} placeholder="Please select Brand" option={brand} />
          <Input
            value={Product.model_number}
            bgColor={"bg-[#f0f1f3]"}
            lable="Model Number"
            type="text"
          />
          <Input
            value={Product.serial_number}
            bgColor={"bg-[#f0f1f3]"}
            lable="Serial Number"
            type="text"
          />
        </div>
      </div>

      {/* Stock Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">Stock Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="Quantity *"
            value={Product.quantity}
            type="number"
          />
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="Reorder Level"
            value={Product.reorder_level}
            type="number"
          />
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="Warehouse Location"
            value={Product.warehouse_location}
            type="text"
          />
        </div>
      </div>

      {/* Purchase Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">Purchase Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <DatePicke
            value={Product.publishDate}
            lable={"Purchase Date"} />
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="purchase price"
            value={Product.purchase_price}
            type="number"
          />
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="supplier name"
            value={Product.supplier_name}
            type="text"
          />
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="supplier contact	"
            value={Product.supplier_contact}
            type="text"
          />
          <Input
            bgColor={"bg-[transparent]"}
            lable="purchase receipt	"
            // value={Product.purchase_receipt}
            type="file"
          />

        </div>
      </div>

      {/* Warranty Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">Warranty Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <Input
            bgColor={"bg-[#f0f1f3]"}
            lable="warranty period"
            value={Product.warranty_period}
            type="text"
          />
          <DatePicke
            value={Product.warranty_start_date}
            lable={"warranty start date"} />
          <DatePicke
            value={Product.warranty_end_date}
            lable={"warranty end date"} />

          <Input
            bgColor={"bg-[#f0f1f3]"}
            value={Product.warranty_terms}
            lable="warranty terms	"
            type="text"
          />
          <Input
            bgColor={"bg-[transparent]"}
            lable="warranty document		"
            type="file"
          />
        </div>
      </div>

      {/* Usage / Lifecycle Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">
          Lifecycle / Usage Info
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            bgColor={"bg-[#f0f1f3]"}
            value={Product.assigned_to}
            lable="assigned to	"
            type="text"
          />
          <ClassSelect type={"Stutus *"} value={Product.status} placeholder="Please select gender" option={productStatus} />

        </div>
      </div>

      {/* Other Info */}
      <div className="bg-white rounded-lg p-6 mb-8">
        <h3 className="text-lg pl-4 font-semibold text-textColor mb-4">Other Info</h3>
        <div className="flex">
          <div className=' w-full px-4 mb-6'>
            <label className="block mb-2 text-base font-normal text-secondary">message</label>
            <textarea name="" value={Product.notes} className={`bg-[#f0f1f3] h-40 w-full px-4 py-3 rounded-md focus:outline-none`}
              id=""></textarea>
          </div>

          <div className="mt-4 pl-4">
            <label className="block mb-2 font-medium">Upload Product Image</label>
            <input type="file" />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pl-4">
        <button className="bg-LightYellow hover:bg-yellow-600 text-white px-6 py-2 rounded">
          Save
        </button>
        <button className="bg-LightBlue hover:bg-blue-800 text-white px-6 py-2 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
