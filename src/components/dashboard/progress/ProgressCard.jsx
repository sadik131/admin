import React from 'react';
import { FaShoppingCart, FaBoxes, FaExclamationTriangle, FaPlusCircle, FaUsers, FaTruck } from 'react-icons/fa';

function ProgressCard() {
    const data = [
        {
            title: "Total Products",
            amount: "250",
            bg: "bg-gradient-to-r from-[#EEF7FF] to-[#DFF0FF]",
            iconColor: "text-blue-600",
            iconBg: "bg-blue-200",
            icon: <FaBoxes className='text-2xl' />
        },
        {
            title: "Available Products",
            amount: "180",
            bg: "bg-gradient-to-r from-[#F7F2FF] to-[#EEE5FF]",
            iconColor: "text-blue-600",
            iconBg: "bg-purple-200",
            icon: <FaShoppingCart className='text-2xl' />
        },
        {
            title: "Low Stock",
            amount: "5",
            bg: "bg-gradient-to-r from-[#FFF4E8] to-[#FFEEDC]",
            iconColor: "text-blue-600",
            iconBg: "bg-amber-200",
            icon: <FaExclamationTriangle className='text-2xl' />
        },
        {
            title: "New Products Added",
            amount: "12",
            bg: "bg-gradient-to-r from-[#E8FFF9] to-[#D1FFF3]",
            iconColor: "text-blue-600",
            iconBg: "bg-teal-200",
            icon: <FaPlusCircle className='text-2xl' />
        },
        {
            title: "Users",
            amount: "48",
            bg: "bg-gradient-to-r from-[#FFEEEE] to-[#FFE5E5]",
            iconColor: "text-blue-600",
            iconBg: "bg-red-200",
            icon: <FaUsers className='text-2xl' />
        },
        {
            title: "Top Supplier",
            amount: "20",
            bg: "bg-gradient-to-r from-[#F0FFEE] to-[#E5FFDC]",
            iconColor: "text-blue-600",
            iconBg: "bg-green-200",
            icon: <FaTruck className='text-2xl' />
        }
    ];

    return (
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-white rounded-lg shadow-md">
            {data.map((item, index) => (
                <div key={index} className={`flex justify-between ${item.bg} w-full py-4 px-5 rounded-lg`}>
                    <div>
                        <h3 className="text-lg font-semibold text-secondary">{item.title}</h3>
                        <p className="text-2xl font-bold text-textColor my-1">{item.amount}</p>
                    </div>
                    <div className={`rounded-lg p-2 h-fit ${item.iconBg} ${item.iconColor}`}>
                        {item.icon}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProgressCard;