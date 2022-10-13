import React, { useState } from "react";
import "../estilos.css"

const ItemCatalogo = (props) => {
    const [count, setCount] = useState(0)

    const Agregar = () => {
        if (count < props.stock)
            setCount(count + 1)
    }
    const Restar = () => {
        if (count > 0)
            setCount(count - 1)
    }
    return (
        <div>
            <div className="shadow-lg p-3 mb-5 bg-white rounded card-item ">
                <div className="card text-center border-primary mb-3 card-item"  >
                    <img src={props.imagen} alt={props.nombre} className="img-fluid" width="200" />
                    <h1>{props.nombre}</h1>
                    <h4>{props.precio}</h4>
                    <h4>Stock: {props.stock}</h4>
                    <div className="row">
                        <div className="col md-1">
                            <button type="button" className="btn btn-success" onClick={Agregar}>+</button>
                        </div>
                        <div className="col md-1">
                            <h5>{count}</h5>
                        </div>
                        <div className="col md-1">
                            <button type="button" className="btn btn-danger" onClick={Restar}>-</button>
                        </div>
                    </div>
                    <br />
                    <button type="button" className="btn btn-primary">Agregar al Carro</button>
                </div>
            </div>
        </div>
    );
}
export default ItemCatalogo;