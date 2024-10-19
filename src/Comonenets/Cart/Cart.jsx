
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import Bg from '../Home/images/bg-img.png';
import Footer from '../Footer';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h2 className='text-3xl text-blue-400 text-center'>No products here to Show.........</h2>

      </div>
    );
  }


  return (
    <>
      <div
        className="relative h-80 w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-mono text-center">
          Cartitems
        </h1>
      </div>
      <div>

        <ul>
          {



            cart.map((product) => (
              <div key={product.id} >



                <div className="cart flex justify-between items-center mb-10 p-4 border-b-2 px-10">
                  <div className="product flex items-center gap-4">
                    <img src={product.image} alt={product.name} width={100} className="rounded" />
                    <div className="flex flex-col">
                      <p className="text-lg font-mono">{product.name}</p>
                      <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>

                  <div className="quantity flex flex-col gap-2 items-center">
                    <h1 className="text-2xl font-mono">Quantity</h1>
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      className="w-16 text-center border rounded-md p-1"
                      onChange={(e) => handleQuantityChange(e, product.id)}
                    />
                  </div>

                  <div className="price flex flex-col gap-2 items-center">
                    <h1 className="text-2xl font-mono">Price</h1>
                    <h1>${product.price}</h1>
                  </div>

                  <div className="total flex flex-col gap-2 items-center">
                    <h1 className="text-2xl font-mono">Total</h1>
                    <h1>${(product.price * product.quantity).toFixed(2)}</h1>
                  </div>


                  <div className="price flex flex-col gap-2 items-center">
                    <h1 className="text-5xl font-mono cursor-pointer" onClick={() => removeFromCart(product.id)}>&#215; </h1>

                  </div>




                </div>
























              </div>
            ))}
        </ul>
      </div>
      <Footer /></>
  );
};
export default Cart;












