import React, { useEffect, useState } from "react";
import "../estilos.css"
import ItemList from "../components/ItemList"
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = () => {
  const [datosProductos, setDatosProductos] = useState([]);
  const { tipoBebida } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'products');
    if (tipoBebida) {
      const queryFilter = query(queryCollection, where('category', '==', tipoBebida))
      getDocs(queryFilter)
        .then(res => setDatosProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
    else {
      getDocs(queryCollection)
        .then(res => setDatosProductos(res.docs.map(product => ({ id: product.id, ...product.data() }))))
    }
  }, [tipoBebida])
  return (
    <div className="container">

      <ItemList datosProductos={datosProductos} />

    </div>
  );
}


export default ItemListContainer;