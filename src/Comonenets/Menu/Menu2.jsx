
import React from 'react';
import BG from '../Home/images/bg-img.png';
import Chief from '../Home/images/chief copy.png';
import Food from '../Home//images/fast-food.png';
import Food2 from '../Home//images/restaurant (3).png';
import Pizza from '../Home/images/pizza.png';

const mystyle = {
  backgroundImage: `url(${BG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
//   height: '60vh',
  backgroundRepeat: 'no-repeat',
};

function Menu2() {
  return (
    <>
      <div className="menu2 flex justify-center items-center gap-8 flex-wrap p-5 lg:py-28" style={mystyle}>
        <div className="menu1-a flex flex-col items-center text-center min-w-[200px]">
          <img src={Chief} alt="Chief" className="w-16 h-16 mb-3" />
          <h1 className="text-3xl text-white">420</h1>
          <h1 className="text-xl text-white">Professional Chefs</h1>
        </div>

        <div className="menu1-a flex flex-col items-center text-center min-w-[200px]">
          <img src={Food} alt="Food" className="w-16 h-16 mb-3" />
          <h1 className="text-3xl text-white">320</h1>
          <h1 className="text-xl text-white">Items Of Food</h1>
        </div>

        <div className="menu1-a flex flex-col items-center text-center min-w-[200px]">
          <img src={Food2} alt="Experience" className="w-16 h-16 mb-3" />
          <h1 className="text-3xl text-white">30+</h1>
          <h1 className="text-xl text-white">Years Of Experience</h1>
        </div>

        <div className="menu1-a flex flex-col items-center text-center min-w-[200px]">
          <img src={Pizza} alt="Pizza" className="w-16 h-16 mb-3" />
          <h1 className="text-3xl text-white">220</h1>
          <h1 className="text-xl text-white">Happy Customers</h1>
        </div>
      </div>
    </>
  );
}

export default Menu2;
