
import React from 'react'
import Home from '../assets/Navbar-img/home.png'
import Menu from '../assets/Navbar-img/menu.png'
import Franchise from '../assets/Navbar-img/franchise (1).png'
import Contact from '../assets/Navbar-img/call.png'

import Facebook from '../assets/Navbar-img/facebook.png'
import Insta from '../assets/Navbar-img/instagram.png'
import Twitter from '../assets//Navbar-img/twitter.png'
function Navbar() {
  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '35px',
    letterSpacing: '-5px',
    fontWeight: 'bold',
  };
  return (
    <>
      <div className="nav flex justify-end   ">
        <div className="navbar bg-gray-400 z-20 mt-32 bg-opacity-50 text-white w-16 lg:w-24 h-auto text-sm flex gap-4 lg:gap-8 flex-col fixed items-center lg:items-start p-4 lg:p-6 rounded-lg shadow-lg">

         <a href="/"> <div className="nav-item flex flex-col items-center gap-2 lg:gap-3">
            <img src={Home} alt="Home" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-[10px] lg:text-[14px]">Home</p>
          </div></a>

       <a href="menu">  <div className="nav-item flex flex-col items-center gap-2 lg:gap-3">
            <img src={Menu} alt="Menu" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-[10px] lg:text-[14px]">Menu</p>
          </div></a>

       <a href="franchise">  <div className="nav-item flex flex-col items-center gap-2 lg:gap-3">
            <img src={Franchise} alt="Franchise" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-[6px] lg:text-[8px]">Franchise

            </p>
          </div></a>


          <a href="contact"><div className="nav-item flex flex-col items-center gap-2 lg:gap-3">
            <img src={Contact} alt="Contact" className="w-5 h-5 lg:w-6 lg:h-6" />
            <p className="text-[10px] lg:text-[14px]">Contact</p>
          </div>
        <a href="cart"> <button
    className="px-3 py-1.5 text-sm text-white duration-150 mt-3 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
>
    Cart
</button>    </a>      </a>
        </div>
      </div>














<div className="nav2 w-full bg-black  flex justify-between items-center p-2 ">

  <select name="" id="" className="bg-black text-white p-2 border border-gray-700 rounded-md">
    <option value="">English</option>
    
  </select>

 
  <div className="flex justify-center items-center">
   
      <h1 style={textStyle} className='text-white'>Zohaib</h1>
  </div>

  <div className="flex justify-center items-center space-x-4">
    <img src={Facebook} alt="Facebook" width={16} className="hover:opacity-80 transition-opacity" />
    <img src={Insta} alt="Instagram" width={16} className="hover:opacity-80 transition-opacity" />
    <img src={Twitter} alt="Twitter" width={16} className="hover:opacity-80 transition-opacity" />
  </div>
</div>




    </>



  )
}

export default Navbar;
