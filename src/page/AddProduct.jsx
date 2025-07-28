import React from 'react'
import Input from '../components/Input'
import ClassSelect from '../components/ClassSelect'
import DatePicker from 'react-datepicker'
import DatePicke from '../components/DatePick'
import { brand, category, classOptions, gender, quantity, role, unit } from '../option'

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

  return (
    <form className="w-full h-full bg-white p-4">
      <div className='mb-3'>
        <h1 className="text-xl font-semibold mb-4">Add new Product</h1>
      </div>
      {/* 1st row */}
      <div className='grid grid-cols-3'>
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="Product Name *"
          type="text"
        />
        {/* category, brand */}
        <ClassSelect type={"Category Type *"} placeholder="Please select" option={category} />
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="SKU *"
          type="text"
        />
      </div>
      {/* 2nd row */}
      <div className='grid grid-cols-3'>
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="Price "
          type="text"
        />
        <Input
          bgColor={"bg-[#f0f1f3]"}
          lable="Discount Price"
          type="text"
        />
        <ClassSelect type={"Quantity  *"} placeholder="Please select gender" option={quantity} />
      </div>
      {/* 3rd row */}

      <div className='grid grid-cols-3'>
        <ClassSelect type={"Unit  *"} placeholder="Please select gender" option={unit} />
        <ClassSelect type={"Stutus *"} placeholder="Please select gender" option={gender} />
        <DatePicke lable={"Publish Date"} />
      <Input
        bgColor={"bg-transparent"}
        lable="Product Image"
        type="file"
      />
      </div>
      {/* 4th row */}
      <div className='grid grid-cols-2 px-4 mb-6'>
        <div>
          <label className="block mb-2 text-base font-normal text-[#646464]">Description</label>
          <textarea name="" id="" className='h-20 bg-[#f0f1f3] w-full px-4 py-1 rounded-md focus:outline-none'></textarea>
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