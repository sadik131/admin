import React, { useEffect } from 'react'
import Input from '../components/Input'
import ClassSelect from '../components/ClassSelect'
import DatePicker from 'react-datepicker'
import DatePicke from '../components/DatePick'
import { brand, category, classOptions, gender, quantity, role, unit } from '../option'
import { useParams } from 'react-router-dom'

function AddProduct() {
  const [Product, setProduct] = React.useState({
    productCode: '',
    productName: '',
    category: '',
    brand: '',
    price: '',
    discountPrice: '',
    quantity: '',
    unit: '',
    description: '',
    status: '',
    publishDate: new Date(),
  });

  const { productCode } = useParams()

  useEffect(() => {
    if (productCode) {
      // Fetch product data based on productCode
      const fetchedProduct = {
        productCode: 'PRD001',
        productName: 'Wireless Headphones',
        category: 'Electronics',
        brand: 'Brand A',
        price: '99.99',
        discountPrice: '79.99',
        quantity: '25',
        unit: 'pcs',
        description: 'Noise cancelling over-ear headphones with 30-hour battery life.',
        status: 'Available',
        publishDate: new Date('2025-07-28'),
      };
      setProduct(fetchedProduct);
    }
  }, [productCode]);

  return (
    <form className="w-full h-full bg-white p-4">
      <div className='mb-3'>
        <h1 className="text-xl font-semibold mb-4">{Product ? "Update product":"Add new Product"}</h1>
      </div>
      {/* 1st row */}
      <div className='grid grid-cols-3'>
        <Input
          value={Product.productName}
          bgColor={"bg-[#f0f1f3]"}
          lable="Product Name *"
          type="text"
        />
        {/* category, brand */}
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="SKU *"
          value={"PRD001"}
          type="text"
        />
        <ClassSelect type={"Category Type *"} placeholder="Please select" value={Product.category} option={category} />
      </div>
      {/* 2nd row */}
      <div className='grid grid-cols-3'>
        <Input
          bgColor={"bg-[#f0f1f3]"}
          value={Product.price}
          lable="Price "
          type="text"
        />
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="Discount Price"
          value={Product.discountPrice}
          type="text"
        />
        <ClassSelect value={Product.quantity} type={"Quantity  *"} placeholder="Please select gender" option={quantity} />
      </div>
      {/* 3rd row */}

      <div className='grid grid-cols-3'>
        <ClassSelect value={Product.unit} type={"Unit  *"} placeholder="Please select gender" option={unit} />
        <ClassSelect value={Product.status} type={"Stutus *"} placeholder="Please select gender" option={gender} />
        <DatePicke value={Product.publishDate} lable={"Publish Date"} />
      </div>
      {/* 4th row */}
      <div className='grid grid-cols-2 px-4 mb-6'>
        <div>
          <label className="block mb-2 text-base font-normal text-[#646464]">Description</label>
          <textarea value={Product.description} name="" id="" className='h-20 bg-[#f0f1f3] w-full px-4 py-1 rounded-md focus:outline-none'></textarea>
        </div>

        <div className=' w-full px-4 mb-6'>
          <label className="block mb-2 text-base font-normal text-[#646464]">Upload Product Image</label>
          <input
            type="file"
            className={` w-full  py-2 rounded-md focus:outline-none`}
          />
        </div>
      </div>

      {/* buttons */}
      <div className='px-4'>
        <button className='bg-[#ffae01] text-white px-11 py-3 rounded-md mr-2'>Save</button>
        <button className='bg-[#092954] text-white px-11 py-3 rounded-md'>Reset</button>
      </div>
    </form>
  )
}

export default AddProduct