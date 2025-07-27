import React from 'react'

function Input({lable, type , placeholder}) {
    return (
        <div className=' w-full px-4 mb-6'>
            <label className="block mb-2 text-base font-normal text-[#646464]">{lable}</label>
            <input
                type={type}
                placeholder={placeholder}
                className=' bg-[#f0f1f3] w-full px-4 py-1 rounded-md focus:outline-none '
            />
        </div>
    )
}

export default Input