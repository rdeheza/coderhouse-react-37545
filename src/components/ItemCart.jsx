import React from "react";
import "../index.css"
import { useCartContext } from '../context/CartContext';

const ItemCart = ({ product }) => {
    const {removeItem}=useCartContext();
    return (
        <div className="card2">
            <h3 className="text-center">Nombre: {product.title}</h3>  
            <img src={product.picture_url} alt={product.title} className="img-fluid" width="150" />
            
            <div >
                    <p className="text-center">  Cantidad: {product.quantity} - Precio: $ {product.price} </p>          
                    <p className="text-center"> Subtotal:$ {product.quantity*product.price}</p>           
                    <button onClick={()=>removeItem(product.id)}>Eliminar</button>
            </div>  
         
            
           
           
             
      </div>
        
    );
}
export default ItemCart;