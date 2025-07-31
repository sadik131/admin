import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';

function ProgressCard() {
    const data = [
        {
            title: "Total Products",
            amount: "250",
            bg: "bg-gradient-to-r from-[#EEF7FF] to-[#DFF0FF]",
            iconColor: "text-blue-600",
            iconBg: "bg-blue-200"
        },
        {
            title: "Available Products",
            amount: "180",
            bg: "bg-gradient-to-r from-[#F7F2FF] to-[#EEE5FF]",
            iconColor: "text-blue-600",
            iconBg: "bg-purple-200"
        },
        {
            title: "Low Stock",
            amount: "5",
            bg: "bg-gradient-to-r from-[#FFF4E8] to-[#FFEEDC]",
            iconColor: "text-blue-600",
            iconBg: "bg-amber-200"
        },
        {
            title: "New Products Added",
            amount: "12",
            bg: "bg-gradient-to-r from-[#E8FFF9] to-[#D1FFF3]",
            iconColor: "text-blue-600",
            iconBg: "bg-teal-200"
        }
    ];

    return (
        <div className="p-5 grid grid-cols-4 gap-5 bg-white rounded-lg shadow-md">
            {data.map((item, index) => (
                <div key={index} className={`last:mb-0 flex justify-between ${item.bg} w-full py-4 px-5 rounded-lg`}>
                    <div>
                        <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
                        <p className="text-2xl font-bold text-textColor my-1">{item.amount}</p>
                        
                    </div>
                    <div className={`rounded-lg p-2 h-fit ${item.iconBg} ${item.percentageColor}`}>
                        <FaShoppingCart className='text-2xl' />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ProgressCard