import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
//Icon 
import { FaUser, FaRegHeart  } from "react-icons/fa";
import { LuUser,LuShoppingBag, LuMenu} from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { FcAbout } from "react-icons/fc";



function Root() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate()


  

  const handleTopperbar = () =>{
    setOpen(pre => !pre)
  }


  const handleNav =() =>{
    navigate('/nav')

  }

  return (
    <>
    <div>
      {/* header */}
      <div>
        <p className="bg-black text-white text-center py-2 ">
          🚚Free Shipping on orders over
          <span className="text-red-600"> $50</span>⭐
        </p>
      </div>
      
      <div className=" bg-white shadow-xl w-100% sticky top-0 z-20">
        <div className=" py-4 px-3 max-w-7xl mx-auto flex justify-between items-center ">
          <div className=" flex items-center gap-2 text-xl font-bold ">
            <LuMenu onClick={handleTopperbar} className="md:hidden text-2xl cursor-pointer hover:text-red-600 transition-all" />
            <Link to="/">
            <p className="">KH</p>
            </Link>
          </div>
          <div className="hidden md:block">
          <nav className=" flex gap-5 ">
            <NavLink to="/" className="hover:text-red-500 transition-all">Home</NavLink> 
          <NavLink to="/product" className="hover:text-red-500 transition-all">Products</NavLink> 
            <NavLink to="/contact" className=" hover:text-red-500 transition-all ">Contact</NavLink> 
            <NavLink to="/about" className="hover:text-red-500 transition-all">About</NavLink>
          </nav>
          </div>


          <div className=" flex gap-3 text-xl ">
            <FaRegHeart onClick={handleNav} className="hover:text-red-500 transition-all"/>
            <LuUser className="hover:text-red-500 transition-all"/>
            <LuShoppingBag className="hover:text-red-500 transition-all"/>

          </div>
        </div>
      </div>

      {/* sidebar */}
      <div className={`${open ? 'left-0 ':'-left-full '} bg-gray-800 w-62.5 h-screen absolute top-0  p-5 pt-10 transition-all duration-300 md:hidden`}>
        <div className=" w-full h-full flex flex-col gap-2 pt-5">
          <div className="flex justify-end ">
        <IoIosClose onClick={handleTopperbar} className="text-4xl text-white hover:text-red-600 cursor-pointer transition-all " />
          </div>
          <NavLink onClick={handleTopperbar} to="/" className="flex text-xl items-center p-5 gap-2 text-white font-bold rounded hover:bg-slate-700 ">
            <HiOutlineHome className="text-2xl"/> <span>Home</span>
          </NavLink>
          <NavLink onClick={handleTopperbar} to="/product" className="flex text-xl items-center p-5 gap-2 text-white font-bold rounded hover:bg-slate-700 ">
            <LuShoppingBag className="text-2xl"/> <span>Products</span>
          </NavLink>
          <NavLink onClick={handleTopperbar} to="/about" className="flex text-xl items-center p-5 gap-2 text-white font-bold rounded hover:bg-slate-700 ">
            <FcAbout className="text-2xl"/> <span>About</span>
          </NavLink>
          <NavLink onClick={handleTopperbar} to="/contact" className="flex text-xl items-center p-5 gap-2 text-white font-bold rounded hover:bg-slate-700 ">
            <MdOutlinePermContactCalendar  className="text-2xl"/> <span>Contact</span>
          </NavLink>
        </div>

      </div>
      <Outlet  />
    </div>

      <div className="bg-black p-5 text-center text-white">
        Copyright © 2023 - MasterIT Store
      </div>
    </>
  );
}

export default Root;
