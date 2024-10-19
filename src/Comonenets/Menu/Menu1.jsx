import React from 'react'
import Bg from '../Home/images/bg-img.png'
function Menu1() { const mystyle = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '70vh',
  backgroundRepeat: 'no-repeat',
};
  return (
    <>
    <div className="menu1 flex justify-center items-center" style={mystyle} >
      <h1 className='text-7xl text-white font-mono'>Menu</h1>
    </div>
    
    </>
  )
}

export default Menu1