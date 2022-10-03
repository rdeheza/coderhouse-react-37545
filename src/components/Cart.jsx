import React from "react";
import { useCartContext } from '../context/CartContext';
/* import { addDoc, collection, getFirestore } from "firebase/firestore"; */
import { Link } from "react-router-dom";
import "../index.css"

import ItemCart from "./ItemCart";


const Cart = () => {
    const { cart, totalPrice, totalpProducts } = useCartContext();
/*     const order = {
        buyer: {
            name: "Juan",cl
            email: "Perez",
            phone: "351744587",
            address: "Catamarca 533"
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
    } */

/*     const handleClick=()=>{
       const db= getFirestore();
       const ordersCollection=collection(db,"orders");
       addDoc(ordersCollection,order)
       .then(({id})=>console.log(id));   


    } */
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
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <div className="card2 ">
                    <h2>Importe Total: ${totalPrice()}</h2>
                    <h2>Total items: {totalpProducts()}</h2>
                    <Link to={"/Checkout"} >Confirmar Compra</Link>
                    {/* <button onClick={handleClick}>Emitir compra</button> */}
                </div>


            </div>
        </div>
    )
};
export default Cart;