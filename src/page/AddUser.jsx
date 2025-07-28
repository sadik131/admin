import React from 'react'
import ClassSelect from '../components/ClassSelect';
import Input from '../components/Input.jsx'
import { classOptions, gender, role } from '../option';
import DatePick from '../components/DatePick';

function AddUser() {
  return (
     <form className="w-full h-full bg-white p-4">
        <div className='mb-3'>
          <h1 className="text-xl font-semibold mb-4">Add new user</h1>
        </div>
        {/* 1st row */}
        <div className='grid grid-cols-4'>
          <Input
            lable="First Name *"
            type="text"
          />
          <Input
            lable="Last Name *"
            type="text"
          />
          <ClassSelect type={"User Type *"} placeholder="Please select" option={role} />
          <ClassSelect type={"Gender *"} placeholder="Please select gender" option={gender} />
        </div>
        {/* 2nd row */}
        <div className='grid grid-cols-4'>
          <Input
            lable="Father's Name "
            type="text"
          />
          <Input
            lable="Mother's Name"
            type="text"
          />
          <DatePick lable={"DBS"} />
          <ClassSelect type={"Religion  *"} placeholder="Please select gender" option={gender} />
        </div>
        {/* 3rd row */}
        
        <div className='grid grid-cols-4'>
          <DatePick lable={"Date Of Birth *"} />
          <Input
            lable="E-Mail"
            type="email"
          />
          <ClassSelect type={"Subject *"} placeholder="Please select gender" option={gender} />
          <ClassSelect type={"Class *"} placeholder="Please select gender" option={classOptions} />
        </div>
        <div className='grid grid-cols-4'>
          <Input
            lable="Father's Name "
            type="text"
          />
          <Input
            lable="Mother's Name"
            type="text"
          />
          <DatePick lable={"DBS"} />
          <ClassSelect type={"Religion  *"} placeholder="Please select gender" option={gender} />
        </div>
        {/* 4th row */}
        <div className='grid grid-cols-4'>
          <ClassSelect type={"Section *"} placeholder="Please select gender" option={gender} />
          <Input
            lable="ID No *"
            type="text"
          />
          <Input
            lable="Phon"
            type="number"
          />
        </div>
        {/* 5th row */}
        <div className='grid grid-cols-4'>
          <div className='px-4 mb-6 col-span-2'>
            <label className="block mb-2 text-base font-normal text-[#646464]">Address *</label>
            <textarea className='bg-[#f0f1f3] w-full px-4 py-1 rounded-md focus:outline-none col-span-2' name="" id=""></textarea>
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

export default AddUser