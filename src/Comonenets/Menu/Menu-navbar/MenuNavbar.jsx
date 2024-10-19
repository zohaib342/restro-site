
import React from 'react';
import MenuStarter from '../MenuStarter';

function MenuNavbar() {
  return (
    <>
    <div className="navbar overflow-x-auto">
      <ol className="flex justify-center gap-4 sm:gap-8 md:gap-16 whitespace-nowrap">
        <a href="start">
          <li className="text-lg sm:text-xl md:text-4xl font-mono text-gray-400 border-b-2 border-black">STARTER</li>
        </a>
       <a href="main"> <li className="text-lg sm:text-xl md:text-4xl font-mono text-gray-400">MAIN COURSE</li></a>
        <a href="desert">
          <li className="text-lg sm:text-xl md:text-4xl font-mono text-gray-400">DESSERT</li>
        </a>
       <a href="drink"> <li className="text-lg sm:text-xl md:text-4xl font-mono text-gray-400">DRINKS</li></a>
      </ol>
    </div>
    <MenuStarter/></>
  );
}

export default MenuNavbar;
