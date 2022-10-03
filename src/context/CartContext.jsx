import React, { useState, useContext } from "react";
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
      }))
    }
    else {
      setCart([...cart, { ...item, quantity }])
    }
  };

  console.log('carrito :', cart)

  const clear = () => setCart([]);

  const totalProd = () => { return cart.length };

  const isInCart = (id) => {
    return cart.find(product => product.id === id) ? true : false;
  }


  const removeItem = (id) => setCart(cart.filter(product => product.id !== id));

  const removeAll = () => setCart([]);
  

  const totalPrice = () => { return cart.reduce((prev,act) =>prev+ act.quantity* act.price,0 ) };

  const totalpProducts = () => { return cart.reduce((acumulador,productoActual) =>acumulador+ productoActual.quantity ,0 ) };

  return (
    <CartContext.Provider value={{
      clear, isInCart, removeItem, addProduct, totalProd,totalPrice,totalpProducts,cart,removeAll
    }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider;