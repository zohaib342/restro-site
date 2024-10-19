

import React from 'react';
import Img from '../Home/images/frame4.png';
import Loc from '../Home/images/location.png';

function Franchise2() {
  return (
    <>
      <div className="text">
        <h1 className="text-4xl font-mono text-center mt-20 mb-6">Introducing New Look</h1>
      </div>

      <div className="franchise2 px-4 lg:px-11">
        <img src={Img} className="w-full mb-6" alt="Franchise Banner" />
        <div className="franchise2-a flex flex-col lg:flex-row items-center lg:items-start gap-6">
          <div className="franchise2-a-text w-full lg:w-2/4 flex flex-col gap-4 justify-center text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-mono">Pouros and Sons</h1>
            <h2 className="text-xl lg:text-3xl font-mono text-gray-400">
              646 First Street, Quigleyville 36427, Country
            </h2>
            <h3 className="text-xl lg:text-3xl font-mono text-gray-400 flex items-center">
              768-123 Reviews 
              <span className="text-yellow-500 ml-2">
                ★★★★☆
              </span>
            </h3>
            <h3 className="text-xl lg:text-3xl font-mono text-gray-400">0321-1234-123</h3>
          </div>
          <img src={Loc} className="w-full lg:w-1/2" alt="Location" />
        </div>
      </div>
    </>
  );
}

export default Franchise2;
