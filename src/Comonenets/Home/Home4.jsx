
import React from 'react';
import Bg from './images/frame4.png';

function Home4() {
    const style = {
        backgroundImage: `url(${Bg})`,
        height: `50vh`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className="home-d h-full flex flex-col justify-center items-center text-center p-4 mt-28 " style={style} >
            <h1 className="text-5xl sm:text-4xl md:text-5xl text-white font-serif mb-2">
                Book Early & Save
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mb-4">
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
                See Menu
            </button>
        </div>
    );
}

export default Home4;
