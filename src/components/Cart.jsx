import React from "react";
import { useCartContext } from '../context/CartContext';
import { Link } from "react-router-dom";

import "../estilos.css"

import ItemCart from "./ItemCart";


const Cart = () => {
    const { cart, totalPrice, totalpProducts } = useCartContext();
    if (cart.length === 0) {
        return (
            <div >
                <span className="badge rounded-pill text-bg-danger  spanclass">Carrito Vacio!!</span>
                <br />
                <br />
                <span className="badge rounded-pill text-bg-danger  spanclass" ><Link to={"/"} className="linkclase">Hacer compras</Link> </span>
            </div>

        );
    }
    return (
        <div>
            <div className="container fluid">
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <div className="card2 ">
                    <h2>Importe Total: ${totalPrice()}</h2>
                    <h2>Total items: {totalpProducts()}</h2>
                    <Link to={"/Checkout"} >Confirmar Compra</Link>
                </div>


            </div>
        </div>
    )
};
export default Cart;