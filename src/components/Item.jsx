import { Link } from "react-router-dom";
import React  from "react";

import "../estilos.css"


const Item = ({ producto }) => {

    return (
        <Link to={`/detalle/${producto.id}`}  className="card">
            <div >
                {/*             <div className="  card text-center border-primary mb-3 card-item"  >  */}
                <img src={producto.picture_url} alt={producto.title} className="img-fluid" width="180" />
                <div className="infoCard">
                    <h4 className="text-center">{producto.title}</h4>
                    <h5 className="text-center">Precio: ${producto.price}</h5>
                    {/*            <ItemCount  stock={producto.stock} initial={1} onAdd={onAdd} /> */}
                </div>
            </div>
        </ Link>
    );
}
export default Item;