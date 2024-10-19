

import React from 'react';
import Pic from './images/pic.png';

function Home6() {
    return (
        <>
            <style jsx>{`
                /* Styles for screens between 700px and 800px */
                @media (min-width: 700px) and (max-width: 800px) {
                    .custom-layout {
                        flex-direction: column; /* Stack items vertically between 700px and 800px */
                    }
                    .custom-image {
                        width: 80%; /* Adjust image size */
                        margin: 0 auto; /* Center the image */
                    }
                    .custom-text {
                        text-align: center; /* Center the text */
                        padding-left: 0; /* Remove padding on smaller screens */
                        padding-right: 0;
                    }
                }

                /* Styles for screens between 800px and 950px */
                @media (min-width: 800px) and (max-width: 950px) {
                    .custom-layout {
                        flex-direction: row; /* Side by side */
                    }
                    .custom-image {
                        width: 60%; /* Adjust image size to 60% for this range */
                    }
                    .custom-text {
                        text-align: left; /* Align text to the left */
                        padding-left: 20px; /* Add padding for better spacing */
                        padding-right: 20px;
                    }
                }
            `}</style>

            <div className="border-2 border-blue-500 mx-5 md:mx-10 p-4 md:p-8 mt-14">
                {/* First row with image and text */}
                <div className="flex flex-col md:flex-row custom-layout items-center mb-10">
                    <img src={Pic} alt="Restaurant" className="w-full md:w-1/2 max-w-[500px] mb-6 md:mb-0 custom-image" />
                    <div className="text-center md:text-right md:pl-32 md:pr-7 custom-text">
                        <h1 className="text-3xl md:text-5xl font-mono py-4 md:py-8"> Our Restaurant</h1>
                        <p className="text-sm md:text-base">
                            Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est
                            mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
                            accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                        </p>
                    </div>
                </div>

                {/* Second row with text and image */}
                <div className="flex flex-col md:flex-row custom-layout items-center">
                    <div className="text-left md:text-left md:pl-32 md:pr-7 custom-text">
                        <h1 className="text-3xl md:text-5xl font-mono py-4 md:py-8">Meet & Greet</h1>
                        <p className="text-sm md:text-base">
                            Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec nisi est
                            mattis mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
                            accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas duis.
                        </p>
                    </div>
                    <img src={Pic} alt="Restaurant" className="w-full md:w-1/2 max-w-[500px] mt-6 md:mt-0 custom-image" />
                </div>
            </div>
        </>
    );
}

export default Home6;
