import NavBar from './components/NavBar'; 
import React from "react";
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>     
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categoria/:tipoBebida" element={<ItemListContainer />} />
          <Route exact path="/item/:idDetalle" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>   
      </div>
  );
}
export default App;
