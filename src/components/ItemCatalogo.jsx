import React , { useState }from "react";
//import carro from "../assets/images/carrito.png"
import "../estilos.css"

const ItemCatalogo = (props) => {
const [ count, setCount ] = useState(0)

const onAdd = () => {
    if (count<props.stock)
        setCount(count+1 )
  } 
  const onRemove = () => {
    if (count>0)
    setCount(count-1 )
  } 


  
    return (
        <div>
            <div class="shadow-lg p-3 mb-5 bg-white rounded card-item ">
                <div className="card text-center border-primary mb-3 card-item"  >
                    <img src={props.imagen} alt={props.nombre} className="img-fluid" width="200" />
                    <h1>{props.nombre}</h1>
                    <h4>{props.precio}</h4>
                    <h4>Stock: {props.stock}</h4>
                    <div className="row">
                        <div className="col md-1">
                           <button type="button" class="btn btn-success"  onClick={onAdd}>+</button>
                        </div>
                        <div className="col md-1">
                           <h5>{count}</h5>
                        </div>
                         <div className="col md-1">
                            <button type="button" class="btn btn-danger" onClick={onRemove}>-</button>
                          </div>

                    </div>
                     <br />
                    <button type="button" class="btn btn-primary">Agregar al Carro</button>
                </div>
            </div>
        </div>
    );
}
export default ItemCatalogo;