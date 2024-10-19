
import React from 'react'
import Service from './images/serving-dish.png'
import Dining from './images/restaurant (1).png'
import Res from './images/restaurant (2).png'

function Home7() {
  return (
    <>
      <div className="Home-g bg-blue-400 py-9 mt-9 flex-wrap">
        <h1 className='text-5xl font-mono text-center'>Our Services</h1>
        <div className="home-gb flex flex-wrap justify-around mt-12">
          <div className="Home-gb1 text-center w-full sm:w-1/3 lg:w-1/5 mb-8">
            <img src={Service} alt="Concierge Service" className='mx-auto' />
            <h1 className='text-2xl'>Concierge Service</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.</p>
          </div>
          <div className="Home-g1 text-center w-full sm:w-1/3 lg:w-1/5 mb-8">
            <img src={Dining} alt="Dining" className='mx-auto' />
            <h1 className='text-2xl'>Dining</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.</p>
          </div>
          <div className="Home-g1 text-center w-full sm:w-1/3 lg:w-1/5 mb-8">
            <img src={Res} alt="Restaurant" className='mx-auto' />
            <h1 className='text-2xl'>Restaurant</h1>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home7
