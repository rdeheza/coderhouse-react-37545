import React from "react";
import carro from "../assets/images/carrito.png"
import "../estilos.css"

const CardWidget = () => {
    return (
        <div>
            <img src={carro} alt="carrito" width='50' />
        </div>
    );
}
export default CardWidget;