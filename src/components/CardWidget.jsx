import React from "react";
 import carro from "../assets/images/carrito.png"
import "../estilos.css" 

const CardWidget = () => {
    return (
         <div style={{display:'flex',aligItems:'center'}}>
            <img src={carro} alt="carrito" width='50' />
            <span>0</span>
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