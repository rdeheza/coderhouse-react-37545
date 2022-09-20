import React  from "react";
 import carro from "../assets/images/carrito.png"
 import { useCartContext } from '../context/CartContext';

import "../estilos.css" 
const CardWidget = () => {

    const {totalProd}=useCartContext();
    let total= totalProd();
    return (
         <div style={{display:'flex',aligItems:'center'}}>
            <img src={carro} alt="carrito" width='50' />
            <span>{total}</span>
        </div> 
/*     <div style={{display:'flex',aligItems:'center'}}>
       <span class="material-symbols-outlined">
shopping_cart
</span>
<span>0</span>
    </div> */
    );
};
export default CardWidget;