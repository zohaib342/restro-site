


import React from 'react';
import { Link } from 'react-router-dom';
import Start from '../Home/images/img-3.png';
import Footer from '../Footer';
import Menu2 from './Menu2';

const productList = [
  { id: 1, name: 'Product 1', price: 20.00, ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'], image: Start },
  { id: 2, name: 'Product 2', price: 25.00, ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'], image: Start },
  { id: 3, name: 'Product 3', price: 30.00, ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'], image: Start },
  { id: 4, name: 'Product 4', price: 35.00, ingredients: ['ingredient1', 'ingredient2', 'ingredient3', 'ingredient4'], image: Start },
];

function MenuStarter() {
  return (
    <>
      <div className="starter p-4">
        {productList.map(product => (
          <div key={product.id} className="starter-a flex flex-col md:flex-row items-center justify-between gap-4 mb-6 mt-14">
            <img src={product.image} alt={product.name} className="w-32 md:w-48" />
            <div className="text text-center md:text-left">
              <h1 className="text-lg md:text-2xl font-semibold">{product.name}</h1>
              <p className="text-sm md:text-base text-gray-600">{product.ingredients.join(', ')}</p>
            </div>
            <p className="text-lg md:text-xl font-semibold text-right md:text-left">${product.price.toFixed(2)}</p>
            <Link to={`/start/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
      <Menu2 />
      <Footer />
    </>
  );
}

export default MenuStarter;

















