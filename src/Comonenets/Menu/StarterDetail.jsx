







import React, { useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import Start from '../Home/images/img-3.png';
import Bg from '../Home/images/bg-img.png';
import Home7 from '../Home/Home7'
import { Link } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

import { useNavigate } from 'react-router-dom';

const productData = [
  {
    id: 1,
    name: 'Product Name 1',
    price: 20.00,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'],
    image: Start,
    description: 'This is a delicious product made with the freshest ingredients.',
    rating: 4.5, 
  },
  {
    id: 2,
    name: 'Product Name 2',
    price: 22.00,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'],
    image: Start,
    description: 'This is a tasty and nutritious option, perfect for any occasion.',
    rating: 4.0, 
  },
  {
    id: 3,
    name: 'Product Name 3',
    price: 25.00,
    ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'],
    image: Start,
    description: 'A perfect blend of flavors, made with love and care.',
    rating: 4.8, 
  },
];

const StarterDetail = () => {
  const { id } = useParams();
  const product = productData.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1); 
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  if (!product) {
    return <p>Product not found!</p>;
  }

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value)); 
    setQuantity(value);
  };
  const handleAddToCart = () => {
    addToCart(product); 
    navigate('/cart');
  };


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
          Product Details
        </h1>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img src={product.image} alt="Product" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="grid grid-cols-3 gap-4">
              <img src={product.image} alt="Product Thumbnail" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src={product.image} alt="Product Thumbnail" className="w-full h-32 object-cover rounded-lg shadow-md" />
              <img src={product.image} alt="Product Thumbnail" className="w-full h-32 object-cover rounded-lg shadow-md" />
            </div>
          </div>

          {/* Product Details */}
          <div className="product-detail bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-800 mb-4">${product.price.toFixed(2)}</p>

            {/* Ratings Section */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span> 
              <span className="ml-2 text-gray-600">({product.rating} / 5)</span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <h2 className="text-xl font-semibold mb-3">Ingredients:</h2>
            <ul className="list-disc list-inside mb-6">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-lg font-medium mb-2">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={handleQuantityChange}
                className="w-20 text-center border border-gray-300 rounded-lg py-2"
              />
            </div>

            <Link to={`/check1/${product.id}`} className="btn text-white bg-blue-400 p-3 rounded"> Checkout</Link>
        <button class="flex ml-auto text-white bg-blue-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleAddToCart}>Add to cart</button>

          </div>
        </div>
      </div>
<div className="description flex flex-col gap-9 px-16">
  <h1 className='text-3xl font-mono border-b-2 border-black w-44 text-gray-500'>Description</h1>
<p className='text-sm  text-gray-500'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at 
justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus 
vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl</p>
<p className='text-sm  text-gray-500'>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at 
justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus 
vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl</p>
<h1 className='text-xl font-mono '> Key Benefits</h1>
<ol className='list-disc	 text-gray-500'>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>

  
  
</ol>

</div>
<Home7/>
      <Footer />
    </>
  );
};

export default StarterDetail;






