import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { MdDashboard } from 'react-icons/md';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [toggle, setToggle] = useState(true);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleMobileToggle = () => setIsMobileOpen(!isMobileOpen);

    const SidebarContent = () => (
        <div className={`flex flex-col items-start text-white ${toggle ? "block" : "w-10"}`}>
            {/* Dashboard link */}
            <div className={`w-full cursor-pointer ${toggle && "px-6 border-b border-black"} py-3 flex justify-between items-center`}>
                <span className={`flex ${!toggle && "justify-center"} w-full gap-4`}>
                    <MdDashboard className='text-xl' />
                    {toggle && <Link to={"/"} className='text-sm font-semibold'>Dashboard</Link>}
                </span>
                {toggle && <FaAngleRight />}
            </div>

            {/* Product with submenu */}
            <div
                className={`w-full cursor-pointer ${toggle ? "px-6 border-b border-black" : "px-0"} py-3 flex justify-between items-center`}
                onClick={() => setShowSubmenu(!showSubmenu)}
            >
                <span className={`flex ${!toggle && "justify-center"} w-full gap-4 items-center`}>
                    <MdDashboard className='text-xl' />
                    {toggle && <span className='text-sm font-semibold'>Product</span>}
                </span>
                {toggle && <FaAngleRight className={`transition-transform duration-300 ${showSubmenu ? "rotate-90" : ""}`} />}
            </div>

            {toggle && showSubmenu && (
                <div className="flex flex-col gap-1 text-sm w-full">
                    <Link to={"/add"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> Add Product</Link>
                    <Link to={"/all"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> All Product</Link>
                    <Link to={"/expire"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> Expired Product</Link>
                    <Link to={"/stocks"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> Low Stock</Link>
                    <Link to={"/Category"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> Category</Link>
                    <Link to={"/QR"} className="py-2 w-full pl-[60px] pr-5 inline-flex hover:text-yellow-400"><FaAngleRight className='mr-1' /> Print QR</Link>
                </div>
            )}
        </div>
    );

    return (
        <>
            {/* Desktop & large screen sidebar */}
            <div className={`hidden md:flex flex-col transition-all duration-300 ease-in-out ${toggle ? "w-1/5" : "w-12"} bg-[#042954] font-roboto`}>
                <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#ff9d01] to-[#ffaa01]'>
                    {toggle && <h3 className='font-semibold text-xl text-white uppercase'>Inventory</h3>}
                    {toggle ? (
                        <GiHamburgerMenu className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)} />
                    ) : (
                        <RxCross2 className='text-2xl cursor-pointer' onClick={() => setToggle(!toggle)} />
                    )}
                </div>
                <SidebarContent />
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex justify-between px-2 md:px-4 py-3 bg-[#042954] text-white">
                <div className='flex items-start'>
                    <h3 className="text-lg font-semibold">Inventory</h3>
                    <GiHamburgerMenu className="text-xl md:text-2xl cursor-pointer" onClick={handleMobileToggle} />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40"
                        onClick={handleMobileToggle}
                    ></div>

                    <div className="fixed top-0 left-0 w-64 h-full bg-[#042954] z-50 transition-transform duration-300">
                        <div className='flex justify-between items-center p-3 bg-gradient-to-r from-[#ff9d01] to-[#ffaa01]'>
                            <h3 className='font-semibold text-xl text-white uppercase'>Inventory</h3>
                            <RxCross2 className='text-2xl cursor-pointer text-white' onClick={handleMobileToggle} />
                        </div>
                        <SidebarContent />
                    </div>
                </>
            )}
        </>
    );
}

export default Sidebar;
