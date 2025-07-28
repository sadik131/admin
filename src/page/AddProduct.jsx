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
      <div className='grid grid-cols-4'>
        
        <Input
          lable="Prodcut Code *"
          type="text"
        />
        <Input
          lable="Product Name *"
          type="text"
        />
        {/* category, brand */}
        <ClassSelect type={"Category Type *"} placeholder="Please select" option={category} />
        <ClassSelect type={"Brand *"} placeholder="Please select gender" option={brand} />
      </div>
      {/* 2nd row */}
      <div className='grid grid-cols-4'>
        <Input
          lable="Price "
          type="text"
        />
        <Input
          lable="Discount Price"
          type="text"
        />
        {/* quantity, unit */}
        <ClassSelect type={"Quantity  *"} placeholder="Please select gender" option={quantity} />
        <ClassSelect type={"Unit  *"} placeholder="Please select gender" option={unit} />
      </div>
      {/* 3rd row */}

      <div className='grid grid-cols-4'>
        <Input
          lable="Description"
          type="text"
        />
        <ClassSelect type={"Stutus *"} placeholder="Please select gender" option={gender} />
      </div>
        <DatePicke lable={"Publish Date"} />
      
      {/* buttons */}
      <div className='px-4'>
        <button className='bg-[#ffae01] text-white px-11 py-3 rounded-md mr-2'>Save</button>
        <button className='bg-[#092954] text-white px-11 py-3 rounded-md'>Reset</button>
      </div>
    </form>
  )
}

export default AddProduct