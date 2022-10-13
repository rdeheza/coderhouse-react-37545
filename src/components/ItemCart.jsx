import React from "react";
import "../estilos.css"
import { useCartContext } from '../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext();
    return (
        <div className="card2">
            <div >
                <h3 className="text-center"> {product.title}</h3>
                <p className="text-center"> Producto: {product.title} Cantidad: {product.quantity} - Precio: $ {product.price} </p>
                <p className="text-center"> Subtotal:$ {product.quantity * product.price}</p>

                <button onClick={() => removeItem(product.id)}>Eliminar</button>
            </div>
        </div>

    );
}
export default ItemCart;