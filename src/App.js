import NavBar from './components/NavBar'; 
import React from "react";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout';
function App() {
  
  return (
    <div  className='homePage'>     
      <BrowserRouter>   
      
      <CartProvider> 
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:tipoBebida" element={<ItemListContainer />} />
          <Route exact path="/detalle/:idDetalle" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/Checkout" element={<Checkout/>} />
        </Routes>
  
        </CartProvider>
    
      </BrowserRouter>   
      </div>
  );
}
export default App;
