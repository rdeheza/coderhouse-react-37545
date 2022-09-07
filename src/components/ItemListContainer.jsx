import React, { useEffect, useState } from "react";
import img1 from "../assets/images/01.jpg"
import img2 from "../assets/images/02.jpg"
import img3 from "../assets/images/03.jpg" 
import "../estilos.css"
import ItemList from "../components/ItemList"

const productos = [
    {id: 1, title:"Portillo Malbec" , price:"300" , picture_url:img1, stock:"5"},
    {id: 2, title:"Calafate Blanco" , price:"500" , picture_url:img2, stock:"10"},
    {id: 3, title:"Calafate Rosado" , price:"900" , picture_url:img3, stock:"7"}

];

const ItemListContainer = () => {
const [datosProductos,setDatosProductos]=useState([]);

    useEffect(() => {
       const getProductos= new Promise(resolve=>{
        setTimeout(() => {
            resolve(productos);
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