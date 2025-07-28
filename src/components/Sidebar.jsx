import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx';
import { MdDashboard } from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Sidebar() {
    const [toggle, setToggle] = useState(true);
    const [showSubmenu, setShowSubmenu] = useState(false);


    return (
        <div className={`${toggle ? "w-1/6" : "w-10"} h-screen bg-[#042954] transition-all duration-300 ease-in-out`} >
            {/* top logo */}
            <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#ff9d01] to-[#ffaa01]'>
                {toggle && <div className='h-12 w-40'>
                    <img src={logo} alt="" className='h-full w-full' />
                </div>
                }
                {toggle ?
                    <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)} />
                    :
                    <RxCross2 className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)} />
                }
            </div>
            {/* sidebar menu */}
            <div className={`flex flex-col items-start text-white ${toggle ? "block" : "w-10"}`}>
                <div className={`w-full cursor-pointer ${toggle && "px-6 border-b border-black"} py-3 flex justify-between items-center`}>
                    <span className={`flex ${!toggle && "justify-center"} w-full gap-4`}>
                        <MdDashboard className='text-xl' />
                        {toggle && <Link to={"/"} className='text-sm font-semibold'>Dashboard</Link>}
                    </span>
                    {toggle && <FaAngleRight />}

                </div>

                <div
                    className={`w-full  cursor-pointer ${toggle ? "px-6 border-b border-black" : "px-0"} py-3 flex justify-between items-center`}
                    onClick={() => setShowSubmenu(!showSubmenu)}
                >
                    <span className={`flex ${!toggle && "justify-center"} w-full gap-4 items-center`}>
                        <MdDashboard className='text-xl' />
                        {toggle && <span className='text-sm font-semibold'>Product</span>}
                    </span>
                    {toggle && <FaAngleRight className={`transition-transform duration-300 ${showSubmenu ? "rotate-90" : ""}`} />}
                </div>

                {/* Sub Menu Items */}
                {toggle && showSubmenu && (
                    <div className="flex flex-col ml-10 gap-1 text-sm w-full">
                        <Link to={"/add"} className="w-full block py-1 cursor-pointer hover:text-yellow-400">Add Product</Link>
                        <Link to={"/all"} className="w-full block py-1 cursor-pointer hover:text-yellow-400">All Product</Link>
                    </div>
                )}
            </ div>
        </div>
    )
}

export default Sidebar