import React from 'react'

function SkuInput() {
    return (
        <>
            <div className=''>
                <label className="block mb-2 text-base font-normal text-secondary">SKU</label>
                <div className='flex px-4 py-3 bg-[#f0f1f3] rounded-md'>
                    <input type="text" className='bg-transparent w-full focus:outline-none' />
                    <button className='bg-[#FE9F43] py-1 px-2 text-[10px] text-white rounded-lg cursor-pointer hover:bg-transparent hover:border border-[#FE9F43] hover:text-[#FE9F43]'>Generate</button>
                </div>
            </div>

        </>
    )
}

export default SkuInput