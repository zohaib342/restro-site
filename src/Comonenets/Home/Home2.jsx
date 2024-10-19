

import React from 'react';
import Img1 from './images/img1.png';
import Img2 from './images/img-2.png';
import Img3 from './images/img-3.png';

function Home2() {
    return (
        <>
            <div className="home2 flex flex-col lg:flex-row items-center lg:items-start p-6 ">
                <div className="home2-a w-full lg:w-2/5 mb-8 lg:mb-0 lg:pr-8 lg:mt-28 sm:mt-0 md:text-center lg:text-left">
                    <h1 className='text-2xl lg:text-3xl'>About us</h1>
                    <h1 className='text-3xl lg:text-5xl mt-4 lg:mt-2'>We Create the best foody product</h1>
                    <p className='text-sm mt-8 lg:mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <p className='mt-8'> &#10003; Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                    <p className='mt-4'> &#10003; Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                    <p className='mt-4'> &#10003; Lacus nisi, et ac dapibus sit eu velit in consequat</p>
                    <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 w-full lg:w-32 mt-6 sm:w-36">
                  See Menu
                                 </button>
                </div>

                <div className="home2-b w-full lg:w-3/5">
                    <img src={Img1} alt="" className='mx-auto w-full lg:w-2/3' />

                    <div className="home2-b1 flex flex-wrap justify-center lg:justify-center mt-6">
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
                            <img src={Img2} alt="" className='w-full h-full object-cover' />
                        </div>
                        <div className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 px-2">
                            <img src={Img3} alt="" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home2;
