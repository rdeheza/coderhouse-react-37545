import React, { useEffect, useState } from "react";
import "../estilos.css"
import ItemList from "../components/ItemList"
/*  import { products } from '../store/products';  */
import { useParams } from "react-router-dom";
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"

const ItemListContainer = () => {
  const [datosProductos, setDatosProductos] = useState([]);
  const { tipoBebida } = useParams();
  //const { categoriaId } = useParams();
  useEffect(() => {
 /*    const getProductos = new Promise(resolve => {
      resolve(products);
    }); */
/*     if (categoriaId){
      getProductos.then(res=>setDatosProductos(res.filter(producto=>producto.category===categoriaId)));
    }
    else{
      getProductos.then(res=>setDatosProductos(res))
    } */

    /*  let categoria = "";
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
    }  */
    const querydb= getFirestore();
    const queryCollection=collection(querydb,'products');
    if (tipoBebida)
    {
      const queryFilter=query(queryCollection,where('category','==',tipoBebida))
      getDocs(queryFilter)
      .then(res=>setDatosProductos( res.docs.map(product=>({id:product.id,...product.data()}))))
    }
    else{
      getDocs(queryCollection)
      .then(res=>setDatosProductos( res.docs.map(product=>({id:product.id,...product.data()}))))
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