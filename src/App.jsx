

import React from 'react';
import Navbar from '../src/Comonenets/Navbar';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Pages/Menu';
import Home from './Pages/Home';
import MenuStarter from '../src/Comonenets/Menu/MenuStarter';
import MenuDesert from './Comonenets/Menu/MenuDesert';

import MenuMain from './Comonenets/Menu/MenuMain';
import MenuDrinks from './Comonenets/Menu/MenuDrinks';
import ProductDetail from './Comonenets/Menu/ProductDetail';
import StarterDetail from './Comonenets/Menu/StarterDetail'
import DesertDetail from './Comonenets/Menu/DesertDeatl';
import DrinksDetail from './Comonenets/Menu/DrinkDetail';
import Franchise from './Pages/Franchise';
import Contact from './Pages/Contact';
import Cart from './Comonenets/Cart/Cart';
import StarterCheckout from './Comonenets/Checkout/StarterCheckout';
import MainCheckout from './Comonenets/Checkout/MainCheckout';
import DesertCheckout from './Comonenets/Checkout/DesertCheckout'
import DrinkCheckout from './Comonenets/Checkout/DrinkCheckout'
import { CartProvider } from './Comonenets/Cart/CartContext';

function App() {
  return (
    <div>
      <BrowserRouter>
     <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="contact" element={<Contact />} />
            <Route path="start" element={<MenuStarter />} />
            <Route path="menu" element={<MenuStarter />} />
            <Route path="desert" element={<MenuDesert />} />
            <Route path="main" element={<MenuMain />} />
            <Route path="drink" element={<MenuDrinks />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/start/:id" element={<StarterDetail />} />
            <Route path="/desert/:id" element={<DesertDetail />} />
            <Route path="/drink/:id" element={<DrinksDetail />} />
            <Route path="franchise" element={<Franchise />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/check1/:id" element={<StarterCheckout />} />
            <Route path="/check2/:id" element={<MainCheckout />} />
            <Route path="/check3/:id" element={< DesertCheckout/>} />
            <Route path="/check4/:id" element={<DrinkCheckout />} />
            <Route path="/cart" element={<Cart />} />


            




          </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
