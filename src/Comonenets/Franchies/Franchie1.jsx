
import React from 'react';
import Bg from '../Home/images/pic.png';

function Franchise1() {
  const mystyle = {
    backgroundImage: `url(${Bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '70vh',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div
        className="menu1 flex justify-center items-center bg-opacity-50"
        style={mystyle}
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-mono text-center">
          Our Branches
        </h1>
      </div>
    </>
  );
}

export default Franchise1;
