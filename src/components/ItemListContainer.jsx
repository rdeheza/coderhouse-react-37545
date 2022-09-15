import React, { useEffect, useState } from "react";
import "../estilos.css"
import ItemList from "../components/ItemList"
import { products } from '../store/products';
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [datosProductos, setDatosProductos] = useState();
  const { tipoBebida } = useParams();
  useEffect(() => {
    let categoria = "";
    switch (tipoBebida) {
      case "vino": categoria = "vino"; break;
      case "cerveza": categoria = "cerveza"; break;
      case "blancas": categoria = "blancas"; break;
      default: categoria = "all"
    }
    if (categoria === "all") {
      const getProductos = new Promise(resolve => {
        resolve(products);
      });
      getProductos.then(res => setDatosProductos(res));
    }
    else {
      const getProductos = new Promise(resolve => {
        setTimeout(() => {
          resolve(products.filter(producto => producto.category === categoria));
        });
      });
      getProductos.then(res => setDatosProductos(res));
    }
  },[tipoBebida])
  return (
    <div>
      <div className="container fluid">
        <ItemList datosProductos={datosProductos} />
      </div>
    </div>
  );
}


export default ItemListContainer;