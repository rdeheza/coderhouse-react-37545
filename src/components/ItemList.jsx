import React from "react";
import Item from "../components/Item"
import "../estilos.css"

const ItemList = ({ datosProductos = [] }) => {

    return (
        <div className="containerCard">
            {datosProductos.map(item => <Item key={item.id} producto={item} />)}
        </div>

    );
}
export default ItemList;