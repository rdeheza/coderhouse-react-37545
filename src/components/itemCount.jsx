import React, { useState } from "react";
import "../estilos.css"


const ItemCount = ({stock,initial,onAdd}) => {
    const [count, setCount] = useState(initial)
    const Agregar = () => {
        setCount(count + 1)
    }
    const Restar = () => {

        setCount(count - 1)
    }
    return (
        <div className="card text-center border-primary mb-3 card-item"  >
        <div className="container margin auto ">
            <h4>Stock : {stock}</h4>
            <br />
            <div className="row">
                <div className="col md-1 ">
                    <button type="button" class="btn btn-success" onClick={Agregar}>+</button>
                </div>
                <div className="col md-1">
                    <h5>{count}</h5>
                </div>
                <div className="col md-1">
                    <button  disabled ={count<initial}  type="button" class="btn btn-danger" onClick={Restar}>-</button>
                </div>

            </div>

            <br />
            <div className="row">
                <div className="col md-6">
                    <button
                      onClick={()=>{
                        if(count<=stock)
                        {
                            onAdd(count)
                        }
                      }}
                    type="button" class="btn btn-primary">Agregar al Carro</button>
                </div>
            </div>
            <br />
        </div>
        </div>

    );
}
export default ItemCount;