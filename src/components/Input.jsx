import React from 'react'

function Input({lable, type , placeholder, bgColor,value}) {
    return (
        <div className=' w-full px-4 mb-6'>
            <label className="block mb-2 text-base font-normal text-[#646464]">{lable}</label>
            <input
                value={value}
                type={type}
                placeholder={placeholder}
                className={`${bgColor} w-full px-4 py-3 rounded-md focus:outline-none`}
            />
        </div>
    )
}

export default Input