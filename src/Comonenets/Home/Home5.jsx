

import React, { useEffect, useState } from 'react';
import Chief from './images/chief.png';
import Swiper from 'swiper';
import 'swiper/css';

function Home5() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const swiperInstance = new Swiper('.swiper', {
      spaceBetween: 20,
      breakpoints: {
        500: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      },
    });
    setSwiper(swiperInstance);
  }, []);

  const handleNext = () => {
    if (swiper && activeIndex < 3) {
      swiper.slideNext();
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleBack = () => {
    if (swiper && activeIndex > 0) {
      swiper.slidePrev();
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-mono text-center my-14">Meet Our Chef</h1>
      <div className="swiper Home-e">
        <div className="swiper-wrapper">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="swiper-slide ">
              <div className="relative h-80" style={{ backgroundImage: `url(${Chief})`, backgroundRepeat: 'no-repeat' }}>
                <div className="absolute bottom-0 bg-white w-2/6 mb-2 p-4 rounded shadow-md">
                  <p className="text-lg font-mono">Zohaib</p>
                  <p>Chief</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleBack}
          disabled={activeIndex === 0}
        >
          Back
        </button>
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={handleNext}
          disabled={activeIndex === 3}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Home5;
