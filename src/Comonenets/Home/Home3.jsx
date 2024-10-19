
import React from 'react';
import Img1 from './images/img-4.png';
import Img2 from './images/img-6.png';
import Img3 from './images/img-3.png';
import Img4 from './images/img-2.png';



function Home3() {
    const imageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height:' 250px',
        width: '270px',
        backgroundRepeat: 'no-repeat',
        margin: '10px',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
    };

    return (
        <>
        <div className="text">
            <h1 className='text-5xl text-center my-14'>Food Category</h1>
        </div>
        <div className="home-c flex flex-wrap justify-center space-x-4">
            <div style={{ ...imageStyle, backgroundImage: `url(${Img1})` }}>
                <div className="bg-black bg-opacity-50 w-2/5  py-3 rounded text-center">
                    <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
                        See Menu
                    </button>
                </div>
            </div>
            <div style={{ ...imageStyle, backgroundImage: `url(${Img2})` }}>
            <div className="bg-black bg-opacity-50 w-2/5  py-3 rounded text-center">
                    <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
                        See Menu
                    </button>
                </div>
            </div>
            <div style={{ ...imageStyle, backgroundImage: `url(${Img3})` }}>
            <div className="bg-black bg-opacity-50 w-2/5  py-3 rounded text-center">
                    <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
                        See Menu
                    </button>
                </div>
            </div>
            <div style={{ ...imageStyle, backgroundImage: `url(${Img4})` }}>
                <div className="bg-black bg-opacity-50 w-2/5  py-3 rounded text-center">
                    <button className="btn bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition-all duration-300">
                        See Menu
                    </button>
                </div>
            </div>
        </div></>
    );
}

export default Home3;
