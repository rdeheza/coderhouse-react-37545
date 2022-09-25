import React from "react";
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import "../index.css"

import ItemCart from "./ItemCart";


const Cart = () => {
    const { cart, totalPrice,totalpProducts } = useCartContext();
    if (cart.length === 0) {
        return (
            <div >
                <h1>El carrito esta vacio</h1>
                <Link to={"/"} className="linkclase">Hacer compras</Link>
            </div>

        );
    }
    return (
        <div>
      <div className="container fluid">
          {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
          }
          <div className="card">
          <h2>Importe Total: ${totalPrice()}</h2>
          <h2>Total items: {totalpProducts()}</h2>
          </div>
         
           
          </div>
    </div>
    )
};
export default Cart;