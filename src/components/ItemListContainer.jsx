import React, { useEffect, useState } from "react";

import "../estilos.css"
import ItemList from "../components/ItemList"
import { products } from '../store/products';
/* const productos = [
    {id: 1, title:"Portillo Malbec" , price:"300" , picture_url:img1, stock:"5"},
    {id: 2, title:"Calafate Blanco" , price:"500" , picture_url:img2, stock:"10"},
    {id: 3, title:"Calafate Rosado" , price:"900" , picture_url:img3, stock:"7"}

]; */

const ItemListContainer = () => {
const [datosProductos,setDatosProductos]=useState();

    useEffect(() => {
       const getProductos= new Promise(resolve=>{
        setTimeout(() => {
            resolve(products);
         },2000);
       });
       getProductos.then(res=> setDatosProductos(res));
        

    }, [])


        return (
            <div className="container fluid">
               <ItemList datosProductos={datosProductos}/>          
            </div>
        );
    }
  

export default ItemListContainer;