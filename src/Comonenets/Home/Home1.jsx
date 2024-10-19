
import React from 'react';
import Bg from './images/bg-img2.jpg';

function Home() {
    const mystyle = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="home1 text-white" style={mystyle}>
            <div className="lg:text-left bg-black bg-opacity-80 min-h-screen w-4/5 lg:w-1/2 p-6 flex flex-col justify-center items-center lg:items-start">
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 lg:mb-10">It's Quick & Amusing!</h1>
                <p className='text-lg md:text-2xl mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
                <p className="text-sm md:text-base mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue.
                </p>
                <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300 lg:w-32 mx-auto lg:mx-0">
                    See Menu
                </button>
            </div>
        </div>
    );
}

export default Home;
