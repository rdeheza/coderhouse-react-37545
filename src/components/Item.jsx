import React from "react";
//import carro from "../assets/images/carrito.png"
import "../estilos.css"
import ItemCount from "../components/ItemCount"


const Item = ({producto}) => {

        const onAdd=(contador)=>{
            alert(`total a comprar: ${contador}`)
        }

    return (
        <div> 
           {/*  <div class="shadow-lg p-3 mb-5 bg-white rounded card-item "> */}
                <div className="  card text-center border-primary mb-3 card-item"  >
                   
                   <img src={producto.picture_url} alt={producto.title} className="img-fluid" width="200" /> 
                    <h1>{producto.title}</h1>
                    <h4>{producto.price}</h4>
                    <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd} />
                   
                </div>
         {/*    </div>  */}
        </div>
    );
}
export default Item;