import React from "react";
import Item from "../components/Item"
import "../estilos.css"

const ItemList = ({datosProductos=[]}) => {

    return (
        datosProductos.map(item=> <Item key={item.id} producto={item} />)     
    );
}
export default ItemList;