import React from "react";
//import carro from "../assets/images/carrito.png"
import "../estilos.css"

const ItemCatalogo = (props) => {
    return (
        <div>
            <div class="shadow-lg p-3 mb-5 bg-white rounded card-item ">
                <div className="card text-center border-primary mb-3 card-item"  >
                    <img src={props.imagen} alt={props.nombre} className="img-fluid" width="200" />
                    <h1>{props.nombre}</h1>
                    <h4>{props.precio}</h4>
                    <button type="button" class="btn btn-primary">Agregar al Carro</button>
                </div>
            </div>
        </div>
    );
}
export default ItemCatalogo;